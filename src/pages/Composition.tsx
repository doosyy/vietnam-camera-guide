import { useNavigate, useLocation } from 'react-router-dom'
import { BackBar, Eyebrow, Note, NumberStep } from '../components/ui'
import { compositionTips } from '../data/composition'
import type { CompositionTip } from '../data/types'

function CompDiagram({ kind }: { kind: CompositionTip['diagram'] }) {
  const line = { stroke: 'var(--border-2)', strokeWidth: 1.2, fill: 'none' }
  const acc = { stroke: 'var(--accent)', strokeWidth: 1.6, fill: 'none' }
  const dot = { fill: 'var(--accent)' }
  let inner
  if (kind === 'thirds') inner = <g><line x1="33" y1="6" x2="33" y2="66" {...line} /><line x1="67" y1="6" x2="67" y2="66" {...line} /><line x1="6" y1="24" x2="94" y2="24" {...line} /><line x1="6" y1="48" x2="94" y2="48" {...line} /><circle cx="33" cy="48" r="6" {...dot} /></g>
  else if (kind === 'leadingLines') inner = <g><line x1="6" y1="64" x2="50" y2="20" {...acc} /><line x1="94" y1="64" x2="50" y2="20" {...acc} /><line x1="30" y1="64" x2="50" y2="26" {...line} /><line x1="70" y1="64" x2="50" y2="26" {...line} /><circle cx="50" cy="20" r="6" {...dot} /></g>
  else if (kind === 'framing') inner = <g><rect x="22" y="12" width="56" height="48" rx="4" {...acc} /><circle cx="50" cy="36" r="7" {...dot} /></g>
  else if (kind === 'layering') inner = <g><rect x="10" y="46" width="80" height="14" rx="3" style={{ fill: 'var(--accent)', opacity: 0.85 }} /><rect x="18" y="30" width="64" height="12" rx="3" style={{ fill: 'var(--text-3)', opacity: 0.55 }} /><rect x="26" y="16" width="48" height="10" rx="3" style={{ fill: 'var(--border-2)' }} /></g>
  else inner = <g><line x1="14" y1="58" x2="78" y2="58" {...line} /><line x1="14" y1="58" x2="62" y2="20" {...acc} /><path d="M 30 58 A 16 16 0 0 1 34 44" {...line} /><circle cx="62" cy="20" r="5" {...dot} /></g>
  return <svg viewBox="0 0 100 72" style={{ width: 92, height: 66, flexShrink: 0 }}>{inner}</svg>
}

export default function Composition() {
  const navigate = useNavigate()
  const focus = useLocation().hash.replace('#', '')
  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 18 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Composition</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Make it look good</h1>
        <p className="body" style={{ marginTop: 7 }}>Five framing habits that lift a snapshot into a photograph.</p>
      </div>
      <div className="stack" style={{ '--g': '13px' } as React.CSSProperties}>
        {compositionTips.map((c) => (
          <section key={c.id} id={c.id} className="card" style={focus === c.id ? { borderColor: 'var(--accent-line)' } : undefined}>
            <div className="row" style={{ gap: 13, alignItems: 'flex-start' }}>
              <div className="vf" style={{ padding: 6, borderRadius: 12, background: 'var(--bg-2)', border: '1px solid var(--border)' }}>
                <CompDiagram kind={c.diagram} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 className="h2">{c.title}</h2>
                <p className="small" style={{ marginTop: 4 }}>{c.idea}</p>
              </div>
            </div>
            <ol className="stack" style={{ '--g': '9px', listStyle: 'none', marginTop: 14 } as React.CSSProperties}>
              {c.how.map((h, i) => <NumberStep key={i} n={i + 1}>{h}</NumberStep>)}
            </ol>
            <div style={{ marginTop: 13 }}><Note tone="good" icon="pin">{c.vietnamExample}</Note></div>
          </section>
        ))}
      </div>
    </div>
  )
}
