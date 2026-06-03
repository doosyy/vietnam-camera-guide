import type { CameraView } from '../data/types'

// Shared recreated A7C II body art (never a copy of Sony's photos). Drawn in a
// 200 x 150 viewBox; callers wrap this in their own <svg> and overlay markers.
// Proportions follow Chris's real A7C II photos: screen left, grip + button
// cluster right, EVF hump top-left, control wheel lower-right.
export const CB_VW = 200
export const CB_VH = 150

const body = { fill: 'var(--surface-3)', stroke: 'var(--border-2)' }
const sub = { fill: 'var(--surface-2)', stroke: 'var(--border-2)' }

export default function CameraBody({ view }: { view: CameraView }) {
  if (view === 'top') {
    return (
      <g>
        {/* body + grip */}
        <rect x="20" y="48" width="160" height="58" rx="13" style={body} strokeWidth="1.3" />
        <rect x="20" y="54" width="26" height="58" rx="11" style={sub} strokeWidth="1.3" />
        {/* MI shoe */}
        <rect x="92" y="34" width="40" height="16" rx="4" style={{ fill: 'var(--surface)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
        <rect x="100" y="20" width="24" height="14" rx="3" style={sub} strokeWidth="1.3" />
        {/* stacked mode dial */}
        <circle cx="120" cy="58" r="17" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
        <circle cx="120" cy="58" r="9" style={{ fill: 'var(--surface-3)', stroke: 'var(--border-2)' }} strokeWidth="1" />
        {/* shutter + power */}
        <circle cx="150" cy="70" r="11" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
        <circle cx="150" cy="70" r="5" style={{ fill: 'var(--surface-3)' }} />
        {/* front dial */}
        <circle cx="80" cy="66" r="8" style={{ fill: 'var(--surface-3)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
        {/* rear dial */}
        <circle cx="140" cy="42" r="8" style={sub} strokeWidth="1.3" />
        {/* movie */}
        <circle cx="112" cy="70" r="5.5" style={{ fill: 'var(--surface-2)', stroke: 'var(--accent)' }} strokeWidth="1.3" />
      </g>
    )
  }
  if (view === 'back') {
    return (
      <g>
        {/* body */}
        <rect x="14" y="22" width="172" height="110" rx="13" style={body} strokeWidth="1.3" />
        {/* screen */}
        <rect x="24" y="36" width="92" height="82" rx="6" style={{ fill: 'var(--bg-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
        {/* EVF hump */}
        <rect x="30" y="14" width="34" height="11" rx="3" style={{ fill: 'var(--surface)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
        {/* grip on the right */}
        <rect x="168" y="30" width="14" height="94" rx="7" style={sub} strokeWidth="1.2" />
        {/* control wheel */}
        <circle cx="148" cy="98" r="22" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
        <circle cx="148" cy="98" r="8" style={{ fill: 'var(--surface-3)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
        {/* rear dial nub at top-right */}
        <rect x="150" y="24" width="26" height="14" rx="6" style={sub} strokeWidth="1.3" />
      </g>
    )
  }
  if (view === 'front') {
    return (
      <g>
        <rect x="20" y="30" width="160" height="100" rx="13" style={body} strokeWidth="1.3" />
        <rect x="20" y="36" width="30" height="94" rx="12" style={sub} strokeWidth="1.3" />
        <circle cx="112" cy="82" r="40" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.4" />
        <circle cx="112" cy="82" r="26" style={{ fill: 'var(--bg-2)', stroke: 'var(--border-2)' }} strokeWidth="1.3" />
        <circle cx="112" cy="82" r="12" style={{ fill: 'var(--surface-3)' }} />
        <circle cx="60" cy="36" r="7" style={sub} strokeWidth="1.2" />
      </g>
    )
  }
  // ports (left side)
  return (
    <g>
      <rect x="40" y="22" width="120" height="106" rx="13" style={body} strokeWidth="1.3" />
      <rect x="80" y="45" width="18" height="9" rx="2.5" style={{ fill: 'var(--bg-2)', stroke: 'var(--border-2)' }} strokeWidth="1.2" />
      <rect x="80" y="72" width="18" height="9" rx="2.5" style={{ fill: 'var(--bg-2)', stroke: 'var(--border-2)' }} strokeWidth="1.2" />
      <rect x="80" y="99" width="18" height="9" rx="2.5" style={{ fill: 'var(--bg-2)', stroke: 'var(--border-2)' }} strokeWidth="1.2" />
      <rect x="138" y="56" width="30" height="38" rx="4" style={sub} strokeWidth="1.3" />
    </g>
  )
}
