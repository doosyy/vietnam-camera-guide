// Offline-safe "check for updates" used by the header refresh button.
//
// Behaviour the app wants:
//   - Offline / server unreachable  -> do nothing (no reload, no error).
//   - Online, already up to date     -> do nothing (no pointless full reload).
//   - Online, a newer version exists -> apply it and reload to the newest version.

export type RefreshResult = 'offline' | 'current' | 'updating'

// Can we actually reach our own server right now?
// We hit a real network request with a cache-busting query so the service
// worker's precache can't answer it from the cache. If it were served from
// cache (i.e. offline), this check would wrongly say "online", so the query
// string is essential: it only succeeds when the network is genuinely there.
async function canReachServer(): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return false
  try {
    const base = import.meta.env.BASE_URL || '/'
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 4000)
    // A 404 still counts as "reached the server"; fetch only rejects on a
    // genuine network failure, which is exactly the offline case we want.
    await fetch(`${base}manifest.webmanifest?_=${Date.now()}`, {
      cache: 'no-store',
      signal: controller.signal,
    })
    clearTimeout(timer)
    return true
  } catch {
    return false
  }
}

export async function refreshApp(): Promise<RefreshResult> {
  if (!(await canReachServer())) return 'offline'

  // No service worker (e.g. the dev server): we're online, so a plain reload
  // is the newest version.
  if (!('serviceWorker' in navigator)) {
    window.location.reload()
    return 'updating'
  }

  const reg = await navigator.serviceWorker.getRegistration()
  if (!reg) {
    window.location.reload()
    return 'updating'
  }

  // Ask the browser to look for a newer service worker, and wait to see whether
  // one actually turns up.
  let foundUpdate = false
  await new Promise<void>((resolve) => {
    let settled = false
    const done = () => {
      if (settled) return
      settled = true
      resolve()
    }

    reg.addEventListener('updatefound', () => {
      const installing = reg.installing
      if (!installing) return
      foundUpdate = true
      installing.addEventListener('statechange', () => {
        // 'installed' (waiting) or 'activated' (auto-update) both mean it's ready.
        if (installing.state === 'installed' || installing.state === 'activated') done()
      })
    })

    reg
      .update()
      .then(() => {
        // If nothing began installing soon after the check, we're up to date.
        setTimeout(() => {
          if (!foundUpdate) done()
        }, 1200)
      })
      .catch(done)

    // Hard safety net so the button never hangs.
    setTimeout(done, 8000)
  })

  if (foundUpdate || reg.waiting) {
    // Nudge a waiting worker to take over (no-op under auto-update, which skips
    // waiting itself), then reload so the new precached assets load.
    reg.waiting?.postMessage({ type: 'SKIP_WAITING' })
    window.location.reload()
    return 'updating'
  }

  return 'current'
}
