import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Pill } from '../components/ui'
import { glossaryTerms, glossaryCategories, resolveGlossaryRef } from '../data/glossary'
import type { GlossaryTerm } from '../data/types'

const byTerm = (a: GlossaryTerm, b: GlossaryTerm) => a.term.localeCompare(b.term)
const firstLetter = (term: string) => {
  const m = term.replace(/[^a-zA-Z]/g, '')
  return m ? m[0].toUpperCase() : '#'
}

function TermCard({ t, open, onToggle, highlight, onJump }: { t: GlossaryTerm; open: boolean; onToggle: () => void; highlight: boolean; onJump: (id: string) => void }) {
  return (
    <div id={t.id} className="card flush" style={{ scrollMarginTop: 16, borderColor: highlight ? 'var(--accent-line)' : undefined }}>
      <button onClick={onToggle} className="row between" style={{ width: '100%', textAlign: 'left', gap: 10, padding: '13px 15px' }}>
        <span className="data" style={{ fontSize: 14, color: 'var(--accent-text)' }}>{t.term}</span>
        <span style={{ color: 'var(--text-3)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}>
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 15px 14px', borderTop: '1px solid var(--border)' }}>
          <p className="body" style={{ marginTop: 12 }}>{t.plain}</p>
          {t.also && (
            <div className="row" style={{ gap: 6, marginTop: 11, flexWrap: 'wrap' }}>
              {t.also.split(',').map((a) => {
                const name = a.trim()
                const ref = resolveGlossaryRef(name)
                if (ref && ref !== t.id) {
                  return (
                    <button key={a} onClick={() => onJump(ref)} className="tap pill line row" style={{ gap: 4, cursor: 'pointer' }}>
                      {name}
                      <Icon name="chevronRight" size={11} style={{ opacity: 0.5 }} />
                    </button>
                  )
                }
                return <Pill key={a} tone="line">{name}</Pill>
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function GroupHeader({ children, mono }: { children: string; mono?: boolean }) {
  if (mono) {
    return <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-text)', letterSpacing: '.05em', padding: '2px 2px 2px' }}>{children}</div>
  }
  return (
    <div className="row" style={{ gap: 8 }}>
      <span style={{ color: 'var(--accent)' }}><Icon name="glossary" size={14} /></span>
      <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{children}</span>
    </div>
  )
}

export default function Glossary() {
  const focus = useLocation().hash.replace('#', '')
  const [mode, setMode] = useState<'topic' | 'az'>('topic')
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<Set<string>>(() => new Set(focus ? [focus] : []))
  const didDeepLink = useRef(false)

  const query = q.trim().toLowerCase()
  const searching = query.length > 0

  const matches = useMemo(() => {
    if (!searching) return glossaryTerms
    return glossaryTerms.filter((t) => (t.term + ' ' + t.plain + ' ' + (t.also || '')).toLowerCase().includes(query))
  }, [query, searching])

  // Deep link (e.g. arriving at /learn/glossary#bokeh): open and scroll to it once.
  useEffect(() => {
    if (focus && !didDeepLink.current) {
      didDeepLink.current = true
      setOpen((s) => new Set(s).add(focus))
      requestAnimationFrame(() => document.getElementById(focus)?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
    }
  }, [focus])

  const toggle = (id: string) => setOpen((s) => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n })
  const isOpen = (id: string) => searching || open.has(id)

  // Jump to a related term within the page: open it and scroll it into view.
  const jumpTo = (id: string) => {
    if (q) setQ('')
    setOpen((s) => new Set(s).add(id))
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
  }

  // Build the sections to render.
  const sections: { key: string; header: string; mono?: boolean; terms: GlossaryTerm[] }[] = useMemo(() => {
    if (searching) return [{ key: 'results', header: '', terms: [...matches].sort(byTerm) }]
    if (mode === 'az') {
      const sorted = [...matches].sort(byTerm)
      const out: { key: string; header: string; mono: boolean; terms: GlossaryTerm[] }[] = []
      sorted.forEach((t) => {
        const L = firstLetter(t.term)
        const last = out[out.length - 1]
        if (last && last.key === L) last.terms.push(t)
        else out.push({ key: L, header: L, mono: true, terms: [t] })
      })
      return out
    }
    // by topic
    return glossaryCategories
      .map((c) => ({ key: c.id, header: c.label, terms: matches.filter((t) => t.cat === c.id).sort(byTerm) }))
      .filter((s) => s.terms.length)
  }, [matches, mode, searching])

  return (
    <div className="screen anim-fwd">
      <BackBar to="/learn" label="Learn" />
      <div style={{ marginBottom: 14 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Glossary</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Every term, in plain words</h1>
        <p className="body" style={{ marginTop: 7 }}>Tap any term to open it. Browse by topic or A to Z.</p>
      </div>

      {/* search */}
      <div className="row" style={{ gap: 10, padding: '12px 15px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: 12 }}>
        <Icon name="search" size={17} style={{ color: 'var(--text-3)' }} />
        <input className="field" placeholder="Filter terms…" value={q} onChange={(e) => setQ(e.target.value)} />
        {q && <button onClick={() => setQ('')} style={{ color: 'var(--text-3)' }}><Icon name="x" size={16} /></button>}
      </div>

      {/* toggle (hidden while searching) */}
      {!searching ? (
        <div className="seg" style={{ marginBottom: 18 }}>
          <button className={mode === 'topic' ? 'on' : ''} onClick={() => setMode('topic')}>By topic</button>
          <button className={mode === 'az' ? 'on' : ''} onClick={() => setMode('az')}>A to Z</button>
        </div>
      ) : (
        <p className="small" style={{ color: 'var(--text-3)', marginBottom: 14 }}>{matches.length} {matches.length === 1 ? 'term' : 'terms'} match “{q}”.</p>
      )}

      <div className="stack" style={{ '--g': '22px' } as React.CSSProperties}>
        {sections.map((sec) => (
          <section key={sec.key}>
            {sec.header && <div style={{ marginBottom: 10 }}><GroupHeader mono={sec.mono}>{sec.header}</GroupHeader></div>}
            <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
              {sec.terms.map((t) => (
                <TermCard key={t.id} t={t} open={isOpen(t.id)} onToggle={() => toggle(t.id)} highlight={focus === t.id} onJump={jumpTo} />
              ))}
            </div>
          </section>
        ))}
        {searching && matches.length === 0 && (
          <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 20 }}>No terms match “{q}”.</p>
        )}
      </div>
    </div>
  )
}
