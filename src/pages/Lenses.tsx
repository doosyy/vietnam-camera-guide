import Icon from '../components/Icon'
import { BackBar, Eyebrow, SectionTitle, Pill, Note, NumberStep, SeeAlso } from '../components/ui'
import { useApp } from '../context/AppContext'
import { lenses, buyChecklist } from '../data/lenses'

export default function Lenses() {
  const { lens, setLens } = useApp()

  return (
    <div className="screen anim-fwd">
      <BackBar to="/trip" label="Trip" />
      <div style={{ marginBottom: 18 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Lens Guide</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Buy it, or skip it?</h1>
        <p className="body" style={{ marginTop: 7 }}>Your kit lens, and whether a new one is worth buying in Vietnam.</p>
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
            <span className="eyebrow" style={{ color: 'var(--accent-text)' }}>Which should you buy?</span>
          </div>
          <div className="stack" style={{ '--g': '10px' } as React.CSSProperties}>
            <p className="body">The <b style={{ color: 'var(--text)' }}>20-70 f/4</b> is the better all-rounder: that 20mm wide end is brilliant for Hanoi’s tight alleys, temples and Ha Long Bay vistas the kit lens cannot fit.</p>
            <p className="body">The <b style={{ color: 'var(--text)' }}>24-50 f/2.8</b> is the night &amp; food specialist: it gathers twice the light, so cleaner night-market shots and softer backgrounds for portraits and pho.</p>
            <p className="body">Since your biggest pain point is low light, the <b className="accent">24-50 f/2.8</b> would help most after dark. Want one lens that does a bit of everything and never feels too tight indoors? Choose the <b className="accent">20-70 f/4</b>.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 22 }}>
        <SectionTitle icon="bag">Is this deal worth it?</SectionTitle>
        <ol className="card stack" style={{ '--g': '11px', listStyle: 'none' } as React.CSSProperties}>
          {buyChecklist.map((c, i) => <NumberStep key={i} n={i + 1}>{c}</NumberStep>)}
        </ol>
        <div style={{ marginTop: 12 }}>
          <Note tone="plain" icon="x">Walk away if the price is not clearly better than home, the glass looks hazy, or the seller cannot show it working on your camera.</Note>
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
