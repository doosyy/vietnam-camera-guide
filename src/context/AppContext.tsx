/* eslint-disable react-refresh/only-export-components -- this context module
   co-locates the AppProvider component with the useApp hook and shared
   constants; the rule only affects dev hot-reload, not the build or runtime. */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lens, LensId } from '../data/types'
import { lensById } from '../data/lenses'
import type { Goal, ButtonLayout } from '../data/buttons'

type Theme = 'dark' | 'light'
export type Accent = 'amber' | 'crimson' | 'teal' | 'violet'

export const ACCENTS: { id: Accent; label: string; hint: string; swatch: string }[] = [
  { id: 'amber', label: 'Amber', hint: 'Warm darkroom glow', swatch: '#ff9e3d' },
  { id: 'crimson', label: 'Safelight', hint: 'Classic red glow', swatch: '#f2545b' },
  { id: 'teal', label: 'Cyan', hint: 'Cool developer tray', swatch: '#2fc4b0' },
  { id: 'violet', label: 'Violet', hint: 'Dusk over rooftops', swatch: '#a78bfa' },
]

export interface Bookmark {
  id: string
  kind: 'chapter' | 'scene' | 'menu' | 'page'
  title: string
  route: string
}

interface AppCtx {
  theme: Theme
  toggleTheme: () => void
  accent: Accent
  setAccent: (a: Accent) => void
  lens: Lens
  lensId: LensId
  setLens: (id: LensId) => void
  setupDone: string[]
  toggleStep: (id: string) => void
  resetSetup: () => void
  bookmarks: Bookmark[]
  toggleBookmark: (b: Bookmark) => void
  isBookmarked: (id: string) => boolean
  // Button layouts
  layouts: ButtonLayout[]
  activeLayout: ButtonLayout
  activeLayoutId: string
  setActiveLayout: (id: string) => void
  addLayout: (name: string, goal?: Goal, slot?: 1 | 2 | 3) => void
  duplicateLayout: (id: string) => void
  renameLayout: (id: string, name: string) => void
  deleteLayout: (id: string) => void
  setButton: (controlId: string, fnId: string) => void
  setButtons: (map: Record<string, string>) => void
  resetLayout: () => void
  toggleDone: (controlId: string) => void
  setLayoutGoal: (g: Goal) => void
  // Back-compat reads
  buttons: Record<string, string>
  buttonGoal: Goal
  // Selected Vietnam city (for the "right now" light card)
  cityId: string
  setCity: (id: string) => void
  // Reading progress through the guide
  readChapters: string[]
  markRead: (id: string) => void
  toggleRead: (id: string) => void
  isRead: (id: string) => boolean
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

// Load saved layouts, migrating the old single-layout storage if needed.
function initLayouts(): ButtonLayout[] {
  const saved = ls.get<ButtonLayout[] | null>('vcc_btn_layouts', null)
  if (saved && saved.length) return saved.map((l) => ({ ...l, done: l.done ?? [] }))
  const oldMap = ls.get<Record<string, string>>('vcc_buttons', {})
  const oldGoal = ls.get<Goal>('vcc_btn_goal', 'balanced')
  return [{ id: 'default', name: 'My layout', goal: oldGoal, map: oldMap, done: [] }]
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => ls.get<Theme>('vcc_theme', 'dark'))
  const [accent, setAccentState] = useState<Accent>(() => ls.get<Accent>('vcc_accent', 'amber'))
  const [lensId, setLensId] = useState<LensId>(() => ls.get<LensId>('vcc_lens', 'kit-28-60'))
  const [setupDone, setSetupDone] = useState<string[]>(() => ls.get<string[]>('vcc_setup', []))
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => ls.get<Bookmark[]>('vcc_bookmarks', []))
  const [layouts, setLayouts] = useState<ButtonLayout[]>(initLayouts)
  const [activeLayoutId, setActiveLayoutId] = useState<string>(() => {
    const saved = ls.get<string>('vcc_btn_active', '')
    const ls0 = initLayouts()
    return ls0.some((l) => l.id === saved) ? saved : ls0[0].id
  })
  const [cityId, setCityId] = useState<string>(() => ls.get<string>('vcc_city', 'hanoi'))
  const [readChapters, setReadChapters] = useState<string[]>(() => ls.get<string[]>('vcc_read', []))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    ls.set('vcc_theme', theme)
  }, [theme])
  useEffect(() => {
    if (accent === 'amber') delete document.documentElement.dataset.accent
    else document.documentElement.dataset.accent = accent
    ls.set('vcc_accent', accent)
  }, [accent])
  useEffect(() => ls.set('vcc_lens', lensId), [lensId])
  useEffect(() => ls.set('vcc_setup', setupDone), [setupDone])
  useEffect(() => ls.set('vcc_bookmarks', bookmarks), [bookmarks])
  useEffect(() => ls.set('vcc_btn_layouts', layouts), [layouts])
  useEffect(() => ls.set('vcc_btn_active', activeLayoutId), [activeLayoutId])
  useEffect(() => ls.set('vcc_city', cityId), [cityId])
  useEffect(() => ls.set('vcc_read', readChapters), [readChapters])

  const activeLayout = useMemo(
    () => layouts.find((l) => l.id === activeLayoutId) ?? layouts[0],
    [layouts, activeLayoutId]
  )

  const updateActive = (patch: (l: ButtonLayout) => ButtonLayout) =>
    setLayouts((list) => list.map((l) => (l.id === activeLayout.id ? patch(l) : l)))

  const value: AppCtx = {
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    accent,
    setAccent: setAccentState,
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

    layouts,
    activeLayout,
    activeLayoutId: activeLayout.id,
    setActiveLayout: setActiveLayoutId,
    addLayout: (name, goal = 'balanced', slot) => {
      const id = 'l' + Date.now().toString(36)
      setLayouts((list) => [...list, { id, name: name.trim() || 'New layout', goal, slot, map: {}, done: [] }])
      setActiveLayoutId(id)
    },
    duplicateLayout: (id) =>
      setLayouts((list) => {
        const src = list.find((l) => l.id === id)
        if (!src) return list
        const newId = 'l' + Date.now().toString(36)
        const copy: ButtonLayout = { ...src, id: newId, name: `${src.name} copy`, map: { ...src.map }, done: [...src.done], slot: undefined }
        setActiveLayoutId(newId)
        return [...list, copy]
      }),
    renameLayout: (id, name) =>
      setLayouts((list) => list.map((l) => (l.id === id ? { ...l, name: name.trim() || l.name } : l))),
    deleteLayout: (id) =>
      setLayouts((list) => {
        if (list.length <= 1) return list
        const next = list.filter((l) => l.id !== id)
        if (id === activeLayout.id) setActiveLayoutId(next[0].id)
        return next
      }),
    setButton: (controlId, fnId) =>
      updateActive((l) => {
        const map = { ...l.map }
        if (fnId === 'not-set') delete map[controlId]
        else map[controlId] = fnId
        return { ...l, map }
      }),
    setButtons: (map) => updateActive((l) => ({ ...l, map })),
    resetLayout: () => updateActive((l) => ({ ...l, map: {}, done: [] })),
    toggleDone: (controlId) =>
      updateActive((l) => ({
        ...l,
        done: l.done.includes(controlId) ? l.done.filter((x) => x !== controlId) : [...l.done, controlId],
      })),
    setLayoutGoal: (g) => updateActive((l) => ({ ...l, goal: g })),

    buttons: activeLayout.map,
    buttonGoal: activeLayout.goal,

    cityId,
    setCity: setCityId,
    readChapters,
    markRead: (id) => setReadChapters((r) => (r.includes(id) ? r : [...r, id])),
    toggleRead: (id) => setReadChapters((r) => (r.includes(id) ? r.filter((x) => x !== id) : [...r, id])),
    isRead: (id) => readChapters.includes(id),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useApp() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
