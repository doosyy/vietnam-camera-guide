import Icon from '../components/Icon'
import { BackBar, Eyebrow, Pill, SeeAlso } from '../components/ui'
import { useApp } from '../context/AppContext'
import { lenses } from '../data/lenses'

export default function Lenses() {
  const { lens, setLens } = useApp()

  return (
    <div className="screen anim-fwd">
      <BackBar to="/trip" label="Trip" />
      <div style={{ marginBottom: 18 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Lens Guide</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Your two lenses</h1>
        <p className="body" style={{ marginTop: 7 }}>When to reach for each one. Tap to preview the wizard with that lens on.</p>
      </div>

      <div className="stack" style={{ '--g': '12px' } as React.CSSProperties}>
        {lenses.map((l) => {
          const active = l.id === lens.id
          return (
            <section key={l.id} className="card" style={active ? { borderColor: 'var(--accent-line)', boxShadow: '0 0 0 1px var(--accent-line)' } : undefined}>
              <div className="row between" style={{ gap: 10, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 0 }}>
                  <div className="row" style={{ gap: 8, marginBottom: 4 }}>
                    <span className="data" style={{ fontSize: 16 }}>{l.shortName}mm</span>
                    <Pill tone="line">{l.tag}</Pill>
                  </div>
                  <h2 className="small" style={{ color: 'var(--text-2)' }}>{l.name}</h2>
                </div>
                <Pill tone={l.owned ? 'good' : undefined}>{l.owned ? 'Owned' : 'May buy'}</Pill>
              </div>
              <p className="body" style={{ marginTop: 11 }}>{l.oneLiner}</p>

              <div className="row" style={{ gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
                <Pill>{l.constantAperture ? `f/${l.maxApertureWide} constant` : `f/${l.maxApertureWide}–${l.maxApertureTele}`}</Pill>
                <Pill style={{ textTransform: 'capitalize' }}>{l.lightGrade} in low light</Pill>
              </div>
              <div className="row" style={{ gap: 6, flexWrap: 'wrap', marginTop: 7 }}>
                {l.bestFor.map((b) => <Pill key={b} tone="accent"><Icon name="star" size={10} /> {b}</Pill>)}
              </div>

              <div className="stack" style={{ '--g': '7px', marginTop: 13 } as React.CSSProperties}>
                {l.strengths.map((s) => (
                  <p key={s} className="row small" style={{ gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--good)', flexShrink: 0, marginTop: 1 }}><Icon name="plus" size={13} strokeWidth={2.4} /></span>{s}
                  </p>
                ))}
                {l.weaknesses.map((w) => (
                  <p key={w} className="row small" style={{ gap: 8, alignItems: 'flex-start', color: 'var(--text-3)' }}>
                    <span style={{ color: 'var(--bad)', flexShrink: 0, marginTop: 1 }}><Icon name="minus" size={13} strokeWidth={2.4} /></span>{w}
                  </p>
                ))}
              </div>

              <button
                onClick={() => setLens(l.id)}
                disabled={active}
                className="tap"
                style={{ width: '100%', marginTop: 14, padding: '11px', borderRadius: 12, fontWeight: 700, fontSize: 13.5, fontFamily: 'var(--font-sans)', background: active ? 'var(--accent-soft)' : 'var(--surface-3)', color: active ? 'var(--accent-text)' : 'var(--text)' }}
              >
                {active ? <span className="row" style={{ gap: 6, justifyContent: 'center' }}><Icon name="check" size={15} strokeWidth={2.6} /> On my camera</span> : 'Preview with this lens'}
              </button>
            </section>
          )
        })}
      </div>

      <section style={{ marginTop: 22 }}>
        <div className="card" style={{ borderColor: 'var(--accent-line)' }}>
          <div className="row" style={{ gap: 8, marginBottom: 11 }}>
            <span style={{ color: 'var(--accent)' }}><Icon name="info" size={16} /></span>
            <span className="eyebrow" style={{ color: 'var(--accent-text)' }}>Which lens, when?</span>
          </div>
          <div className="stack" style={{ '--g': '10px' } as React.CSSProperties}>
            <p className="body">Reach for the <b style={{ color: 'var(--text)' }}>20-70 f/4 G</b> most of the time. That 20mm wide end fits Hanoi’s tight alleys, temples and Ha Long Bay vistas the kit lens cannot, it holds f/4 right through, and one lens covers wide scenes to short portraits. It is your everyday walk-around.</p>
            <p className="body">Grab the <b style={{ color: 'var(--text)' }}>28-60 kit</b> when you want to travel ultra-light: it collapses tiny and slips in a pocket, and it is perfectly sharp in good daylight.</p>
            <p className="small" style={{ color: 'var(--text-3)' }}>Switch the active lens above and the scene wizard’s tips and aperture limits update for whichever one is on your camera.</p>
          </div>
        </div>
      </section>

      <SeeAlso links={[
        { to: '/learn/guide/aperture-dof', label: 'Aperture & blur', icon: 'aperture', kind: 'chapter' },
        { to: '/learn/glossary#aperture', label: 'Aperture', icon: 'glossary', kind: 'glossary' },
        { to: '/shoot/street-portrait', label: 'Portrait scene', icon: 'wand', kind: 'scene' },
        { to: '/trip/accessories', label: 'Accessories', icon: 'contrast', kind: 'accessory' },
      ]} />
    </div>
  )
}
