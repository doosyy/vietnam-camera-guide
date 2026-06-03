import type { CameraView } from '../data/types'

// Shared recreated A7C II body art (never a copy of Sony's photos). Drawn in a
// 200 x 150 viewBox in the app's monochrome "darkroom" palette: accurate in shape
// and control placement (from Chris's real A7C II photos), not photo-real.
// Callers wrap this in their own <svg> and overlay interactive markers at the
// SAME percentage positions used here (see cameraMap.ts hotspots & buttons.ts
// controlDiagram), so the dots land exactly on the drawn controls.
export const CB_VW = 200
export const CB_VH = 150

const body = { fill: 'var(--surface-3)', stroke: 'var(--border-2)' }
const plate = { fill: 'var(--surface-2)', stroke: 'var(--border-2)' } // silver top plate
const sub = { fill: 'var(--surface-2)', stroke: 'var(--border-2)' }
const screen = { fill: 'var(--bg-2)', stroke: 'var(--border-2)' }
const recess = { fill: 'var(--bg-2)', stroke: 'var(--border-2)' } // a sunken button well
const knob = { fill: 'var(--surface-3)', stroke: 'var(--text-3)' }

// A drawn physical button: a sunken well so the interactive marker reads as the
// button itself. r in viewBox units; x,y are PERCENT (to match the hotspot data).
function Btn({ x, y, r = 5 }: { x: number; y: number; r?: number }) {
  return <circle cx={(x / 100) * CB_VW} cy={(y / 100) * CB_VH} r={r} style={recess} strokeWidth="1.2" />
}
// Tiny engraved label (a real marking printed on the camera).
function Eng({ x, y, children, size = 5 }: { x: number; y: number; children: string; size?: number }) {
  return (
    <text x={(x / 100) * CB_VW} y={(y / 100) * CB_VH} textAnchor="middle" fontSize={size} fontFamily="JetBrains Mono, monospace" fontWeight={700} style={{ fill: 'var(--text-3)' }} letterSpacing=".3">
      {children}
    </text>
  )
}
// Ridged dial: a circle with a few grip lines.
function Dial({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const lines = []
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2
    lines.push(<line key={i} x1={cx + Math.cos(a) * (r - 2.4)} y1={cy + Math.sin(a) * (r - 2.4)} x2={cx + Math.cos(a) * r} y2={cy + Math.sin(a) * r} stroke="var(--text-3)" strokeWidth="0.6" opacity="0.7" />)
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} style={knob} strokeWidth="1.2" />
      {lines}
    </g>
  )
}

export default function CameraBody({ view }: { view: CameraView }) {
  if (view === 'back') {
    return (
      <g>
        {/* EVF hump (top-left) */}
        <rect x="24" y="3" width="46" height="24" rx="9" style={body} strokeWidth="1.3" />
        <rect x="30" y="6" width="34" height="16" rx="7" style={screen} strokeWidth="1.2" />
        {/* silver top plate behind the body */}
        <rect x="16" y="15" width="168" height="20" rx="7" style={plate} strokeWidth="1.3" />
        {/* hot shoe */}
        <rect x="92" y="9" width="34" height="13" rx="3" style={{ fill: 'var(--surface)', stroke: 'var(--border-2)' }} strokeWidth="1.2" />
        {/* diopter dial right of EVF */}
        <circle cx="150" cy="30" r="6" style={knob} strokeWidth="1" />
        {/* main body */}
        <rect x="13" y="26" width="174" height="108" rx="15" style={body} strokeWidth="1.4" />
        {/* grip / thumb rest on the right */}
        <path d="M178 32 q9 1 9 14 v74 q0 13 -9 14" fill="none" stroke="var(--border-2)" strokeWidth="1.3" />
        <rect x="171" y="40" width="13" height="24" rx="5" style={sub} strokeWidth="1.1" />
        {/* LCD screen */}
        <rect x="20" y="40" width="92" height="86" rx="6" style={screen} strokeWidth="1.3" />
        <rect x="25" y="45" width="40" height="5" rx="2.5" fill="var(--surface-3)" opacity="0.5" />

        {/* control wheel (centre-right) */}
        <circle cx="156" cy="96" r="20" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.4" />
        <circle cx="156" cy="96" r="8.5" style={knob} strokeWidth="1.3" />
        {/* wheel engraved cues */}
        <Eng x={78} y={56} size={4.5}>DISP</Eng>
        <Eng x={90.5} y={66} size={4.5}>ISO</Eng>

        {/* drawn buttons (wells) at the canonical hotspot positions */}
        <Btn x={49} y={20} />{/* MENU */}
        <Btn x={61} y={18} />{/* C1 */}
        <Btn x={83} y={33} r={5.5} />{/* AF-ON */}
        <Btn x={79} y={46} />{/* Fn */}
        <Btn x={69} y={87} />{/* Playback */}
        <Btn x={89} y={87} />{/* C2 / trash */}
        {/* rear dial nub, top-right corner */}
        <Dial cx={178} cy={30} r={6.5} />

        {/* a few real engraved markings for recognisability */}
        <Eng x={49} y={15}>MENU</Eng>
        <Eng x={61} y={13}>C1</Eng>
        <Eng x={89} y={94}>C2</Eng>
      </g>
    )
  }

  if (view === 'top') {
    return (
      <g>
        {/* EVF hump (back-left) */}
        <rect x="26" y="28" width="40" height="16" rx="6" style={body} strokeWidth="1.3" />
        {/* silver top plate */}
        <rect x="16" y="42" width="168" height="64" rx="16" style={plate} strokeWidth="1.4" />
        {/* grip bump on the right */}
        <path d="M178 50 q9 2 9 22 q0 20 -9 22" fill="none" stroke="var(--border-2)" strokeWidth="1.3" />
        {/* hot shoe (centre) */}
        <rect x="78" y="32" width="34" height="13" rx="3" style={{ fill: 'var(--surface)', stroke: 'var(--border-2)' }} strokeWidth="1.2" />
        {/* engraved model + sensor mark */}
        <Eng x={36} y={62} size={5.5}>α7C II</Eng>
        <g stroke="var(--text-3)" strokeWidth="0.8" fill="none" opacity="0.8">
          <circle cx="98" cy="56" r="3.4" />
          <line x1="98" y1="50.5" x2="98" y2="61.5" />
        </g>

        {/* stacked mode dial (Still/Movie/S&Q ring + Mode dial) */}
        <circle cx="120" cy="78" r="17" style={{ fill: 'var(--surface-3)', stroke: 'var(--text-3)' }} strokeWidth="1.4" />
        <Dial cx={120} cy={78} r={11.5} />
        <Eng x={55} y={49} size={4.5}>P A S M</Eng>

        {/* rear dial (back-right corner) */}
        <Dial cx={160} cy={60} r={7.5} />
        {/* MOVIE button (red ring) */}
        <circle cx="140" cy="87" r="5.5" style={{ fill: 'var(--surface-2)', stroke: 'var(--accent)' }} strokeWidth="1.6" />
        {/* shutter + power collar (front-right) */}
        <circle cx="168" cy="90" r="9" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.3" />
        <circle cx="168" cy="90" r="4.5" style={knob} strokeWidth="1.1" />
        <path d="M159 99 a12 12 0 0 0 18 0" fill="none" stroke="var(--text-3)" strokeWidth="1.2" />
        {/* front dial (near shutter) */}
        <Dial cx={140} cy={108} r={7} />
      </g>
    )
  }

  if (view === 'front') {
    return (
      <g>
        <rect x="20" y="30" width="160" height="100" rx="14" style={body} strokeWidth="1.4" />
        <rect x="20" y="36" width="28" height="94" rx="12" style={sub} strokeWidth="1.2" />
        <circle cx="112" cy="82" r="42" style={{ fill: 'var(--surface-2)', stroke: 'var(--text-3)' }} strokeWidth="1.5" />
        <circle cx="112" cy="82" r="40" style={{ fill: 'none', stroke: 'var(--border-2)' }} strokeWidth="1" />
        <circle cx="112" cy="82" r="26" style={screen} strokeWidth="1.3" />
        <circle cx="112" cy="82" r="12" style={{ fill: 'var(--surface-3)' }} />
        <circle cx="60" cy="38" r="6" style={sub} strokeWidth="1.2" />{/* lens release */}
        <circle cx="150" cy="44" r="3" style={knob} strokeWidth="1" />{/* AF lamp */}
      </g>
    )
  }

  // ports (left side)
  return (
    <g>
      <rect x="40" y="22" width="120" height="106" rx="14" style={body} strokeWidth="1.4" />
      <rect x="54" y="34" width="92" height="82" rx="8" style={screen} strokeWidth="1.2" opacity="0.6" />
      <rect x="80" y="45" width="20" height="10" rx="2.5" style={recess} strokeWidth="1.2" />
      <rect x="80" y="72" width="20" height="10" rx="2.5" style={recess} strokeWidth="1.2" />
      <rect x="80" y="99" width="20" height="10" rx="2.5" style={recess} strokeWidth="1.2" />
      <rect x="136" y="54" width="30" height="40" rx="4" style={sub} strokeWidth="1.3" />
    </g>
  )
}
