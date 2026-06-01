import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Pill } from '../components/ui'
import { glossaryTerms } from '../data/glossary'

export default function Glossary() {
  const navigate = useNavigate()
  const focus = useLocation().hash.replace('#', '')
  const [q, setQ] = useState('')
  const list = glossaryTerms.filter((t) => {
    if (!q.trim()) return true
    const s = (t.term + ' ' + t.plain + ' ' + (t.also || '')).toLowerCase()
    return s.includes(q.trim().toLowerCase())
  })

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 16 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Glossary</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Every term, in plain words</h1>
      </div>
      <div className="row" style={{ gap: 10, padding: '12px 15px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: 16 }}>
        <Icon name="search" size={17} style={{ color: 'var(--text-3)' }} />
        <input className="field" placeholder="Filter terms…" value={q} onChange={(e) => setQ(e.target.value)} />
        {q && <button onClick={() => setQ('')} style={{ color: 'var(--text-3)' }}><Icon name="x" size={16} /></button>}
      </div>
      <div className="stack" style={{ '--g': '10px' } as React.CSSProperties}>
        {list.map((t) => (
          <div key={t.id} id={t.id} className="card" style={focus === t.id ? { borderColor: 'var(--accent-line)' } : undefined}>
            <div className="data" style={{ fontSize: 14, color: 'var(--accent-text)' }}>{t.term}</div>
            <p className="body" style={{ marginTop: 6 }}>{t.plain}</p>
            {t.also && (
              <div className="row" style={{ gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                {t.also.split(',').map((a) => <Pill key={a} tone="line">{a.trim()}</Pill>)}
              </div>
            )}
          </div>
        ))}
        {list.length === 0 && <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 20 }}>No terms match “{q}”.</p>}
      </div>
    </div>
  )
}
