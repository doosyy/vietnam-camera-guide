import type { CSSProperties, ReactNode } from 'react'
import Icon from './Icon'
import { useApp } from '../context/AppContext'
import { lenses } from '../data/lenses'
import type { LensId } from '../data/types'

export function Corners() {
  return (
    <>
      <span className="c tl" /><span className="c tr" />
      <span className="c bl" /><span className="c br" />
    </>
  )
}

export function Eyebrow({
  children,
  dot = true,
  style,
}: {
  children: ReactNode
  dot?: boolean
  style?: CSSProperties
}) {
  return (
    <div className="eyebrow" style={style}>
      {dot && <span className="dot" />}
      {children}
    </div>
  )
}

export function Pill({
  children,
  tone,
  className = '',
  style,
}: {
  children: ReactNode
  tone?: 'accent' | 'good' | 'line'
  className?: string
  style?: CSSProperties
}) {
  const cls = tone === 'accent' ? 'accent-pill' : tone === 'good' ? 'good-pill' : tone === 'line' ? 'line' : ''
  return <span className={`pill ${cls} ${className}`} style={style}>{children}</span>
}

export function Note({
  tone = 'amber',
  icon,
  children,
  title,
}: {
  tone?: 'amber' | 'good' | 'plain'
  icon?: string
  children: ReactNode
  title?: string
}) {
  const color = tone === 'good' ? 'var(--good)' : tone === 'plain' ? 'var(--text-3)' : 'var(--accent)'
  return (
    <div className={`note ${tone}`}>
      {icon && <span className="ic" style={{ color }}><Icon name={icon} size={17} /></span>}
      <div style={{ minWidth: 0 }}>
        {title && <div className="h3" style={{ marginBottom: 3 }}>{title}</div>}
        <div className="small" style={{ color: 'var(--text-2)' }}>{children}</div>
      </div>
    </div>
  )
}

export function SectionTitle({
  icon,
  children,
  right,
}: {
  icon?: string
  children: ReactNode
  right?: ReactNode
}) {
  return (
    <div className="between" style={{ marginBottom: 11 }}>
      <div className="row" style={{ gap: 8 }}>
        {icon && <span style={{ color: 'var(--accent)' }}><Icon name={icon} size={15} /></span>}
        <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{children}</span>
      </div>
      {right}
    </div>
  )
}

export function NumberStep({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="row" style={{ gap: 11, alignItems: 'flex-start' }}>
      <span className="stepnum" style={{ marginTop: 1 }}>{n}</span>
      <span className="body" style={{ color: 'var(--text-2)', flex: 1 }}>{children}</span>
    </li>
  )
}

export function ProgressRing({
  value,
  total,
  size = 54,
  stroke = 5,
}: {
  value: number
  total: number
  size?: number
  stroke?: number
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = total ? value / total : 0
  const off = c * (1 - pct)
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          style={{ transition: 'stroke-dashoffset .7s var(--ease)' }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="data tnum" style={{ fontSize: size > 46 ? 13 : 11, fontWeight: 700 }}>
          {value}<span style={{ color: 'var(--text-3)' }}>/{total}</span>
        </span>
      </div>
    </div>
  )
}

export function ExposureStrip({
  aperture,
  shutter,
  iso,
  capped,
}: {
  aperture: string
  shutter: string
  iso: string
  capped?: boolean
}) {
  return (
    <div className="vf card" style={{ padding: '18px 12px 16px', background: 'var(--bg-2)' }}>
      <Corners />
      <div className="expo">
        <div className="cell"><div className={`v ${capped ? 'hl' : ''}`}>{aperture}</div><div className="k">Aperture</div></div>
        <div className="cell"><div className="v">{shutter}</div><div className="k">Shutter</div></div>
        <div className="cell"><div className="v">{iso}</div><div className="k">ISO</div></div>
      </div>
    </div>
  )
}

export function LensSelector({ note = true }: { note?: boolean }) {
  const { lensId, setLens } = useApp()
  return (
    <div className="card">
      <div className="between" style={{ marginBottom: 11 }}>
        <Eyebrow style={{ color: 'var(--text-2)' }}>Lens on camera</Eyebrow>
        <span style={{ color: 'var(--accent)' }}><Icon name="lens" size={15} /></span>
      </div>
      <div className="grid3">
        {lenses.map((l) => {
          const on = l.id === lensId
          return (
            <button
              key={l.id}
              onClick={() => setLens(l.id as LensId)}
              className="tap"
              style={{
                textAlign: 'left',
                padding: '10px 11px',
                borderRadius: 12,
                border: '1px solid ' + (on ? 'var(--accent-line)' : 'var(--border)'),
                background: on ? 'var(--accent-soft)' : 'var(--surface-2)',
                position: 'relative',
              }}
            >
              <div className="row between" style={{ marginBottom: 3 }}>
                <span className="data" style={{ fontSize: 13, color: on ? 'var(--accent-text)' : 'var(--text)' }}>{l.shortName}</span>
                {on && <span style={{ color: 'var(--accent)' }}><Icon name="check" size={13} strokeWidth={2.6} /></span>}
              </div>
              <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em', color: 'var(--text-3)', textTransform: 'uppercase' }}>
                {l.owned ? 'Owned' : 'May buy'} · {l.tag}
              </span>
            </button>
          )
        })}
      </div>
      {note && <p className="tiny" style={{ marginTop: 10 }}>Settings &amp; tips adapt to this lens. Switch to preview how a new lens changes your shooting.</p>}
    </div>
  )
}

export function NavRow({
  icon,
  iconMuted,
  title,
  sub,
  onClick,
  right,
  accent,
}: {
  icon?: string
  iconMuted?: boolean
  title: string
  sub?: string
  onClick: () => void
  right?: ReactNode
  accent?: boolean
}) {
  return (
    <button onClick={onClick} className="tap lrow" style={{ width: '100%', textAlign: 'left' }}>
      {icon && <span className={`ico-badge ${iconMuted ? 'muted' : ''}`}><Icon name={icon} size={19} /></span>}
      <span style={{ flex: 1, minWidth: 0 }}>
        <span className="h3" style={{ display: 'block', color: accent ? 'var(--accent-text)' : 'var(--text)' }}>{title}</span>
        {sub && <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</span>}
      </span>
      {right || <span style={{ color: 'var(--text-3)' }}><Icon name="chevronRight" size={17} /></span>}
    </button>
  )
}

export function BackBar({ onBack, label = 'Back' }: { onBack: () => void; label?: string }) {
  return (
    <button
      onClick={onBack}
      className="tap row"
      style={{ gap: 4, color: 'var(--text-2)', marginBottom: 14, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
    >
      <Icon name="chevronLeft" size={15} /> {label}
    </button>
  )
}

export function PageHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: ReactNode
  title: ReactNode
  sub?: ReactNode
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      {eyebrow && <Eyebrow style={{ marginBottom: 9 }}>{eyebrow}</Eyebrow>}
      <h1 className="display">{title}</h1>
      {sub && <p className="body" style={{ marginTop: 9, color: 'var(--text-2)' }}>{sub}</p>}
    </div>
  )
}
