// "How to set anything" reference. The single, authoritative, step-by-step way to
// change every setting the app recommends, written in plain English. Each recipe gives
// the fastest everyday route (button / dial / Fn) AND the full menu route broken into
// one-action-at-a-time steps, all checked against the official Sony A7C II (ILCE-7CM2)
// Help Guide so they match the real camera.
//
// How the A7C II menu works (so the steps make sense):
//  - The MENU button is on the back, top-left.
//  - When MENU is open, the seven top tabs run across the top: Shooting, Exposure/Color,
//    Focus, Playback, Network, Setup, My Menu. Move across them with the front dial, or
//    by nudging the control wheel left/right at the top.
//  - Each tab has groups/pages down the screen. Nudge the control wheel up/down to move,
//    press its CENTRE to open an item, turn the wheel to change a value, press the centre
//    again to confirm, then half-press the shutter to jump back to shooting.
//
// Accuracy notes baked in:
//  - The A7C II's custom buttons are C1, C2 and AF-ON, plus the control wheel. There is
//    NO "AEL" button on this body.
//  - The top dials are the Mode dial and a separate Still/Movie/S&Q dial. In A mode the
//    front dial sets the aperture; in S/M the rear dial sets the shutter.

export interface RecipeOption {
  name: string
  means: string
}

export interface SettingRecipe {
  id: string
  group: string
  title: string
  what: string // one-line plain purpose
  path: string // compact breadcrumb shown as a chip, e.g. "MENU › Focus › Focus Mode"
  fast?: string[] // the quick everyday route (button / dial / Fn)
  steps: string[] // the full route, one action at a time
  options?: RecipeOption[] // what each choice means
  pick?: string // what to choose, and why, for Chris / Vietnam street
  watch?: string // the common gotcha
  keywords?: string // extra search terms
}

export interface RecipeGroup {
  id: string
  label: string
  icon: string
  blurb: string
}

export const recipeGroups: RecipeGroup[] = [
  { id: 'exposure', label: 'Brightness & exposure', icon: 'sun', blurb: 'Mode, aperture, shutter, ISO and how bright the photo comes out.' },
  { id: 'focus', label: 'Focus', icon: 'focus', blurb: 'Locking onto the right thing, and onto eyes and movement.' },
  { id: 'drivefile', label: 'Drive, timer & files', icon: 'layers', blurb: 'Single vs burst, the self-timer, and your file type.' },
  { id: 'colour', label: 'Colour & look', icon: 'palette', blurb: 'White balance and the built-in colour styles.' },
  { id: 'steady', label: 'Steady & quiet', icon: 'shield', blurb: 'Stabilisation, silent shooting and the set-and-forget quality helpers.' },
  { id: 'display', label: 'Screen helpers', icon: 'grid', blurb: 'Grid, level, histogram and turning off little annoyances.' },
  { id: 'buttons', label: 'Buttons & shortcuts', icon: 'click', blurb: 'Custom buttons, the Fn menu, My Menu and saved setups.' },
  { id: 'prep', label: 'Card & trip prep', icon: 'bag', blurb: 'Formatting, date and time, firmware, battery and heat.' },
]

export const settingRecipes: SettingRecipe[] = [
  // ════════════ BRIGHTNESS & EXPOSURE ════════════
  {
    id: 'mode',
    group: 'exposure',
    title: 'Choose a shooting mode',
    what: 'Decides how much the camera sets for you. A is the sweet spot for travel.',
    path: 'Top Mode dial',
    steps: [
      'Look at the top of the camera for the larger dial on the right, marked P A S M and 1 2 3.',
      'Hold the camera steady and turn that dial with your thumb and finger.',
      'Line the letter A up with the small white mark printed next to the dial.',
      'Check the bottom-left of the screen now shows "A".',
    ],
    options: [
      { name: 'A (Aperture Priority)', means: 'You set the aperture (the blur), the camera sets the brightness. The best learner mode.' },
      { name: 'P (Program)', means: 'The camera picks aperture and shutter. Point and shoot.' },
      { name: 'S (Shutter Priority)', means: 'You set the shutter speed (freeze or blur motion), the camera does the rest.' },
      { name: 'M (Manual)', means: 'You set everything. For tripod night shots and fireworks.' },
      { name: '1 / 2 / 3', means: 'Your own saved setups (see "Save a whole setup to the dial").' },
    ],
    pick: 'Live in A for almost everything. You control the background blur and the camera keeps the brightness right.',
    watch: 'A second, smaller dial is stacked under the Mode dial for Photo / Video / S&Q. Keep it on the photo (still camera) icon.',
    keywords: 'mode dial aperture priority manual program PASM',
  },
  {
    id: 'aperture',
    group: 'exposure',
    title: 'Set the aperture (background blur)',
    what: 'A low f-number blurs the background and lets in more light. A high one keeps everything sharp.',
    path: 'A mode › front dial',
    fast: ['In A mode, just turn the front dial near the shutter. Lower number = more blur.'],
    steps: [
      'Turn the top Mode dial to A first (see "Choose a shooting mode").',
      'Find the front dial: the ribbed wheel on the front of the grip, just below the shutter button.',
      'Turn it one way to lower the f-number (more blur and more light), the other way to raise it.',
      'Watch the f-number at the bottom of the screen change, for example F5.6.',
      'Stop turning when it reads the number you want.',
    ],
    pick: 'f/5.6 for street, f/8 for buildings and landscapes, the lowest number your lens allows for portraits and low light.',
    watch: 'Your 28-60 kit lens only opens to f/4 when wide and f/5.6 zoomed in, so it cannot go lower than that.',
    keywords: 'aperture f-stop f-number blur bokeh depth of field front dial',
  },
  {
    id: 'shutter',
    group: 'exposure',
    title: 'Set the shutter speed (freeze or blur motion)',
    what: 'Fast freezes movement. Slow blurs it and gathers light, but risks shake.',
    path: 'S or M mode › rear dial',
    steps: [
      'In A mode the camera sets this for you, so you can usually skip it.',
      'To set it yourself, turn the top Mode dial to S (shutter only) or M (you set everything).',
      'Find the rear dial: the wheel on the top-right corner, where your thumb rests.',
      'Turn it and watch the shutter number change at the bottom of the screen.',
      'It reads like 1/250 or 1/60 for fractions of a second, or 2" for two whole seconds.',
      'Stop at the speed you want: higher like 1/250 freezes motion, whole seconds blur it.',
    ],
    pick: '1/250s or faster to freeze people and motorbikes. 1 to 6 seconds on a tripod for light trails and fireworks.',
    watch: 'Handheld below about 1/60s, your own movement softens the shot. Brace yourself or let ISO rise.',
    keywords: 'shutter speed motion blur freeze long exposure rear dial',
  },
  {
    id: 'iso',
    group: 'exposure',
    title: 'Set ISO (the brightness boost)',
    what: 'Brightens dark scenes. Higher ISO is brighter but grainier. Auto is best for you.',
    path: 'MENU › Exposure/Color › ISO › ISO',
    fast: ['Press the left edge of the control wheel (you set it to ISO). Or press Fn and highlight the ISO tile.'],
    steps: [
      'Press the MENU button (top-left on the back).',
      'At the top of the screen, move across to the Exposure/Color tab.',
      'Move down to the ISO group and highlight ISO.',
      'Press the centre of the control wheel to open it.',
      'Turn the wheel up to ISO AUTO (recommended), or to a fixed number.',
      'Press the centre to confirm, then half-press the shutter to return to shooting.',
    ],
    pick: 'Leave it on AUTO. Then set the two limits below so Auto ISO behaves itself.',
    watch: 'If you ever dial in a fixed ISO for a tripod shot, remember to put it back to AUTO afterwards.',
    keywords: 'iso sensitivity grain noise brightness auto',
  },
  {
    id: 'iso-range',
    group: 'exposure',
    title: 'Set the Auto-ISO limits',
    what: 'Caps how high Auto ISO is allowed to climb, so night shots do not get too grainy.',
    path: 'MENU › Exposure/Color › ISO › ISO Range Limit',
    steps: [
      'Press the MENU button.',
      'Move across to the Exposure/Color tab.',
      'Move down to the ISO group and highlight ISO Range Limit.',
      'Press the centre of the wheel to open it.',
      'Highlight Minimum, press the centre, turn to ISO 100, press the centre to set it.',
      'Highlight Maximum, press the centre, turn to 12800 (or 6400), press the centre to set it.',
      'Half-press the shutter to return to shooting.',
    ],
    pick: '100 to 12800. High enough for dark markets, low enough to stay usable.',
    watch: 'This only does anything while ISO is set to AUTO.',
    keywords: 'iso range limit maximum minimum auto ceiling grain',
  },
  {
    id: 'iso-min-ss',
    group: 'exposure',
    title: 'Set the Auto-ISO minimum shutter',
    what: 'Tells Auto ISO to keep the shutter fast enough that people do not blur before it raises ISO. The single best anti-blur setting.',
    path: 'MENU › Exposure/Color › ISO › ISO AUTO Min. SS',
    steps: [
      'Press the MENU button.',
      'Move across to the Exposure/Color tab.',
      'Move down to the ISO group and highlight ISO AUTO Min. SS.',
      'Press the centre of the wheel to open it.',
      'Turn the wheel to a fixed speed like 1/250, or to one of the FAST / STD / SLOW presets.',
      'Press the centre to confirm, then half-press the shutter to return to shooting.',
    ],
    options: [
      { name: 'A number (e.g. 1/250)', means: 'The slowest shutter Auto ISO will allow before it brightens with ISO instead. Most reliable.' },
      { name: 'FAST / FASTER', means: 'Leans toward quicker shutters (less blur, a little more grain).' },
      { name: 'STD', means: 'A balanced middle.' },
      { name: 'SLOW / SLOWER', means: 'Lets the shutter drag for less grain (more blur risk).' },
    ],
    pick: '1/250 for street and daytime, 1/100 for night markets. If your people keep coming out blurry, this is the fix.',
    watch: 'Only works in P and A modes with ISO on AUTO.',
    keywords: 'iso auto minimum shutter speed blurry people sharp anti-blur',
  },
  {
    id: 'exp-comp',
    group: 'exposure',
    title: 'Brighten or darken the whole photo',
    what: 'A quick global brightness nudge (exposure compensation) without touching your other settings.',
    path: 'MENU › Exposure/Color › Exposure › Exposure Comp.',
    fast: ['Your rear dial already does this in A, S and P modes, just spin it. Or press Fn and highlight the Exposure Comp. tile.'],
    steps: [
      'Press the MENU button.',
      'Move across to the Exposure/Color tab.',
      'Move down to the Exposure group and highlight Exposure Comp.',
      'Press the centre of the wheel to open the sliding scale.',
      'Turn the wheel toward + to brighten, or toward − to darken. Watch the preview change.',
      'Press the centre to confirm.',
    ],
    pick: '+0.3 to +0.7 if faces look too dark. −1 to −2 for silhouettes, and a touch of − keeps sunset colour rich.',
    watch: 'It stays where you leave it. If every shot is suddenly too bright or dark, set this back to 0.',
    keywords: 'exposure compensation brightness ev brighten darken plus minus',
  },
  {
    id: 'metering',
    group: 'exposure',
    title: 'Choose how light is measured (metering)',
    what: 'Whether the camera judges brightness from the whole frame or one small spot.',
    path: 'MENU › Exposure/Color › Metering Mode',
    fast: ['Press Fn, highlight the Metering tile if you added it, press the centre and pick a mode.'],
    steps: [
      'Press the MENU button.',
      'Move across to the Exposure/Color tab.',
      'Move down and highlight Metering Mode.',
      'Press the centre of the wheel to open the list.',
      'Turn the wheel to Multi.',
      'Press the centre to confirm, then half-press the shutter to return to shooting.',
    ],
    options: [
      { name: 'Multi', means: 'Reads the whole scene. The best all-rounder.' },
      { name: 'Center', means: 'Leans on the middle of the frame.' },
      { name: 'Spot', means: 'Reads one tiny point only, for strong backlight.' },
    ],
    pick: 'Multi. Leave it there unless a bright background keeps fooling the camera into dark subjects.',
    keywords: 'metering mode multi spot center light measure',
  },

  // ════════════ FOCUS ════════════
  {
    id: 'focus-mode',
    group: 'focus',
    title: 'Set the focus mode (still vs moving)',
    what: 'Whether focus locks once or keeps tracking movement.',
    path: 'MENU › Focus › Focus Mode',
    fast: ['Press Fn, highlight the Focus Mode tile, press the centre, turn to AF-S or AF-C, press the centre.'],
    steps: [
      'Press the MENU button.',
      'Move across to the Focus tab.',
      'Highlight Focus Mode (near the top of the tab).',
      'Press the centre of the wheel to open it.',
      'Turn the wheel to AF-C (people and street) or AF-S (still subjects).',
      'Press the centre to confirm, then half-press the shutter to return to shooting.',
    ],
    options: [
      { name: 'AF-S (single)', means: 'Locks focus once when you half-press. For still things: food, buildings, posed portraits.' },
      { name: 'AF-C (continuous)', means: 'Keeps adjusting while you half-press. For people, street and motorbikes.' },
      { name: 'DMF', means: 'Autofocuses, then lets you fine-tune by turning the lens ring.' },
      { name: 'MF (manual)', means: 'You focus entirely by hand.' },
    ],
    pick: 'AF-C for street and people, AF-S for food and architecture.',
    keywords: 'focus mode af-s af-c continuous single manual dmf',
  },
  {
    id: 'focus-area',
    group: 'focus',
    title: 'Set the focus area (where it looks)',
    what: 'Tells the camera which part of the frame to focus on.',
    path: 'MENU › Focus › Focus Area',
    fast: ['Focus Area sits on your Fn grid: press Fn and tap it. Your C1 button cycles Wide and Spot directly (Switch Focus Area).'],
    steps: [
      'Press the MENU button.',
      'Move across to the Focus tab.',
      'Highlight Focus Area.',
      'Press the centre of the wheel to open the list.',
      'Turn the wheel to Wide, Spot, Tracking or Zone.',
      'Press the centre to confirm. If you chose Spot, you can then move the box around with the wheel edges.',
    ],
    options: [
      { name: 'Wide', means: 'The camera focuses on anything in the frame. Fast, react-and-shoot.' },
      { name: 'Spot (S/M/L)', means: 'One box you place exactly where you want. Precise.' },
      { name: 'Tracking', means: 'Lock onto a subject and follow it as it moves.' },
      { name: 'Zone', means: 'A chosen region of the frame rather than the whole thing.' },
    ],
    pick: 'Wide for candid street, Spot for food and portraits, Tracking for a single moving subject.',
    keywords: 'focus area wide spot zone tracking flexible',
  },
  {
    id: 'eye-af',
    group: 'focus',
    title: 'Turn on Face / Eye autofocus',
    what: 'The camera finds faces and locks onto the nearest eye automatically. It makes sharp portraits almost effortless.',
    path: 'MENU › Focus › Subject Recognition',
    steps: [
      'Press the MENU button.',
      'Move across to the Focus tab.',
      'Move down to the Subject Recognition group.',
      'Highlight Subject Recog. in AF, press the centre, turn to On, press the centre.',
      'Highlight Recognition Target just below, press the centre, choose Human (or Animal), press the centre.',
      'Half-press the shutter to return to shooting. A small box now appears over the nearest eye.',
    ],
    pick: 'On, Human. Switch the target to Animal for temple cats and street dogs.',
    watch: 'It is mostly automatic. Your C2 button is also set to Eye AF, so one press grabs the nearest eye the instant you want it.',
    keywords: 'eye af face detection subject recognition human animal portrait',
  },
  {
    id: 'tracking',
    group: 'focus',
    title: 'Lock focus onto a moving subject',
    what: 'Sticks focus to one subject and follows it around the frame.',
    path: 'Focus Area › Tracking',
    steps: [
      'First set Focus Mode to AF-C (see that recipe).',
      'Press the MENU button and move to the Focus tab.',
      'Highlight Focus Area and press the centre to open it.',
      'Turn the wheel to Tracking and press the centre to confirm.',
      'Back at shooting, put the box over your subject and half-press: focus now stays glued to them.',
      'For a one-press version, your 20-70 lens button is set to Tracking On: press it to grab and follow the centre subject (see the Buttons tab).',
    ],
    pick: 'Great for a single walking person or a motorbike rider coming toward you.',
    keywords: 'tracking lock-on follow subject moving af-c',
  },
  {
    id: 'manual-focus',
    group: 'focus',
    title: 'Focus by hand, with the glow guide',
    what: 'For tricky low light, fireworks, or shooting through glass and crowds where autofocus hunts.',
    path: 'MENU › Focus › Peaking Display',
    steps: [
      'Press the MENU button and move to the Focus tab.',
      'Open Focus Mode, turn to MF (manual), press the centre.',
      'Still in the Focus tab, open the Peaking Display group.',
      'Set Peaking Display to On (you can choose the colour and level here too).',
      'Half-press the shutter to return to shooting, then turn the focus ring on the lens.',
      'Whatever is sharp shimmers with a coloured edge. Turn the ring until your subject shimmers.',
    ],
    pick: 'For fireworks and skylines, focus on a distant light once, then leave the ring. The scene stays sharp shot to shot.',
    keywords: 'manual focus peaking focus ring infinity fireworks',
  },

  // ════════════ DRIVE, TIMER & FILES ════════════
  {
    id: 'drive',
    group: 'drivefile',
    title: 'Single shot, burst or timer (drive mode)',
    what: 'One photo per press, a rapid burst, or a delayed shot.',
    path: 'MENU › Shooting › Drive Mode',
    fast: ['Press Fn and tap Drive Mode (it lives on your Fn grid), turn to a mode, press the centre.'],
    steps: [
      'Press Fn and tap Drive Mode. (Or press MENU, move to the Shooting tab, highlight Drive Mode, press the centre.)',
      'Turn the wheel through the icons.',
      'Highlight Single, Continuous (Hi / Mid / Lo), or Self-timer.',
      'Press the centre to confirm.',
    ],
    options: [
      { name: 'Single', means: 'One photo each time you press. Best default.' },
      { name: 'Continuous Hi / Mid / Lo', means: 'A burst while you hold the shutter, for action.' },
      { name: 'Self-timer', means: 'A 2 or 10 second delay before the shot.' },
    ],
    pick: 'Single for most things, Continuous Lo for motorbikes and bursts of street action.',
    keywords: 'drive mode single continuous burst self-timer',
  },
  {
    id: 'self-timer',
    group: 'drivefile',
    title: 'Set a self-timer (avoid shake)',
    what: 'A short delay so pressing the button does not shake the camera on a tripod or wall.',
    path: 'MENU › Shooting › Drive Mode › Self-timer',
    steps: [
      'Press Fn and tap Drive Mode (or MENU › Shooting › Drive Mode).',
      'Turn the wheel along to the Self-timer icons (a clock symbol).',
      'Highlight the 2-second or 10-second option.',
      'Press the centre to confirm.',
      'Now press the shutter: the front lamp blinks, then the photo is taken after the delay.',
    ],
    pick: '2 seconds for night shots resting on a wall or tripod, so your finger-press does not blur it.',
    keywords: 'self timer 2 second 10 second delay tripod shake',
  },
  {
    id: 'file-format',
    group: 'drivefile',
    title: 'Choose your file type (RAW, JPEG or both)',
    what: 'Whether you get a ready-to-share photo, an editable master, or both.',
    path: 'MENU › Shooting › Image Quality/Rec › File Format',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Image Quality/Rec group and highlight File Format.',
      'Press the centre of the wheel, turn to RAW & JPEG (or JPEG, or RAW), press the centre.',
      'If you chose a RAW option, highlight RAW File Type below it, open it, pick Lossless Compressed, confirm.',
      'Half-press the shutter to return to shooting.',
    ],
    options: [
      { name: 'JPEG', means: 'Ready to share straight away. Opens on any phone or computer.' },
      { name: 'RAW', means: 'An editable master with the most detail. Needs editing software to open nicely.' },
      { name: 'RAW & JPEG', means: 'Both at once: a share-ready JPEG plus an editable RAW. Uses more card space.' },
    ],
    pick: 'RAW & JPEG if you plan to edit later, or JPEG only to fit far more on a card.',
    keywords: 'file format raw jpeg heif quality lossless compressed',
  },

  // ════════════ COLOUR & LOOK ════════════
  {
    id: 'white-balance',
    group: 'colour',
    title: 'Set colour balance (white balance)',
    what: 'Keeps colours looking natural under any kind of light.',
    path: 'MENU › Exposure/Color › White Balance',
    fast: ['Press Fn, highlight the White Balance tile, press the centre, turn to Auto or a preset, press the centre.'],
    steps: [
      'Press the MENU button.',
      'Move across to the Exposure/Color tab.',
      'Move down to the White Balance group and highlight White Balance.',
      'Press the centre of the wheel to open the list.',
      'Turn the wheel to Auto (AWB), or a preset that matches the light.',
      'Press the centre to confirm.',
    ],
    options: [
      { name: 'Auto (AWB)', means: 'The camera judges it. Excellent almost always.' },
      { name: 'Daylight / Shade / Cloudy', means: 'Presets for outdoor light, warmer as you go down the list.' },
      { name: 'Incandescent', means: 'For warm indoor bulbs, to stop everything going orange.' },
    ],
    pick: 'Auto. To keep the cosy warmth of neon and lanterns, set Priority Set in AWB to "Ambience".',
    keywords: 'white balance awb colour temperature warm cool kelvin',
  },
  {
    id: 'creative-look',
    group: 'colour',
    title: 'Pick a colour style (Creative Look)',
    what: 'Built-in colour recipes that change the mood of your JPEGs.',
    path: 'MENU › Exposure/Color › Creative Look',
    steps: [
      'Press the MENU button.',
      'Move across to the Exposure/Color tab.',
      'Move down and highlight Creative Look.',
      'Press the centre of the wheel to open the row of looks.',
      'Turn the wheel through ST, VV, BW and others, watching the live preview change.',
      'Press the centre to confirm your choice.',
    ],
    options: [
      { name: 'ST', means: 'Standard, natural colour. A safe default.' },
      { name: 'VV', means: 'Vivid and punchy, great for markets and food.' },
      { name: 'BW', means: 'Black and white.' },
      { name: 'FL / IN / others', means: 'Film-like and softer moods to experiment with.' },
    ],
    pick: 'ST for natural travel colour, VV when you want extra punch. It only changes JPEGs, your RAW stays untouched.',
    keywords: 'creative look colour style profile vivid standard black white film',
  },

  // ════════════ STEADY & QUIET ════════════
  {
    id: 'steadyshot',
    group: 'steady',
    title: 'Stabilisation on or off (SteadyShot)',
    what: 'Steadies handheld shots. You turn it off on a tripod.',
    path: 'MENU › Shooting › Image Stabilization › SteadyShot',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Image Stabilization group and highlight SteadyShot.',
      'Press the centre of the wheel to open it.',
      'Turn to On (handheld) or Off (on a tripod or wall).',
      'Press the centre to confirm.',
    ],
    pick: 'On for everyday handheld shooting. Off on a tripod, where it can actually add a little blur.',
    keywords: 'steadyshot stabilisation ibis tripod shake handheld',
  },
  {
    id: 'silent',
    group: 'steady',
    title: 'Silent shooting (no shutter sound)',
    what: 'Takes photos with no click, for temples, ceremonies and candid moments.',
    path: 'MENU › Shooting › Shutter/Silent › Silent Mode',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Shutter/Silent group and highlight Silent Mode Settings.',
      'Press the centre to open it, then highlight Silent Mode.',
      'Press the centre, turn to On (or Off to bring the click back), press the centre.',
      'Half-press the shutter to return to shooting.',
    ],
    pick: 'Keep it Off normally and flick it On in quiet places. Your wheel-down button is set to Silent Mode, so it is one press away.',
    watch: 'In fully silent mode, very fast movement can look slightly skewed. Fine for street and people.',
    keywords: 'silent mode quiet electronic shutter no sound discreet temple',
  },
  {
    id: 'anti-flicker',
    group: 'steady',
    title: 'Stop banding under indoor lights',
    what: 'Removes the dark stripes that fast-flickering LED, market and shop lights can leave across a photo.',
    path: 'MENU › Shooting › Shutter/Silent › Anti-flicker Set.',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Shutter/Silent group and highlight Anti-flicker Set.',
      'Press the centre to open it, then highlight Anti-flicker Shooting.',
      'Press the centre, turn to On, press the centre.',
      'Half-press the shutter to return to shooting.',
    ],
    pick: 'On. It quietly saves a lot of indoor and night-market shots. Set it once and forget it.',
    keywords: 'anti-flicker banding stripes led fluorescent indoor lights',
  },
  {
    id: 'high-iso-nr',
    group: 'steady',
    title: 'Night grain smoothing (High ISO NR)',
    what: 'Cleans up the grain that appears in dark, high-ISO shots.',
    path: 'MENU › Shooting › Image Quality/Rec › High ISO NR',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Image Quality/Rec group and highlight High ISO NR.',
      'Press the centre of the wheel to open it.',
      'Turn to Normal.',
      'Press the centre to confirm.',
    ],
    pick: 'Normal. It cleans night shots without smearing away detail.',
    keywords: 'high iso noise reduction nr grain night smoothing',
  },
  {
    id: 'lens-comp',
    group: 'steady',
    title: 'Auto lens fixes (Lens Compensation)',
    what: 'Quietly corrects darkened corners, colour fringing and slight bending at the edges of your lens.',
    path: 'MENU › Shooting › Image Quality/Rec › Lens Compensation',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Image Quality/Rec group and highlight Lens Compensation.',
      'Press the centre to open it. You will see three rows.',
      'Open Shading Comp. and set it to Auto. Confirm.',
      'Do the same for Chromatic Aberration Comp. (Auto) and Distortion Comp. (Auto).',
      'Half-press the shutter to return to shooting.',
    ],
    pick: 'All three on Auto, then forget it. It improves every shot in the background.',
    keywords: 'lens compensation shading vignette chromatic aberration distortion auto',
  },

  // ════════════ SCREEN HELPERS ════════════
  {
    id: 'grid',
    group: 'display',
    title: 'Turn on framing grid lines',
    what: 'A grid over the screen to help you level horizons and place subjects.',
    path: 'MENU › Shooting › Shooting Display › Grid Line Display',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Shooting Display group and highlight Grid Line Display.',
      'Press the centre, turn to On, press the centre.',
      'Highlight Grid Line Type just below, press the centre, choose Rule of 3rds, press the centre.',
      'Half-press the shutter to return to shooting.',
    ],
    pick: 'On, Rule of 3rds. The most useful guide for straight, well-placed photos.',
    keywords: 'grid lines rule of thirds framing horizon level guide',
  },
  {
    id: 'level',
    group: 'display',
    title: 'Show the level gauge (straight horizons)',
    what: 'An on-screen spirit level so buildings and horizons are not wonky.',
    path: 'DISP button › Shooting Display › DISP Set',
    steps: [
      'While shooting, find the DISP button: it is the top edge of the control wheel.',
      'Press it once. The information shown on screen changes layout.',
      'Keep pressing it to cycle the layouts, until a level bar appears across the middle.',
      'If a level never appears, press MENU and move to the Shooting tab.',
      'Open Shooting Display › DISP (Screen Disp) Set, and tick the layouts that include the Level.',
      'Press the centre to confirm.',
    ],
    pick: 'Keep a layout with the level showing, especially for temples and Ha Long horizons.',
    keywords: 'level gauge horizon straight tilt spirit level disp',
  },
  {
    id: 'histogram',
    group: 'display',
    title: 'Show the brightness graph (histogram)',
    what: 'A live graph telling you if the photo is too bright or too dark.',
    path: 'DISP button',
    steps: [
      'While shooting, find the DISP button: the top edge of the control wheel.',
      'Press it to cycle the screen layouts.',
      'Keep pressing until a small graph appears in a corner of the screen.',
      'If it never shows, press MENU › Shooting tab › Shooting Display › DISP (Screen Disp) Set.',
      'Tick a layout that includes the Histogram, then press the centre to confirm.',
    ],
    pick: 'Once you are comfortable: a hill jammed hard to the right means too bright, hard to the left means too dark.',
    keywords: 'histogram brightness graph exposure clipping highlights',
  },
  {
    id: 'auto-review',
    group: 'display',
    title: 'Stop the photo freezing the screen',
    what: 'By default the camera shows each shot for a moment after you take it, which slows you down.',
    path: 'MENU › Shooting › Shooting Display › Auto Review',
    steps: [
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Shooting Display group and highlight Auto Review.',
      'Press the centre of the wheel to open it.',
      'Turn to Off.',
      'Press the centre to confirm.',
    ],
    pick: 'Off, so the screen stays live and you never miss the next moment. Use the Playback button to review when you choose.',
    keywords: 'auto review image preview after shot off freeze',
  },
  {
    id: 'beep',
    group: 'display',
    title: 'Turn off the focus beep',
    what: 'Silences the little beep when focus locks, for discreet shooting.',
    path: 'MENU › Setup › Sound › Audio signals',
    steps: [
      'Press the MENU button.',
      'Move across to the Setup tab.',
      'Move down to find Audio signals (in the Sound group).',
      'Press the centre of the wheel to open it.',
      'Turn to Off (or to "Shutter" for a quiet click only).',
      'Press the centre to confirm.',
    ],
    pick: 'Off for candid street and temples.',
    keywords: 'audio signal beep sound off focus confirmation discreet',
  },

  // ════════════ BUTTONS & SHORTCUTS ════════════
  {
    id: 'custom-buttons',
    group: 'buttons',
    title: 'Assign your custom buttons',
    what: 'Put your most-used jobs on buttons so you almost never open the big menu.',
    path: 'MENU › Setup › Operation Customize › Custom Key/Dial Set.',
    steps: [
      'Press the MENU button.',
      'Move across to the Setup tab.',
      'Move down to the Operation Customize group and highlight Custom Key/Dial Set. Press the centre.',
      'Choose the still-shooting set (the photo / camera icon along the top).',
      'On the picture of the camera, move to the control you want, for example C1, and press the centre.',
      'Turn the wheel through the long list of jobs, highlight one (e.g. Focus Area), press the centre.',
      'Repeat for each button you want, then half-press the shutter to return to shooting.',
    ],
    pick: 'Your photography layout: C1 → Switch Focus Area, C2 → Eye AF, AF-ON → AF-On + Tracking, wheel centre → Focus Standard, wheel left → ISO, wheel right → APS-C crop, wheel down → Silent, MOVIE → AE Lock. The Buttons tab walks you through it.',
    watch: 'Your A7C II has C1 and C2 buttons (and AF-ON), not a separate "AEL" button. C1 sits by your right thumb on the back; C2 doubles as the trash button.',
    keywords: 'custom key button c1 c2 af-on assign reassign control wheel',
  },
  {
    id: 'fn-menu',
    group: 'buttons',
    title: 'Lay out your Fn quick menu',
    what: 'The 12 tiles behind the Fn button become your control centre, so you skip the giant menu.',
    path: 'MENU › Setup › Operation Customize › Fn Menu Settings',
    steps: [
      'Press the MENU button.',
      'Move across to the Setup tab.',
      'Move down to the Operation Customize group and highlight Fn Menu Settings. Press the centre.',
      'You will see the 12 tile slots laid out in two rows.',
      'Highlight a slot and press the centre.',
      'Turn the wheel to the setting you want there and press the centre.',
      'Repeat for each slot, then half-press to exit. Press Fn while shooting to use it.',
    ],
    pick: 'Put the settings you change most in the top-left, nearest your thumb. Your 12 tiles: Drive Mode, White Balance, Focus Area, Metering Mode, Creative Look, AF/MF Selector, Grid Line, ISO AUTO Min. SS, Focus Mode, Subject Recognition, Exposure Comp., Finder/Monitor Sel.',
    keywords: 'fn function menu tiles quick access layout customise',
  },
  {
    id: 'my-menu',
    group: 'buttons',
    title: 'Build your personal My Menu',
    what: 'A short personal tab so the few deeper settings you touch are always one tap away.',
    path: 'MENU › My Menu › My Menu Settings › Add Item',
    steps: [
      'Press the MENU button.',
      'Move all the way across to the My Menu tab (the star, far right).',
      'Highlight My Menu Settings, press the centre, then choose Add Item.',
      'Scroll the list, highlight a setting to pin (e.g. ISO AUTO Min. SS), press the centre to add it.',
      'Repeat to add ISO Range Limit, Silent Mode, Format and Airplane Mode, then back out.',
      'Highlight Display From My Menu, open it, set to On, so the menu opens here first.',
    ],
    keywords: 'my menu custom tab pinned favourites add item star',
  },
  {
    id: 'memory-recall',
    group: 'buttons',
    title: 'Save a whole setup to the dial',
    what: 'Store a complete camera configuration on a number, so one twist of the dial sets everything at once.',
    path: 'MENU › Shooting › Shooting Mode › Camera Set. Memory',
    steps: [
      'First set the camera exactly how you like it (for street: A mode, AF-C, Wide, Auto ISO, your min shutter).',
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Shooting Mode group and highlight Camera Set. Memory. Press the centre.',
      'Turn the wheel to a slot number (1, 2 or 3) and press the centre to save everything to it.',
      'Any time later, just turn the top Mode dial to that number to recall the whole setup.',
    ],
    pick: 'Slot 1 = street, Slot 2 = night, Slot 3 = food. The fastest way to reconfigure the entire camera.',
    keywords: 'memory recall camera setting memory mr1 mr2 mr3 mode dial save setup',
  },

  // ════════════ CARD & TRIP PREP ════════════
  {
    id: 'format',
    group: 'prep',
    title: 'Format (wipe) a memory card',
    what: 'Clears a card completely and prepares it for the camera. Do this once on each fresh card.',
    path: 'MENU › Shooting › Media › Format',
    steps: [
      'First copy off anything you want to keep, this erases the whole card.',
      'Press the MENU button.',
      'Move across to the Shooting tab.',
      'Move down to the Media group and highlight Format. Press the centre.',
      'Choose the card slot, then highlight Enter and press the centre.',
      'Wait for it to finish. Do not turn the camera off while it works.',
    ],
    pick: 'Always format in the camera, not on a computer. Do it before the trip on every card.',
    keywords: 'format wipe erase memory card sd prepare',
  },
  {
    id: 'datetime',
    group: 'prep',
    title: 'Set the date, time and zone',
    what: 'So your photos are stamped with the correct local time while you travel.',
    path: 'MENU › Setup › Area/Date/Time Setting',
    steps: [
      'Press the MENU button.',
      'Move across to the Setup tab.',
      'Move down to find Area/Date/Time Setting and press the centre.',
      'Set Area first: turn to Vietnam while you are there, then confirm.',
      'Move right through the date and time fields, turning the wheel to set each.',
      'Highlight Enter / OK and press the centre to save.',
    ],
    keywords: 'date time area timezone clock vietnam setting',
  },
  {
    id: 'firmware',
    group: 'prep',
    title: 'Check the firmware (software) version',
    what: 'Sony improves the camera with free updates. Worth checking before you fly.',
    path: 'MENU › Setup › Version',
    steps: [
      'Press the MENU button.',
      'Move across to the Setup tab.',
      'Scroll to the bottom and highlight Version. Press the centre.',
      'Read the number shown, for example "Ver. 2.00".',
      'At home, compare it with the A7C II page on Sony’s website.',
      'If there is a newer one, update from a computer with the camera plugged in by USB-C.',
    ],
    keywords: 'firmware version update software upgrade',
  },
  {
    id: 'power-heat',
    group: 'prep',
    title: 'Battery saving & heat tolerance',
    what: 'A few power settings worth tuning for long, hot days out shooting.',
    path: 'MENU › Setup › Power Setting Option',
    steps: [
      'Press the MENU button and move across to the Setup tab.',
      'Sleep sooner to save battery: find Power Save Start Time, open it, pick a short delay, confirm.',
      'Film longer in the heat: find Auto Power OFF Temp., open it, set to High, confirm.',
      'Run off a power bank: find USB Power Supply, open it, set to On, confirm.',
      'Half-press the shutter to return to shooting.',
    ],
    pick: 'Set Auto Power OFF Temp. to High for Vietnam, and carry a USB-C power bank.',
    keywords: 'power save battery heat temperature usb power supply overheat',
  },
]

export const recipesByGroup = (group: string): SettingRecipe[] =>
  settingRecipes.filter((r) => r.group === group)

export const recipeById = (id: string): SettingRecipe | undefined =>
  settingRecipes.find((r) => r.id === id)
