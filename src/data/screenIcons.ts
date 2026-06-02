import type { ScreenIcon } from './types'

// "What's that symbol?" — the common icons on the camera's display, with
// plain-English meanings. The `glyph` keys map to small SVGs drawn in-app.
export const screenIcons: ScreenIcon[] = [
  // — Mode & exposure
  { id: 'mode-a', glyph: 'modeA', label: 'A', meaning: 'Aperture Priority: you set the blur, the camera sets brightness.', group: 'Mode & exposure' },
  { id: 'mode-p', glyph: 'modeP', label: 'P', meaning: 'Program: the camera sets aperture and shutter, you can nudge them.', group: 'Mode & exposure' },
  { id: 'mode-s', glyph: 'modeS', label: 'S', meaning: 'Shutter Priority: you set the shutter speed, the camera does the rest.', group: 'Mode & exposure' },
  { id: 'mode-m', glyph: 'modeM', label: 'M', meaning: 'Manual: you set aperture, shutter and ISO yourself.', group: 'Mode & exposure' },
  { id: 'expcomp', glyph: 'plusminus', label: '±0.0', meaning: 'Exposure compensation: how much brighter (+) or darker (−) you have set.', group: 'Mode & exposure' },
  { id: 'iso', glyph: 'iso', label: 'ISO', meaning: 'The light-boost level. AUTO means the camera is choosing it.', group: 'Mode & exposure' },
  { id: 'meter', glyph: 'meter', label: 'Metering', meaning: 'How the camera is measuring brightness. The boxed icon shows the mode.', group: 'Mode & exposure' },

  // — Focus & drive
  { id: 'afs', glyph: 'afs', label: 'AF-S', meaning: 'Single autofocus: locks focus once. Best for still subjects.', group: 'Focus & drive' },
  { id: 'afc', glyph: 'afc', label: 'AF-C', meaning: 'Continuous autofocus: keeps adjusting. Best for moving subjects.', group: 'Focus & drive' },
  { id: 'mf', glyph: 'mf', label: 'MF', meaning: 'Manual focus: you turn the lens ring yourself.', group: 'Focus & drive' },
  { id: 'eye', glyph: 'eyebox', label: 'Green eye box', meaning: 'The camera has found and locked onto an eye. Just shoot.', group: 'Focus & drive' },
  { id: 'focus-lock', glyph: 'focusdot', label: 'Solid green dot', meaning: 'Focus is locked and the shot will be sharp.', group: 'Focus & drive' },
  { id: 'drive-burst', glyph: 'burst', label: 'Stacked frames', meaning: 'Burst (continuous) drive is on: hold the shutter for many shots.', group: 'Focus & drive' },
  { id: 'drive-timer', glyph: 'timer', label: 'Clock / timer', meaning: 'Self-timer is on: the shot fires after a short delay.', group: 'Focus & drive' },
  { id: 'silent', glyph: 'silent', label: 'Silent', meaning: 'Silent shooting is on: no shutter sound.', group: 'Focus & drive' },

  // — Battery & card
  { id: 'battery', glyph: 'battery', label: 'Battery', meaning: 'Remaining charge, shown as a percentage and a filling bar.', group: 'Battery & card' },
  { id: 'card-ok', glyph: 'card', label: 'Card / number', meaning: 'A card is in, and the number is how many photos still fit.', group: 'Battery & card' },
  { id: 'no-card', glyph: 'nocard', label: 'No Card', meaning: 'No memory card is inserted, so you cannot save photos.', group: 'Battery & card' },
  { id: 'rec', glyph: 'rec', label: 'Red REC', meaning: 'Video is recording.', group: 'Battery & card' },
  { id: 'heat', glyph: 'heat', label: 'Thermometer', meaning: 'The camera is hot and may soon pause to cool down.', group: 'Battery & card' },

  // — Quality & stabilisation
  { id: 'raw', glyph: 'raw', label: 'RAW', meaning: 'You are saving editable RAW master files.', group: 'Quality & status' },
  { id: 'rawjpeg', glyph: 'rawjpeg', label: 'RAW+J', meaning: 'You are saving both a RAW master and a ready-to-share JPEG.', group: 'Quality & status' },
  { id: 'steadyshot', glyph: 'hand', label: 'Hand / SteadyShot', meaning: 'Image stabilisation is on, steadying small shakes.', group: 'Quality & status' },
  { id: 'flicker', glyph: 'flicker', label: 'Flicker mark', meaning: 'Flickering light detected; anti-flicker will time shots to it.', group: 'Quality & status' },
  { id: 'wifi', glyph: 'wifi', label: 'Wi-Fi', meaning: 'A wireless connection is active.', group: 'Quality & status' },
  { id: 'airplane', glyph: 'airplane', label: 'Aeroplane', meaning: 'Airplane mode is on; all wireless is switched off.', group: 'Quality & status' },
]

export const screenIconGroups = [
  'Mode & exposure',
  'Focus & drive',
  'Battery & card',
  'Quality & status',
]
