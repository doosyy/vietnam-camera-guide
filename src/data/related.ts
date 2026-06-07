// Curated cross-links between sections. Kept here (not scattered through pages)
// so the "see also" web is easy to read and adjust in one place.
import type { CrossLink } from '../components/ui'
import { guideChapters } from './guide'
import { recipeById } from './settingsRecipes'
import { sceneById } from './scenes'
import type { GuideChapter, Scene } from './types'

// --- Scenes -> related material, by scene category ---
const sceneCat: Record<string, CrossLink[]> = {
  street: [
    { to: '/learn/guide/eye-af', label: 'Eye AF', icon: 'focus', kind: 'chapter' },
    { to: '/learn/composition#leading-lines', label: 'Leading lines', icon: 'grid', kind: 'composition' },
    { to: '/learn/glossary#af-c', label: 'AF-C', icon: 'glossary', kind: 'glossary' },
    { to: '/trip/vietnam/hanoi', label: 'Hanoi', icon: 'pin', kind: 'location' },
  ],
  food: [
    { to: '/learn/composition#food-angle', label: 'Food angle', icon: 'grid', kind: 'composition' },
    { to: '/learn/guide/aperture-dof', label: 'Aperture & blur', icon: 'aperture', kind: 'chapter' },
    { to: '/learn/glossary#dof', label: 'Depth of field', icon: 'glossary', kind: 'glossary' },
    { to: '/learn/guide/white-balance', label: 'White balance', icon: 'palette', kind: 'chapter' },
  ],
  architecture: [
    { to: '/learn/composition#framing', label: 'Framing', icon: 'grid', kind: 'composition' },
    { to: '/trip/accessories', label: 'Polarizer', icon: 'contrast', kind: 'accessory' },
    { to: '/learn/guide/aperture-dof', label: 'Aperture & blur', icon: 'aperture', kind: 'chapter' },
    { to: '/trip/vietnam/hanoi', label: 'Hanoi temples', icon: 'pin', kind: 'location' },
  ],
  night: [
    { to: '/learn/guide/iso-noise', label: 'ISO & noise', icon: 'gauge', kind: 'chapter' },
    { to: '/trip/light', label: 'Blue hour', icon: 'sun', kind: 'tool' },
    { to: '/learn/glossary#blue-hour', label: 'Blue hour', icon: 'glossary', kind: 'glossary' },
    { to: '/trip/vietnam/hcmc', label: 'Ho Chi Minh City', icon: 'pin', kind: 'location' },
  ],
  landscape: [
    { to: '/trip/accessories', label: 'Polarizer', icon: 'contrast', kind: 'accessory' },
    { to: '/trip/light', label: 'Golden hour', icon: 'sun', kind: 'tool' },
    { to: '/learn/composition#layering', label: 'Layering', icon: 'grid', kind: 'composition' },
    { to: '/trip/vietnam/halong', label: 'Ha Long Bay', icon: 'pin', kind: 'location' },
  ],
}

export function relatedForScene(scene: Scene): CrossLink[] {
  return sceneCat[scene.category] ?? []
}

// --- Chapters -> the recipe that sets it, an example scene, and siblings ---
const chapterRecipe: Record<string, string> = {
  exposure: 'mode',
  'aperture-dof': 'aperture',
  'shutter-motion': 'shutter',
  'iso-noise': 'iso',
  metering: 'metering',
  'exp-comp': 'exp-comp',
  'white-balance': 'white-balance',
  autofocus: 'focus-mode',
  'focus-areas': 'focus-area',
  'eye-af': 'eye-af',
  'manual-focus': 'manual-focus',
  'drive-burst': 'drive',
  'silent-shutter': 'silent',
  flicker: 'anti-flicker',
  'raw-jpeg': 'file-format',
  'creative-looks': 'creative-look',
  steadyshot: 'steadyshot',
  'custom-buttons': 'custom-buttons',
}
const chapterScene: Record<string, string> = {
  'aperture-dof': 'detail-bokeh',
  'shutter-motion': 'street-panning',
  'iso-noise': 'night-market',
  'eye-af': 'street-portrait',
  'focus-areas': 'street-candid',
  'silent-shutter': 'street-candid',
  'white-balance': 'food-table',
  'drive-burst': 'street-panning',
  'creative-looks': 'arch-temple',
}

export function relatedForChapter(c: GuideChapter): CrossLink[] {
  const out: CrossLink[] = []
  const rid = chapterRecipe[c.id]
  const recipe = rid ? recipeById(rid) : undefined
  if (recipe) out.push({ to: `/learn/how-to?open=${rid}`, label: `Set it: ${recipe.title}`, icon: 'sliders', kind: 'recipe' })
  const sid = chapterScene[c.id]
  const sc = sid ? sceneById(sid) : undefined
  if (sc) out.push({ to: `/shoot/${sc.id}`, label: `Try: ${sc.title}`, icon: 'wand', kind: 'scene' })
  guideChapters
    .filter((x) => x.group === c.group && x.id !== c.id)
    .slice(0, 2)
    .forEach((s) => out.push({ to: `/learn/guide/${s.id}`, label: s.title, icon: 'book', kind: 'chapter' }))
  return out
}
