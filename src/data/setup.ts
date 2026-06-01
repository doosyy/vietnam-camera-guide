import type { SetupStep, SetupGroup } from './types'

// "Before You Fly" checklist. Grouped, each with plain-English tap-here steps.
export const setupSteps: SetupStep[] = [
  // ----- CUSTOM BUTTONS -----
  { id: 'btn-c1', group: 'buttons', title: 'C1 → Focus Area', why: 'Flip between Wide (react fast) and Spot (pin-point) focus without stopping.', steps: ['MENU → Setup → Operation Customise → Custom Key (Shooting).', 'Find C1 Button.', 'Set it to "Focus Area".'] },
  { id: 'btn-ael', group: 'buttons', title: 'AEL → Eye AF', why: 'One thumb press snaps focus to the nearest eye for instant street portraits.', steps: ['Same Custom Key menu.', 'Find AEL Button.', 'Set it to "Eye AF" (or "Face/Eye Priority in AF").'] },
  { id: 'btn-afon', group: 'buttons', title: 'AF-ON → keep as focus', why: 'Focusing with your thumb (not the shutter) is the classic street technique.', steps: ['Leave AF-ON as "AF On".', 'Optional: set Shutter half-press to NOT focus, so the thumb fully controls focus.', 'Try it for a day before committing, it takes a little getting used to.'] },
  { id: 'btn-wheel', group: 'buttons', title: 'Control wheel → ISO & Drive', why: 'Your two most-changed settings, one spin away.', steps: ['In Custom Key, set the Right key to "ISO".', 'Set the Left key to "Drive Mode".', 'Set the centre button to "Tracking On" or "Eye AF".'] },

  // ----- Fn MENU -----
  { id: 'fn-layout', group: 'fn', title: 'Lay out the Fn grid', why: 'The 12 tiles you reach by pressing Fn become your control centre, no big menu needed.', steps: ['MENU → Setup → Operation Customise → Fn Menu Settings.', 'Set the 12 tiles to: ISO, Drive Mode, Focus Mode, Focus Area, White Balance, Metering, Face/Eye Priority, Creative Look, Picture Profile off, SteadyShot, Silent Mode, Quality.', 'Put the ones you change most in the top-left, nearest your thumb.'] },

  // ----- MY MENU -----
  { id: 'mymenu', group: 'mymenu', title: 'Build your My Menu', why: 'A short personal menu so the handful of deeper settings you touch are always one tap away.', steps: ['MENU → go to the My Menu tab (the star).', 'Choose "Add Item".', 'Add: Format, Auto ISO min shutter, APS-C/Super35 crop, Silent Shooting, Airplane Mode, Wireless transfer.', 'Set "Display From My Menu" to ON so MENU opens here first.'] },
  { id: 'memory-recall', group: 'mymenu', title: 'Save a street setup to slot 1', why: 'Twist the mode dial to 1 and the whole camera is configured for street in an instant.', steps: ['Set the camera exactly how you like it for street (A mode, AF-C, Wide, Auto ISO).', 'MENU → Shooting → Shooting Mode → Camera Set. Memory.', 'Register it to slot 1. Save night to slot 2 and food to slot 3 later.'] },

  // ----- DEFAULTS -----
  { id: 'def-iso', group: 'defaults', title: 'Auto ISO range + minimum shutter', why: 'Keeps shots sharp by raising ISO only after the shutter would get too slow.', steps: ['ISO → Auto. Set the range 100 to 12800.', 'Set ISO Auto Min Shutter Speed to "Faster" or a fixed 1/250s for street.'] },
  { id: 'def-focus', group: 'defaults', title: 'Focus defaults', why: 'Sensible street defaults so you are ready the moment you lift the camera.', steps: ['Focus Mode: AF-C.', 'Focus Area: Wide.', 'Face/Eye Priority: ON, set to Human (switch to Animal for street dogs and temple cats).'] },
  { id: 'def-quality', group: 'defaults', title: 'File quality & helpers', why: 'Decide your file type and turn off little annoyances.', steps: ['Quality: RAW + JPEG (or JPEG only to save space).', 'Turn Audio Signals (beep) OFF for discreet street shooting.', 'Turn Auto Review OFF so the screen does not freeze after each shot.', 'Turn on the grid line and level guide to keep horizons straight.'] },
  { id: 'def-silent', group: 'defaults', title: 'Silent mode ready', why: 'So you can switch to a no-sound shutter for temples and candid moments.', steps: ['Add Silent Mode to your Fn menu or a custom button.', 'Leave it off by default, flick it on inside temples and quiet markets.'] },

  // ----- PACK -----
  { id: 'pack-list', group: 'pack', title: 'Pack & charge checklist', why: 'The night-before list so nothing lets you down in Vietnam.', steps: ['Battery charged + spare battery charged.', 'Memory card formatted, plus a spare card.', 'Firmware updated (check Sony’s site before you fly).', 'Lens(es) and sensor wiped clean. Pack a microfibre cloth + blower.', 'USB-C cable + power bank. A small travel tripod if you want night skylines.', 'Install the Creators’ App on your phone and pair it once.'] },
]

export const setupGroups: SetupGroup[] = [
  { id: 'buttons', label: 'Custom buttons', icon: 'click' },
  { id: 'fn', label: 'Fn menu', icon: 'grid' },
  { id: 'mymenu', label: 'My Menu & recall', icon: 'star' },
  { id: 'defaults', label: 'Default settings', icon: 'sliders' },
  { id: 'pack', label: 'Pack & charge', icon: 'luggage' },
]
