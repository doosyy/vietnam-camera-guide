import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { Eyebrow } from './ui'
import { useApp } from '../context/AppContext'
import { vietnamLocations } from '../data/vietnam'
import { nowLight, type LightKind } from '../data/solar'

const kindColor: Record<LightKind, string> = {
  gold: 'var(--accent)',
  blue: 'var(--info)',
  sun: 'var(--accent-2)',
  harsh: 'var(--text-3)',
  dark: 'var(--text-3)',
}

const fmtDur = (min: number) => (min < 60 ? `${min}m` : `${Math.floor(min / 60)}h ${min % 60}m`)
const shortCity = (n: string) => n.replace('Ho Chi Minh City', 'HCMC').replace('Ha Long Bay', 'Ha Long')

export default function NowLight() {
  const navigate = useNavigate()
  const { cityId, setCity } = useApp()
  const [tick, setTick] = useState(0)

  // Re-evaluate every 30s so the countdown stays live.
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000)
    return () => clearInterval(t)
  }, [])

  const city = vietnamLocations.find((l) => l.id === cityId) ?? vietnamLocations[0]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const light = useMemo(() => nowLight(city.lat, city.lon, new Date()), [city, tick])
  const color = kindColor[light.kind]

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      {/* city switch */}
      <div className="row between" style={{ padding: '11px 14px 0' }}>
        <Eyebrow style={{ color: 'var(--text-2)' }}>Light right now</Eyebrow>
        <div className="row" style={{ gap: 5 }}>
          {vietnamLocations.map((l) => (
            <button
              key={l.id}
              onClick={() => setCity(l.id)}
              className="tap"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, letterSpacing: '.04em', padding: '3px 7px', borderRadius: 7, background: l.id === cityId ? 'var(--accent-soft)' : 'transparent', color: l.id === cityId ? 'var(--accent-text)' : 'var(--text-3)', border: '1px solid ' + (l.id === cityId ? 'var(--accent-line)' : 'transparent') }}
            >
              {shortCity(l.name)}
            </button>
          ))}
        </div>
      </div>

      <button onClick={() => navigate(`/trip/light?city=${cityId}`)} className="tap" style={{ width: '100%', textAlign: 'left', padding: '10px 14px 14px' }}>
        <div className="row" style={{ gap: 13, alignItems: 'center' }}>
          <span style={{ color, flexShrink: 0 }}><Icon name={light.icon} size={26} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="row" style={{ gap: 8, alignItems: 'baseline', flexWrap: 'wrap' }}>
              <span className="h2" style={{ fontSize: 19 }}>{light.label}</span>
              {light.endsInMin != null && light.endsInMin > 0 && (
                <span className="data" style={{ fontSize: 12, color }}>ends in {fmtDur(light.endsInMin)}</span>
              )}
            </div>
            <p className="small" style={{ color: 'var(--text-2)', marginTop: 2 }}>{light.note}</p>
          </div>
          <Icon name="chevronRight" size={16} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
        </div>

        {light.next && (
          <div className="row" style={{ gap: 8, marginTop: 12, paddingTop: 11, borderTop: '1px solid var(--border)', alignItems: 'center' }}>
            <span style={{ color: kindColor[light.next.kind], flexShrink: 0 }}><Icon name={light.next.kind === 'gold' ? 'sunset' : 'moon'} size={14} /></span>
            <span className="small" style={{ color: 'var(--text-2)', flex: 1 }}>
              Next <b style={{ color: 'var(--text)' }}>{light.next.label.toLowerCase()}</b> at <span className="data" style={{ color: kindColor[light.next.kind] }}>{light.next.at}</span>
            </span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>in {fmtDur(light.next.inMin)}</span>
          </div>
        )}
      </button>
    </div>
  )
}
