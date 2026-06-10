import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHead, SectionTitle, NavRow, ProgressRing, Corners } from '../components/ui'
import { useApp, ACCENTS } from '../context/AppContext'
import { setupSteps } from '../data/setup'
import { vietnamLocations } from '../data/vietnam'
import { scenes } from '../data/scenes'

export default function Trip() {
  const navigate = useNavigate()
  const { setupDone } = useApp()
  const total = setupSteps.length
  const done = setupDone.length

  return (
    <div className="screen anim-tab">
      <PageHead eyebrow="Trip" title="Prep, then shoot Vietnam" sub="Set the camera up before you fly, then make the most of the light when you land." />
      <div className="stack" style={{ '--g': '12px' } as React.CSSProperties}>
        <button onClick={() => navigate('/trip/setup')} className="tap card row" style={{ gap: 14, textAlign: 'left' }}>
          <ProgressRing value={done} total={total} size={46} stroke={4.5} />
          <span style={{ flex: 1, minWidth: 0 }}>
            <span className="h3" style={{ display: 'block' }}>Before You Fly</span>
            <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 2 }}>Custom buttons, menus &amp; defaults</span>
          </span>
          <span style={{ color: 'var(--text-3)' }}><Icon name="chevronRight" size={17} /></span>
        </button>
        <NavRow icon="sun" title="Vietnam lighting guide" sub={vietnamLocations.map((l) => l.name).join(' · ')} onClick={() => navigate('/trip/vietnam')} />
        <NavRow icon="clock" title="Light clock" sub="Golden & blue hour times, any day" onClick={() => navigate('/trip/light')} />
        <NavRow icon="aperture" title="Lens guide" sub="Your two lenses, when to use each" onClick={() => navigate('/trip/lenses')} />
        <NavRow icon="contrast" title="Accessories" sub="Your polarizer & gear, and when to use them" onClick={() => navigate('/trip/accessories')} />
        <NavRow icon="pin" title="Location tagging" sub="Geotag every photo from your phone, and check it’s on" onClick={() => navigate('/trip/location')} />
      </div>

      <div style={{ marginTop: 22 }}>
        <SectionTitle icon="aperture">Appearance</SectionTitle>
        <AppearanceCard />
      </div>

      <div style={{ marginTop: 22 }}>
        <SectionTitle icon="flag">Trip at a glance</SectionTitle>
        <div className="card vf" style={{ background: 'var(--bg-2)', padding: '16px 14px' }}>
          <Corners />
          <div className="grid3" style={{ textAlign: 'center' }}>
            <Stat value={String(vietnamLocations.length)} label="Cities" accent />
            <Stat value={String(scenes.length)} label="Scenes" />
            <Stat value={`${done}/${total}`} label="Set up" />
          </div>
        </div>
      </div>
    </div>
  )
}

function AppearanceCard() {
  const { theme, toggleTheme, accent, setAccent } = useApp()
  return (
    <div className="card">
      <div className="between" style={{ marginBottom: 14 }}>
        <span className="eyebrow" style={{ color: 'var(--text-2)' }}>Theme</span>
        <div className="seg" style={{ width: 168 }}>
          <button className={theme === 'dark' ? 'on' : ''} onClick={() => theme !== 'dark' && toggleTheme()}>
            <span className="row" style={{ gap: 6, justifyContent: 'center' }}><Icon name="moon" size={13} /> Dark</span>
          </button>
          <button className={theme === 'light' ? 'on' : ''} onClick={() => theme !== 'light' && toggleTheme()}>
            <span className="row" style={{ gap: 6, justifyContent: 'center' }}><Icon name="sun" size={13} /> Light</span>
          </button>
        </div>
      </div>
      <hr className="hairline" style={{ margin: '0 0 14px' }} />
      <div className="between" style={{ marginBottom: 12 }}>
        <span className="eyebrow" style={{ color: 'var(--text-2)' }}>Accent</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '.06em' }}>
          {ACCENTS.find((a) => a.id === accent)?.hint}
        </span>
      </div>
      <div className="grid4">
        {ACCENTS.map((a) => {
          const on = a.id === accent
          return (
            <button
              key={a.id}
              onClick={() => setAccent(a.id)}
              className="tap"
              aria-label={a.label}
              aria-pressed={on}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
                padding: '11px 4px 9px', borderRadius: 13,
                background: on ? 'var(--surface-2)' : 'transparent',
                border: '1px solid ' + (on ? 'var(--border-2)' : 'transparent'),
              }}
            >
              <span
                style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: `radial-gradient(120% 120% at 30% 25%, ${a.swatch}, color-mix(in oklab, ${a.swatch} 62%, #000))`,
                  boxShadow: on
                    ? `0 0 0 2px var(--surface), 0 0 0 4px ${a.swatch}, 0 2px 8px -2px ${a.swatch}`
                    : 'inset 0 1px 0 rgba(255,255,255,.25)',
                  transition: 'box-shadow .2s var(--ease)',
                }}
              />
              <span className="mono" style={{ fontSize: 9.5, letterSpacing: '.04em', color: on ? 'var(--text)' : 'var(--text-3)' }}>{a.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div>
      <div className="data" style={{ fontSize: 21, color: accent ? 'var(--accent-text)' : 'var(--text)' }}>{value}</div>
      <div className="mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 4 }}>{label}</div>
    </div>
  )
}
