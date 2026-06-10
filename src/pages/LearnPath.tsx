import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Pill, ProgressRing } from '../components/ui'
import { useApp } from '../context/AppContext'
import { guideChapters, guideGroups, chapterMinutes, flightReading, guideChapterById } from '../data/guide'
import type { GuideChapter } from '../data/types'

function ChapterRow({ c, read, onClick, n }: { c: GuideChapter; read: boolean; onClick: () => void; n?: number }) {
  return (
    <button onClick={onClick} className="tap lrow" style={{ width: '100%', textAlign: 'left', gap: 11 }}>
      <span
        style={{ width: 22, height: 22, borderRadius: 22, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: read ? 'var(--good)' : 'transparent', border: '1.5px solid ' + (read ? 'var(--good)' : 'var(--border-2)'), color: read ? 'var(--bg)' : 'var(--text-4)' }}
      >
        {read ? <Icon name="check" size={12} strokeWidth={3} /> : n != null ? <span className="mono" style={{ fontSize: 10, fontWeight: 700 }}>{n}</span> : <Icon name="book" size={11} />}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span className="h3" style={{ display: 'block', fontSize: 14, color: read ? 'var(--text-3)' : 'var(--text)' }}>{c.title}</span>
        <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.summary}</span>
      </span>
      <span className="mono" style={{ fontSize: 10, color: 'var(--text-4)', flexShrink: 0 }}>{chapterMinutes(c)} min</span>
    </button>
  )
}

export default function LearnPath() {
  const navigate = useNavigate()
  const { readChapters, isRead } = useApp()
  const [tab, setTab] = useState<'course' | 'flight'>('course')

  const total = guideChapters.length
  const readCount = guideChapters.filter((c) => readChapters.includes(c.id)).length
  const firstUnread = guideChapters.find((c) => !readChapters.includes(c.id))
  const open = (id: string) => navigate(`/learn/guide/${id}`)

  const flightChapters = flightReading.map((id) => guideChapterById(id)).filter(Boolean) as GuideChapter[]
  const flightMins = flightChapters.reduce((s, c) => s + chapterMinutes(c), 0)
  const flightRead = flightChapters.filter((c) => isRead(c.id)).length

  return (
    <div className="screen anim-fwd">
      <BackBar to="/learn" label="Learn" />
      <div style={{ marginBottom: 16 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Learn Path</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Learn it, step by step</h1>
        <p className="body" style={{ marginTop: 7 }}>A guided run through everything, in order, with your progress saved. Perfect for the plane.</p>
      </div>

      {/* continue / progress */}
      <button
        onClick={() => open(firstUnread ? firstUnread.id : guideChapters[0].id)}
        className="tap"
        style={{ width: '100%', textAlign: 'left', marginBottom: 18, padding: 15, borderRadius: 18, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}
      >
        <div className="row" style={{ gap: 14 }}>
          <ProgressRing value={readCount} total={total} size={50} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent-text)' }}>{firstUnread ? 'Continue' : 'All read · revise'}</div>
            <div className="h3" style={{ marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{firstUnread ? firstUnread.title : 'Start from the top'}</div>
            <div className="small" style={{ color: 'var(--text-2)', marginTop: 2 }}>{readCount} of {total} chapters read</div>
          </div>
          <Icon name="chevronRight" size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
        </div>
      </button>

      {/* tabs */}
      <div className="seg" style={{ marginBottom: 18 }}>
        <button className={tab === 'course' ? 'on' : ''} onClick={() => setTab('course')}>Full course</button>
        <button className={tab === 'flight' ? 'on' : ''} onClick={() => setTab('flight')}>Flight reading</button>
      </div>

      {tab === 'course' ? (
        <div className="stack" style={{ '--g': '20px' } as React.CSSProperties}>
          {guideGroups.map((group, gi) => {
            const list = guideChapters.filter((c) => c.group === group)
            if (!list.length) return null
            const r = list.filter((c) => isRead(c.id)).length
            return (
              <section key={group}>
                <div className="row between" style={{ marginBottom: 10 }}>
                  <span className="row" style={{ gap: 9 }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--text-4)' }}>{String(gi + 1).padStart(2, '0')}</span>
                    <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{group}</span>
                  </span>
                  <Pill tone={r === list.length ? 'good' : undefined}>{r}/{list.length}</Pill>
                </div>
                <div className="card flush">
                  {list.map((c, i) => (
                    <div key={c.id} style={{ borderTop: i ? '1px solid var(--border)' : 'none' }}>
                      <ChapterRow c={c} read={isRead(c.id)} onClick={() => open(c.id)} />
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      ) : (
        <div>
          <div className="card" style={{ marginBottom: 14 }}>
            <div className="row between">
              <div>
                <div className="data" style={{ fontSize: 19, fontWeight: 700 }}>~{flightMins} min</div>
                <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 2 }}>{flightChapters.length} chapters · {flightRead} read</div>
              </div>
              <span style={{ color: 'var(--accent)' }}><Icon name="plane" size={22} /></span>
            </div>
            <div className="bar" style={{ marginTop: 12 }}><span style={{ width: `${(flightRead / flightChapters.length) * 100}%` }} /></div>
            <p className="tiny" style={{ marginTop: 10, color: 'var(--text-3)' }}>The essentials for street and night photography, in the best order to learn them. Tick them off on the flight over.</p>
          </div>
          <div className="card flush">
            {flightChapters.map((c, i) => (
              <div key={c.id} style={{ borderTop: i ? '1px solid var(--border)' : 'none' }}>
                <ChapterRow c={c} read={isRead(c.id)} onClick={() => open(c.id)} n={i + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
