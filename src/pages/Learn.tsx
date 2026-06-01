import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHead, SectionTitle, NavRow } from '../components/ui'
import { guideChapters, guideGroups } from '../data/guide'

const tools = [
  { icon: 'camera', label: 'Camera Map', route: '/learn/camera' },
  { icon: 'frame', label: 'Composition', route: '/learn/composition' },
  { icon: 'glossary', label: 'Glossary', route: '/learn/glossary' },
]

export default function Learn() {
  const navigate = useNavigate()
  return (
    <div className="screen anim-tab">
      <PageHead eyebrow="Learn" title="The manual, de-jargoned" sub="Plain-English photography for beginners, the way the manual should have been written. Everything the Sony book covers, in clear words." />

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
