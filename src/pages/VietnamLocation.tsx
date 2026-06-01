import { useParams, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, SectionTitle } from '../components/ui'
import { locationById } from '../data/vietnam'

export default function VietnamLocationPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const loc = id ? locationById(id) : undefined

  if (!loc) {
    return (
      <div className="screen">
        <BackBar onBack={() => navigate('/trip/vietnam')} label="Vietnam" />
        <p className="body">Place not found.</p>
      </div>
    )
  }

  return (
    <div className="screen anim-fwd" key={loc.id}>
      <BackBar onBack={() => navigate('/trip/vietnam')} label="Vietnam" />
      <div style={{ marginBottom: 18 }}>
        <Eyebrow style={{ marginBottom: 8 }}>{loc.region}</Eyebrow>
        <h1 className="h1" style={{ fontSize: 26 }}>{loc.name}</h1>
        <p className="body" style={{ marginTop: 8 }}>{loc.vibe}</p>
      </div>

      <Eyebrow style={{ marginBottom: 11, color: 'var(--text-2)' }}>Through the day</Eyebrow>
      <div className="stack" style={{ '--g': '11px' } as React.CSSProperties}>
        {loc.times.map((t) => (
          <section key={t.label} className="card">
            <div className="row between" style={{ marginBottom: 11 }}>
              <div className="row" style={{ gap: 9 }}>
                <span style={{ color: 'var(--accent)' }}><Icon name={t.icon} size={17} /></span>
                <span className="h3">{t.label}</span>
              </div>
              <span className="mono" style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '.04em' }}>{t.range}</span>
            </div>
            <p className="small" style={{ marginBottom: 6 }}><span className="mono" style={{ color: 'var(--text-3)', fontSize: 11 }}>LIGHT&nbsp;&nbsp;</span>{t.light}</p>
            <p className="small"><span className="mono" style={{ color: 'var(--text-3)', fontSize: 11 }}>SHOOT&nbsp;&nbsp;</span>{t.shoot}</p>
            {t.sceneLink && (
              <button onClick={() => navigate(`/shoot/${t.sceneLink}`)} className="tap row" style={{ gap: 6, marginTop: 12, color: 'var(--accent-text)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.05em' }}>
                OPEN THESE SETTINGS <Icon name="arrowRight" size={13} />
              </button>
            )}
          </section>
        ))}
      </div>

      <section style={{ marginTop: 22 }}>
        <SectionTitle icon="bulb">Local tips</SectionTitle>
        <ul className="card stack" style={{ '--g': '11px', listStyle: 'none' } as React.CSSProperties}>
          {loc.localTips.map((tip, i) => (
            <li key={i} className="row" style={{ gap: 10, alignItems: 'flex-start' }}>
              <span style={{ width: 5, height: 5, borderRadius: 9, background: 'var(--accent)', marginTop: 8, flexShrink: 0 }} />
              <span className="body" style={{ flex: 1 }}>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
