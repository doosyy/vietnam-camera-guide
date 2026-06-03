import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHead, SectionTitle, NavRow, ProgressRing } from '../components/ui'
import { useApp } from '../context/AppContext'
import { guideChapters, guideGroups } from '../data/guide'

const tools = [
  { icon: 'sliders', label: 'How-To', route: '/learn/how-to' },
  { icon: 'checklist', label: 'Menu A–Z', route: '/learn/menu' },
  { icon: 'grid', label: 'Icon Keys', route: '/learn/icons' },
  { icon: 'camera', label: 'Camera Map', route: '/learn/camera' },
  { icon: 'frame', label: 'Composition', route: '/learn/composition' },
  { icon: 'glossary', label: 'Glossary', route: '/learn/glossary' },
]

export default function Learn() {
  const navigate = useNavigate()
  const { readChapters } = useApp()
  const readCount = guideChapters.filter((c) => readChapters.includes(c.id)).length

  return (
    <div className="screen anim-tab">
      <PageHead eyebrow="Learn" title="The manual, de-jargoned" sub="Plain-English photography for beginners, the way the manual should have been written. Everything the Sony book covers, in clear words." />

      <button
        onClick={() => navigate('/learn/path')}
        className="tap"
        style={{ width: '100%', textAlign: 'left', marginBottom: 12, padding: 15, borderRadius: 18, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}
      >
        <div className="row" style={{ gap: 13 }}>
          <ProgressRing value={readCount} total={guideChapters.length} size={44} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="row between">
              <span className="h3" style={{ color: 'var(--accent-text)' }}>Learn Path {readCount > 0 ? '· continue' : ''}</span>
              <Icon name="chevronRight" size={16} style={{ color: 'var(--accent)' }} />
            </div>
            <p className="small" style={{ color: 'var(--text-2)', marginTop: 3 }}>A guided course and a plane-reading list, with your progress saved.</p>
          </div>
        </div>
      </button>

      <button
        onClick={() => navigate('/learn/how-to')}
        className="tap"
        style={{ width: '100%', textAlign: 'left', marginBottom: 18, padding: 15, borderRadius: 18, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}
      >
        <div className="row" style={{ gap: 13 }}>
          <span className="ico-badge"><Icon name="sliders" size={20} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="row between">
              <span className="h3" style={{ color: 'var(--accent-text)' }}>How to set anything</span>
              <Icon name="chevronRight" size={16} style={{ color: 'var(--accent)' }} />
            </div>
            <p className="small" style={{ color: 'var(--text-2)', marginTop: 3 }}>Exact buttons and menu path for every setting. Start here if a step ever loses you.</p>
          </div>
        </div>
      </button>

      <div className="grid3" style={{ marginBottom: 24 }}>
        {tools.map((t) => (
          <button
            key={t.route}
            onClick={() => navigate(t.route)}
            className="tap"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, padding: '16px 4px', borderRadius: 15, background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <span style={{ color: 'var(--accent)' }}><Icon name={t.icon} size={21} /></span>
            <span className="mono" style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-2)', letterSpacing: '.03em' }}>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="stack" style={{ '--g': '22px' } as React.CSSProperties}>
        {guideGroups.map((group) => {
          const list = guideChapters.filter((c) => c.group === group)
          if (!list.length) return null
          return (
            <section key={group}>
              <SectionTitle icon="book">{group}</SectionTitle>
              <div className="card flush">
                {list.map((c) => (
                  <NavRow key={c.id} icon={c.icon} title={c.title} sub={c.summary} onClick={() => navigate(`/learn/guide/${c.id}`)} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
