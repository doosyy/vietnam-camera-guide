import type { VietnamLocation } from './types'

export const vietnamLocations: VietnamLocation[] = [
  {
    id: 'hanoi',
    name: 'Hanoi',
    region: 'North',
    lat: 21.028,
    lon: 105.804,
    vibe: 'Old-soul capital. Narrow Old Quarter lanes, lakes, motorbike rivers, soft northern light.',
    times: [
      { label: 'Early morning', range: '5:30–7:30', light: 'Soft, often misty and cool. Tai chi by Hoan Kiem Lake, markets waking up.', shoot: 'Calm street life and reflections before the crowds. Low ISO, gentle light.', sceneLink: 'street-candid', icon: 'sunrise' },
      { label: 'Midday', range: '11:00–14:00', light: 'Flat and a little hazy. Old Quarter alleys stay shaded and dim even now.', shoot: 'Duck into the alleys and markets where the shade flatters faces.', sceneLink: 'street-portrait', icon: 'sun' },
      { label: 'Golden hour', range: '16:30–17:30', light: 'Warm side-light down the long streets. The best portrait light of the day.', shoot: 'Street portraits and vendors lit warmly. Open your aperture.', sceneLink: 'street-portrait', icon: 'sunset' },
      { label: 'Night', range: 'after dark', light: 'Neon, bia hoi corners, the weekend night market glow.', shoot: 'Handheld night market scenes. Aperture wide, ISO ceiling up.', sceneLink: 'night-market', icon: 'moon' },
    ],
    localTips: [
      'The Old Quarter is dim under its tight buildings, treat it like indoor light even at noon.',
      'Train Street and the weekend night market are classic, busy, characterful spots.',
      'Northern light is softer and cooler than the south. Lovely for portraits.',
    ],
  },
  {
    id: 'hcmc',
    name: 'Ho Chi Minh City',
    region: 'South',
    lat: 10.823,
    lon: 106.63,
    vibe: 'Fast, hot, modern south. Wide boulevards, colonial facades, relentless motorbike energy.',
    times: [
      { label: 'Early morning', range: '5:30–7:30', light: 'Bright and clear quickly. Streets already humming with breakfast stalls.', shoot: 'Coffee and pho stalls, soft early light on busy pavements.', sceneLink: 'food-table', icon: 'sunrise' },
      { label: 'Midday', range: '11:00–14:00', light: 'Harsh, strong tropical sun and hard shadows.', shoot: 'Use shade, awnings and interiors. Or embrace bold shadow shapes.', sceneLink: 'arch-temple', icon: 'sun' },
      { label: 'Golden hour', range: '17:00–18:00', light: 'Warm glow on colonial buildings around District 1.', shoot: 'Architecture and street portraits as the heat eases.', sceneLink: 'arch-temple', icon: 'sunset' },
      { label: 'Night', range: 'after dark', light: 'Bui Vien neon, rooftop city lights, glossy wet-season reflections.', shoot: 'Night market energy handheld, or skyline on a rail/tripod.', sceneLink: 'night-citylights', icon: 'moon' },
    ],
    localTips: [
      'Midday sun is fierce. Shoot early and late, rest in the harsh middle.',
      'District 1 has the grand colonial buildings; Cholon (District 5) the atmospheric markets and temples.',
      'Rooftop bars give you a steady ledge for skyline shots.',
    ],
  },
  {
    id: 'halong',
    name: 'Ha Long Bay',
    region: 'Northeast coast',
    lat: 20.91,
    lon: 107.184,
    vibe: 'Emerald water and limestone karsts. Big skies, boats, mist. A landscape change of pace.',
    times: [
      { label: 'Sunrise from the boat', range: 'dawn', light: 'Misty, pastel, ethereal. Karsts fade into soft layers.', shoot: 'Moody layered seascapes. f/8 for sharpness, low ISO.', sceneLink: 'arch-temple', icon: 'sunrise' },
      { label: 'Daytime cruising', range: 'midday', light: 'Bright, often hazy over the water. Strong highlights off the sea.', shoot: 'Karst scenery and boat life. Watch your brightness, dial exposure − a touch.', sceneLink: 'arch-temple', icon: 'sun' },
      { label: 'Golden hour on deck', range: 'late afternoon', light: 'Warm low light skimming the water and rock faces.', shoot: 'Glowing karsts and silhouettes. Open up for warm portraits on deck.', sceneLink: 'street-portrait', icon: 'sunset' },
      { label: 'Night at anchor', range: 'after dark', light: 'Dark and still, lights of moored boats on black water.', shoot: 'Rest the camera on the rail, long exposure for glassy reflections.', sceneLink: 'night-citylights', icon: 'moon' },
    ],
    localTips: [
      'A wide lens shines here for the big karst vistas.',
      'The boat moves, so keep shutter quick in the daytime and brace at night.',
      'Mornings are mistiest, which is often the most magical light. Set an early alarm.',
    ],
  },
]

export const locationById = (id: string): VietnamLocation | undefined =>
  vietnamLocations.find((l) => l.id === id)
