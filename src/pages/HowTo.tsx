import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Note, NumberStep } from '../components/ui'
import BookmarkButton from '../components/BookmarkButton'
import { recipeGroups, settingRecipes, recipesByGroup } from '../data/settingsRecipes'
import type { SettingRecipe } from '../data/settingsRecipes'

function PathChip({ path }: { path: string }) {
  return (
    <span
      className="mono"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 10.5,
        fontWeight: 600,
        color: 'var(--accent-text)',
        background: 'var(--accent-soft)',
        border: '1px solid var(--accent-line)',
        borderRadius: 8,
        padding: '5px 9px',
        letterSpacing: '.01em',
        lineHeight: 1.4,
      }}
    >
      <Icon name="compass" size={12} /> {path}
    </span>
  )
}

function RecipeCard({ recipe, open, onToggle }: { recipe: SettingRecipe; open: boolean; onToggle: () => void }) {
  return (
    <div id={recipe.id} className="card flush" style={{ scrollMarginTop: 14 }}>
      <div className="row" style={{ gap: 8, padding: 14, alignItems: 'flex-start' }}>
        <button onClick={onToggle} className="row between" style={{ flex: 1, minWidth: 0, gap: 8, textAlign: 'left', alignItems: 'flex-start' }}>
          <span style={{ minWidth: 0 }}>
            <span className="h3" style={{ display: 'block' }}>{recipe.title}</span>
            <span className="small" style={{ display: 'block', color: 'var(--text-3)', marginTop: 2 }}>{recipe.what}</span>
          </span>
          <span style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: 2, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}>
            <Icon name="chevronDown" size={17} />
          </span>
        </button>
        <BookmarkButton compact size={16} bookmark={{ id: `howto-${recipe.id}`, kind: 'page', title: recipe.title, route: `/learn/how-to?open=${recipe.id}` }} />
      </div>

      {open && (
        <div style={{ padding: '0 15px 16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ marginTop: 13, marginBottom: 13 }}><PathChip path={recipe.path} /></div>

          {recipe.fast && (
            <div className="note plain" style={{ marginBottom: 13 }}>
              <span className="ic" style={{ color: 'var(--accent)' }}><Icon name="bolt" size={15} /></span>
              <div>
                <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Fastest way</div>
                <p className="small" style={{ color: 'var(--text-2)', marginTop: 3 }}>{recipe.fast.join(' ')}</p>
              </div>
            </div>
          )}

          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 9 }}>Step by step</div>
          <ol className="stack" style={{ '--g': '10px', listStyle: 'none', margin: 0, padding: 0 } as React.CSSProperties}>
            {recipe.steps.map((s, i) => <NumberStep key={i} n={i + 1}>{s}</NumberStep>)}
          </ol>

          {recipe.options && (
            <div style={{ marginTop: 15 }}>
              <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 9 }}>What the choices mean</div>
              <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
                {recipe.options.map((o) => (
                  <div key={o.name} style={{ padding: '9px 11px', borderRadius: 11, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <div className="data" style={{ fontSize: 12.5, color: 'var(--text)' }}>{o.name}</div>
                    <div className="small" style={{ color: 'var(--text-2)', marginTop: 2 }}>{o.means}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {recipe.pick && (
            <div style={{ marginTop: 14 }}>
              <Note tone="good" icon="check" title="What to pick">{recipe.pick}</Note>
            </div>
          )}
          {recipe.watch && (
            <div style={{ marginTop: 10 }}>
              <Note tone="amber" icon="info" title="Watch out">{recipe.watch}</Note>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function HowTo() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [q, setQ] = useState(() => params.get('q') ?? '')
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const didDeepLink = useRef(false)

  const query = q.trim().toLowerCase()
  const searching = query.length >= 2

  // Deep link: ?open=<id> expands that recipe and scrolls to it.
  useEffect(() => {
    if (didDeepLink.current) return
    const target = params.get('open')
    if (target) {
      didDeepLink.current = true
      setOpen((o) => ({ ...o, [target]: true }))
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [params])

  const matches = useMemo(() => {
    if (!searching) return settingRecipes
    return settingRecipes.filter((r) =>
      (r.title + ' ' + r.what + ' ' + r.path + ' ' + (r.pick ?? '') + ' ' + (r.keywords ?? '') + ' ' + (r.options?.map((o) => o.name).join(' ') ?? '')).toLowerCase().includes(query)
    )
  }, [query, searching])

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }))

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 14 }}>
        <Eyebrow style={{ marginBottom: 9 }}>How-To</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>How to set anything</h1>
        <p className="body" style={{ marginTop: 7 }}>The exact buttons to press for every setting, with the full menu path and what to choose. Matched to your A7C II.</p>
      </div>

      {/* search */}
      <div className="row" style={{ gap: 10, padding: '12px 15px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: 16 }}>
        <Icon name="search" size={17} style={{ color: 'var(--text-3)' }} />
        <input className="field" placeholder="Find a setting… (e.g. ISO, eye, silent)" value={q} onChange={(e) => setQ(e.target.value)} />
        {q && <button onClick={() => setQ('')} style={{ color: 'var(--text-3)' }}><Icon name="x" size={16} /></button>}
      </div>

      {searching ? (
        <div className="stack" style={{ '--g': '9px' } as React.CSSProperties}>
          {matches.map((r) => <RecipeCard key={r.id} recipe={r} open={open[r.id] ?? true} onToggle={() => toggle(r.id)} />)}
          {matches.length === 0 && (
            <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 20 }}>Nothing matches “{q}”. Try a simpler word like ISO, focus or silent.</p>
          )}
        </div>
      ) : (
        <div className="stack" style={{ '--g': '24px' } as React.CSSProperties}>
          {recipeGroups.map((g) => {
            const list = recipesByGroup(g.id)
            if (!list.length) return null
            return (
              <section key={g.id}>
                <div className="row" style={{ gap: 8, marginBottom: 4 }}>
                  <span style={{ color: 'var(--accent)' }}><Icon name={g.icon} size={15} /></span>
                  <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{g.label}</span>
                </div>
                <p className="small" style={{ color: 'var(--text-3)', marginBottom: 11 }}>{g.blurb}</p>
                <div className="stack" style={{ '--g': '9px' } as React.CSSProperties}>
                  {list.map((r) => <RecipeCard key={r.id} recipe={r} open={!!open[r.id]} onToggle={() => toggle(r.id)} />)}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
