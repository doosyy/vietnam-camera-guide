import { useState, type ReactNode } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, ExposureStrip, Note, SectionTitle, NumberStep, LensSelector } from '../components/ui'
import BookmarkButton from '../components/BookmarkButton'
import { useApp } from '../context/AppContext'
import { sceneById, sceneCategories } from '../data/scenes'
import { controlForFunction, functionById, controlById } from '../data/buttons'
import type { Lens, SceneSettings } from '../data/types'
import type { SceneCategory } from '../data/types'

// Which button jobs matter most for each kind of scene, so we can point at the
// user's own controls ("Focus Area is on your C1").
const sceneJobs: Record<SceneCategory, string[]> = {
  street: ['focus-area', 'eye-af', 'tracking', 'drive', 'iso', 'exp-comp'],
  food: ['focus-area', 'eye-af', 'white-balance', 'exp-comp'],
  architecture: ['focus-area', 'exp-comp', 'grid', 'aps-c'],
  night: ['iso', 'silent', 'exp-comp', 'white-balance', 'focus-area'],
  landscape: ['focus-area', 'exp-comp', 'grid', 'white-balance'],
}

function smallestF(str: string): number | null {
  const m = [...str.matchAll(/f\/(\d+(?:\.\d+)?)/gi)].map((x) => parseFloat(x[1]))
  return m.length ? Math.min(...m) : null
}
function effectiveAperture(aperture: string, lens: Lens) {
  if (/as low|open|lowest/i.test(aperture)) {
    return { text: `f/${lens.maxApertureWide}${lens.constantAperture ? '' : '–' + lens.maxApertureTele}`, capped: false, full: undefined as string | undefined }
  }
  const want = smallestF(aperture)
  if (want !== null && lens.maxApertureWide > want) {
    return { text: `f/${lens.maxApertureWide}`, capped: true, full: `f/${lens.maxApertureWide} · your lens’s widest` }
  }
  return { text: aperture, capped: false, full: undefined }
}
const fShort = (s: string) => { const m = s.match(/f\/[\d.]+/); return m ? m[0] : s.split(' ')[0] }
const shutShort = (s: string) => { const m = s.match(/1\/\d+/); if (m) return m[0]; if (/second/i.test(s)) return s.replace(/\s*seconds?/i, 's').replace(/[()]/g, ''); return 'Auto' }
const isoShort = (s: string) => { if (/^auto/i.test(s)) return 'AUTO'; const m = s.match(/\d+/); return m ? m[0] : s }

const ROWS: { key: keyof SceneSettings; label: string; icon: string }[] = [
  { key: 'mode', label: 'Mode', icon: 'camera' },
  { key: 'aperture', label: 'Aperture', icon: 'aperture' },
  { key: 'shutter', label: 'Shutter', icon: 'timer' },
  { key: 'iso', label: 'ISO', icon: 'gauge' },
  { key: 'focusMode', label: 'Focus mode', icon: 'focus' },
  { key: 'focusArea', label: 'Focus area', icon: 'crosshair' },
  { key: 'drive', label: 'Drive', icon: 'layers' },
  { key: 'whiteBalance', label: 'White bal.', icon: 'palette' },
]

export default function SceneDetail() {
  const { sceneId } = useParams()
  const navigate = useNavigate()
  const { lens, activeLayout } = useApp()
  const scene = sceneId ? sceneById(sceneId) : undefined
  const [mod, setMod] = useState(() => (scene && scene.modifier ? scene.modifier.options[0].id : 'default'))

  if (!scene) {
    return (
      <div className="screen">
        <BackBar onBack={() => navigate('/shoot')} label="Scene Wizard" />
        <p className="body">Scene not found.</p>
      </div>
    )
  }

  const key = scene.modifier ? mod : 'default'
  const settings = scene.settings[key] || scene.settings.default
  const ap = effectiveAperture(settings.aperture, lens)
  const lensNote = scene.lensNotes?.[lens.id]
  const category = sceneCategories.find((c) => c.id === scene.category)

  return (
    <div className="screen anim-fwd" key={scene.id}>
      <BackBar onBack={() => navigate('/shoot')} label="Scene Wizard" />
      <div className="row between" style={{ marginBottom: 16, gap: 12, alignItems: 'flex-start' }}>
        <div style={{ minWidth: 0 }}>
          <Eyebrow style={{ marginBottom: 9 }}>{category?.label}</Eyebrow>
          <h1 className="h1" style={{ fontSize: 25 }}>{scene.title}</h1>
          <p className="body" style={{ marginTop: 7 }}>{scene.blurb}</p>
        </div>
        <BookmarkButton bookmark={{ id: `scene-${scene.id}`, kind: 'scene', title: scene.title, route: `/shoot/${scene.id}` }} />
      </div>

      {scene.modifier && (
        <div style={{ marginBottom: 16 }}>
          <p className="small" style={{ color: 'var(--text-2)', marginBottom: 8, fontWeight: 600 }}>{scene.modifier.question}</p>
          <div className="seg">
            {scene.modifier.options.map((o) => (
              <button key={o.id} className={o.id === mod ? 'on' : ''} onClick={() => setMod(o.id)}>{o.label}</button>
            ))}
          </div>
        </div>
      )}

      <div key={key + lens.id} className="fu">
        <Eyebrow style={{ marginBottom: 9 }}>Exposure</Eyebrow>
        <ExposureStrip aperture={fShort(ap.text)} shutter={shutShort(settings.shutter)} iso={isoShort(settings.iso)} capped={ap.capped} />
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="row between" style={{ marginBottom: 6 }}>
          <Eyebrow style={{ color: 'var(--text-2)' }}>Dial these in</Eyebrow>
          <span style={{ color: 'var(--accent)' }}><Icon name="sliders" size={14} /></span>
        </div>
        <div className="readout">
          {ROWS.map((r) => {
            const val = r.key === 'aperture' ? (ap.full || ap.text) : settings[r.key]
            const hl = r.key === 'aperture' && ap.capped
            return (
              <div key={r.key} className="rrow">
                <span className="rlabel"><Icon name={r.icon} size={13} /> {r.label}</span>
                <span className="rval" style={{ color: hl ? 'var(--accent-text)' : 'var(--text)' }}>{val}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="note plain" style={{ marginTop: 12 }}>
        <span className="ic" style={{ color: 'var(--accent)' }}><Icon name="lens" size={16} /></span>
        <div>
          <div className="mono" style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)', letterSpacing: '.03em' }}>With your {lens.shortName} {lens.tag}</div>
          <p className="small" style={{ color: 'var(--text-2)', marginTop: 3 }}>
            {lensNote || `Widest aperture f/${lens.maxApertureWide}. ${lens.lightGrade === 'fast' ? 'Bright enough to keep ISO low here.' : lens.lightGrade === 'slow' ? 'A slower lens, so expect ISO to climb when light drops.' : 'A solid all-rounder for this scene.'}`}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 12 }}><LensSelector note={false} /></div>

      <Section icon="info" title="Why these settings">
        <p className="body">{scene.why}</p>
      </Section>
      <Section icon="camera" title="How to set it">
        <ol className="stack" style={{ '--g': '11px', listStyle: 'none' } as React.CSSProperties}>
          {scene.howTo.map((s, i) => <NumberStep key={i} n={i + 1}>{s}</NumberStep>)}
        </ol>
        <p className="small" style={{ color: 'var(--text-3)', marginTop: 13, marginBottom: 9 }}>Not sure where a setting lives?</p>
        <button
          onClick={() => navigate('/learn/how-to')}
          className="btn-accent"
        >
          <Icon name="sliders" size={15} /> How to set anything
          <Icon name="chevronRight" size={15} />
        </button>
      </Section>

      {(() => {
        const jobs = sceneJobs[scene.category] || []
        const yours = jobs
          .map((j) => ({ job: j, ctrl: controlForFunction(activeLayout.map, j) }))
          .filter((x) => x.ctrl) as { job: string; ctrl: string }[]
        if (!yours.length) return null
        return (
          <Section icon="click" title="Your buttons for this">
            <div className="card flush">
              {yours.map((y, i) => (
                <div key={y.job} className="row between" style={{ gap: 12, padding: '11px 15px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                  <span className="body" style={{ color: 'var(--text-2)' }}>{functionById(y.job)?.label ?? y.job}</span>
                  <span className="data" style={{ fontSize: 12.5, color: 'var(--accent-text)', flexShrink: 0 }}>{controlById(y.ctrl)?.label}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/buttons')} className="tap row" style={{ gap: 6, marginTop: 10, color: 'var(--text-3)', fontSize: 12 }}>
              <Icon name="click" size={13} /> Edit your buttons <Icon name="chevronRight" size={12} />
            </button>
          </Section>
        )
      })()}
      <Section icon="eye" title="What to watch for">
        <ul className="stack" style={{ '--g': '9px', listStyle: 'none' } as React.CSSProperties}>
          {scene.watchFor.map((w, i) => (
            <li key={i} className="row" style={{ gap: 10, alignItems: 'flex-start' }}>
              <span style={{ width: 5, height: 5, borderRadius: 9, background: 'var(--accent)', marginTop: 8, flexShrink: 0 }} />
              <span className="body" style={{ flex: 1 }}>{w}</span>
            </li>
          ))}
        </ul>
      </Section>

      {scene.vietnamNote && (
        <div style={{ marginTop: 16 }}>
          <Note tone="good" icon="pin">{scene.vietnamNote}</Note>
        </div>
      )}
    </div>
  )
}

function Section({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: 22 }}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      {children}
    </section>
  )
}
