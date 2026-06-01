import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHead, SectionTitle, LensSelector } from '../components/ui'
import { scenes, sceneCategories } from '../data/scenes'

export default function Shoot() {
  const navigate = useNavigate()
  return (
    <div className="screen anim-tab">
      <PageHead eyebrow="Scene Wizard" title="What are you shooting?" sub="Pick a scene and get the exact dial-in settings, tuned to your lens." />
      <div style={{ marginBottom: 18 }}><LensSelector note={false} /></div>
      <div className="stack" style={{ '--g': '22px' } as React.CSSProperties}>
        {sceneCategories.map((cat) => {
          const list = scenes.filter((s) => s.category === cat.id)
          return (
            <section key={cat.id}>
              <SectionTitle icon={cat.icon}>{cat.label}</SectionTitle>
              <div className="card flush">
                {list.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => navigate(`/shoot/${s.id}`)}
                    className="tap lrow"
                    style={{ width: '100%', textAlign: 'left', borderTop: i ? '1px solid var(--border)' : 'none' }}
                  >
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span className="h3" style={{ display: 'block' }}>{s.title}</span>
                      <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 2 }}>{s.blurb}</span>
                    </span>
                    <span style={{ color: 'var(--text-3)' }}><Icon name="chevronRight" size={17} /></span>
                  </button>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
