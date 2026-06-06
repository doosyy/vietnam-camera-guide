import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Icon from './components/Icon'
import { useApp } from './context/AppContext'
import { refreshApp } from './pwa'

// Home loads eagerly (first paint); the rest split into on-demand chunks.
import Home from './pages/Home'
const SearchOverlay = lazy(() => import('./components/SearchOverlay'))
const Shoot = lazy(() => import('./pages/Shoot'))
const SceneDetail = lazy(() => import('./pages/SceneDetail'))
const Cheat = lazy(() => import('./pages/Cheat'))
const Learn = lazy(() => import('./pages/Learn'))
const GuideChapterPage = lazy(() => import('./pages/GuideChapter'))
const CameraMap = lazy(() => import('./pages/CameraMap'))
const Composition = lazy(() => import('./pages/Composition'))
const Glossary = lazy(() => import('./pages/Glossary'))
const MenuReference = lazy(() => import('./pages/MenuReference'))
const HowTo = lazy(() => import('./pages/HowTo'))
const LearnPath = lazy(() => import('./pages/LearnPath'))
const MyButtons = lazy(() => import('./pages/MyButtons'))
const ScreenIcons = lazy(() => import('./pages/ScreenIcons'))
const Trip = lazy(() => import('./pages/Trip'))
const Setup = lazy(() => import('./pages/Setup'))
const Vietnam = lazy(() => import('./pages/Vietnam'))
const VietnamLocationPage = lazy(() => import('./pages/VietnamLocation'))
const Lenses = lazy(() => import('./pages/Lenses'))
const Accessories = lazy(() => import('./pages/Accessories'))
const LightClock = lazy(() => import('./pages/LightClock'))

function Loading() {
  return (
    <div className="screen" style={{ display: 'flex', justifyContent: 'center', paddingTop: 60 }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Loading…</span>
    </div>
  )
}

function RefreshButton() {
  const [state, setState] = useState<'idle' | 'checking' | 'current' | 'offline'>('idle')

  const onClick = async () => {
    if (state === 'checking') return
    setState('checking')
    let res: Awaited<ReturnType<typeof refreshApp>>
    try {
      res = await refreshApp()
    } catch {
      res = 'offline'
    }
    if (res === 'updating') return // the page is about to reload
    setState(res === 'offline' ? 'offline' : 'current')
    setTimeout(() => setState('idle'), 1800)
  }

  const icon = state === 'current' ? 'check' : 'rotate'
  const label = state === 'checking' ? 'Checking for updates…' : state === 'current' ? 'Up to date' : state === 'offline' ? 'Offline, no update' : 'Check for updates'

  return (
    <>
      <button className="tap hdr-btn" onClick={onClick} aria-label={label} title="Check for updates" style={{ color: state === 'current' ? 'var(--good)' : undefined }}>
        <span className={state === 'checking' ? 'spin' : undefined} style={{ display: 'inline-flex', opacity: state === 'offline' ? 0.4 : 1, transition: 'opacity .2s' }}>
          <Icon name={icon} size={18} />
        </span>
      </button>
      {(state === 'current' || state === 'offline') && (
        <div
          role="status"
          style={{
            position: 'fixed', top: 'calc(env(safe-area-inset-top, 0px) + 60px)', left: '50%', transform: 'translateX(-50%)',
            zIndex: 200, padding: '8px 14px', borderRadius: 999, background: 'var(--surface-3)', border: '1px solid var(--border)',
            boxShadow: '0 6px 20px rgba(0,0,0,.25)', display: 'flex', alignItems: 'center', gap: 7,
            fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.02em', color: 'var(--text-2)',
          }}
        >
          <Icon name={state === 'current' ? 'check' : 'wifi'} size={13} style={{ color: state === 'current' ? 'var(--good)' : 'var(--text-3)' }} />
          {state === 'current' ? 'You have the latest version' : 'Offline, kept as is'}
        </div>
      )}
    </>
  )
}

const TABS = [
  { id: 'home', label: 'Home', icon: 'home', path: '/' },
  { id: 'shoot', label: 'Shoot', icon: 'wand', path: '/shoot' },
  { id: 'cheat', label: 'Cheat', icon: 'bolt', path: '/cheat' },
  { id: 'learn', label: 'Learn', icon: 'book', path: '/learn' },
  { id: 'buttons', label: 'Buttons', icon: 'click', path: '/buttons' },
  { id: 'trip', label: 'Trip', icon: 'plane', path: '/trip' },
]

function activeTab(pathname: string): string {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/shoot')) return 'shoot'
  if (pathname.startsWith('/cheat')) return 'cheat'
  if (pathname.startsWith('/buttons')) return 'buttons'
  if (pathname.startsWith('/learn')) return 'learn'
  if (pathname.startsWith('/trip')) return 'trip'
  return 'home'
}

export default function App() {
  const { theme, toggleTheme } = useApp()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [searchOpen, setSearchOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Scroll to top on route change.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [pathname])

  const tab = activeTab(pathname)

  return (
    <div className="app">
      {/* header */}
      <header className="hdr">
        <button className="hdr-title tap" onClick={() => navigate('/')} style={{ textAlign: 'left' }}>
          <span className="brandmark"><Icon name="aperture" size={18} strokeWidth={2} /></span>
          <div style={{ minWidth: 0 }}>
            <div className="mono" style={{ fontSize: 9, letterSpacing: '.16em', color: 'var(--text-3)', textTransform: 'uppercase' }}>A7C II · Vietnam</div>
            <div className="h3" style={{ fontSize: 15, lineHeight: 1.1, marginTop: 1 }}>Doosy&apos;s Guide</div>
          </div>
        </button>
        <div className="row" style={{ gap: 8 }}>
          <button className="tap hdr-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <RefreshButton />
          <button className="tap hdr-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
            <Icon name="search" size={18} />
          </button>
        </div>
      </header>

      {/* scroll content */}
      <div className="scroll" ref={scrollRef}>
        <div className="route-shell" key={pathname}>
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoot" element={<Shoot />} />
          <Route path="/shoot/:sceneId" element={<SceneDetail />} />
          <Route path="/cheat" element={<Cheat />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/guide/:id" element={<GuideChapterPage />} />
          <Route path="/learn/camera" element={<CameraMap />} />
          <Route path="/learn/composition" element={<Composition />} />
          <Route path="/learn/glossary" element={<Glossary />} />
          <Route path="/learn/menu" element={<MenuReference />} />
          <Route path="/learn/how-to" element={<HowTo />} />
          <Route path="/learn/path" element={<LearnPath />} />
          <Route path="/buttons" element={<MyButtons />} />
          <Route path="/learn/icons" element={<ScreenIcons />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/trip/setup" element={<Setup />} />
          <Route path="/trip/vietnam" element={<Vietnam />} />
          <Route path="/trip/vietnam/:id" element={<VietnamLocationPage />} />
          <Route path="/trip/lenses" element={<Lenses />} />
          <Route path="/trip/accessories" element={<Accessories />} />
          <Route path="/trip/light" element={<LightClock />} />
        </Routes>
        </Suspense>
        </div>
      </div>

      {/* bottom nav */}
      <nav className="nav">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tap nav-item ${tab === t.id ? 'on' : ''}`}
            onClick={() => navigate(t.path)}
          >
            <span className="navdot" />
            <Icon name={t.icon} size={21} strokeWidth={tab === t.id ? 2.3 : 1.9} />
            <span className="lbl">{t.label}</span>
          </button>
        ))}
      </nav>

      {searchOpen && (
        <Suspense fallback={null}>
          <SearchOverlay
            onClose={() => setSearchOpen(false)}
            onNavigate={(route) => {
              setSearchOpen(false)
              navigate(route)
            }}
          />
        </Suspense>
      )}
    </div>
  )
}
