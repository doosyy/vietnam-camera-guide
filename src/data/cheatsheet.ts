// Quick-reference content for the Cheat tab. Built for a 3-second glance.

export interface FixRow {
  problem: string
  fix: string
  detail: string
}

// "Something's wrong" → change this first.
export const quickFixes: FixRow[] = [
  {
    problem: 'Too dark',
    fix: 'Exposure comp +',
    detail: 'Spin the rear dial toward + until it looks right.',
  },
  {
    problem: 'Too bright',
    fix: 'Exposure comp −',
    detail: 'Spin the rear dial toward − to pull highlights back.',
  },
  {
    problem: 'Blurry (subject moving)',
    fix: 'Faster shutter',
    detail: 'Raise Auto-ISO min shutter to 1/250s, or switch to S mode at 1/500s.',
  },
  {
    problem: 'Blurry (everything)',
    fix: 'Steady up / faster shutter',
    detail: 'Brace on a wall, breathe out, or raise the min shutter speed.',
  },
  {
    problem: 'Background too sharp',
    fix: 'Lower f-number',
    detail: 'Open the aperture (e.g. f/2.8–f/4) and get closer to the subject.',
  },
  {
    problem: 'Missed focus',
    fix: 'AF-C + Wide, or Eye AF',
    detail: 'Use continuous focus; for people let Eye AF lock the eye.',
  },
]

export interface AfPick {
  moment: string
  setting: string
}

export const afPicks: AfPick[] = [
  { moment: 'People walking / street life', setting: 'AF-C + Wide' },
  { moment: 'A portrait, someone posing', setting: 'AF-C + Eye AF' },
  { moment: 'Food, still objects', setting: 'AF-S + Spot' },
  { moment: 'Buildings, temples', setting: 'AF-S + Spot, f/8' },
  { moment: 'Following one moving subject', setting: 'AF-C + Tracking' },
]

export interface StarterRow {
  label: string
  value: string
}

export const streetStarter: StarterRow[] = [
  { label: 'Mode', value: 'A (Aperture Priority)' },
  { label: 'Aperture', value: 'f/5.6 (day) · open lens (dim)' },
  { label: 'ISO', value: 'Auto 100–6400' },
  { label: 'Min shutter', value: '1/250s' },
  { label: 'Focus', value: 'AF-C + Wide' },
  { label: 'Eye AF', value: 'On the C2 or centre wheel button' },
  { label: 'Drive', value: 'Single (Cont. Lo for action)' },
  { label: 'White balance', value: 'Auto' },
]

// Low-light "what to sacrifice" ladder, in order.
export const lowLightLadder: string[] = [
  'Open the aperture as low as it goes (free light).',
  'Let the shutter slow, but stop at ~1/100s for people.',
  'Raise ISO. Grain is fine; sharp-and-grainy beats clean-and-blurry.',
  'Brace on something solid, breathe out, then shoot.',
]
