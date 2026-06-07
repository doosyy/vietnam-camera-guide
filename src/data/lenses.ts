import type { Lens, LensId } from './types'

export const lenses: Lens[] = [
  {
    id: 'kit-28-60',
    name: 'Sony FE 28-60mm f/4-5.6',
    shortName: '28–60',
    tag: 'KIT',
    focalRange: [28, 60],
    maxApertureWide: 4,
    maxApertureTele: 5.6,
    constantAperture: false,
    owned: true,
    lightGrade: 'slow',
    oneLiner: 'The tiny kit lens. Sharp and light, but it struggles when the light drops.',
    strengths: [
      'Very small and light. Collapses down so the camera fits in a jacket pocket.',
      'Genuinely sharp for a kit lens.',
      'Free with the camera, so nothing to lose.',
    ],
    weaknesses: [
      'Slow: at f/4-5.6 it lets in little light, so ISO climbs fast indoors and at night.',
      'Not wide: 28mm is a bit tight for cramped alleys and big temples.',
      'Hard to get a really blurry background.',
    ],
    bestFor: ['Daylight street', 'Travelling light', 'Markets in good light'],
  },
  {
    id: 'g-20-70',
    name: 'Sony FE 20-70mm f/4 G',
    shortName: '20–70',
    tag: 'G',
    focalRange: [20, 70],
    maxApertureWide: 4,
    maxApertureTele: 4,
    constantAperture: true,
    owned: true,
    hasFnButton: true,
    lightGrade: 'medium',
    oneLiner: 'The do-everything zoom. Goes really wide (20mm) and holds f/4 throughout.',
    strengths: [
      'Very wide at 20mm: perfect for tight alleys, temples and interiors.',
      'Constant f/4, so exposure does not change as you zoom.',
      'One lens covers wide scenes to short portraits. Great walk-around range.',
    ],
    weaknesses: [
      'f/4 is only one stop brighter than the kit lens at its widest.',
      'Bigger and pricier than the kit lens.',
    ],
    bestFor: ['Architecture & temples', 'Alleys', 'One-lens travel'],
  },
]

export const lensById = (id: LensId): Lens => lenses.find((l) => l.id === id) ?? lenses[0]
