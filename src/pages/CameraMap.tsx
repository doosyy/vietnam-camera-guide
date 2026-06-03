import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { BackBar, Corners, Eyebrow, Note, Pill } from '../components/ui'
import CameraBody, { CB_VW as VW, CB_VH as VH } from '../components/CameraBody'
import { hotspots } from '../data/cameraMap'
import type { CameraHotspot, CameraView } from '../data/types'

function CameraDiagram({
  view,
  spots,
  selected,
  onSelect,
}: {
  view: CameraView
  spots: CameraHotspot[]
  selected: string | null
  onSelect: (id: string) => void
}) {
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', display: 'block' }}>
      <CameraBody view={view} />
      {spots.map((s, i) => {
        const cx = (s.x / 100) * VW
        const cy = (s.y / 100) * VH
        const on = s.id === selected
        return (
          <g key={s.id} onClick={() => onSelect(s.id)} style={{ cursor: 'pointer' }}>
            {on && (
              <>
                <circle cx={cx} cy={cy} r="17" style={{ fill: 'var(--accent)', opacity: 0.16 }}>
                  <animate attributeName="r" values="13;19;13" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.18;0.05;0.18" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="13" style={{ fill: 'none', stroke: 'var(--accent)', opacity: 0.9 }} strokeWidth="1.4" />
              </>
            )}
            <circle
              cx={cx}
              cy={cy}
              r={on ? 10 : 8.5}
              style={{ fill: on ? 'var(--accent)' : 'var(--surface-2)', stroke: on ? 'var(--accent-2)' : s.recommendCustom ? 'var(--accent)' : 'var(--text-3)' }}
              strokeWidth="1.7"
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
  const initView: CameraView = (deep && hotspots.find((h) => h.id === deep)?.view) || 'back'
  const [view, setView] = useState<CameraView>(initView)
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
        <p className="body" style={{ marginTop: 7 }}>Numbered dots show what each control does. A coloured ring means we suggest customising it.</p>
      </div>
      <div className="seg" style={{ marginBottom: 13 }}>
        {(['front', 'back', 'top', 'ports'] as const).map((v) => (
          <button key={v} className={view === v ? 'on' : ''} onClick={() => { setView(v); setSel(null) }} style={{ textTransform: 'capitalize', padding: '9px 4px' }}>{v}</button>
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
