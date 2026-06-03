import { controls, functionById, type Reach } from '../data/buttons'

const order: Reach[] = ['instant', 'two-step', 'awkward']
const reachLabel: Record<Reach, string> = { instant: 'Instant (by feel)', 'two-step': 'Fn menu', awkward: 'Other' }

// A compact, read-only summary of a button layout, grouped by how fast each is.
export default function ButtonsCheatCard({ map }: { map: Record<string, string> }) {
  const groups = order
    .map((r) => ({
      reach: r,
      rows: controls
        .filter((c) => c.reach === r && map[c.id] && map[c.id] !== 'not-set')
        .map((c) => ({ id: c.id, label: c.label, fn: functionById(map[c.id])?.label ?? map[c.id] })),
    }))
    .filter((g) => g.rows.length)

  if (!groups.length) return <p className="small" style={{ color: 'var(--text-3)' }}>No buttons recorded yet.</p>

  return (
    <div className="stack" style={{ '--g': '15px' } as React.CSSProperties}>
      {groups.map((g) => (
        <div key={g.reach}>
          <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 7 }}>{reachLabel[g.reach]}</div>
          <div className="stack" style={{ '--g': '5px' } as React.CSSProperties}>
            {g.rows.map((r) => (
              <div key={r.id} className="row between" style={{ gap: 12 }}>
                <span className="data" style={{ fontSize: 12.5, color: 'var(--text-2)', flexShrink: 0 }}>{r.label}</span>
                <span className="dotline" style={{ flex: 1, borderBottom: '1px dotted var(--border-2)', margin: '0 2px 4px' }} />
                <span className="data" style={{ fontSize: 12.5, color: 'var(--accent-text)', textAlign: 'right' }}>{r.fn}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
