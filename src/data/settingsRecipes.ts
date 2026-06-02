// "How to set anything" reference. The single, authoritative, step-by-step way to
// change every setting the app recommends, written in plain English. Each recipe gives
// the fastest everyday route (button / dial / Fn) AND the full menu path, both checked
// against the official Sony A7C II (ILCE-7CM2) Help Guide so they match the real camera.
//
// Accuracy notes baked in here:
//  - The A7C II's custom buttons are C1, C2 and AF-ON, plus the control wheel. There is
//    NO "AEL" button on this body.
//  - The top dials are the Mode dial and a separate Still/Movie/S&Q dial. In A mode the
//    front dial sets the aperture; in S/M the rear dial sets the shutter.
//  - Top menu tabs: Shooting, Exposure/Color, Focus, Playback, Network, Setup, My Menu.

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
  steps: string[] // the full, exact route, step by step
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
      'Find the Mode dial on top of the camera (the larger dial on the right).',
      'Turn it with your finger so the letter you want lines up with the white mark beside it.',
      'For everyday shooting, line up the A.',
    ],
    options: [
      { name: 'A (Aperture Priority)', means: 'You set the aperture (the blur), the camera sets the brightness. The best learner mode.' },
      { name: 'P (Program)', means: 'The camera picks aperture and shutter. Point and shoot.' },
      { name: 'S (Shutter Priority)', means: 'You set the shutter speed (freeze or blur motion), the camera does the rest.' },
      { name: 'M (Manual)', means: 'You set everything. For tripod night shots and fireworks.' },
      { name: '1 / 2 / 3', means: 'Your own saved setups (see "Save a whole setup to the dial").' },
    ],
    pick: 'Live in A for almost everything. You control the background blur and the camera keeps the brightness right.',
    watch: 'The A7C II has a second small dial stacked under the Mode dial for Photo / Video / S&Q. Keep it on the photo (still) icon.',
    keywords: 'mode dial aperture priority manual program PASM',
  },
  {
    id: 'aperture',
    group: 'exposure',
    title: 'Set the aperture (background blur)',
    what: 'A low f-number blurs the background and lets in more light. A high one keeps everything sharp.',
    path: 'A mode › front dial',
    fast: ['In A mode, just turn the front dial by the shutter button.'],
    steps: [
      'Put the Mode dial on A.',
      'Turn the front dial (the one near the shutter button). Lower number = more blur and more light; higher number = more of the scene sharp.',
      'The current f-number shows at the bottom of the screen, e.g. F5.6.',
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
      'In A mode the camera sets this for you, you do not need to touch it.',
      'To set it yourself, turn the Mode dial to S (you set shutter only) or M (you set both).',
      'Turn the rear dial on the top-right to change it. The screen shows it as 1/250, 1/60, or 2" for two seconds.',
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
    path: 'MENU › Exposure/Color › Exposure › ISO',
    fast: ['On a fresh camera, press the right side of the control wheel, it opens ISO. Or press Fn and choose the ISO tile.'],
    steps: [
      'Press Fn, or open MENU › Exposure/Color › Exposure › ISO.',
      'Spin to AUTO (recommended), or to a fixed number.',
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
    path: 'MENU › Exposure/Color › Exposure › ISO Range Limit',
    steps: [
      'MENU › Exposure/Color › Exposure › ISO Range Limit.',
      'Set Minimum to ISO 100.',
      'Set Maximum to 12800 for everyday use, or 6400 if you prefer cleaner files and have decent light.',
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
    path: 'MENU › Exposure/Color › Exposure › ISO AUTO Min. SS',
    steps: [
      'MENU › Exposure/Color › Exposure › ISO AUTO Min. SS.',
      'Choose a fixed speed like 1/250, or one of the FAST / SLOW presets.',
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
    fast: ['Best: assign it to the rear dial (see "Make a dial brighten/darken"), then just spin. Or press Fn and pick the Exposure Comp. tile.'],
    steps: [
      'Press Fn and choose Exposure Comp., or open MENU › Exposure/Color › Exposure › Exposure Comp.',
      'Push toward + to brighten, toward − to darken.',
    ],
    pick: '+0.3 to +0.7 if faces look too dark. −1 to −2 for silhouettes, and a touch of − keeps sunset colour rich.',
    watch: 'It stays where you leave it. If every shot is suddenly too bright or dark, check this is back at 0.',
    keywords: 'exposure compensation brightness ev brighten darken plus minus',
  },
  {
    id: 'metering',
    group: 'exposure',
    title: 'Choose how light is measured (metering)',
    what: 'Whether the camera judges brightness from the whole frame or one small spot.',
    path: 'MENU › Exposure/Color › Metering Mode',
    fast: ['Press Fn and choose the Metering tile if you added it.'],
    steps: [
      'MENU › Exposure/Color › Metering Mode.',
      'Pick a mode.',
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
    fast: ['Press Fn and choose the Focus Mode tile.'],
    steps: [
      'Press Fn and pick Focus Mode, or open MENU › Focus › Focus Mode.',
      'Choose AF-S or AF-C.',
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
    fast: ['Assign Focus Area to the C1 button (recommended) and just press C1. Or use the Fn tile.'],
    steps: [
      'Press Fn and pick Focus Area, or open MENU › Focus › Focus Area.',
      'Choose an area type.',
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
      'MENU › Focus › Subject Recognition › Subject Recog. in AF, set it to On.',
      'In the same place, set Recognition Target to Human.',
      'Now half-press: a small box appears over the nearest eye and focus follows it.',
    ],
    pick: 'On, Human. Switch the target to Animal for temple cats and street dogs.',
    watch: 'For the fastest snap-to-eye, assign Eye AF (or Tracking) to the centre button of the control wheel.',
    keywords: 'eye af face detection subject recognition human animal portrait',
  },
  {
    id: 'tracking',
    group: 'focus',
    title: 'Lock focus onto a moving subject',
    what: 'Sticks focus to one subject and follows it around the frame.',
    path: 'Focus Area › Tracking',
    steps: [
      'Set Focus Mode to AF-C and Focus Area to Tracking.',
      'Put the box over your subject and half-press. Focus now stays glued to them as they move.',
      'For a one-press version, assign "Tracking On" to the centre button of the control wheel.',
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
      'Set Focus Mode to MF (manual).',
      'Turn the focus ring on the lens. Whatever is sharp will shimmer with a coloured edge.',
      'Turn that glow on first: MENU › Focus › Peaking Display › Peaking Display, set to On.',
    ],
    pick: 'For fireworks and skylines, focus on a distant light once, then leave it. The scene stays sharp shot to shot.',
    keywords: 'manual focus peaking focus ring infinity fireworks',
  },

  // ════════════ DRIVE, TIMER & FILES ════════════
  {
    id: 'drive',
    group: 'drivefile',
    title: 'Single shot, burst or timer (drive mode)',
    what: 'One photo per press, a rapid burst, or a delayed shot.',
    path: 'MENU › Shooting › Drive Mode',
    fast: ['On a fresh camera, press the left side of the control wheel, it opens Drive Mode. Or use the Fn tile.'],
    steps: [
      'Press the left of the control wheel, press Fn and pick Drive Mode, or open MENU › Shooting › Drive Mode.',
      'Choose a mode.',
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
      'Open Drive Mode (control wheel left, Fn, or MENU › Shooting › Drive Mode).',
      'Choose Self-timer and pick 2 sec or 10 sec.',
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
      'MENU › Shooting › Image Quality/Rec › File Format.',
      'Pick your option. If you choose RAW, also set RAW File Type to Lossless Compressed (full quality, smaller file).',
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
    fast: ['Press Fn and choose the White Balance tile.'],
    steps: [
      'Press Fn and pick White Balance, or open MENU › Exposure/Color › White Balance.',
      'Choose Auto, or a preset that matches the light.',
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
      'MENU › Exposure/Color › Creative Look.',
      'Pick a look.',
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
      'MENU › Shooting › Image Stabilization › SteadyShot.',
      'Set On for handheld, Off when the camera is on a tripod or wall.',
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
      'MENU › Shooting › Shutter/Silent › Silent Mode Settings.',
      'Set Silent Mode to On to silence it; Off to bring the click back.',
    ],
    pick: 'Keep it Off normally and flick it On in quiet places. Put it on the Fn grid or a custom button so it is one tap away.',
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
      'MENU › Shooting › Shutter/Silent › Anti-flicker Set.',
      'Set Anti-flicker Shooting to On.',
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
      'MENU › Shooting › Image Quality/Rec › High ISO NR.',
      'Set it to Normal.',
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
      'MENU › Shooting › Image Quality/Rec › Lens Compensation.',
      'Set Shading Comp., Chromatic Aberration Comp. and Distortion Comp. all to Auto.',
    ],
    pick: 'All Auto, then forget it. It improves every shot in the background.',
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
      'MENU › Shooting › Shooting Display › Grid Line Display, set to On.',
      'In the same place, set Grid Line Type to Rule of 3rds.',
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
      'Press the DISP position (top of the control wheel) again and again to cycle the screen layouts until a level gauge appears.',
      'If it never appears, switch it on: MENU › Shooting › Shooting Display › DISP (Screen Disp) Set, and tick the layout with the level.',
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
      'Press the DISP position (top of the control wheel) to cycle layouts until the little graph appears.',
      'If it is missing, add it in MENU › Shooting › Shooting Display › DISP (Screen Disp) Set.',
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
      'MENU › Shooting › Shooting Display › Auto Review.',
      'Set it to Off.',
    ],
    pick: 'Off, so the screen stays live and you never miss the next moment. Use the Playback button to review when you choose.',
    keywords: 'auto review image preview after shot off freeze',
  },
  {
    id: 'beep',
    group: 'display',
    title: 'Turn off the focus beep',
    what: 'Silences the little beep when focus locks, for discreet shooting.',
    path: 'MENU › Setup › Audio Signals',
    steps: [
      'Open MENU › Setup and find Audio Signals (in the Sound group).',
      'Set it to Off, or to "Shutter" only if you still want a quiet shutter sound.',
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
      'MENU › Setup › Operation Customize › Custom Key/Dial Set.',
      'Choose the still-shooting set (the photo/camera icon).',
      'Scroll to the control you want, C1, C2, AF-ON, the control wheel’s centre / left / right / down, or a dial, and press in.',
      'Pick the job from the list. For example, highlight C1 and choose Focus Area.',
    ],
    pick: 'A great street layout: C1 → Focus Area, C2 → Silent Mode (or Subject Recog. on/off), AF-ON → AF On, centre wheel button → Eye AF or Tracking, rear dial → Exposure Comp.',
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
      'MENU › Setup › Operation Customize › Fn Menu Settings.',
      'You will see the 12 tile positions. Select a position, then choose the setting to live there.',
      'Suggested tiles: ISO, Drive Mode, Focus Mode, Focus Area, White Balance, Metering, Face/Eye Priority, Creative Look, SteadyShot, Silent Mode, Grid Line, Quality.',
    ],
    pick: 'Put the settings you change most in the top-left, nearest your thumb. Then just press Fn while shooting.',
    keywords: 'fn function menu tiles quick access layout customise',
  },
  {
    id: 'my-menu',
    group: 'buttons',
    title: 'Build your personal My Menu',
    what: 'A short personal tab so the few deeper settings you touch are always one tap away.',
    path: 'MENU › My Menu › My Menu Settings › Add Item',
    steps: [
      'Press MENU and scroll to the My Menu tab (the star, far right).',
      'Choose My Menu Settings › Add Item.',
      'Add the deep settings you actually use: ISO AUTO Min. SS, ISO Range Limit, Silent Mode, Format, Airplane Mode.',
      'Set "Display From My Menu" to On so the menu opens here first.',
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
      'MENU › Shooting › Shooting Mode › Camera Set. Memory.',
      'Choose a slot: 1, 2 or 3.',
      'Any time, turn the Mode dial to that number to recall the whole setup instantly.',
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
      'MENU › Shooting › Media › Format.',
      'Select the card and confirm with Enter.',
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
      'MENU › Setup, find Area/Date/Time Setting.',
      'Set the Area to Vietnam while you are there, then the date and time.',
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
      'MENU › Setup, find Version.',
      'Note the number, then compare it with Sony’s website at home.',
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
      'Sleep sooner to save battery: MENU › Setup › Power Setting Option › Power Save Start Time.',
      'Film longer in the heat: MENU › Setup › Power Setting Option › Auto Power OFF Temp., set to High.',
      'Run off a power bank: MENU › Setup › USB › USB Power Supply, set to On.',
    ],
    pick: 'Set Auto Power OFF Temp. to High for Vietnam, and carry a USB-C power bank.',
    keywords: 'power save battery heat temperature usb power supply overheat',
  },
]

export const recipesByGroup = (group: string): SettingRecipe[] =>
  settingRecipes.filter((r) => r.group === group)

export const recipeById = (id: string): SettingRecipe | undefined =>
  settingRecipes.find((r) => r.id === id)
