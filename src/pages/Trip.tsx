import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHead, SectionTitle, NavRow, ProgressRing, Corners } from '../components/ui'
import { useApp } from '../context/AppContext'
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
        <NavRow icon="aperture" title="Lens guide" sub="Compare lenses & “should I buy it?”" onClick={() => navigate('/trip/lenses')} />
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

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div>
      <div className="data" style={{ fontSize: 21, color: accent ? 'var(--accent-text)' : 'var(--text)' }}>{value}</div>
      <div className="mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 4 }}>{label}</div>
    </div>
  )
}
