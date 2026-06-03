import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow } from '../components/ui'
import { useApp } from '../context/AppContext'
import { vietnamLocations } from '../data/vietnam'
import { dayLight, type LightKind } from '../data/solar'

const kindColor: Record<LightKind, string> = {
  gold: 'var(--accent)',
  blue: 'var(--info)',
  sun: 'var(--accent-2)',
  harsh: 'var(--text-3)',
  dark: 'var(--text-3)',
}

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

const dayLabel = (d: Date) =>
  d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })

export default function LightClock() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { cityId: storedCity, setCity } = useApp()
  const initCity = params.get('city')
  const [cityId, setCityId] = useState(
    () => (initCity && vietnamLocations.some((l) => l.id === initCity) ? initCity : storedCity)
  )
  const selectCity = (id: string) => { setCityId(id); setCity(id) }
  const [date, setDate] = useState<Date>(() => startOfDay(new Date()))

  const city = vietnamLocations.find((l) => l.id === cityId)!
  const windows = useMemo(() => dayLight(city.lat, city.lon, date), [city, date])
  const isToday = sameDay(date, new Date())

  const shiftDay = (n: number) => {
    const next = new Date(date)
    next.setDate(next.getDate() + n)
    setDate(startOfDay(next))
  }

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/trip')} label="Trip" />
      <div style={{ marginBottom: 16 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Light Clock</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Golden hour & friends</h1>
        <p className="body" style={{ marginTop: 7 }}>When the good light happens, worked out on your phone. No signal needed.</p>
      </div>

      {/* city selector */}
      <div className="seg" style={{ marginBottom: 12 }}>
        {vietnamLocations.map((l) => (
          <button key={l.id} className={cityId === l.id ? 'on' : ''} onClick={() => selectCity(l.id)}>
            {l.name.replace('Ho Chi Minh City', 'HCMC').replace('Ha Long Bay', 'Ha Long')}
          </button>
        ))}
      </div>

      {/* date stepper */}
      <div className="card row between" style={{ marginBottom: 18, padding: '12px 14px' }}>
        <button onClick={() => shiftDay(-1)} className="tap hdr-btn" aria-label="Previous day">
          <Icon name="chevronLeft" size={18} />
        </button>
        <button onClick={() => setDate(startOfDay(new Date()))} className="tap" style={{ textAlign: 'center' }}>
          <span className="data" style={{ display: 'block', fontSize: 15 }}>{dayLabel(date)}</span>
          <span className="mono" style={{ fontSize: 9.5, letterSpacing: '.1em', textTransform: 'uppercase', color: isToday ? 'var(--accent-text)' : 'var(--text-3)' }}>
            {isToday ? 'Today · tap = reset' : 'Tap to reset to today'}
          </span>
        </button>
        <button onClick={() => shiftDay(1)} className="tap hdr-btn" aria-label="Next day">
          <Icon name="chevronRight" size={18} />
        </button>
      </div>

      {/* timeline */}
      <div className="stack" style={{ '--g': '10px' } as React.CSSProperties}>
        {windows.map((w) => {
          const color = kindColor[w.kind]
          return (
            <div key={w.key} className="card row" style={{ gap: 13, alignItems: 'flex-start' }}>
              <span style={{ color, marginTop: 1, flexShrink: 0 }}><Icon name={w.icon} size={18} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="row between" style={{ gap: 8 }}>
                  <span className="h3" style={{ fontSize: 14 }}>{w.label}</span>
                  <span className="data" style={{ fontSize: 13, color }}>{w.time}</span>
                </div>
                <p className="small" style={{ color: 'var(--text-2)', marginTop: 3 }}>{w.note}</p>
              </div>
            </div>
          )
        })}
      </div>

      <p className="tiny" style={{ marginTop: 16, textAlign: 'center' }}>
        Times for {city.name}, Vietnam (UTC+7). Accurate to about a minute.
      </p>
    </div>
  )
}
