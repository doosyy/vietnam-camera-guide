import { useParams, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Note } from '../components/ui'
import { guideChapterById } from '../data/guide'

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
        <div className="brandmark" style={{ marginBottom: 13, width: 40, height: 40 }}><Icon name={c.icon} size={20} /></div>
        <h1 className="h1" style={{ fontSize: 25 }}>{c.title}</h1>
        <p className="body" style={{ marginTop: 7 }}>{c.summary}</p>
      </div>
      <div className="stack" style={{ '--g': '14px' } as React.CSSProperties}>
        {c.sections.map((sec) => (
          <section key={sec.heading} className="card">
            <h2 className="h2" style={{ marginBottom: 10 }}>{sec.heading}</h2>
            <div className="stack" style={{ '--g': '10px' } as React.CSSProperties}>
              {sec.body.map((p, i) => <p key={i} className="body">{p}</p>)}
            </div>
            {sec.tip && <div style={{ marginTop: 13 }}><Note tone="amber" icon="bulb">{sec.tip}</Note></div>}
          </section>
        ))}
      </div>
    </div>
  )
}
