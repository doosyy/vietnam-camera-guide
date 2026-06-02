import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import ScreenGlyph from '../components/ScreenGlyph'
import { BackBar, Eyebrow, SectionTitle } from '../components/ui'
import { screenIcons, screenIconGroups } from '../data/screenIcons'

export default function ScreenIcons() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [q, setQ] = useState(() => params.get('q') ?? '')
  const query = q.trim().toLowerCase()
  const list = screenIcons.filter(
    (s) => !query || (s.label + ' ' + s.meaning).toLowerCase().includes(query)
  )

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 14 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Icon Dictionary</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>What’s that symbol?</h1>
        <p className="body" style={{ marginTop: 7 }}>The little icons on the camera’s screen, explained in plain words.</p>
      </div>

      <div className="row" style={{ gap: 10, padding: '12px 15px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: 16 }}>
        <Icon name="search" size={17} style={{ color: 'var(--text-3)' }} />
        <input className="field" placeholder="Find an icon…" value={q} onChange={(e) => setQ(e.target.value)} />
        {q && <button onClick={() => setQ('')} style={{ color: 'var(--text-3)' }}><Icon name="x" size={16} /></button>}
      </div>

      <div className="stack" style={{ '--g': '20px' } as React.CSSProperties}>
        {screenIconGroups.map((group) => {
          const items = list.filter((s) => s.group === group)
          if (!items.length) return null
          return (
            <section key={group}>
              <SectionTitle>{group}</SectionTitle>
              <div className="card flush">
                {items.map((s, i) => (
                  <div
                    key={s.id}
                    className="row"
                    style={{ gap: 13, padding: '12px 14px', alignItems: 'center', borderTop: i ? '1px solid var(--border)' : 'none' }}
                  >
                    <span style={{ flexShrink: 0 }}><ScreenGlyph glyph={s.glyph} /></span>
                    <span style={{ minWidth: 0 }}>
                      <span className="h3" style={{ display: 'block', fontSize: 14 }}>{s.label}</span>
                      <span className="small" style={{ display: 'block', color: 'var(--text-2)', marginTop: 2 }}>{s.meaning}</span>
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
        {list.length === 0 && (
          <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 20 }}>No icons match “{q}”.</p>
        )}
      </div>
    </div>
  )
}
