import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHead, Note, Pill, ProgressRing, NumberStep } from '../components/ui'
import ButtonsDiagram from '../components/ButtonsDiagram'
import ButtonsCheatCard from '../components/ButtonsCheatCard'
import ButtonsDrill from '../components/ButtonsDrill'
import { useApp } from '../context/AppContext'
import {
  controls, controlGroups, functions, functionById, controlById,
  essentialFunctionIds, recommendedFor, photoSetup, photoFnTiles,
  duplicateFunctions, scoreLayout, setupWalkthrough, setupStepsFor, buttonWhy, leftAtDefault,
  type ButtonControl, type Reach, type WalkStep,
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

const fnLabel = (id: string | undefined) => (!id ? 'Not set' : functionById(id)?.label ?? id)

type ViewMode = 'list' | 'map' | 'card'

export default function MyButtons() {
  const navigate = useNavigate()
  const { activeLayout, setButton, setButtons, resetLayout, toggleDone, lens } = useApp()

  const map = activeLayout.map
  const done = activeLayout.done
  const hasLensBtn = !!lens.hasFnButton

  const [openControl, setOpenControl] = useState<string | null>(null)
  const [fnOpen, setFnOpen] = useState(false)
  const [confirmApply, setConfirmApply] = useState(false)
  const [mode, setMode] = useState<ViewMode>('list')
  const [drill, setDrill] = useState(false)
  const [guideOpen, setGuideOpen] = useState(false)

  const analysis = useMemo(() => {
    const onInstant = (fnId: string) => controls.some((c) => c.reach === 'instant' && map[c.id] === fnId)
    const onAny = (fnId: string) => controls.some((c) => map[c.id] === fnId)

    const setCount = controls.filter((c) => map[c.id]).length
    const instantCount = controls.filter((c) => map[c.id] && c.reach === 'instant').length
    const fnCount = controls.filter((c) => map[c.id] && c.group === 'fn').length
    const doneCount = done.filter((id) => map[id]).length

    const gaps = essentialFunctionIds
      .filter((fnId) => !onInstant(fnId))
      .map((fnId) => {
        const suggestCtrl =
          controls.find((c) => c.reach === 'instant' && recommendedFor(c.id) === fnId && !map[c.id]) ??
          controls.find((c) => c.reach === 'instant' && !map[c.id] && c.takes === 'button')
        return { fnId, onAny: onAny(fnId), suggestCtrl: suggestCtrl?.id }
      })

    const dupes = duplicateFunctions(map)

    const placed = new Set(Object.values(map))
    const waste = controls
      .filter((c) => c.reach === 'instant' && c.recommendable && !leftAtDefault.has(c.id) && c.id !== 'lens-fn' && !map[c.id])
      .map((c) => ({ controlId: c.id, rec: recommendedFor(c.id) }))
      .filter((w) => w.rec && w.rec !== 'not-set' && !placed.has(w.rec))
      .slice(0, 3)

    return { setCount, instantCount, fnCount, doneCount, gaps, dupes, waste, score: scoreLayout(map) }
  }, [map, done])

  const applySuggested = () => {
    const next: Record<string, string> = {}
    Object.entries(photoSetup).forEach(([cid, fid]) => {
      if (cid === 'lens-fn' && !hasLensBtn) return // no lens button on the kit lens
      if (fid && fid !== 'not-set') next[cid] = fid
    })
    photoFnTiles.forEach((fid, i) => { if (fid && fid !== 'not-set') next[`fn-${i + 1}`] = fid })
    setButtons(next)
    setConfirmApply(false)
    setFnOpen(true)
  }

  return (
    <div className="screen anim-tab">
      <PageHead eyebrow="My Buttons" title="Your one photography setup" sub="Built around fast focus: the camera finds the subject and you tap the screen to pick or switch. A few buttons cover the rest. Set it once, then it is the same every time." />

      {/* how focus works note */}
      <Note tone="plain" icon="info" title="How focus works">
        <ul className="stack" style={{ '--g': '5px', listStyle: 'none', marginTop: 6 } as React.CSSProperties}>
          <li>The camera finds the subject for you (Wide area, face and eye detection). <b>Tap anyone on the screen</b> to lock and follow them, tap someone else to switch.</li>
          <li>Your buttons only cover what tapping cannot: thumb-focus, clear a lock, get precise, and grab extra reach.</li>
          <li>Drive and White Balance live in the Fn menu. Your two main dials are left alone so they work in any mode.</li>
        </ul>
      </Note>

      {/* full walkthrough */}
      <div className="card flush" style={{ margin: '14px 0' }}>
        <button onClick={() => setGuideOpen((o) => !o)} className="row between" style={{ width: '100%', padding: 15, textAlign: 'left', gap: 10 }}>
          <span className="row" style={{ gap: 10, minWidth: 0 }}>
            <span className="ico-badge"><Icon name="sliders" size={18} /></span>
            <span style={{ minWidth: 0 }}>
              <span className="h3" style={{ display: 'block' }}>Set up all my buttons</span>
              <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 1 }}>Step by step, in order, start to finish</span>
            </span>
          </span>
          <span style={{ color: 'var(--text-3)', flexShrink: 0, transform: guideOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={18} /></span>
        </button>
        {guideOpen && (
          <div style={{ padding: '0 15px 15px', borderTop: '1px solid var(--border)' }}>
            <div className="stack" style={{ '--g': '16px', marginTop: 14 } as React.CSSProperties}>
              {setupWalkthrough.filter((w) => w.id !== 'lens-fn' || hasLensBtn).map((w, i) => <WalkRow key={w.id} w={w} n={i + 1} />)}
            </div>
            <button onClick={() => navigate('/learn/how-to?open=custom-buttons')} className="tap row" style={{ gap: 6, marginTop: 16, color: 'var(--accent-text)', fontSize: 12, fontWeight: 600 }}>
              <Icon name="sliders" size={13} /> More on the custom-key menu <Icon name="chevronRight" size={12} />
            </button>
          </div>
        )}
      </div>

      {/* summary */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="row between">
          <div className="row" style={{ gap: 18 }}>
            <Stat n={analysis.score.outOf10} label="score /10" />
            <Stat n={analysis.instantCount} label="instant" />
            <Stat n={analysis.fnCount} label="Fn tiles" />
          </div>
          {analysis.setCount > 0 && (
            <div className="row" style={{ gap: 9, alignItems: 'center' }}>
              <ProgressRing value={analysis.doneCount} total={analysis.setCount} size={42} />
              <span className="tiny" style={{ color: 'var(--text-3)', maxWidth: 70 }}>set on camera</span>
            </div>
          )}
        </div>
        <p className="tiny" style={{ marginTop: 11, color: 'var(--text-3)' }}>{analysis.score.reasons[0]}</p>
      </div>

      {/* warnings */}
      {analysis.gaps.length > 0 && (
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
                      <button className="tap pill accent-pill" style={{ flexShrink: 0 }} onClick={() => setButton(g.suggestCtrl!, g.fnId)}>Set</button>
                    )}
                  </div>
                )
              })}
            </div>
          </Note>
        </div>
      )}
      {analysis.dupes.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <Note tone="plain" icon="info" title="Same job on more than one control">
            <div className="stack" style={{ '--g': '4px', marginTop: 5 } as React.CSSProperties}>
              {analysis.dupes.map((d) => (
                <span key={d.fnId} className="small" style={{ color: 'var(--text-2)' }}>
                  <b style={{ color: 'var(--text)' }}>{fnLabel(d.fnId)}</b> is on {d.controlIds.map((id) => controlById(id)?.label).join(', ')}. Fine if deliberate, or free one up.
                </span>
              ))}
            </div>
          </Note>
        </div>
      )}
      {analysis.gaps.length === 0 && analysis.waste.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <Note tone="plain" icon="sparkle" title="Spare fast buttons going unused">
            <div className="stack" style={{ '--g': '6px', marginTop: 5 } as React.CSSProperties}>
              {analysis.waste.map((w) => (
                <div key={w.controlId} className="row between" style={{ gap: 8 }}>
                  <span className="small" style={{ color: 'var(--text-2)' }}><b style={{ color: 'var(--text)' }}>{controlById(w.controlId)?.label}</b> is empty. Try <b style={{ color: 'var(--accent-text)' }}>{fnLabel(w.rec)}</b>.</span>
                  <button className="tap pill accent-pill" style={{ flexShrink: 0 }} onClick={() => setButton(w.controlId, w.rec!)}>Set</button>
                </div>
              ))}
            </div>
          </Note>
        </div>
      )}

      {/* apply + practice */}
      <div className="row" style={{ gap: 9, marginBottom: 18 }}>
        <button
          onClick={() => (confirmApply ? applySuggested() : setConfirmApply(true))}
          onBlur={() => setConfirmApply(false)}
          className="btn-accent"
          style={{ flex: 1, fontSize: 13 }}
        >
          <Icon name="sparkle" size={16} style={{ flexShrink: 0 }} />
          {confirmApply ? 'Tap again to fill it all in' : 'Use this setup'}
        </button>
        <button onClick={() => setDrill(true)} className="tap" style={{ padding: 13, borderRadius: 14, background: 'var(--surface-3)', border: '1px solid var(--border)' }}>
          <span className="row" style={{ gap: 8 }}><Icon name="rocket" size={16} style={{ color: 'var(--accent)' }} /><span className="h3" style={{ fontSize: 13 }}>Practice</span></span>
        </button>
      </div>

      {/* view toggle */}
      <div className="seg" style={{ marginBottom: 18 }}>
        {(['list', 'map', 'card'] as const).map((m) => (
          <button key={m} className={mode === m ? 'on' : ''} onClick={() => setMode(m)} style={{ textTransform: 'capitalize' }}>{m === 'card' ? 'Cheat card' : m}</button>
        ))}
      </div>

      {mode === 'map' && (
        <ButtonsDiagram map={map} done={done} onPick={(cid, fid) => setButton(cid, fid)} />
      )}

      {mode === 'card' && (
        <div className="card"><ButtonsCheatCard map={map} /></div>
      )}

      {mode === 'list' && (
        <div className="stack" style={{ '--g': '22px' } as React.CSSProperties}>
          {controlGroups.map((grp) => {
            if (grp.id === 'lens' && !hasLensBtn) return null // kit lens has no function button
            const list = controls.filter((c) => c.group === grp.id)
            const isFn = grp.id === 'fn'
            const grpLabel = grp.id === 'lens' ? `Lens button · ${lens.shortName} ${lens.tag}` : grp.label
            return (
              <section key={grp.id}>
                <button
                  onClick={() => isFn && setFnOpen((o) => !o)}
                  className="row between"
                  style={{ width: '100%', marginBottom: 11, cursor: isFn ? 'pointer' : 'default' }}
                >
                  <span className="row" style={{ gap: 8 }}>
                    <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{grpLabel}</span>
                    {isFn && <Pill>{list.filter((c) => map[c.id]).length}/12 set</Pill>}
                  </span>
                  {isFn && <span style={{ color: 'var(--text-3)', transform: fnOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={16} /></span>}
                </button>
                {(!isFn || fnOpen) && (
                  <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
                    {list.map((c) => (
                      <ControlRow
                        key={c.id}
                        control={c}
                        current={map[c.id]}
                        suggested={recommendedFor(c.id)}
                        done={done.includes(c.id)}
                        open={openControl === c.id}
                        onToggle={() => setOpenControl(openControl === c.id ? null : c.id)}
                        onToggleDone={() => toggleDone(c.id)}
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
      )}

      {analysis.setCount > 0 && (
        <button onClick={() => { if (window.confirm('Clear every button back to empty?')) resetLayout() }} className="tap row" style={{ gap: 7, margin: '24px auto 0', color: 'var(--text-3)', fontSize: 12 }}>
          <Icon name="rotate" size={13} /> Clear it all
        </button>
      )}

      {drill && <ButtonsDrill map={map} onClose={() => setDrill(false)} />}
    </div>
  )
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <div className="data tnum" style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>{n}</div>
      <div className="mono" style={{ fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 2 }}>{label}</div>
    </div>
  )
}

// One step in the full walkthrough.
function WalkRow({ w, n }: { w: WalkStep; n: number }) {
  return (
    <div>
      <div className="row between" style={{ gap: 8, marginBottom: 7 }}>
        <span className="row" style={{ gap: 9, minWidth: 0 }}>
          <span className="data" style={{ fontSize: 12, color: 'var(--accent-text)', flexShrink: 0 }}>{n}</span>
          <span className="h3" style={{ fontSize: 14 }}>{w.label}</span>
        </span>
        {w.target && <Pill tone={w.target === 'Leave at default' ? 'line' : 'accent'} style={{ flexShrink: 0 }}>{w.target}</Pill>}
      </div>
      <ol className="stack" style={{ '--g': '7px', listStyle: 'none', paddingLeft: 21 } as React.CSSProperties}>
        {w.steps.map((s, i) => (
          <li key={i} className="small" style={{ color: 'var(--text-2)', display: 'flex', gap: 8 }}>
            <span style={{ width: 4, height: 4, borderRadius: 5, background: 'var(--text-4)', marginTop: 7, flexShrink: 0 }} />
            <span style={{ flex: 1 }}>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ControlRow({
  control, current, suggested, done, open, onToggle, onToggleDone, onPick, onHelp,
}: {
  control: ButtonControl
  current?: string
  suggested?: string
  done: boolean
  open: boolean
  onToggle: () => void
  onToggleDone: () => void
  onPick: (fnId: string) => void
  onHelp: () => void
}) {
  const isDefault = leftAtDefault.has(control.id)
  const matches = current && suggested && current === suggested
  const picks = functions.filter((f) => f.id === 'not-set' || f.fits === 'both' || f.fits === control.takes)
  const dot = isDefault ? 'var(--text-4)' : !current ? 'var(--text-4)' : matches ? 'var(--good)' : 'var(--accent)'
  const why = buttonWhy[control.id]
  const steps = setupStepsFor(control.id)

  return (
    <div className="card flush" style={{ scrollMarginTop: 14 }}>
      <div className="row" style={{ gap: 10, padding: 13, alignItems: 'center' }}>
        <span style={{ width: 8, height: 8, borderRadius: 8, background: dot, flexShrink: 0 }} />
        <button onClick={onToggle} className="row between" style={{ flex: 1, minWidth: 0, textAlign: 'left', gap: 8, alignItems: 'center' }}>
          <span style={{ minWidth: 0 }}>
            <span className="row" style={{ gap: 7, flexWrap: 'wrap' }}>
              <span className="h3" style={{ fontSize: 14 }}>{control.label}</span>
              <ReachBadge reach={control.reach} />
            </span>
            <span className="small" style={{ display: 'block', color: current ? 'var(--text-2)' : 'var(--text-4)', marginTop: 2 }}>
              {isDefault ? 'Leave at default (per mode)' : current ? `Set to: ${fnLabel(current)}` : 'Not set'}
              {!isDefault && !matches && suggested && suggested !== 'not-set' && <span style={{ color: 'var(--accent-text)' }}> · suggest {fnLabel(suggested)}</span>}
            </span>
          </span>
          <span style={{ color: 'var(--text-3)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={16} /></span>
        </button>
        {current && !isDefault && (
          <button onClick={onToggleDone} className={`tap cbox ${done ? 'on' : ''}`} aria-label="Set on camera" title="Tick once you've set it on the camera" style={{ flexShrink: 0 }}>
            <Icon name="check" size={13} strokeWidth={3} />
          </button>
        )}
      </div>

      {open && (
        <div style={{ padding: '0 14px 14px', borderTop: '1px solid var(--border)' }}>
          {why && (
            <p className="small" style={{ color: 'var(--text-2)', margin: '12px 0' }}>
              <Icon name="bulb" size={13} style={{ color: 'var(--accent)', marginRight: 5, verticalAlign: '-2px' }} />
              {why}
            </p>
          )}

          {!isDefault && suggested && suggested !== 'not-set' && (
            <div className="row between" style={{ gap: 8, marginBottom: 12, padding: '9px 11px', borderRadius: 11, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}>
              <span className="small" style={{ color: 'var(--text-2)' }}>
                I suggest <b style={{ color: 'var(--accent-text)' }}>{fnLabel(suggested)}</b>.
              </span>
              {!matches && <button className="tap pill accent-pill" style={{ flexShrink: 0 }} onClick={() => onPick(suggested)}>Use</button>}
              {matches && <Pill tone="good" style={{ flexShrink: 0 }}><Icon name="check" size={10} strokeWidth={3} /> Matched</Pill>}
            </div>
          )}

          {/* exact steps for this one control */}
          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 9 }}>{isDefault ? 'On the camera' : 'How to set this'}</div>
          <ol className="stack" style={{ '--g': '9px', listStyle: 'none' } as React.CSSProperties}>
            {steps.map((s, i) => isDefault ? (
              <li key={i} className="small" style={{ color: 'var(--text-2)' }}>{s}</li>
            ) : (
              <NumberStep key={i} n={i + 1}>{s}</NumberStep>
            ))}
          </ol>

          {!isDefault && (
            <>
              <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase', margin: '14px 0 9px' }}>Or set this control to</div>
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
            </>
          )}

          <button onClick={onHelp} className="tap row" style={{ gap: 6, marginTop: 12, color: 'var(--accent-text)', fontSize: 12, fontWeight: 600 }}>
            <Icon name="sliders" size={13} /> Full custom-key guide <Icon name="chevronRight" size={12} />
          </button>
        </div>
      )}
    </div>
  )
}
