// Data for the "My Buttons" tool: the A7C II's assignable controls, the jobs you can
// put on them, how fast each control is to reach, and the recommended setup for a
// Vietnam trip (by goal). All plain-English, checked against the A7C II Help Guide.
//
// Reachability ("how quickly you can use it"):
//   instant  = a single press/turn you do by feel, eye still on the scene
//   two-step = press Fn first, then tap the tile
//   awkward  = reachable, but placed where you would not use it in a hurry

export type Reach = 'instant' | 'two-step' | 'awkward'
export type ControlGroup = 'thumb' | 'wheel' | 'dial' | 'movie' | 'fn'
export type Goal = 'balanced' | 'street' | 'portrait' | 'night'

export interface ButtonControl {
  id: string
  label: string
  sony?: string
  group: ControlGroup
  reach: Reach
  where: string // plain-English location + how to hit it fast
  takes: 'button' | 'dial' // which kind of job fits here
  recommendable?: boolean // included in the suggested-setup mapping
}

export interface ButtonFunction {
  id: string
  label: string
  sony?: string
  blurb: string
  fits: 'button' | 'dial' | 'both'
  essential?: boolean // should be reachable fast somewhere
  helps?: Goal[] // which goals it especially serves
}

export const goals: { id: Goal; label: string; blurb: string }[] = [
  { id: 'balanced', label: 'Balanced', blurb: 'A bit of everything, no single priority.' },
  { id: 'street', label: 'Candid street', blurb: 'Grab people and motorbikes fast.' },
  { id: 'portrait', label: 'Portraits', blurb: 'Sharp people, eyes and blur.' },
  { id: 'night', label: 'Night & low light', blurb: 'Markets, neon and quiet temples.' },
]

// ─────────────────────────── CONTROLS ───────────────────────────
export const controlGroups: { id: ControlGroup; label: string }[] = [
  { id: 'thumb', label: 'Thumb buttons' },
  { id: 'wheel', label: 'Control wheel' },
  { id: 'dial', label: 'Dials' },
  { id: 'movie', label: 'Movie button' },
  { id: 'fn', label: 'Fn menu (12 tiles)' },
]

export const controls: ButtonControl[] = [
  { id: 'c1', label: 'C1 button', sony: 'C1', group: 'thumb', reach: 'instant', where: 'Top-back, right of the viewfinder. Falls under your thumb.', takes: 'button', recommendable: true },
  { id: 'c2', label: 'C2 button', sony: 'C2 (also Delete)', group: 'thumb', reach: 'instant', where: 'Lower-right back. Doubles as the trash button in playback.', takes: 'button', recommendable: true },
  { id: 'af-on', label: 'AF-ON button', sony: 'AF-ON', group: 'thumb', reach: 'instant', where: 'Top-right back. Made for thumb-focusing (back-button focus).', takes: 'button', recommendable: true },

  { id: 'wheel-center', label: 'Wheel: centre', sony: 'Center Button', group: 'wheel', reach: 'instant', where: 'Press the middle of the control wheel straight in. The quickest of all.', takes: 'button', recommendable: true },
  { id: 'wheel-left', label: 'Wheel: left', sony: 'Left Button', group: 'wheel', reach: 'instant', where: 'Press the left edge of the control wheel.', takes: 'button', recommendable: true },
  { id: 'wheel-right', label: 'Wheel: right', sony: 'Right Button', group: 'wheel', reach: 'instant', where: 'Press the right edge of the control wheel.', takes: 'button', recommendable: true },
  { id: 'wheel-down', label: 'Wheel: down', sony: 'Down Button', group: 'wheel', reach: 'instant', where: 'Press the bottom edge of the control wheel.', takes: 'button', recommendable: true },
  { id: 'wheel-up', label: 'Wheel: up', sony: 'Up Button', group: 'wheel', reach: 'instant', where: 'Press the top edge of the control wheel. This is DISP by default.', takes: 'button', recommendable: true },

  { id: 'front-dial', label: 'Front dial', sony: 'Front Dial', group: 'dial', reach: 'instant', where: 'Ribbed wheel on the front of the grip, under your index finger.', takes: 'dial', recommendable: true },
  { id: 'rear-dial', label: 'Rear dial', sony: 'Rear Dial', group: 'dial', reach: 'instant', where: 'Wheel on the top-right corner, under your thumb.', takes: 'dial', recommendable: true },

  { id: 'movie', label: 'MOVIE button', sony: 'MOVIE', group: 'movie', reach: 'awkward', where: 'On top behind the shutter. Fine for a job you rarely change.', takes: 'button', recommendable: true },

  { id: 'fn-1', label: 'Fn tile 1', group: 'fn', reach: 'two-step', where: 'Press Fn, then the top-left tile. The fastest Fn slot.', takes: 'button' },
  { id: 'fn-2', label: 'Fn tile 2', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 2nd tile on the top row.', takes: 'button' },
  { id: 'fn-3', label: 'Fn tile 3', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 3rd tile on the top row.', takes: 'button' },
  { id: 'fn-4', label: 'Fn tile 4', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 4th tile on the top row.', takes: 'button' },
  { id: 'fn-5', label: 'Fn tile 5', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 5th tile on the top row.', takes: 'button' },
  { id: 'fn-6', label: 'Fn tile 6', group: 'fn', reach: 'two-step', where: 'Press Fn, then the top-right tile.', takes: 'button' },
  { id: 'fn-7', label: 'Fn tile 7', group: 'fn', reach: 'two-step', where: 'Press Fn, then the bottom-left tile.', takes: 'button' },
  { id: 'fn-8', label: 'Fn tile 8', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 2nd tile on the bottom row.', takes: 'button' },
  { id: 'fn-9', label: 'Fn tile 9', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 3rd tile on the bottom row.', takes: 'button' },
  { id: 'fn-10', label: 'Fn tile 10', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 4th tile on the bottom row.', takes: 'button' },
  { id: 'fn-11', label: 'Fn tile 11', group: 'fn', reach: 'two-step', where: 'Press Fn, then the 5th tile on the bottom row.', takes: 'button' },
  { id: 'fn-12', label: 'Fn tile 12', group: 'fn', reach: 'two-step', where: 'Press Fn, then the bottom-right tile.', takes: 'button' },
]

export const fnControlIds = controls.filter((c) => c.group === 'fn').map((c) => c.id)

// ─────────────────────────── FUNCTIONS (jobs) ───────────────────────────
export const functions: ButtonFunction[] = [
  { id: 'not-set', label: 'Not set', blurb: 'Nothing assigned, or left on the camera default.', fits: 'both' },
  { id: 'af-on-fn', label: 'AF On (thumb focus)', sony: 'AF On', blurb: 'Focus with your thumb instead of the shutter. The classic street technique.', fits: 'button', helps: ['street', 'portrait'] },
  { id: 'eye-af', label: 'Eye AF', sony: 'Face/Eye Priority in AF', blurb: 'One press snaps focus to the nearest eye. Makes sharp people almost automatic.', fits: 'button', essential: true, helps: ['street', 'portrait'] },
  { id: 'focus-area', label: 'Focus Area', sony: 'Focus Area', blurb: 'Flip between Wide (react fast) and Spot (pin-point) focus.', fits: 'button', essential: true, helps: ['street', 'portrait', 'night'] },
  { id: 'focus-mode', label: 'Focus Mode', sony: 'Focus Mode', blurb: 'Switch between AF-C (moving) and AF-S (still) without the menu.', fits: 'button' },
  { id: 'tracking', label: 'Tracking On', sony: 'Tracking On', blurb: 'Lock focus onto a subject and follow it around the frame.', fits: 'button', helps: ['street', 'portrait'] },
  { id: 'focus-std', label: 'Focus Standard', sony: 'Focus Standard', blurb: 'Start focusing, or move the focus box when in Spot.', fits: 'button' },
  { id: 'iso', label: 'ISO', sony: 'ISO', blurb: 'Jump straight to the brightness boost when light changes.', fits: 'both', essential: true, helps: ['night'] },
  { id: 'drive', label: 'Drive Mode', sony: 'Drive Mode', blurb: 'Switch between single, burst and the self-timer.', fits: 'both', essential: true, helps: ['street'] },
  { id: 'white-balance', label: 'White Balance', sony: 'White Balance', blurb: 'Fix colour fast under odd market and neon light.', fits: 'both', helps: ['night'] },
  { id: 'metering', label: 'Metering Mode', sony: 'Metering Mode', blurb: 'Change how the camera measures brightness.', fits: 'both' },
  { id: 'exp-comp', label: 'Exposure Comp.', sony: 'Exposure Comp.', blurb: 'Brighten or darken the whole shot on the fly. Brilliant on a dial.', fits: 'both', essential: true, helps: ['street', 'portrait', 'night'] },
  { id: 'aperture', label: 'Aperture', sony: 'Aperture', blurb: 'Set the background blur. The natural job for the front dial in A mode.', fits: 'dial', helps: ['portrait'] },
  { id: 'shutter', label: 'Shutter Speed', sony: 'Shutter Speed', blurb: 'Set the shutter directly. Useful on a dial in S or M mode.', fits: 'dial' },
  { id: 'silent', label: 'Silent Mode', sony: 'Silent Mode', blurb: 'Flick the shutter sound off for temples and candid moments.', fits: 'button', essential: true, helps: ['night'] },
  { id: 'creative-look', label: 'Creative Look', sony: 'Creative Look', blurb: 'Switch colour styles, e.g. natural to punchy or black & white.', fits: 'both' },
  { id: 'subject-recog', label: 'Subject Recog. toggle', sony: 'Subject Recognition', blurb: 'Turn subject recognition on/off, or swap Human and Animal.', fits: 'button', helps: ['street'] },
  { id: 'focus-magnifier', label: 'Focus Magnifier', sony: 'Focus Magnifier', blurb: 'Zoom the preview to nail manual focus on fine detail.', fits: 'button', helps: ['portrait'] },
  { id: 'aps-c', label: 'APS-C crop', sony: 'APS-C S35 Shooting', blurb: 'Crop in for extra reach, like a built-in teleconverter.', fits: 'button' },
  { id: 'grid', label: 'Grid Line', sony: 'Grid Line Display', blurb: 'Toggle the framing grid for level horizons.', fits: 'button' },
  { id: 'finder-monitor', label: 'Finder / Monitor', sony: 'Finder/Monitor Sel.', blurb: 'Force the viewfinder or the screen on.', fits: 'button' },
  { id: 'my-dial', label: 'My Dial', sony: 'My Dial', blurb: 'Temporarily turn a dial into a different control while held.', fits: 'dial' },
  { id: 'disp', label: 'DISP (screen info)', sony: 'DISP', blurb: 'Cycle the on-screen layouts (level, histogram, clean view).', fits: 'button' },
  { id: 'product-showcase', label: 'Product Showcase', sony: 'Product Showcase Set', blurb: 'For video: hands focus to an item held up to the lens.', fits: 'button' },
  { id: 'custom', label: 'Something else', blurb: 'A job not in this list. Recorded so you remember it is taken.', fits: 'both' },
]

export const functionById = (id: string): ButtonFunction | undefined => functions.find((f) => f.id === id)
export const controlById = (id: string): ButtonControl | undefined => controls.find((c) => c.id === id)

// Functions that should be reachable on a fast control (or at least an Fn tile).
export const essentialFunctionIds = functions.filter((f) => f.essential).map((f) => f.id)

// ─────────────────────────── RECOMMENDED SETUPS ───────────────────────────
// Recommended job per physical control, by goal.
export const recommendations: Record<Goal, Record<string, string>> = {
  balanced: {
    c1: 'focus-area', c2: 'silent', 'af-on': 'af-on-fn',
    'wheel-center': 'eye-af', 'wheel-left': 'drive', 'wheel-right': 'iso', 'wheel-down': 'white-balance', 'wheel-up': 'disp',
    'front-dial': 'aperture', 'rear-dial': 'exp-comp', movie: 'aps-c',
  },
  street: {
    c1: 'focus-area', c2: 'eye-af', 'af-on': 'af-on-fn',
    'wheel-center': 'tracking', 'wheel-left': 'drive', 'wheel-right': 'iso', 'wheel-down': 'exp-comp', 'wheel-up': 'disp',
    'front-dial': 'aperture', 'rear-dial': 'exp-comp', movie: 'silent',
  },
  portrait: {
    c1: 'focus-area', c2: 'eye-af', 'af-on': 'af-on-fn',
    'wheel-center': 'tracking', 'wheel-left': 'drive', 'wheel-right': 'iso', 'wheel-down': 'focus-magnifier', 'wheel-up': 'disp',
    'front-dial': 'aperture', 'rear-dial': 'exp-comp', movie: 'aps-c',
  },
  night: {
    c1: 'focus-area', c2: 'silent', 'af-on': 'af-on-fn',
    'wheel-center': 'eye-af', 'wheel-left': 'drive', 'wheel-right': 'iso', 'wheel-down': 'exp-comp', 'wheel-up': 'disp',
    'front-dial': 'aperture', 'rear-dial': 'exp-comp', movie: 'creative-look',
  },
}

// Recommended 12 Fn tiles, in order (top-left first). Tweaked slightly per goal.
const fnBase = ['iso', 'drive', 'focus-mode', 'focus-area', 'white-balance', 'metering', 'eye-af', 'creative-look', 'silent', 'grid', 'aps-c', 'exp-comp']
export const fnRecommendedFor = (goal: Goal): string[] => {
  if (goal === 'night') return ['iso', 'white-balance', 'silent', 'focus-area', 'drive', 'metering', 'eye-af', 'creative-look', 'exp-comp', 'grid', 'focus-mode', 'aps-c']
  if (goal === 'portrait') return ['focus-area', 'eye-af', 'drive', 'iso', 'white-balance', 'creative-look', 'focus-mode', 'metering', 'focus-magnifier', 'silent', 'grid', 'exp-comp']
  if (goal === 'street') return ['iso', 'drive', 'focus-area', 'focus-mode', 'eye-af', 'subject-recog', 'white-balance', 'metering', 'silent', 'creative-look', 'grid', 'exp-comp']
  return fnBase
}

export const recommendedFor = (goal: Goal, controlId: string): string | undefined => {
  if (controlId.startsWith('fn-')) {
    const idx = Number(controlId.slice(3)) - 1
    return fnRecommendedFor(goal)[idx]
  }
  return recommendations[goal][controlId]
}
