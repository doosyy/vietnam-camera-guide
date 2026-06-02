import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { BackBar, Eyebrow, Pill } from '../components/ui'
import { menuTabs, menuItems, menuItemsByTab } from '../data/menuReference'
import type { MenuRefItem } from '../data/types'
import BookmarkButton from '../components/BookmarkButton'

function Row({ item }: { item: MenuRefItem }) {
  return (
    <div className="lrow" style={{ alignItems: 'flex-start', padding: '13px 15px', gap: 8 }}>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
          <span className="h3" style={{ fontSize: 14 }}>{item.name}</span>
          {item.sony && item.sony !== item.name && (
            <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>{item.sony}</span>
          )}
        </span>
        <span className="small" style={{ display: 'block', color: 'var(--text-2)', marginTop: 3 }}>{item.plain}</span>
      </span>
      <BookmarkButton compact size={16} bookmark={{ id: `menu-${item.id}`, kind: 'menu', title: item.name, route: `/learn/menu?q=${encodeURIComponent(item.name)}` }} />
    </div>
  )
}

export default function MenuReference() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [tab, setTab] = useState(menuTabs[0].id)
  const [q, setQ] = useState(() => params.get('q') ?? '')
  const [showAdv, setShowAdv] = useState<Record<string, boolean>>({})

  const query = q.trim().toLowerCase()

  // When searching, match across every tab. Otherwise show the selected tab.
  const filtered = useMemo(() => {
    if (query.length < 2) return menuItemsByTab(tab)
    return menuItems.filter((m) =>
      (m.name + ' ' + (m.sony || '') + ' ' + m.plain + ' ' + m.group).toLowerCase().includes(query)
    )
  }, [query, tab])

  // Group items by their sub-group, splitting everyday vs advanced.
  const groups = useMemo(() => {
    const map = new Map<string, MenuRefItem[]>()
    filtered.forEach((m) => {
      const arr = map.get(m.group) || []
      arr.push(m)
      map.set(m.group, arr)
    })
    return [...map.entries()]
  }, [filtered])

  const searching = query.length >= 2

  return (
    <div className="screen anim-fwd">
      <BackBar onBack={() => navigate('/learn')} label="Learn" />
      <div style={{ marginBottom: 14 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Menu Reference</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Every setting, A to Z</h1>
        <p className="body" style={{ marginTop: 7 }}>Look up any item in the camera’s menu and what it does, in plain words.</p>
      </div>

      {/* filter */}
      <div className="row" style={{ gap: 10, padding: '12px 15px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)', marginBottom: 14 }}>
        <Icon name="search" size={17} style={{ color: 'var(--text-3)' }} />
        <input className="field" placeholder="Find a setting…" value={q} onChange={(e) => setQ(e.target.value)} />
        {q && <button onClick={() => setQ('')} style={{ color: 'var(--text-3)' }}><Icon name="x" size={16} /></button>}
      </div>

      {/* tab chips (hidden while searching) */}
      {!searching && (
        <div className="row" style={{ gap: 7, flexWrap: 'wrap', marginBottom: 16 }}>
          {menuTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="tap pill"
              style={{ background: tab === t.id ? 'var(--accent-soft)' : 'var(--surface-3)', color: tab === t.id ? 'var(--accent-text)' : 'var(--text-2)' }}
            >
              <Icon name={t.icon} size={12} /> {t.label}
            </button>
          ))}
        </div>
      )}

      {!searching && (
        <p className="small" style={{ color: 'var(--text-3)', marginBottom: 14 }}>
          {menuTabs.find((t) => t.id === tab)?.blurb}
        </p>
      )}

      {/* grouped list */}
      <div className="stack" style={{ '--g': '20px' } as React.CSSProperties}>
        {groups.map(([group, items]) => {
          const everyday = items.filter((i) => !i.advanced)
          const advanced = items.filter((i) => i.advanced)
          const key = tab + group
          const advOpen = searching || showAdv[key]
          return (
            <section key={group}>
              <div className="row" style={{ gap: 8, marginBottom: 9 }}>
                <span className="eyebrow" style={{ color: 'var(--text-2)' }}>{group}</span>
              </div>
              <div className="card flush">
                {everyday.map((m, i) => (
                  <div key={m.id} style={{ borderTop: i ? '1px solid var(--border)' : 'none' }}><Row item={m} /></div>
                ))}
                {advanced.length > 0 && !searching && (
                  <button
                    onClick={() => setShowAdv((s) => ({ ...s, [key]: !s[key] }))}
                    className="tap row between"
                    style={{ width: '100%', padding: '11px 15px', borderTop: everyday.length ? '1px solid var(--border)' : 'none', color: 'var(--text-3)' }}
                  >
                    <span className="mono" style={{ fontSize: 11, letterSpacing: '.06em' }}>
                      {advOpen ? 'Hide' : 'Show'} advanced ({advanced.length})
                    </span>
                    <span style={{ transform: advOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s var(--ease)' }}><Icon name="chevronDown" size={16} /></span>
                  </button>
                )}
                {advOpen &&
                  advanced.map((m) => (
                    <div key={m.id} style={{ borderTop: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                      <div className="row" style={{ alignItems: 'flex-start' }}>
                        <Row item={m} />
                        <Pill style={{ margin: '13px 12px 0 0', flexShrink: 0 }}>adv</Pill>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )
        })}
        {groups.length === 0 && (
          <p className="small" style={{ textAlign: 'center', color: 'var(--text-3)', marginTop: 20 }}>No settings match “{q}”.</p>
        )}
      </div>
    </div>
  )
}
