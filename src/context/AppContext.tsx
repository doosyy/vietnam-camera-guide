import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lens, LensId } from '../data/types'
import { lensById } from '../data/lenses'
import type { Goal } from '../data/buttons'

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
  buttons: Record<string, string>
  setButton: (controlId: string, fnId: string) => void
  setButtons: (map: Record<string, string>) => void
  resetButtons: () => void
  buttonGoal: Goal
  setButtonGoal: (g: Goal) => void
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
  const [buttons, setButtonsState] = useState<Record<string, string>>(() => ls.get<Record<string, string>>('vcc_buttons', {}))
  const [buttonGoal, setButtonGoal] = useState<Goal>(() => ls.get<Goal>('vcc_btn_goal', 'balanced'))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    ls.set('vcc_theme', theme)
  }, [theme])
  useEffect(() => ls.set('vcc_lens', lensId), [lensId])
  useEffect(() => ls.set('vcc_setup', setupDone), [setupDone])
  useEffect(() => ls.set('vcc_bookmarks', bookmarks), [bookmarks])
  useEffect(() => ls.set('vcc_buttons', buttons), [buttons])
  useEffect(() => ls.set('vcc_btn_goal', buttonGoal), [buttonGoal])

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
    buttons,
    setButton: (controlId, fnId) =>
      setButtonsState((m) => {
        const next = { ...m }
        if (fnId === 'not-set') delete next[controlId]
        else next[controlId] = fnId
        return next
      }),
    setButtons: (map) => setButtonsState(map),
    resetButtons: () => setButtonsState({}),
    buttonGoal,
    setButtonGoal,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
