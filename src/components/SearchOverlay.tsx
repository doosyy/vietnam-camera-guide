import { useEffect, useMemo, useRef, useState } from 'react'
import Fuse from 'fuse.js'
import Icon from './Icon'
import { Eyebrow } from './ui'
import { buildSearchIndex, suggestedSearches } from '../data/searchIndex'
import type { SearchEntry } from '../data/types'

const RECENT_KEY = 'vcc_recent'
const getRecent = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]')
  } catch {
    return []
  }
}

export default function SearchOverlay({
  onClose,
  onNavigate,
}: {
  onClose: () => void
  onNavigate: (route: string) => void
}) {
  const [q, setQ] = useState('')
  const [recent, setRecent] = useState<string[]>(getRecent)
  const inputRef = useRef<HTMLInputElement>(null)

  const index = useMemo(() => buildSearchIndex(), [])
  const fuse = useMemo(
    () =>
      new Fuse(index, {
        keys: [
          { name: 'title', weight: 0.5 },
          { name: 'snippet', weight: 0.3 },
          { name: 'keywords', weight: 0.2 },
        ],
        threshold: 0.42,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [index]
  )

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 250)
    return () => clearTimeout(t)
  }, [])

  const results = useMemo(() => {
    if (q.trim().length < 2) return []
    return fuse.search(q).slice(0, 24).map((r) => r.item)
  }, [q, fuse])

  const grouped = useMemo(() => {
    const m = new Map<string, SearchEntry[]>()
    results.forEach((r) => {
      const a = m.get(r.section) || []
      a.push(r)
      m.set(r.section, a)
    })
    return [...m.entries()]
  }, [results])

  const go = (entry: SearchEntry) => {
    const term = q.trim()
    if (term) {
      const next = [term, ...recent.filter((r) => r !== term)].slice(0, 6)
      localStorage.setItem(RECENT_KEY, JSON.stringify(next))
      setRecent(next)
    }
    onNavigate(entry.route)
  }

  return (
    <div className="overlay">
      <div style={{ padding: 'max(14px, env(safe-area-inset-top)) 14px 12px', display: 'flex', gap: 9, alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="row" style={{ flex: 1, gap: 9, padding: '11px 14px', borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <Icon name="search" size={18} style={{ color: 'var(--text-3)' }} />
          <input ref={inputRef} className="field" placeholder="Search everything…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <button onClick={onClose} className="tap" style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)' }} aria-label="Close search">
          <Icon name="x" size={22} />
        </button>
      </div>

      <div className="scroll" style={{ padding: '18px 18px calc(30px + env(safe-area-inset-bottom))' }}>
        {q.trim().length < 2 && (
          <div className="fu stack" style={{ '--g': '26px' } as React.CSSProperties}>
            {recent.length > 0 && (
              <section>
                <Eyebrow dot={false} style={{ marginBottom: 12, color: 'var(--text-3)' }}>Recent</Eyebrow>
                <div className="row" style={{ flexWrap: 'wrap', gap: 8 }}>
                  {recent.map((r) => <button key={r} onClick={() => setQ(r)} className="tap pill"><Icon name="clock" size={11} /> {r}</button>)}
                </div>
              </section>
            )}
            <section>
              <Eyebrow dot={false} style={{ marginBottom: 12, color: 'var(--text-3)' }}>Try searching</Eyebrow>
              <div className="row" style={{ flexWrap: 'wrap', gap: 8 }}>
                {suggestedSearches.map((s) => <button key={s} onClick={() => setQ(s)} className="tap pill accent-pill">{s}</button>)}
              </div>
            </section>
          </div>
        )}

        {q.trim().length >= 2 && results.length === 0 && (
          <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 30 }}>Nothing found for “{q}”. Try a simpler word like “focus” or “night”.</p>
        )}

        {grouped.map(([section, items]) => (
          <section key={section} style={{ marginBottom: 22 }}>
            <Eyebrow style={{ marginBottom: 11, color: 'var(--accent-text)' }}>{section}</Eyebrow>
            <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
              {items.map((it) => (
                <button key={it.id} onClick={() => go(it)} className="tap row" style={{ width: '100%', gap: 12, padding: 13, borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--border)', textAlign: 'left', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', marginTop: 1, flexShrink: 0 }}><Icon name={it.icon} size={18} /></span>
                  <span style={{ minWidth: 0 }}>
                    <span className="h3" style={{ display: 'block' }}>{it.title}</span>
                    <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.snippet}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
