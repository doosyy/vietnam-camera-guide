import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Note } from '../components/ui'
import RichText from '../components/RichText'
import BookmarkButton from '../components/BookmarkButton'
import { guideChapterById } from '../data/guide'
import type { GuideSection } from '../data/types'

function SectionBody({ sec }: { sec: GuideSection }) {
  return (
    <>
      <div className="stack" style={{ '--g': '10px' } as React.CSSProperties}>
        {sec.body.map((p, i) => <RichText key={i}>{p}</RichText>)}
      </div>
      {sec.tip && <div style={{ marginTop: 13 }}><Note tone="amber" icon="bulb">{sec.tip}</Note></div>}
    </>
  )
}

// Advanced sections start collapsed so the page stays light.
function AdvancedSection({ sec }: { sec: GuideSection }) {
  const [open, setOpen] = useState(false)
  return (
    <section className="card flush" style={{ borderColor: open ? 'var(--accent-line)' : 'var(--border)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="row between"
        style={{ width: '100%', gap: 10, padding: 16, textAlign: 'left' }}
      >
        <span className="row" style={{ gap: 9, minWidth: 0 }}>
          <span style={{ color: 'var(--accent)', flexShrink: 0 }}><Icon name="sliders" size={15} /></span>
          <span style={{ minWidth: 0 }}>
            <span className="mono" style={{ display: 'block', fontSize: 9.5, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Go deeper</span>
            <span className="h3" style={{ display: 'block', marginTop: 2 }}>{sec.heading}</span>
          </span>
        </span>
        <span style={{ color: 'var(--text-3)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}>
          <Icon name="chevronDown" size={18} />
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ paddingTop: 14 }}>
            <SectionBody sec={sec} />
          </div>
        </div>
      )}
    </section>
  )
}

export default function GuideChapterPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const c = id ? guideChapterById(id) : undefined

  if (!c) {
    return (
      <div className="screen">
        <BackBar onBack={() => navigate('/learn')} label="Learn" />
        <p className="body">Chapter not found.</p>
      </div>
    )
  }

  return (
    <div className="screen anim-fwd" key={c.id}>
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 18 }}>
        <div className="row between" style={{ marginBottom: 13 }}>
          <div className="brandmark" style={{ width: 40, height: 40 }}><Icon name={c.icon} size={20} /></div>
          <BookmarkButton bookmark={{ id: `chapter-${c.id}`, kind: 'chapter', title: c.title, route: `/learn/guide/${c.id}` }} />
        </div>
        <h1 className="h1" style={{ fontSize: 25 }}>{c.title}</h1>
        <p className="body" style={{ marginTop: 7 }}>{c.summary}</p>
      </div>
      <div className="stack" style={{ '--g': '14px' } as React.CSSProperties}>
        {c.sections.map((sec) =>
          sec.advanced ? (
            <AdvancedSection key={sec.heading} sec={sec} />
          ) : (
            <section key={sec.heading} className="card">
              <h2 className="h2" style={{ marginBottom: 10 }}>{sec.heading}</h2>
              <SectionBody sec={sec} />
            </section>
          )
        )}
      </div>
    </div>
  )
}
