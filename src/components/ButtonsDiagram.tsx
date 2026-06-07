import { useState } from 'react'
import Icon from './Icon'
import CameraBody, { CB_VW as VW, CB_VH as VH } from './CameraBody'
import {
  controls, controlDiagram, functions, functionById, controlById, recommendedFor,
} from '../data/buttons'
import type { CameraView } from '../data/types'

const shortFn = (id: string | undefined) => (id ? functionById(id)?.label ?? id : '—')

export default function ButtonsDiagram({
  map, done, onPick,
}: {
  map: Record<string, string>
  done: string[]
  onPick: (controlId: string, fnId: string) => void
}) {
  const [view, setView] = useState<CameraView>('back')
  const [sel, setSel] = useState<string | null>(null)

  const bodyControls = controls.filter((c) => controlDiagram[c.id]?.view === view)
  const fnTiles = controls.filter((c) => c.group === 'fn')
  const selControl = sel ? controlById(sel) : undefined
  const selPos = sel ? controlDiagram[sel] : undefined // on-body controls only

  const stateColor = (cid: string): { fill: string; stroke: string } => {
    const fn = map[cid]
    if (!fn) return { fill: 'var(--surface-2)', stroke: 'var(--text-4)' }
    if (done.includes(cid)) return { fill: 'var(--good)', stroke: 'var(--good)' }
    if (recommendedFor(cid) === fn) return { fill: 'var(--accent)', stroke: 'var(--accent-2)' }
    return { fill: 'var(--surface-3)', stroke: 'var(--accent)' }
  }

  return (
    <div>
      {/* view toggle */}
      <div className="seg" style={{ marginBottom: 12 }}>
        {(['back', 'top'] as const).map((v) => (
          <button key={v} className={view === v ? 'on' : ''} onClick={() => { setView(v); setSel(null) }} style={{ textTransform: 'capitalize' }}>{v}</button>
        ))}
      </div>

      {/* diagram */}
      <div className="card vf" style={{ padding: '14px 12px 8px' }}>
        <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', display: 'block' }}>
          <CameraBody view={view} />
          {bodyControls.map((c) => {
            const pos = controlDiagram[c.id]
            const cx = (pos.x / 100) * VW
            const cy = (pos.y / 100) * VH
            const on = sel === c.id
            const col = stateColor(c.id)
            return (
              <g key={c.id} onClick={() => setSel(on ? null : c.id)} style={{ cursor: 'pointer' }}>
                {on && (
                  <>
                    <circle cx={cx} cy={cy} r="13" style={{ fill: 'var(--accent)', opacity: 0.16 }}>
                      <animate attributeName="r" values="9;14;9" dur="1.7s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={cx} cy={cy} r="10.5" style={{ fill: 'none', stroke: 'var(--accent)', opacity: 0.9 }} strokeWidth="1.3" />
                  </>
                )}
                <circle cx={cx} cy={cy} r={on ? 8 : 7} style={{ fill: col.fill, stroke: col.stroke }} strokeWidth="1.7" />
                {!map[c.id] && (
                  <text x={cx} y={cy + 3.2} textAnchor="middle" fontSize="10" fontWeight="700" style={{ fill: 'var(--text-3)' }}>+</text>
                )}
                {done.includes(c.id) && (
                  <path d={`M ${cx - 3.2} ${cy} l 2.2 2.2 l 4.4 -4.4`} fill="none" stroke="var(--bg)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </g>
            )
          })}
        </svg>
        <p className="tiny" style={{ textAlign: 'center', marginTop: 2 }}>Tap a dot, or a chip below, to set that control.</p>
      </div>

      {/* chips for this view */}
      <div className="row" style={{ flexWrap: 'wrap', gap: 7, marginTop: 12 }}>
        {bodyControls.map((c) => {
          const assigned = map[c.id]
          const isSel = sel === c.id
          return (
            <button
              key={c.id}
              onClick={() => setSel(isSel ? null : c.id)}
              className="tap pill"
              style={{ background: isSel ? 'var(--accent-soft)' : 'var(--surface-3)', color: isSel ? 'var(--accent-text)' : assigned ? 'var(--text)' : 'var(--text-3)', border: '1px solid ' + (isSel ? 'var(--accent-line)' : 'var(--border)') }}
            >
              {c.label} · <b style={{ color: assigned ? 'var(--accent-text)' : 'var(--text-4)', fontWeight: 600 }}>{shortFn(assigned)}</b>
            </button>
          )
        })}
      </div>

      {/* Fn tiles grid */}
      <div style={{ marginTop: 18 }}>
        <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 9 }}>Fn menu (press Fn, then a tile)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
          {fnTiles.map((c, i) => {
            const assigned = map[c.id]
            const isSel = sel === c.id
            return (
              <button
                key={c.id}
                onClick={() => setSel(isSel ? null : c.id)}
                className="tap"
                style={{ aspectRatio: '1', borderRadius: 10, padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, background: isSel ? 'var(--accent-soft)' : assigned ? 'var(--surface-3)' : 'var(--surface-2)', border: '1px solid ' + (isSel ? 'var(--accent-line)' : 'var(--border)') }}
              >
                <span className="mono" style={{ fontSize: 8, color: 'var(--text-4)' }}>{i + 1}</span>
                <span className="mono" style={{ fontSize: 7.5, lineHeight: 1, textAlign: 'center', color: assigned ? 'var(--accent-text)' : 'var(--text-4)' }}>{assigned ? shortFn(assigned) : '—'}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* picker panel */}
      {selControl && (
        <div className="card fu" style={{ marginTop: 16, borderColor: 'var(--accent-line)' }} key={selControl.id}>
          <div className="row between" style={{ marginBottom: 8 }}>
            <span className="h3">{selControl.label}</span>
            <button onClick={() => setSel(null)} style={{ color: 'var(--text-3)' }}><Icon name="x" size={15} /></button>
          </div>
          <p className="small" style={{ color: 'var(--text-2)', marginBottom: 10 }}>{selControl.where}{selPos ? '' : ''}</p>
          {(() => {
            const suggested = recommendedFor(selControl.id)
            if (!suggested || suggested === 'not-set') return null
            const matches = map[selControl.id] === suggested
            return (
              <div className="row between" style={{ gap: 8, marginBottom: 11, padding: '8px 10px', borderRadius: 10, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}>
                <span className="small" style={{ color: 'var(--text-2)' }}>Suggested: <b style={{ color: 'var(--accent-text)' }}>{shortFn(suggested)}</b></span>
                {!matches && <button className="tap pill accent-pill" onClick={() => onPick(selControl.id, suggested)}>Use</button>}
              </div>
            )
          })()}
          <div className="row" style={{ gap: 7, flexWrap: 'wrap' }}>
            {functions
              .filter((f) => f.id === 'not-set' || f.fits === 'both' || f.fits === selControl.takes)
              .map((f) => {
                const active = (map[selControl.id] ?? 'not-set') === f.id
                return (
                  <button
                    key={f.id}
                    onClick={() => onPick(selControl.id, f.id)}
                    className="tap pill"
                    style={{ background: active ? 'var(--accent)' : 'var(--surface-3)', color: active ? 'var(--bg)' : 'var(--text-2)', border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border)') }}
                  >
                    {f.label}
                  </button>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}
