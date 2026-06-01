import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { BackBar, Corners, Eyebrow, Note, Pill } from '../components/ui'
import { hotspots } from '../data/cameraMap'
import type { CameraHotspot } from '../data/types'

const VW = 200, VH = 150

function CameraDiagram({
  view,
  spots,
  selected,
  onSelect,
}: {
  view: 'top' | 'back'
  spots: CameraHotspot[]
  selected: string | null
  onSelect: (id: string) => void
}) {
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', display: 'block' }}>
      {view === 'top' ? (
        <g>
          <rect x="20" y="48" width="160" height="58" rx="13" style={{ fill: 'var(--surface-3)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <rect x="20" y="54" width="26" height="58" rx="11" style={{ fill: 'var(--surface-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <rect x="100" y="20" width="24" height="14" rx="3" style={{ fill: 'var(--surface-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <rect x="92" y="34" width="40" height="16" rx="4" style={{ fill: 'var(--surface)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <circle cx="150" cy="60" r="16" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
          <circle cx="150" cy="60" r="6" style={{ fill: 'var(--surface-3)' }} />
          <circle cx="120" cy="50" r="9" style={{ fill: 'var(--surface-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <circle cx="60" cy="54" r="9" style={{ fill: 'var(--surface-3)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
        </g>
      ) : (
        <g>
          <rect x="14" y="22" width="172" height="110" rx="13" style={{ fill: 'var(--surface-3)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <rect x="24" y="36" width="92" height="82" rx="6" style={{ fill: 'var(--bg-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <rect x="30" y="16" width="34" height="10" rx="3" style={{ fill: 'var(--surface)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <circle cx="148" cy="96" r="22" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
          <circle cx="148" cy="96" r="8" style={{ fill: 'var(--surface-3)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
          <rect x="150" y="26" width="30" height="20" rx="6" style={{ fill: 'var(--surface-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
        </g>
      )}
      {spots.map((s, i) => {
        const cx = (s.x / 100) * VW
        const cy = (s.y / 100) * VH
        const on = s.id === selected
        return (
          <g key={s.id} onClick={() => onSelect(s.id)} style={{ cursor: 'pointer' }}>
            {on && (
              <circle cx={cx} cy={cy} r="14" style={{ fill: 'var(--accent)', opacity: 0.22 }}>
                <animate attributeName="r" values="11;15;11" dur="1.8s" repeatCount="indefinite" />
              </circle>
            )}
            <circle
              cx={cx}
              cy={cy}
              r="9"
              style={{ fill: on ? 'var(--accent)' : 'var(--surface-2)', stroke: on ? 'var(--accent-2)' : s.recommendCustom ? 'var(--accent)' : 'var(--text-3)' }}
              strokeWidth="1.6"
            />
            <text x={cx} y={cy + 3.4} textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily="JetBrains Mono, monospace" style={{ fill: on ? 'var(--bg)' : 'var(--text)' }}>
              {i + 1}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function CameraMap() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const deep = params.get('spot')
  const initView = (deep && hotspots.find((h) => h.id === deep)?.view) || 'back'
  const [view, setView] = useState<'top' | 'back'>(initView)
  const [sel, setSel] = useState<string | null>(deep)

  useEffect(() => {
    if (deep) {
      const h = hotspots.find((x) => x.id === deep)
      if (h) { setView(h.view); setSel(h.id) }
    }
  }, [deep])

  const spots = hotspots.filter((h) => h.view === view)
  const active = hotspots.find((h) => h.id === sel && h.view === view)

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 14 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Camera Map</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Tap any button</h1>
        <p className="body" style={{ marginTop: 7 }}>Numbered dots show what each control does. An amber ring means we suggest customising it.</p>
      </div>
      <div className="seg" style={{ marginBottom: 13 }}>
        {(['back', 'top'] as const).map((v) => (
          <button key={v} className={view === v ? 'on' : ''} onClick={() => { setView(v); setSel(null) }} style={{ textTransform: 'capitalize' }}>{v} of camera</button>
        ))}
      </div>
      <div className="card vf" style={{ padding: '16px 12px 10px' }}>
        <Corners />
        <CameraDiagram view={view} spots={spots} selected={sel} onSelect={setSel} />
        <p className="tiny" style={{ textAlign: 'center', marginTop: 4 }}>Tap a numbered dot to learn what it does.</p>
      </div>

      {active ? (
        <div className="card fu" style={{ marginTop: 13, borderColor: 'var(--accent-line)' }} key={active.id}>
          <div className="row between" style={{ marginBottom: 9 }}>
            <h2 className="h2">{active.label}</h2>
            {active.sonyName && <Pill>{active.sonyName}</Pill>}
          </div>
          <p className="body">{active.whatItDoes}</p>
          <div style={{ marginTop: 12 }}><Note tone="amber" icon="sparkle">{active.beginnerTip}</Note></div>
          {active.recommendCustom && <p className="tiny" style={{ marginTop: 9 }}>This one is in “Before You Fly” as a recommended custom button.</p>}
        </div>
      ) : (
        <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 16 }}>Tap a dot above to see what it does.</p>
      )}

      <div className="row" style={{ flexWrap: 'wrap', gap: 7, marginTop: 16 }}>
        {spots.map((s, i) => (
          <button key={s.id} onClick={() => setSel(s.id)} className="tap pill" style={{ background: sel === s.id ? 'var(--accent-soft)' : 'var(--surface-3)', color: sel === s.id ? 'var(--accent-text)' : 'var(--text-2)' }}>
            {i + 1}. {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
