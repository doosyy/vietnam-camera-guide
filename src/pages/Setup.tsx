import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, SectionTitle, Pill, ProgressRing, NumberStep, SeeAlso } from '../components/ui'
import { useApp } from '../context/AppContext'
import { setupSteps, setupGroups } from '../data/setup'

export default function Setup() {
  const navigate = useNavigate()
  const { setupDone, toggleStep, resetSetup } = useApp()
  const [open, setOpen] = useState<string | null>(null)
  const total = setupSteps.length
  const done = setupDone.length
  const complete = done === total

  return (
    <div className="screen anim-fwd">
      <BackBar to="/trip" label="Trip" />
      <div style={{ marginBottom: 16 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Before You Fly</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Set it up once at home</h1>
        <p className="body" style={{ marginTop: 7 }}>Tick each step as you go, progress is saved on this device.</p>
      </div>

      <div className="card" style={{ marginBottom: 22 }}>
        <div className="row" style={{ gap: 15 }}>
          <ProgressRing value={done} total={total} size={56} />
          <div style={{ flex: 1 }}>
            <div className="row between">
              <span className="h3">{complete ? 'Ready to fly' : `${total - done} steps to go`}</span>
              {complete ? (
                <Pill tone="good"><Icon name="check" size={11} strokeWidth={2.6} /> Done</Pill>
              ) : (
                <button onClick={resetSetup} className="tap pill"><Icon name="rotate" size={11} /> Reset</button>
              )}
            </div>
            <div className="bar" style={{ marginTop: 10 }}><span style={{ width: `${(done / total) * 100}%` }} /></div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/learn/how-to')}
        className="tap row between"
        style={{ width: '100%', textAlign: 'left', gap: 12, marginBottom: 22, padding: 13, borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <span className="row" style={{ gap: 11, minWidth: 0 }}>
          <span style={{ color: 'var(--accent)', flexShrink: 0 }}><Icon name="sliders" size={18} /></span>
          <span className="small" style={{ color: 'var(--text-2)' }}>Lost on a step? Open <b style={{ color: 'var(--text)' }}>How to set anything</b> for the exact buttons and full menu path.</span>
        </span>
        <Icon name="chevronRight" size={16} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
      </button>

      <div className="stack" style={{ '--g': '22px' } as React.CSSProperties}>
        {setupGroups.map((g) => {
          const steps = setupSteps.filter((s) => s.group === g.id)
          return (
            <section key={g.id}>
              <SectionTitle icon={g.icon}>{g.label}</SectionTitle>
              <div className="stack" style={{ '--g': '9px' } as React.CSSProperties}>
                {steps.map((step) => {
                  const isDone = setupDone.includes(step.id)
                  const isOpen = open === step.id
                  return (
                    <div
                      key={step.id}
                      id={step.id}
                      className="card flush"
                      style={{ borderColor: isDone ? 'color-mix(in oklab, var(--good) 34%, transparent)' : 'var(--border)', background: isDone ? 'var(--good-soft)' : 'var(--surface)' }}
                    >
                      <div className="row" style={{ gap: 12, padding: 14 }}>
                        <button onClick={() => toggleStep(step.id)} className={`tap cbox ${isDone ? 'on' : ''}`} aria-label="Toggle done">
                          <Icon name="check" size={15} strokeWidth={3} />
                        </button>
                        <button onClick={() => setOpen(isOpen ? null : step.id)} className="row between" style={{ flex: 1, minWidth: 0, gap: 8, textAlign: 'left' }}>
                          <span style={{ minWidth: 0 }}>
                            <span className="h3" style={{ display: 'block', textDecoration: isDone ? 'line-through' : 'none', color: isDone ? 'var(--text-3)' : 'var(--text)' }}>{step.title}</span>
                            <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{step.why}</span>
                          </span>
                          <span style={{ color: 'var(--text-3)', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={17} /></span>
                        </button>
                      </div>
                      {isOpen && (
                        <ol className="stack" style={{ '--g': '10px', listStyle: 'none', padding: '14px 15px', borderTop: '1px solid var(--border)' } as React.CSSProperties}>
                          {step.steps.map((s, i) => <NumberStep key={i} n={i + 1}>{s}</NumberStep>)}
                        </ol>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      <SeeAlso links={[
        { to: '/learn/how-to', label: 'How to set anything', icon: 'sliders', kind: 'recipe' },
        { to: '/buttons', label: 'My Buttons', icon: 'click', kind: 'tool' },
        { to: '/learn/guide/first-10', label: 'First 10 minutes', icon: 'book', kind: 'chapter' },
      ]} />
    </div>
  )
}
