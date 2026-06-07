import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Pill } from '../components/ui'
import { vietnamLocations } from '../data/vietnam'

export default function Vietnam() {
  const navigate = useNavigate()
  return (
    <div className="screen anim-fwd">
      <BackBar to="/trip" label="Trip" />
      <div style={{ marginBottom: 18 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Vietnam Lighting</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>What the light does, and when</h1>
      </div>
      <div className="stack" style={{ '--g': '12px' } as React.CSSProperties}>
        {vietnamLocations.map((loc) => (
          <button key={loc.id} onClick={() => navigate(`/trip/vietnam/${loc.id}`)} className="tap card" style={{ textAlign: 'left' }}>
            <div className="row between" style={{ marginBottom: 6 }}>
              <h2 className="h2" style={{ fontSize: 18 }}>{loc.name}</h2>
              <Pill tone="line">{loc.region}</Pill>
            </div>
            <p className="small" style={{ color: 'var(--text-2)' }}>{loc.vibe}</p>
            <div className="row" style={{ gap: 6, marginTop: 12, color: 'var(--text-3)' }}>
              {loc.times.map((t) => <Icon key={t.icon} name={t.icon} size={15} />)}
              <span className="row" style={{ gap: 5, marginLeft: 'auto', color: 'var(--accent-text)', fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 600, letterSpacing: '.06em' }}>OPEN <Icon name="arrowRight" size={12} /></span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
