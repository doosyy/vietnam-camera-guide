import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Note, Pill } from '../components/ui'
import { useApp } from '../context/AppContext'
import {
  controls, controlGroups, functions, functionById, controlById,
  essentialFunctionIds, goals, recommendedFor, fnRecommendedFor, recommendations,
  type ButtonControl, type Reach,
} from '../data/buttons'

const reachMeta: Record<Reach, { label: string; tone: 'good' | 'accent' | 'line' }> = {
  instant: { label: 'Instant', tone: 'good' },
  'two-step': { label: 'Fn → tile', tone: 'accent' },
  awkward: { label: 'Reachable', tone: 'line' },
}

function ReachBadge({ reach }: { reach: Reach }) {
  const m = reachMeta[reach]
  return <Pill tone={m.tone} style={{ flexShrink: 0 }}>{m.label}</Pill>
}

function fnLabel(id: string | undefined): string {
  if (!id) return 'Not set'
  return functionById(id)?.label ?? id
}

export default function MyButtons() {
  const navigate = useNavigate()
  const { buttons, setButton, setButtons, resetButtons, buttonGoal, setButtonGoal } = useApp()
  const [openControl, setOpenControl] = useState<string | null>(null)
  const [fnOpen, setFnOpen] = useState(false)
  const [confirmApply, setConfirmApply] = useState(false)

  const goal = buttonGoal

  // Which jobs are reachable, and how fast.
  const analysis = useMemo(() => {
    const assignedFastByFn = new Map<string, ButtonControl[]>() // fnId -> controls (instant) holding it
    const assignedAnyByFn = new Map<string, ButtonControl[]>()
    controls.forEach((c) => {
      const fn = buttons[c.id]
      if (!fn) return
      const any = assignedAnyByFn.get(fn) ?? []
      any.push(c); assignedAnyByFn.set(fn, any)
      if (c.reach === 'instant') {
        const fast = assignedFastByFn.get(fn) ?? []
        fast.push(c); assignedFastByFn.set(fn, fast)
      }
    })

    const setCount = controls.filter((c) => buttons[c.id]).length
    const instantCount = controls.filter((c) => buttons[c.id] && c.reach === 'instant').length
    const fnCount = controls.filter((c) => buttons[c.id] && c.group === 'fn').length

    // Gaps: essential jobs that are not on any instant control.
    const gaps = essentialFunctionIds
      .map((fnId) => {
        const onInstant = assignedFastByFn.has(fnId)
        const onAny = assignedAnyByFn.has(fnId)
        if (onInstant) return null
        // suggest the control the current goal recommends for this job, if it is free
        const suggestCtrl = controls.find(
          (c) => c.reach === 'instant' && recommendedFor(goal, c.id) === fnId && !buttons[c.id]
        ) ?? controls.find((c) => c.reach === 'instant' && !buttons[c.id] && c.takes === 'button')
        return { fnId, onAny, suggestCtrl: suggestCtrl?.id }
      })
      .filter(Boolean) as { fnId: string; onAny: boolean; suggestCtrl?: string }[]

    return { setCount, instantCount, fnCount, gaps }
  }, [buttons, goal])

  const applySuggested = () => {
    const map: Record<string, string> = {}
    Object.entries(recommendations[goal]).forEach(([cid, fid]) => { if (fid && fid !== 'not-set') map[cid] = fid })
    fnRecommendedFor(goal).forEach((fid, i) => { if (fid && fid !== 'not-set') map[`fn-${i + 1}`] = fid })
    setButtons(map)
    setConfirmApply(false)
    setFnOpen(true)
  }

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 16 }}>
        <Eyebrow style={{ marginBottom: 9 }}>My Buttons</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Your custom controls</h1>
        <p className="body" style={{ marginTop: 7 }}>Record what each button is set to. I will rate how fast each one is and suggest the best setup for your trip.</p>
      </div>

      {/* goal switch */}
      <p className="small" style={{ color: 'var(--text-2)', marginBottom: 8, fontWeight: 600 }}>Tune the suggestions for:</p>
      <div className="row" style={{ gap: 7, flexWrap: 'wrap', marginBottom: 16 }}>
        {goals.map((g) => (
          <button
            key={g.id}
            onClick={() => setButtonGoal(g.id)}
            className="tap pill"
            style={{ background: g.id === goal ? 'var(--accent-soft)' : 'var(--surface-3)', color: g.id === goal ? 'var(--accent-text)' : 'var(--text-2)', border: '1px solid ' + (g.id === goal ? 'var(--accent-line)' : 'var(--border)') }}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* summary */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="row" style={{ gap: 18 }}>
          <Stat n={analysis.instantCount} label="instant" />
          <Stat n={analysis.fnCount} label="Fn tiles" />
          <Stat n={analysis.gaps.length} label="quick gaps" warn={analysis.gaps.length > 0} />
        </div>
        <p className="tiny" style={{ marginTop: 11, color: 'var(--text-3)' }}>
          Instant controls (thumb buttons, wheel, dials) are your fastest, used by feel with your eye on the scene. Fn tiles take one extra press.
        </p>
      </div>

      {/* gaps / tips */}
      {analysis.gaps.length > 0 ? (
        <div style={{ marginBottom: 12 }}>
          <Note tone="amber" icon="alert" title={`${analysis.gaps.length} key ${analysis.gaps.length === 1 ? 'job is' : 'jobs are'} not on a fast button`}>
            <div className="stack" style={{ '--g': '7px', marginTop: 6 } as React.CSSProperties}>
              {analysis.gaps.map((g) => {
                const sc = g.suggestCtrl ? controlById(g.suggestCtrl) : undefined
                return (
                  <div key={g.fnId} className="row between" style={{ gap: 8 }}>
                    <span className="small" style={{ color: 'var(--text-2)' }}>
                      <b style={{ color: 'var(--text)' }}>{fnLabel(g.fnId)}</b>{' '}
                      {g.onAny ? 'is only on a slower control.' : 'is not assigned.'}
                      {sc && <> Put it on <b style={{ color: 'var(--accent-text)' }}>{sc.label}</b>.</>}
                    </span>
                    {g.suggestCtrl && (
                      <button
                        className="tap pill accent-pill"
                        style={{ flexShrink: 0 }}
                        onClick={() => { setButton(g.suggestCtrl!, g.fnId); }}
                      >
                        Set
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </Note>
        </div>
      ) : analysis.setCount > 0 ? (
        <div style={{ marginBottom: 12 }}>
          <Note tone="good" icon="check" title="Every key job is on a fast button">Nicely set up. Eye AF, Focus Area, ISO, Drive, Silent and Exposure Comp. are all within instant reach.</Note>
        </div>
      ) : null}

      {/* apply suggested */}
      <button
        onClick={() => (confirmApply ? applySuggested() : setConfirmApply(true))}
        onBlur={() => setConfirmApply(false)}
        className="tap"
        style={{ width: '100%', textAlign: 'left', marginBottom: 22, padding: 14, borderRadius: 16, background: confirmApply ? 'var(--accent)' : 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}
      >
        <div className="row between">
          <span className="row" style={{ gap: 11, minWidth: 0 }}>
            <Icon name="sparkle" size={18} style={{ color: confirmApply ? 'var(--bg)' : 'var(--accent)', flexShrink: 0 }} />
            <span style={{ minWidth: 0 }}>
              <span className="h3" style={{ display: 'block', color: confirmApply ? 'var(--bg)' : 'var(--accent-text)' }}>
                {confirmApply ? 'Tap again to fill in all buttons' : `Use the suggested ${goals.find((g) => g.id === goal)?.label} setup`}
              </span>
              <span className="small" style={{ display: 'block', color: confirmApply ? 'var(--bg)' : 'var(--text-2)', marginTop: 2 }}>
                {confirmApply ? 'This replaces what you have recorded here.' : 'Records the ideal layout, then go set your camera to match.'}
              </span>
            </span>
          </span>
        </div>
      </button>

      {/* control groups */}
      <div className="stack" style={{ '--g': '22px' } as React.CSSProperties}>
        {controlGroups.map((grp) => {
          const list = controls.filter((c) => c.group === grp.id)
          const isFn = grp.id === 'fn'
          return (
            <section key={grp.id}>
              <button
                onClick={() => isFn && setFnOpen((o) => !o)}
                className="row between"
                style={{ width: '100%', marginBottom: 11, cursor: isFn ? 'pointer' : 'default' }}
              >
                <span className="row" style={{ gap: 8 }}>
                  <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{grp.label}</span>
                  {isFn && <Pill>{list.filter((c) => buttons[c.id]).length}/12 set</Pill>}
                </span>
                {isFn && <span style={{ color: 'var(--text-3)', transform: fnOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={16} /></span>}
              </button>
              {(!isFn || fnOpen) && (
                <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
                  {list.map((c) => (
                    <ControlRow
                      key={c.id}
                      control={c}
                      current={buttons[c.id]}
                      suggested={recommendedFor(goal, c.id)}
                      goalLabel={goals.find((g) => g.id === goal)?.label ?? ''}
                      open={openControl === c.id}
                      onToggle={() => setOpenControl(openControl === c.id ? null : c.id)}
                      onPick={(fid) => { setButton(c.id, fid); setOpenControl(null) }}
                      onHelp={() => navigate('/learn/how-to?open=custom-buttons')}
                    />
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>

      {analysis.setCount > 0 && (
        <button onClick={resetButtons} className="tap row" style={{ gap: 7, margin: '24px auto 0', color: 'var(--text-3)', fontSize: 12 }}>
          <Icon name="rotate" size={13} /> Clear all recorded buttons
        </button>
      )}
    </div>
  )
}

function Stat({ n, label, warn }: { n: number; label: string; warn?: boolean }) {
  return (
    <div>
      <div className="data tnum" style={{ fontSize: 22, fontWeight: 700, color: warn ? 'var(--accent-text)' : 'var(--text)' }}>{n}</div>
      <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 2 }}>{label}</div>
    </div>
  )
}

function ControlRow({
  control, current, suggested, goalLabel, open, onToggle, onPick, onHelp,
}: {
  control: ButtonControl
  current?: string
  suggested?: string
  goalLabel: string
  open: boolean
  onToggle: () => void
  onPick: (fnId: string) => void
  onHelp: () => void
}) {
  const matches = current && suggested && current === suggested
  const picks = functions.filter((f) => f.id === 'not-set' || f.fits === 'both' || f.fits === control.takes)
  // status dot colour
  const dot = !current ? 'var(--text-4)' : matches ? 'var(--good)' : 'var(--accent)'

  return (
    <div className="card flush" style={{ scrollMarginTop: 14 }}>
      <button onClick={onToggle} className="row" style={{ width: '100%', textAlign: 'left', gap: 11, padding: 13, alignItems: 'center' }}>
        <span style={{ width: 8, height: 8, borderRadius: 8, background: dot, flexShrink: 0 }} />
        <span style={{ flex: 1, minWidth: 0 }}>
          <span className="row" style={{ gap: 7, flexWrap: 'wrap' }}>
            <span className="h3" style={{ fontSize: 14 }}>{control.label}</span>
            <ReachBadge reach={control.reach} />
          </span>
          <span className="small" style={{ display: 'block', color: current ? 'var(--text-2)' : 'var(--text-4)', marginTop: 2 }}>
            {current ? `Set to: ${fnLabel(current)}` : 'Not set'}
            {!matches && suggested && suggested !== 'not-set' && <span style={{ color: 'var(--accent-text)' }}> · suggest {fnLabel(suggested)}</span>}
          </span>
        </span>
        <span style={{ color: 'var(--text-3)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={16} /></span>
      </button>

      {open && (
        <div style={{ padding: '0 14px 14px', borderTop: '1px solid var(--border)' }}>
          <p className="small" style={{ color: 'var(--text-2)', margin: '12px 0' }}>
            <Icon name="hand" size={13} style={{ color: 'var(--accent)', marginRight: 5, verticalAlign: '-2px' }} />
            {control.where}
          </p>

          {suggested && suggested !== 'not-set' && (
            <div className="row between" style={{ gap: 8, marginBottom: 12, padding: '9px 11px', borderRadius: 11, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}>
              <span className="small" style={{ color: 'var(--text-2)' }}>
                For <b style={{ color: 'var(--text)' }}>{goalLabel}</b>, I suggest <b style={{ color: 'var(--accent-text)' }}>{fnLabel(suggested)}</b>.
              </span>
              {!matches && <button className="tap pill accent-pill" style={{ flexShrink: 0 }} onClick={() => onPick(suggested)}>Use</button>}
              {matches && <Pill tone="good" style={{ flexShrink: 0 }}><Icon name="check" size={10} strokeWidth={3} /> Matched</Pill>}
            </div>
          )}

          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 9 }}>Set this control to</div>
          <div className="row" style={{ gap: 7, flexWrap: 'wrap' }}>
            {picks.map((f) => {
              const on = (current ?? 'not-set') === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => onPick(f.id)}
                  className="tap pill"
                  style={{ background: on ? 'var(--accent)' : 'var(--surface-3)', color: on ? 'var(--bg)' : 'var(--text-2)', border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border)') }}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          {current && current !== 'not-set' && functionById(current)?.blurb && (
            <p className="tiny" style={{ marginTop: 11, color: 'var(--text-3)' }}>{functionById(current)?.blurb}</p>
          )}

          <button onClick={onHelp} className="tap row" style={{ gap: 6, marginTop: 12, color: 'var(--accent-text)', fontSize: 12, fontWeight: 600 }}>
            <Icon name="sliders" size={13} /> How to assign this on the camera <Icon name="chevronRight" size={12} />
          </button>
        </div>
      )}
    </div>
  )
}
