import type { Scene, SceneCategoryDef } from './types'

export const sceneCategories: SceneCategoryDef[] = [
  { id: 'street', label: 'Street & people', icon: 'walk' },
  { id: 'food', label: 'Food & detail', icon: 'food' },
  { id: 'architecture', label: 'Architecture & temples', icon: 'temple' },
  { id: 'night', label: 'Night & low light', icon: 'moon' },
  { id: 'landscape', label: 'Landscape & water', icon: 'map' },
]

// The wizard scenarios. Settings default to Aperture Priority + Auto ISO for a beginner,
// stepping up to Manual only where it genuinely helps (long exposures at night).
export const scenes: Scene[] = [
  // ---------- STREET ----------
  {
    id: 'street-candid',
    category: 'street',
    title: 'Candid people & street life',
    blurb: 'Markets, locals, motorbikes, the everyday buzz.',
    modifier: {
      question: 'Is your subject moving?',
      options: [
        { id: 'still', label: 'Mostly still' },
        { id: 'moving', label: 'Moving (walking, riding)' },
      ],
    },
    settings: {
      still: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/5.6',
        shutter: 'Auto',
        iso: 'Auto (100–6400)',
        focusMode: 'AF-C (continuous)',
        focusArea: 'Wide',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
      moving: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/5.6',
        shutter: 'Auto (min 1/250s)',
        iso: 'Auto (100–6400)',
        focusMode: 'AF-C (continuous)',
        focusArea: 'Wide',
        drive: 'Continuous Lo',
        whiteBalance: 'Auto',
      },
    },
    why: 'f/5.6 keeps enough of the scene sharp so you do not miss focus on a fast moment. Auto ISO lets the camera keep the shutter quick. Continuous focus and Wide area let the camera grab whoever is in the frame.',
    howTo: [
      'Turn the top mode dial to A.',
      'Spin the front dial to set f/5.6.',
      'Press Fn, set Focus Mode to AF-C and Focus Area to Wide.',
      'Set ISO to Auto with an upper limit of 6400.',
    ],
    watchFor: [
      'If shots are blurry, your shutter is too slow. Raise the Auto-ISO minimum shutter to 1/250s.',
      'Shoot from the hip or wait, then react. People relax when you are not pointing right at them.',
    ],
    vietnamNote:
      'Hanoi Old Quarter and Ben Thanh Market are busy and a little dim. Do not be shy about ISO climbing, a slightly grainy sharp photo beats a clean blurry one.',
    lensNotes: {
      'kit-28-60': 'At f/5.6 here the kit lens is wide open at the long end, so ISO will climb in shade. Fine in open daylight.',
      'g-24-50': 'The 24-50 can open to f/2.8 if the light drops, dropping your ISO and keeping shutters fast.',
    },
  },
  {
    id: 'street-portrait',
    category: 'street',
    title: 'Street portrait (a person, blurred background)',
    blurb: 'A vendor, a face, someone who said yes to a photo.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/2.8–f/4 (as low as your lens allows)',
        shutter: 'Auto (min 1/160s)',
        iso: 'Auto (100–6400)',
        focusMode: 'AF-C (continuous)',
        focusArea: 'Spot / Tracking',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'A low f-number blurs the busy background and makes the person pop. Eye autofocus nails the eyes for you. A spot or tracking area tells the camera exactly who matters.',
    howTo: [
      'Mode dial to A, open the aperture as low as it goes.',
      'Fn: Focus Area to Spot or Tracking, Face/Eye Priority ON.',
      'Half-press and let the green eye box lock, then shoot.',
    ],
    watchFor: [
      'Get closer rather than zooming for a more natural look.',
      'Ask with a smile and a gesture. A nod goes a long way.',
    ],
    vietnamNote: 'Coffee vendors and market sellers are wonderfully characterful. Buy something first, then ask.',
    lensNotes: {
      'kit-28-60': 'The kit lens only reaches f/5.6 at 60mm, so the background blur is gentle. Get close and put distance behind your subject to help.',
      'g-20-70': 'At f/4 the 20-70 blurs a little more than the kit lens. Zoom to 70mm for the strongest effect.',
      'g-24-50': 'This is the 24-50 f/2.8 lens’s moment: open to f/2.8 at 50mm for the creamiest background of the three.',
    },
  },
  // ---------- FOOD ----------
  {
    id: 'food-table',
    category: 'food',
    title: 'Food on the table',
    blurb: 'Pho, banh mi, a colourful bowl in front of you.',
    modifier: {
      question: 'Where are you eating?',
      options: [
        { id: 'bright', label: 'Bright / near a window' },
        { id: 'dim', label: 'Dim little eatery' },
      ],
    },
    settings: {
      bright: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/4',
        shutter: 'Auto',
        iso: 'Auto (100–3200)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
      dim: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/2.8–f/4 (as low as possible)',
        shutter: 'Auto (min 1/80s)',
        iso: 'Auto (100–12800)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'Single focus on a spot lets you place sharpness exactly on the front of the dish. A lower f-number softens the background and rescues you in dim rooms.',
    howTo: [
      'Mode dial to A.',
      'Fn: Focus Mode AF-S, Focus Area Spot.',
      'Move the spot onto the front of the dish, half-press, recompose, shoot.',
    ],
    watchFor: [
      'Shoot from a 45-degree angle, or straight down for flat dishes.',
      'Turn off the lamp directly overhead if it is yellow and harsh. Side light from a window looks best.',
    ],
    vietnamNote: 'Street food stalls are often shaded under awnings. The "dim" setting is your friend even in the daytime.',
    lensNotes: {
      'kit-28-60': 'At f/5.6 in a dim stall the kit lens pushes ISO high. Steady your elbows on the table to allow a slower shutter.',
      'g-24-50': 'f/2.8 keeps ISO sensible in dark eateries and gives that lovely soft background behind the bowl.',
    },
  },
  // ---------- ARCHITECTURE ----------
  {
    id: 'arch-temple',
    category: 'architecture',
    title: 'Temples, buildings & alleys',
    blurb: 'Pagodas, lantern-lined streets, grand facades.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/8',
        shutter: 'Auto',
        iso: 'Auto (100–3200)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'f/8 keeps the whole scene sharp from front to back, which is what you want for buildings. Single focus on a spot lets you lock on a clean edge.',
    howTo: [
      'Mode dial to A, set f/8.',
      'Fn: AF-S, Spot.',
      'Focus on a detail at roughly a third into the scene, then shoot.',
    ],
    watchFor: [
      'Keep the camera level to stop buildings leaning. Turn on the level guide in the menu.',
      'Look for a doorway or arch to frame the shot.',
      'A polarizer cuts glare on temple ponds, glass cases and wet leaves, and deepens the sky behind a pagoda.',
    ],
    vietnamNote: 'Hoan Kiem area and HCMC’s colonial buildings shine in early light before crowds arrive.',
    lensNotes: {
      'kit-28-60': '28mm may feel tight inside temples or narrow lanes. Step back, or shoot a detail instead of the whole thing.',
      'g-20-70': 'This is where the 20-70 earns its keep: 20mm fits whole temple halls and cramped alleys the kit lens cannot.',
    },
  },
  // ---------- NIGHT ----------
  {
    id: 'night-market',
    category: 'night',
    title: 'Night markets & neon',
    blurb: 'Glowing signs, food stalls, handheld after dark.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'As low as your lens goes',
        shutter: 'Auto (min 1/100s)',
        iso: 'Auto (100–12800)',
        focusMode: 'AF-C (continuous)',
        focusArea: 'Wide',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'Wide-open aperture plus a high ISO ceiling lets you shoot handheld in the dark. A 1/100s minimum shutter keeps people from blurring.',
    howTo: [
      'Mode dial to A, aperture as low as it goes.',
      'ISO Auto, raise the ceiling to 12800.',
      'Set the Auto-ISO minimum shutter to 1/100s.',
    ],
    watchFor: [
      'Brace against a wall or pole to steady yourself.',
      'Some grain at night is normal and looks atmospheric. Do not chase a perfectly clean image.',
    ],
    vietnamNote: 'Hanoi’s weekend night market and HCMC’s Bui Vien come alive after dark. Neon makes great colour, let Auto white balance keep the mood.',
    lensNotes: {
      'kit-28-60': 'The kit lens at f/5.6 forces ISO very high at night. Expect grain, or find brighter spots under signs and lights.',
      'g-24-50': 'f/2.8 gathers twice the light of the kit lens, roughly halving your ISO and cleaning up the shot. The best night lens of the three.',
    },
  },
  {
    id: 'night-citylights',
    category: 'night',
    title: 'City lights on a tripod / steady surface',
    blurb: 'Light trails, glassy reflections, the skyline.',
    settings: {
      default: {
        mode: 'Manual (M)',
        aperture: 'f/8–f/11',
        shutter: '1–10 seconds',
        iso: 'ISO 100 (fixed)',
        focusMode: 'Manual focus (or AF-S then switch off)',
        focusArea: 'Spot',
        drive: 'Self-timer 2s',
        whiteBalance: 'Auto',
      },
    },
    why: 'On something steady you can use a long shutter and the lowest ISO for a crisp, clean image with light trails. The 2-second timer stops your finger-press wobble.',
    howTo: [
      'Rest the camera on a wall, rail or mini tripod.',
      'Mode dial to M. Set ISO 100, f/8, shutter around 2 seconds to start.',
      'Drive mode: Self-timer 2s. Focus on a bright point, then leave it.',
      'Take one, check brightness, lengthen or shorten the shutter to taste.',
    ],
    watchFor: [
      'Do not touch the camera during the exposure.',
      'Turn SteadyShot (stabilisation) OFF when on a tripod, it can cause blur.',
    ],
    vietnamNote: 'A rail by Hoan Kiem Lake or a rooftop bar in HCMC works as a makeshift tripod. A small travel tripod is worth packing.',
    lensNotes: {
      'kit-28-60': 'Lens choice barely matters here, you are at f/8 anyway. The kit lens is perfectly good for this.',
    },
  },

  // ---------- MORE STREET ----------
  {
    id: 'street-panning',
    category: 'street',
    title: 'Motorbike panning',
    blurb: 'A rider frozen sharp while the background streaks with speed.',
    settings: {
      default: {
        mode: 'Shutter Priority (S)',
        aperture: 'Auto',
        shutter: '1/30s – 1/60s',
        iso: 'Auto (100–1600)',
        focusMode: 'AF-C (continuous)',
        focusArea: 'Tracking / Zone',
        drive: 'Continuous Lo',
        whiteBalance: 'Auto',
      },
    },
    why: 'A slowish shutter blurs the background into motion streaks, while you swing the camera to keep the rider sharp. Continuous focus and a burst raise your odds of a keeper.',
    howTo: [
      'Mode dial to S, set 1/40s to start.',
      'Pick a spot with a clean background and riders passing side-on.',
      'Track a rider smoothly, fire a short burst as they pass, and keep swinging through the shot.',
    ],
    watchFor: [
      'Most frames will miss. That is normal: pan a dozen riders and keep the one that clicks.',
      'Slower shutters (1/20s) blur more but are harder to keep sharp. Start at 1/40s and experiment.',
    ],
    vietnamNote: 'Vietnam is the home of motorbike rivers. A busy roundabout in Hanoi or HCMC is a perfect panning playground.',
    lensNotes: {
      'kit-28-60': 'Fine here. Stabilisation can fight a pan, so if shots look oddly soft, try SteadyShot off.',
    },
  },
  {
    id: 'street-silhouette',
    category: 'street',
    title: 'Sunset silhouettes',
    blurb: 'A person or shape inked black against a glowing sky.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/8',
        shutter: 'Auto',
        iso: 'Auto (100–800)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'By exposing for the bright sky, your subject falls into solid black. A strong, recognisable shape (a conical hat, a cyclist, a fisher) reads best.',
    howTo: [
      'Put your subject between you and the bright sky or water.',
      'Dial exposure compensation down (−1 to −2) so the sky keeps colour and the subject goes dark.',
      'Focus on the edge of the subject, then shoot.',
    ],
    watchFor: [
      'Keep shapes separated so they do not merge into one black blob.',
      'A low angle puts your subject cleanly against the sky.',
    ],
    vietnamNote: 'Ha Long Bay sunsets and the Saigon River at dusk serve up glowing skies made for silhouettes.',
    lensNotes: {
      'g-20-70': 'The wide 20mm end lets you set a small figure against a huge dramatic sky.',
    },
  },

  // ---------- MORE FOOD / DETAIL ----------
  {
    id: 'detail-bokeh',
    category: 'food',
    title: 'Close-up detail with blur',
    blurb: 'A flower, a texta, a market trinket, with a melted background.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'As low as your lens goes',
        shutter: 'Auto (min 1/125s)',
        iso: 'Auto (100–3200)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'Getting close with the aperture wide open throws the background into soft colour and isolates one small thing. A spot focus pins exactly the detail you want sharp.',
    howTo: [
      'Open the aperture all the way and get as close as the lens will still focus.',
      'Place the spot on the most important detail, half-press, shoot.',
      'Put distance between your subject and its background for the creamiest blur.',
    ],
    watchFor: [
      'At very close range only a sliver is sharp, so focus precisely and take a few.',
      'A faster minimum shutter (1/125s) avoids blur from your own tiny movements up close.',
    ],
    vietnamNote: 'Flower markets, incense coils and lacquer trinkets are everywhere and reward a close, soft-background look.',
    lensNotes: {
      'kit-28-60': 'The kit lens does not focus super close. Back off a little and use the 60mm end for more blur.',
      'g-24-50': 'f/2.8 gives the strongest background melt of your three lenses here.',
    },
  },

  // ---------- MORE NIGHT ----------
  {
    id: 'night-lanterns',
    category: 'night',
    title: 'Lanterns & fairy lights',
    blurb: 'Glowing paper lanterns and strings of warm bulbs after dark.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/2.8 – f/4 (open)',
        shutter: 'Auto (min 1/80s)',
        iso: 'Auto (100–12800)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'A wide aperture drinks in the dim glow and turns background lights into soft orbs. Auto white balance keeps the cosy warm colour rather than scrubbing it away.',
    howTo: [
      'Open the aperture wide and focus on the nearest lantern.',
      'Let background lights fall out of focus into glowing circles.',
      'If the mood looks too orange and you dislike it, nudge white balance cooler. Otherwise keep it.',
    ],
    watchFor: [
      'Lanterns are bright against the dark, so the camera may darken everything. Add a little + exposure if the scene looks too dim.',
      'Brace yourself, the shutter will be slowish.',
    ],
    vietnamNote: 'Temple courtyards and old-town streets string up lanterns at night, especially around festivals.',
    lensNotes: {
      'g-24-50': 'f/2.8 makes the dreamiest lantern orbs and keeps ISO sensible.',
      'kit-28-60': 'At f/5.6 the orbs are smaller and ISO climbs. Get closer to your foreground lantern to help.',
    },
  },
  {
    id: 'night-fireworks',
    category: 'night',
    title: 'Fireworks & festivals',
    blurb: 'Bursts of light trails over a city or bay.',
    settings: {
      default: {
        mode: 'Manual (M)',
        aperture: 'f/8 – f/11',
        shutter: '2 – 6 seconds',
        iso: 'ISO 100 (fixed)',
        focusMode: 'Manual focus (set to far)',
        focusArea: 'Spot',
        drive: 'Self-timer 2s',
        whiteBalance: 'Auto',
      },
    },
    why: 'A long exposure on a steady camera draws each firework as a glowing trail. Low ISO and a middling aperture keep the trails crisp and the sky clean.',
    howTo: [
      'Rest the camera on something rock-steady and frame wide to catch the bursts.',
      'Manual focus to infinity (lock onto a distant light first), then leave it.',
      'Open the shutter as a burst launches; 2 to 6 seconds captures a full bloom. Use the 2-second timer to avoid shake.',
    ],
    watchFor: [
      'Too bright or blown-out trails: close the aperture more (f/11) or shorten the exposure.',
      'Turn SteadyShot off on a tripod.',
    ],
    vietnamNote: 'Tet and other festivals bring fireworks over Hanoi’s lakes and the Saigon River. Arrive early for a clear, steady spot.',
    lensNotes: {
      'kit-28-60': 'Perfectly fine: you are at f/8 to f/11, where every lens performs well.',
    },
  },

  // ---------- LANDSCAPE & WATER ----------
  {
    id: 'landscape-halong',
    category: 'landscape',
    title: 'Ha Long misty seascape',
    blurb: 'Limestone karsts fading into layers of mist over still water.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/8',
        shutter: 'Auto',
        iso: 'Auto (100–800)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'f/8 keeps the whole vista sharp from the nearest boat to the farthest karst. A low ISO keeps the soft, misty tones clean and free of grain.',
    howTo: [
      'Find a layered composition: something near, the karsts in the middle, mist behind.',
      'Set f/8 and focus about a third into the scene.',
      'Keep the horizon level (turn on the level gauge), and take a few as the boat drifts.',
    ],
    watchFor: [
      'Bright hazy sky can fool the meter into a dull grey. Add a little + exposure if it looks flat.',
      'The boat moves, so keep the shutter reasonably quick in daylight, and brace at dawn.',
      'Your polarizer shines here: twist it to cut the sea glare, deepen the water and richen the sky. See Accessories.',
    ],
    vietnamNote: 'The mistiest, most magical light is at sunrise from the boat deck. Set an early alarm and be ready.',
    lensNotes: {
      'g-20-70': 'The 20mm wide end captures the vast bay in one sweep, the kit lens cannot go that wide.',
      'kit-28-60': '28mm is a touch tight for the biggest vistas. Shoot a couple of frames to stitch, or pick a tighter composition.',
    },
  },
  {
    id: 'landscape-sunset',
    category: 'landscape',
    title: 'Sunsets over water',
    blurb: 'Warm skies and mirror reflections at the end of the day.',
    settings: {
      default: {
        mode: 'Aperture Priority (A)',
        aperture: 'f/8',
        shutter: 'Auto',
        iso: 'Auto (100–800)',
        focusMode: 'AF-S (single)',
        focusArea: 'Spot',
        drive: 'Single',
        whiteBalance: 'Auto',
      },
    },
    why: 'Exposing a touch dark keeps the sky’s colour rich and lets reflections glow. f/8 holds the whole scene sharp for that classic landscape look.',
    howTo: [
      'Compose with the sun off-centre and water in the foreground for reflections.',
      'Dial exposure compensation down a little (−0.3 to −0.7) so the colours stay saturated.',
      'Keep shooting as the light changes; the best colour often comes just after the sun dips.',
    ],
    watchFor: [
      'Do not stare at the sun through the viewfinder for long. Use the screen.',
      'The richest sky often arrives during blue hour, a few minutes after sunset. Check the Light Clock for the timing.',
      'A polarizer can tame harsh water reflections and saturate the sky, but ease it off if you want a mirror reflection to stay.',
    ],
    vietnamNote: 'Use the in-app Light Clock to catch golden and blue hour to the minute for Hanoi, HCMC or Ha Long.',
    lensNotes: {
      'g-20-70': 'Go wide for a big sky, or zoom to 70mm to make the sun larger against a silhouette.',
    },
  },
]

export const scenesByCategory = (category: string): Scene[] =>
  scenes.filter((s) => s.category === category)

export const sceneById = (id: string): Scene | undefined =>
  scenes.find((s) => s.id === id)
