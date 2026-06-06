import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Note, Pill, SectionTitle, NumberStep } from '../components/ui'
import { accessories, otherGear } from '../data/accessories'
import type { Accessory } from '../data/accessories'

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="stack" style={{ '--g': '9px', listStyle: 'none' } as React.CSSProperties}>
      {items.map((t, i) => (
        <li key={i} className="row" style={{ gap: 10, alignItems: 'flex-start' }}>
          <span style={{ width: 5, height: 5, borderRadius: 9, background: 'var(--accent)', marginTop: 8, flexShrink: 0 }} />
          <span className="body" style={{ flex: 1 }}>{t}</span>
        </li>
      ))}
    </ul>
  )
}

function Section({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: 22 }}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      {children}
    </section>
  )
}

function AccessoryGuide({ a }: { a: Accessory }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="card" style={{ borderColor: 'var(--accent-line)' }}>
        <div className="row" style={{ gap: 13 }}>
          <span className="ico-badge"><Icon name={a.icon} size={20} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="row" style={{ gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="h2" style={{ fontSize: 18 }}>{a.name}</span>
              {a.tag && <Pill tone="good">{a.tag}</Pill>}
            </div>
            <p className="small" style={{ color: 'var(--text-2)', marginTop: 4 }}>{a.oneLiner}</p>
          </div>
        </div>
      </div>

      <Section icon="sparkle" title="What it does for you">
        <Bullets items={a.whatItDoes} />
      </Section>

      <Section icon="rotate" title="How to use it">
        <ol className="stack" style={{ '--g': '11px', listStyle: 'none' } as React.CSSProperties}>
          {a.howToUse.map((s, i) => <NumberStep key={i} n={i + 1}>{s}</NumberStep>)}
        </ol>
      </Section>

      <Section icon="pin" title="Great for in Vietnam">
        <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
          {a.greatFor.map((u) => {
            const tappable = !!u.sceneId
            return (
              <button
                key={u.title}
                onClick={() => u.sceneId && navigate(`/shoot/${u.sceneId}`)}
                className={tappable ? 'tap card flush' : 'card flush'}
                style={{ width: '100%', textAlign: 'left', padding: 13, cursor: tappable ? 'pointer' : 'default' }}
              >
                <div className="row between" style={{ gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 0 }}>
                    <span className="h3" style={{ fontSize: 13.5, display: 'block' }}>{u.title}</span>
                    <span className="small" style={{ color: 'var(--text-2)', marginTop: 2, display: 'block' }}>{u.note}</span>
                  </div>
                  {tappable && <Icon name="chevronRight" size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />}
                </div>
              </button>
            )
          })}
        </div>
      </Section>

      <Section icon="gauge" title="Settings & light">
        <Note tone="plain" icon="info">{a.settingsNote}</Note>
      </Section>

      <Section icon="eye" title="Skip it when">
        <Bullets items={a.skipWhen} />
      </Section>

      <Section icon="alert" title="Watch out">
        <div className="stack" style={{ '--g': '9px' } as React.CSSProperties}>
          {a.watchFor.map((t, i) => (
            <Note key={i} tone="amber" icon="bulb">{t}</Note>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default function Accessories() {
  const navigate = useNavigate()
  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/trip')} label="Trip" />
      <div style={{ marginBottom: 18 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Accessories</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Gear that earns its place</h1>
        <p className="body" style={{ marginTop: 7 }}>What each piece of kit does for your photos, and exactly when to reach for it in Vietnam.</p>
      </div>

      {accessories.map((a) => (
        <div key={a.id} style={{ marginBottom: 26 }}>
          <AccessoryGuide a={a} />
        </div>
      ))}

      <Section icon="bag" title="Other handy gear">
        <div className="card flush">
          {otherGear.map((g, i) => (
            <div key={g.name} className="lrow" style={{ alignItems: 'flex-start', borderTop: i ? '1px solid var(--border)' : 'none' }}>
              <span className="ico-badge muted" style={{ width: 34, height: 34 }}><Icon name={g.icon} size={16} /></span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span className="h3" style={{ fontSize: 13.5, display: 'block' }}>{g.name}</span>
                <span className="small" style={{ color: 'var(--text-3)', marginTop: 2, display: 'block' }}>{g.note}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
