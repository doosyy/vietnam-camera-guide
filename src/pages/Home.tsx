import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { Eyebrow, SectionTitle, LensSelector, ProgressRing } from '../components/ui'
import { useApp } from '../context/AppContext'
import { setupSteps } from '../data/setup'

const quick = [
  { id: 'street-candid', label: 'Street', icon: 'walk' },
  { id: 'food-table', label: 'Food', icon: 'food' },
  { id: 'arch-temple', label: 'Temples', icon: 'temple' },
  { id: 'night-market', label: 'Night', icon: 'moon' },
]

const kindIcon: Record<string, string> = {
  chapter: 'book',
  scene: 'wand',
  menu: 'checklist',
  page: 'compass',
}

export default function Home() {
  const navigate = useNavigate()
  const { setupDone, bookmarks } = useApp()
  const total = setupSteps.length
  const done = setupDone.length
  const complete = done >= total

  return (
    <div className="screen">
      {/* greeting */}
      <div className="fu fu1" style={{ marginTop: 2, paddingTop: 6 }}>
        <Eyebrow>A7C II · Field Guide</Eyebrow>
        <p className="mono" style={{ fontSize: 13, color: 'var(--accent-text)', marginTop: 8, fontWeight: 600 }}>Xin chào, Chris</p>
      </div>

      {/* what shooting */}
      <div className="fu fu3" style={{ marginTop: 14 }}>
        <SectionTitle>What are you shooting?</SectionTitle>
        <div className="grid4">
          {quick.map((q) => (
            <button
              key={q.id}
              onClick={() => navigate(`/shoot/${q.id}`)}
              className="tap"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, padding: '12px 4px', borderRadius: 15, background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <span style={{ color: 'var(--accent)' }}><Icon name={q.icon} size={22} /></span>
              <span className="mono" style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--text-2)', letterSpacing: '.04em' }}>{q.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* lens */}
      <div className="fu fu4" style={{ marginTop: 12 }}><LensSelector note={false} /></div>

      {/* setup nudge */}
      {!complete && (
        <button
          onClick={() => navigate('/trip/setup')}
          className="tap fu fu5"
          style={{ width: '100%', textAlign: 'left', marginTop: 12, padding: 14, borderRadius: 18, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}
        >
          <div className="row" style={{ gap: 13 }}>
            <ProgressRing value={done} total={total} size={46} />
            <div style={{ flex: 1 }}>
              <div className="row between">
                <span className="h3" style={{ color: 'var(--accent-text)' }}>Before You Fly</span>
                <Icon name="chevronRight" size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <p className="small" style={{ color: 'var(--text-2)', marginTop: 3 }}>Set up your camera once at home. {total - done} steps to go.</p>
            </div>
          </div>
        </button>
      )}

      {/* saved */}
      {bookmarks.length > 0 && (
        <div style={{ marginTop: 22 }}>
          <SectionTitle icon="star">Saved</SectionTitle>
          <div className="card flush">
            {bookmarks.slice(0, 6).map((b, i) => (
              <button
                key={b.id}
                onClick={() => navigate(b.route)}
                className="tap lrow"
                style={{ width: '100%', textAlign: 'left', gap: 11, borderTop: i ? '1px solid var(--border)' : 'none' }}
              >
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}><Icon name={kindIcon[b.kind]} size={17} /></span>
                <span className="h3" style={{ flex: 1, minWidth: 0, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</span>
                <span className="mono" style={{ fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-4)' }}>{b.kind}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* quick links */}
      <div className="fu fu6" style={{ marginTop: 14 }}>
        <SectionTitle icon="compass">Jump in</SectionTitle>
        <div className="grid2">
          <HomeTile icon="wand" title="Scene Wizard" sub="Get exact settings" onClick={() => navigate('/shoot')} />
          <HomeTile icon="bolt" title="Cheat Sheet" sub="Fast field card" onClick={() => navigate('/cheat')} />
          <HomeTile icon="camera" title="Camera Map" sub="Tap any button" onClick={() => navigate('/learn/camera')} />
          <HomeTile icon="sun" title="Vietnam Light" sub="When to shoot" onClick={() => navigate('/trip/vietnam')} />
        </div>
      </div>
    </div>
  )
}

function HomeTile({ icon, title, sub, onClick }: { icon: string; title: string; sub: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="tap card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4, padding: 13 }}>
      <span style={{ color: 'var(--accent)', marginBottom: 4 }}><Icon name={icon} size={20} /></span>
      <span className="h3">{title}</span>
      <span className="row" style={{ gap: 5, color: 'var(--text-3)', fontSize: 12 }}>{sub} <Icon name="arrowRight" size={11} /></span>
    </button>
  )
}
