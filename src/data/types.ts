// Shared types for all content data.

export type LensId = 'kit-28-60' | 'g-20-70' | 'g-24-50'

export interface Lens {
  id: LensId
  name: string
  shortName: string // focal numbers only, e.g. "28–60"
  tag: string // "KIT" / "G"
  focalRange: [number, number]
  maxApertureWide: number
  maxApertureTele: number
  constantAperture: boolean
  owned: boolean
  lightGrade: 'slow' | 'medium' | 'fast'
  oneLiner: string
  strengths: string[]
  weaknesses: string[]
  bestFor: string[]
}

export type SceneCategory = 'street' | 'food' | 'architecture' | 'night' | 'landscape'

export interface SceneSettings {
  mode: string
  aperture: string
  shutter: string
  iso: string
  focusMode: string
  focusArea: string
  drive: string
  whiteBalance: string
}

export interface Scene {
  id: string
  category: SceneCategory
  title: string
  blurb: string
  modifier?: { question: string; options: { id: string; label: string }[] }
  settings: Record<string, SceneSettings>
  why: string
  howTo: string[]
  watchFor: string[]
  vietnamNote?: string
  lensNotes?: Partial<Record<LensId, string>>
}

export interface SceneCategoryDef {
  id: SceneCategory
  label: string
  icon: string
}

export interface GuideSection {
  heading: string
  body: string[]
  tip?: string
  // Advanced sections render collapsed ("go deeper") so the page stays light.
  advanced?: boolean
}

export interface GuideChapter {
  id: string
  title: string
  icon: string
  group: string // chapter grouping label
  summary: string
  sections: GuideSection[]
}

export type CameraView = 'front' | 'back' | 'top' | 'ports'

export interface CameraHotspot {
  id: string
  view: CameraView
  x: number
  y: number
  label: string
  sonyName?: string
  whatItDoes: string
  beginnerTip: string
  recommendCustom?: boolean
}

export interface SetupStep {
  id: string
  group: string
  title: string
  why: string
  steps: string[]
}

export interface SetupGroup {
  id: string
  label: string
  icon: string
}

export interface CompositionTip {
  id: string
  title: string
  idea: string
  how: string[]
  vietnamExample: string
  diagram: 'thirds' | 'leadingLines' | 'framing' | 'layering' | 'foodAngle'
}

export interface VietnamTime {
  label: string
  range: string
  light: string
  shoot: string
  sceneLink?: string
  icon: string
}

export interface VietnamLocation {
  id: string
  name: string
  region: string
  vibe: string
  lat: number
  lon: number
  times: VietnamTime[]
  localTips: string[]
}

export interface GlossaryTerm {
  id: string
  term: string
  plain: string
  also?: string
}

export interface MenuTab {
  id: string
  label: string
  icon: string
  blurb: string
}

export interface MenuRefItem {
  id: string
  tab: string // which menu tab it lives under
  group: string // sub-grouping label
  name: string // plain-English name
  sony?: string // Sony's exact menu wording, if different
  plain: string // one-sentence plain explanation
  advanced?: boolean // tuck behind the "advanced" expander
}

export interface ScreenIcon {
  id: string
  glyph: string // which mini-SVG to draw
  label: string
  meaning: string
  group: string // e.g. "Mode & exposure", "Focus", "Battery & card"
}

export interface SearchEntry {
  id: string
  title: string
  snippet: string
  section: string
  icon: string
  route: string
  keywords: string
}
