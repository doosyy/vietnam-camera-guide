import type { SearchEntry } from './types'
import { scenes } from './scenes'
import { guideChapters } from './guide'
import { hotspots } from './cameraMap'
import { setupSteps } from './setup'
import { compositionTips } from './composition'
import { vietnamLocations } from './vietnam'
import { glossaryTerms } from './glossary'
import { lenses } from './lenses'
import { menuItems } from './menuReference'
import { settingRecipes } from './settingsRecipes'
import { screenIcons } from './screenIcons'

// One searchable index built from every data file. Icons use the design icon set.
export const buildSearchIndex = (): SearchEntry[] => {
  const e: SearchEntry[] = []

  scenes.forEach((s) =>
    e.push({ id: `scene-${s.id}`, title: s.title, snippet: s.blurb, section: 'Scene Wizard', icon: 'wand', route: `/shoot/${s.id}`, keywords: `${s.category} ${s.why} settings ${s.vietnamNote ?? ''}` })
  )
  guideChapters.forEach((c) =>
    e.push({ id: `guide-${c.id}`, title: c.title, snippet: c.summary, section: 'Guide', icon: 'book', route: `/learn/guide/${c.id}`, keywords: `${c.group} ${c.sections.map((sec) => `${sec.heading} ${sec.body.join(' ')}`).join(' ')}` })
  )
  hotspots.forEach((h) =>
    e.push({ id: `camera-${h.id}`, title: h.label, snippet: h.whatItDoes, section: 'Camera Map', icon: 'camera', route: `/learn/camera?spot=${h.id}`, keywords: `${h.sonyName ?? ''} ${h.beginnerTip} button dial` })
  )
  setupSteps.forEach((s) =>
    e.push({ id: `setup-${s.id}`, title: s.title, snippet: s.why, section: 'Before You Fly', icon: 'checklist', route: `/trip/setup#${s.id}`, keywords: `${s.group} ${s.steps.join(' ')} custom button menu` })
  )
  compositionTips.forEach((c) =>
    e.push({ id: `comp-${c.id}`, title: c.title, snippet: c.idea, section: 'Composition', icon: 'frame', route: `/learn/composition#${c.id}`, keywords: `${c.how.join(' ')} ${c.vietnamExample}` })
  )
  vietnamLocations.forEach((l) =>
    e.push({ id: `vn-${l.id}`, title: l.name, snippet: l.vibe, section: 'Vietnam', icon: 'pin', route: `/trip/vietnam/${l.id}`, keywords: `${l.region} ${l.times.map((t) => `${t.label} ${t.light} ${t.shoot}`).join(' ')} ${l.localTips.join(' ')}` })
  )
  glossaryTerms.forEach((g) =>
    e.push({ id: `gloss-${g.id}`, title: g.term, snippet: g.plain, section: 'Glossary', icon: 'glossary', route: `/learn/glossary#${g.id}`, keywords: `${g.also ?? ''} definition meaning` })
  )
  lenses.forEach((l) =>
    e.push({ id: `lens-${l.id}`, title: l.name, snippet: l.oneLiner, section: 'Lenses', icon: 'aperture', route: `/trip/lenses#${l.id}`, keywords: `${l.bestFor.join(' ')} ${l.strengths.join(' ')} ${l.weaknesses.join(' ')} buy` })
  )

  menuItems.forEach((m) =>
    e.push({ id: `menu-${m.id}`, title: m.name, snippet: m.plain, section: 'Menu Reference', icon: 'checklist', route: `/learn/menu?q=${encodeURIComponent(m.name)}`, keywords: `${m.sony ?? ''} ${m.group} ${m.tab} setting menu` })
  )

  settingRecipes.forEach((r) =>
    e.push({ id: `howto-${r.id}`, title: r.title, snippet: r.what, section: 'How-To', icon: 'sliders', route: `/learn/how-to?open=${r.id}`, keywords: `${r.path} ${r.pick ?? ''} ${r.keywords ?? ''} how to set steps menu path` })
  )

  screenIcons.forEach((s) =>
    e.push({ id: `icon-${s.id}`, title: s.label, snippet: s.meaning, section: 'Icon Keys', icon: 'grid', route: `/learn/icons?q=${encodeURIComponent(s.label)}`, keywords: `${s.group} symbol icon screen display` })
  )

  return e
}

export const suggestedSearches = [
  'eye autofocus',
  'night settings',
  'set up C1',
  'blurry photos',
  'food angle',
  'low light',
]
