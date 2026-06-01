import { PageHead, SectionTitle, NumberStep } from '../components/ui'
import { quickFixes, afPicks, streetStarter, lowLightLadder } from '../data/cheatsheet'

export default function Cheat() {
  return (
    <div className="screen anim-tab">
      <PageHead eyebrow="Cheat Sheet" title="Pocket field card" sub="Glance, fix, keep shooting." />

      <section style={{ marginBottom: 22 }}>
        <SectionTitle icon="alert">Something’s wrong? Fix this first</SectionTitle>
        <div className="card flush">
          {quickFixes.map((r, i) => (
            <div key={r.problem} style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 12, padding: '13px 15px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
              <div className="h3" style={{ fontSize: 13.5 }}>{r.problem}</div>
              <div>
                <div className="data" style={{ fontSize: 13, color: 'var(--accent-text)' }}>{r.fix}</div>
                <div className="tiny" style={{ marginTop: 3 }}>{r.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 22 }}>
        <SectionTitle icon="camera">My go-to street settings</SectionTitle>
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
          {streetStarter.map((r) => (
            <div key={r.label}>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--text-3)' }}>{r.label}</div>
              <div className="data" style={{ fontSize: 13.5, marginTop: 3 }}>{r.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 22 }}>
        <SectionTitle icon="crosshair">Autofocus quick-pick</SectionTitle>
        <div className="card flush">
          {afPicks.map((a, i) => (
            <div key={a.moment} className="row between" style={{ gap: 12, padding: '12px 15px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
              <span className="body" style={{ color: 'var(--text-2)' }}>{a.moment}</span>
              <span className="data" style={{ fontSize: 12.5, color: 'var(--accent-text)', flexShrink: 0 }}>{a.setting}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle icon="moon">Low-light rescue order</SectionTitle>
        <ol className="card stack" style={{ '--g': '12px', listStyle: 'none' } as React.CSSProperties}>
          {lowLightLadder.map((s, i) => <NumberStep key={i} n={i + 1}>{s}</NumberStep>)}
        </ol>
      </section>
    </div>
  )
}
