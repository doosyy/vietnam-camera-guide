import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'
import { controls, functions, functionById, controlById, scoreLayout } from '../data/buttons'

const SKIP = new Set(['not-set', 'custom', 'disp'])
const pickFns = functions.filter((f) => !SKIP.has(f.id))

function shuffle<T>(a: T[]): T[] {
  const r = [...a]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

interface Q { controlId: string; correct: string; options: string[] }

function buildQuestions(map: Record<string, string>): Q[] {
  const pool = controls.filter((c) => map[c.id] && !SKIP.has(map[c.id]))
  const subjects = shuffle(pool).slice(0, Math.min(8, pool.length))
  return subjects.map((c) => {
    const correct = map[c.id]
    const distractors = shuffle(pickFns.filter((f) => f.id !== correct)).slice(0, 3).map((f) => f.id)
    return { controlId: c.id, correct, options: shuffle([correct, ...distractors]) }
  })
}

export default function ButtonsDrill({ map, onClose }: { map: Record<string, string>; onClose: () => void }) {
  const [seed, setSeed] = useState(0)
  // `seed` is intentionally a dependency: bumping it re-rolls the questions on restart.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = useMemo(() => buildQuestions(map), [map, seed])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [start] = useState(() => Date.now())
  const [elapsed, setElapsed] = useState(0)
  const [done, setDone] = useState(false)

  const enough = questions.length >= 3
  const q = questions[idx]

  const answer = (fnId: string) => {
    if (picked) return
    setPicked(fnId)
    const right = fnId === q.correct
    if (right) setScore((s) => s + 1)
    setTimeout(() => {
      if (idx + 1 >= questions.length) {
        setElapsed(Math.round((Date.now() - start) / 1000))
        setDone(true)
      } else {
        setIdx((i) => i + 1)
        setPicked(null)
      }
    }, 750)
  }

  const restart = () => { setSeed((s) => s + 1); setIdx(0); setScore(0); setPicked(null); setDone(false); setElapsed(0) }

  const layoutScore = scoreLayout(map)

  return createPortal(
    <div className="sheet-scrim" onClick={onClose}>
      <div className="sheet" style={{ padding: '10px 18px max(26px, env(safe-area-inset-bottom))' }} onClick={(e) => e.stopPropagation()}>
        <div className="grabber" />
        <div className="row between" style={{ marginBottom: 16, marginTop: 4 }}>
          <span className="h2">Button drill</span>
          <button onClick={onClose} style={{ color: 'var(--text-3)' }}><Icon name="x" size={18} /></button>
        </div>

        {!enough ? (
          <p className="body" style={{ color: 'var(--text-2)' }}>Set at least 3 buttons first, then come back to practise finding them by memory.</p>
        ) : done ? (
          <div style={{ textAlign: 'center', padding: '8px 0 4px' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Result</div>
            <div className="data tnum" style={{ fontSize: 40, fontWeight: 700, margin: '8px 0', color: 'var(--accent-text)' }}>{score}<span style={{ color: 'var(--text-3)', fontSize: 24 }}>/{questions.length}</span></div>
            <p className="small" style={{ color: 'var(--text-2)' }}>in {elapsed}s. {score === questions.length ? 'Perfect recall.' : 'Keep drilling and it becomes muscle memory.'}</p>
            <div className="card" style={{ marginTop: 16, textAlign: 'left' }}>
              <div className="row between">
                <span className="small" style={{ color: 'var(--text-2)' }}>Layout score</span>
                <span className="data" style={{ color: 'var(--accent-text)' }}>{layoutScore.outOf10}/10</span>
              </div>
              <p className="tiny" style={{ marginTop: 6, color: 'var(--text-3)' }}>{layoutScore.reasons[0]}</p>
            </div>
            <div className="row" style={{ gap: 10, marginTop: 18 }}>
              <button onClick={restart} className="tap pill accent-pill" style={{ flex: 1, justifyContent: 'center', padding: 12 }}><Icon name="rotate" size={14} /> Again</button>
              <button onClick={onClose} className="tap pill" style={{ flex: 1, justifyContent: 'center', padding: 12, background: 'var(--surface-3)' }}>Done</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="bar" style={{ marginBottom: 18 }}><span style={{ width: `${(idx / questions.length) * 100}%` }} /></div>
            <p className="small" style={{ color: 'var(--text-3)', textAlign: 'center' }}>Question {idx + 1} of {questions.length}</p>
            <p className="h2" style={{ textAlign: 'center', margin: '10px 0 20px' }}>
              What is <span style={{ color: 'var(--accent-text)' }}>{controlById(q.controlId)?.label}</span> set to?
            </p>
            <div className="stack" style={{ '--g': '9px' } as React.CSSProperties}>
              {q.options.map((fid) => {
                const isPicked = picked === fid
                const isCorrect = fid === q.correct
                const show = picked != null
                const bg = show && isCorrect ? 'var(--good-soft)' : show && isPicked ? 'color-mix(in oklab, var(--accent) 16%, transparent)' : 'var(--surface-2)'
                const bd = show && isCorrect ? 'var(--good)' : show && isPicked && !isCorrect ? 'var(--accent)' : 'var(--border)'
                return (
                  <button
                    key={fid}
                    onClick={() => answer(fid)}
                    className="tap row between"
                    style={{ width: '100%', textAlign: 'left', padding: '13px 15px', borderRadius: 13, background: bg, border: '1px solid ' + bd }}
                  >
                    <span className="h3" style={{ fontSize: 14 }}>{functionById(fid)?.label ?? fid}</span>
                    {show && isCorrect && <Icon name="check" size={15} strokeWidth={2.6} style={{ color: 'var(--good)' }} />}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
