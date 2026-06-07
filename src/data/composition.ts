import type { CompositionTip } from './types'

export const compositionTips: CompositionTip[] = [
  {
    id: 'thirds',
    title: 'Rule of thirds',
    idea: 'Place your subject off-centre, on a third line, for a more natural, balanced photo.',
    how: [
      'Imagine the frame split into 9 boxes by two lines across and two down.',
      'Put your subject where the lines cross, not dead centre.',
      'Turn on the grid (MENU → Shooting → Shooting Display → Grid Line Display) to see it while you shoot.',
    ],
    vietnamExample: 'A conical-hat vendor on the left third, the busy street trailing off to the right.',
    diagram: 'thirds',
  },
  {
    id: 'leading-lines',
    title: 'Leading lines',
    idea: 'Use lines in the scene to pull the eye toward your subject.',
    how: [
      'Look for roads, railings, rows of lanterns, market stalls.',
      'Position so the lines run from a corner toward your subject.',
      'Crouch a little, lines feel stronger from lower down.',
    ],
    vietnamExample: 'A lantern-strung lane in Hoi An, the rows of lights funnelling toward a cyclist.',
    diagram: 'leadingLines',
  },
  {
    id: 'framing',
    title: 'Frame within a frame',
    idea: 'Shoot through a doorway, arch or window to add depth and focus attention.',
    how: [
      'Find a foreground opening: a temple gate, a shutter, hanging plants.',
      'Place your subject inside that opening.',
      'Use f/8 so both the frame and the subject stay sharp.',
    ],
    vietnamExample: 'A temple courtyard seen through a round moon-gate, the worshipper centred inside it.',
    diagram: 'framing',
  },
  {
    id: 'layering',
    title: 'Layering busy scenes',
    idea: 'Build a photo with a foreground, middle and background so a chaotic street reads clearly.',
    how: [
      'Find something close (a foreground person or object).',
      'Your main subject sits in the middle.',
      'Let the background give context without stealing attention.',
    ],
    vietnamExample: 'Steam in the foreground, a pho cook in the middle, motorbikes blurred behind.',
    diagram: 'layering',
  },
  {
    id: 'food-angle',
    title: 'The right angle for food',
    idea: 'Two angles cover almost every dish: 45 degrees, or straight down.',
    how: [
      'Tall or layered food (a bowl of pho, a burger): shoot from 45 degrees.',
      'Flat spreads (a table of plates): shoot straight down from above.',
      'Get the light coming from the side or behind for tasty texture.',
    ],
    vietnamExample: 'A bowl of bun cha at 45 degrees, herbs and broth catching the window light.',
    diagram: 'foodAngle',
  },
]
