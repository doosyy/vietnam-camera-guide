import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lens, LensId } from '../data/types'
import { lensById } from '../data/lenses'

type Theme = 'dark' | 'light'

export interface Bookmark {
  id: string
  kind: 'chapter' | 'scene' | 'menu' | 'page'
  title: string
  route: string
}

interface AppCtx {
  theme: Theme
  toggleTheme: () => void
  lens: Lens
  lensId: LensId
  setLens: (id: LensId) => void
  setupDone: string[]
  toggleStep: (id: string) => void
  resetSetup: () => void
  bookmarks: Bookmark[]
  toggleBookmark: (b: Bookmark) => void
  isBookmarked: (id: string) => boolean
}

const Ctx = createContext<AppCtx | null>(null)

const ls = {
  get<T>(k: string, d: T): T {
    try {
      const v = localStorage.getItem(k)
      return v == null ? d : (JSON.parse(v) as T)
    } catch {
      return d
    }
  },
  set(k: string, v: unknown) {
    try {
      localStorage.setItem(k, JSON.stringify(v))
    } catch {
      /* ignore */
    }
  },
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => ls.get<Theme>('vcc_theme', 'dark'))
  const [lensId, setLensId] = useState<LensId>(() => ls.get<LensId>('vcc_lens', 'kit-28-60'))
  const [setupDone, setSetupDone] = useState<string[]>(() => ls.get<string[]>('vcc_setup', []))
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => ls.get<Bookmark[]>('vcc_bookmarks', []))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    ls.set('vcc_theme', theme)
  }, [theme])
  useEffect(() => ls.set('vcc_lens', lensId), [lensId])
  useEffect(() => ls.set('vcc_setup', setupDone), [setupDone])
  useEffect(() => ls.set('vcc_bookmarks', bookmarks), [bookmarks])

  const value: AppCtx = {
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    lens: lensById(lensId),
    lensId,
    setLens: setLensId,
    setupDone,
    toggleStep: (id) =>
      setSetupDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id])),
    resetSetup: () => setSetupDone([]),
    bookmarks,
    toggleBookmark: (b) =>
      setBookmarks((list) => (list.some((x) => x.id === b.id) ? list.filter((x) => x.id !== b.id) : [b, ...list])),
    isBookmarked: (id) => bookmarks.some((x) => x.id === id),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
