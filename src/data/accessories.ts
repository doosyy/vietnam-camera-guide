// Accessories / gear, written plain-English. Extensible: add more filters or kit
// to `accessories` (full guides) or `otherGear` (quick one-liners) over time.

export interface AccessoryUse {
  title: string
  note: string
  sceneId?: string // optional deep-link to a matching scene in the wizard
}

export interface Accessory {
  id: string
  name: string
  tag?: string // e.g. "Owned"
  icon: string
  oneLiner: string
  whatItDoes: string[] // the benefits
  howToUse: string[] // step by step
  greatFor: AccessoryUse[]
  skipWhen: string[]
  settingsNote: string
  watchFor: string[]
}

export const accessories: Accessory[] = [
  {
    id: 'cpl',
    name: 'Circular polarizer (CPL)',
    tag: 'Owned',
    icon: 'contrast',
    oneLiner: 'A filter you twist to cut glare and reflections, deepen skies and richen colour. Think sunglasses for your lens.',
    whatItDoes: [
      'Cuts glare and reflections off water, glass, wet streets and shiny leaves, so the colour underneath shows through.',
      'Deepens a blue sky and makes clouds pop, strongest when the sun is off to your side.',
      'Boosts colour and contrast, especially greens (rice paddies, jungle) and water.',
      'Lets you see into water, past the surface shine, on rivers, paddies and the bay.',
      'Trims a little haze on humid days for a cleaner, punchier image.',
    ],
    howToUse: [
      'Screw it onto the front of the lens (it must match your lens’s filter thread size, e.g. 40.5mm on the 28-60 kit, 55mm on the 24-50).',
      'Frame your shot, then slowly twist the outer ring of the filter.',
      'Watch the screen or viewfinder: reflections fade and the sky deepens, then return, as you turn.',
      'Stop where it looks best. Often halfway is plenty, full strength can look unnatural.',
      'Re-twist whenever you change direction, the effect depends on your angle to the sun.',
    ],
    greatFor: [
      { title: 'Ha Long Bay water', note: 'Cut the glare off the sea, deepen its colour and see into it, with richer skies behind the karsts.', sceneId: 'landscape-halong' },
      { title: 'Sunsets over water', note: 'Tame bright reflections and saturate the sky. Ease off if you want a mirror reflection to stay.', sceneId: 'landscape-sunset' },
      { title: 'Temples & greenery', note: 'Kill the sheen on wet leaves and lacquer, and pull glare off ponds and glass cases.', sceneId: 'arch-temple' },
      { title: 'Harsh midday', note: 'When the light is flat and hard, a polarizer adds punch to skies and foliage. A rare midday win.' },
      { title: 'Wet streets & markets', note: 'Cut the shine off puddles and wet stalls, or leave some in for moody reflections. Your call.' },
      { title: 'Shop windows & glass', note: 'See past the reflection into a window display or a glass cabinet.' },
    ],
    skipWhen: [
      'At night or indoors, it only costs you light for no benefit. Take it off.',
      'When you WANT the reflection, like neon glowing on a wet street, or a mirror-still lake.',
      'Very wide shots (around 20mm) of big skies: the blue can polarize unevenly and look blotchy. Twist back, or remove it.',
      'Any time the viewfinder gets too dark to compose comfortably in dim light.',
    ],
    settingsNote:
      'A polarizer eats roughly 1 to 1.5 stops of light. In A mode with Auto ISO the camera handles that for you, ISO rises or the shutter slows a touch. Just keep half an eye on your shutter speed in low light, and lean on the filter most in bright conditions.',
    watchFor: [
      'The effect is strongest at 90° to the sun (sun over your shoulder, lens pointing left or right). It does almost nothing pointing straight toward or away from the sun.',
      'It can erase a rainbow, so twist off the effect if you are chasing one.',
      'It is another glass surface: keep it clean, and it can add a little flare when shooting into bright lights.',
      'Leave it off for night markets, it only dims things there.',
    ],
  },
]

export interface GearItem {
  name: string
  note: string
  icon: string
}

export const otherGear: GearItem[] = [
  { name: 'Spare battery', note: 'Mirrorless cameras drink power. One charged spare gets you through a full day out.', icon: 'battery' },
  { name: 'Fast SD card + spare', note: 'A V30 or quicker card so bursts never stutter, plus a backup in your bag.', icon: 'scan' },
  { name: 'USB-C power bank', note: 'Tops the camera up on the move through its USB-C port (set USB Power Supply to On).', icon: 'battery' },
  { name: 'Microfibre cloth + blower', note: 'Wipe the lens and filter, and puff dust off the sensor between lens swaps.', icon: 'sparkle' },
  { name: 'Small travel tripod', note: 'For night skylines, light trails and long exposures over the bay.', icon: 'frame' },
  { name: 'ND filter (to consider)', note: 'A darkening filter for silky water and motion blur in daylight. A natural next buy after the polarizer.', icon: 'moon' },
]

export const accessoryById = (id: string): Accessory | undefined => accessories.find((a) => a.id === id)
