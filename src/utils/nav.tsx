/* eslint-disable react-refresh/only-export-components -- this module intentionally
   co-locates the NavProvider component with its useSmartBack hook and routeTitle
   helper; the rule only affects dev hot-reload, not the build or runtime. */
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import { sceneById } from '../data/scenes'
import { guideChapters } from '../data/guide'
import { locationById } from '../data/vietnam'

// Short, human label for any route. Used by the smart back arrow so it can say
// where "back" actually goes (e.g. the scene you came from), not a fixed parent.
const STATIC_TITLES: Record<string, string> = {
  '/': 'Home',
  '/shoot': 'Scenes',
  '/cheat': 'Cheat sheet',
  '/learn': 'Learn',
  '/buttons': 'My Buttons',
  '/learn/camera': 'Camera map',
  '/learn/composition': 'Composition',
  '/learn/glossary': 'Glossary',
  '/learn/menu': 'Menu reference',
  '/learn/how-to': 'How-to',
  '/learn/path': 'Learn path',
  '/learn/icons': 'Screen icons',
  '/trip': 'Trip',
  '/trip/setup': 'Setup',
  '/trip/vietnam': 'Vietnam',
  '/trip/lenses': 'Lenses',
  '/trip/accessories': 'Accessories',
  '/trip/light': 'Light clock',
  '/trip/location': 'Location tagging',
}

export function routeTitle(pathname: string): string {
  let m: RegExpMatchArray | null
  if ((m = pathname.match(/^\/shoot\/(.+)$/))) return sceneById(m[1])?.title ?? 'Scenes'
  if ((m = pathname.match(/^\/learn\/guide\/(.+)$/))) return guideChapters.find((c) => c.id === m![1])?.title ?? 'Learn'
  if ((m = pathname.match(/^\/trip\/vietnam\/(.+)$/))) return locationById(m[1])?.name ?? 'Vietnam'
  return STATIC_TITLES[pathname] ?? 'Back'
}

// Tracks an in-app history stack of pathnames so "back" can return to wherever
// you actually came from. StrictMode double-invokes effects, so we de-dupe on
// location.key (each key is processed at most once).
const Ctx = createContext<{ prevPath: string | null }>({ prevPath: null })

export function NavProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navType = useNavigationType()
  // Ref initializers run only on the first render, so the stack is seeded with
  // the initial route (and that route is marked seen) without writing refs
  // during render. The first effect run then sees it as already processed.
  const stackRef = useRef<string[]>([location.pathname])
  const seenKey = useRef<string>(location.key)
  const [prevPath, setPrevPath] = useState<string | null>(null)

  useEffect(() => {
    if (seenKey.current === location.key) return // already processed (or StrictMode replay)
    seenKey.current = location.key
    const stack = stackRef.current
    if (navType === 'POP') stack.pop()
    else if (navType === 'REPLACE') stack[stack.length - 1] = location.pathname
    else stack.push(location.pathname)
    setPrevPath(stack.length >= 2 ? stack[stack.length - 2] : null)
  }, [location.key, location.pathname, navType])

  return <Ctx.Provider value={{ prevPath }}>{children}</Ctx.Provider>
}

// Back-arrow behaviour: if there's an in-app page to return to, go back in
// history (which restores the exact scroll position) and label it with where
// that is. Otherwise (cold open / deep link) fall back to the page's parent.
export function useSmartBack(fallbackPath: string, fallbackLabel: string) {
  const navigate = useNavigate()
  const { prevPath } = useContext(Ctx)
  if (prevPath != null) {
    return { onBack: () => navigate(-1), label: routeTitle(prevPath) }
  }
  return { onBack: () => navigate(fallbackPath), label: fallbackLabel }
}
