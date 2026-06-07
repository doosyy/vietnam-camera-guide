import type { SetupStep, SetupGroup } from './types'

// "Before You Fly" checklist. Grouped, each with plain-English tap-here steps.
export const setupSteps: SetupStep[] = [
  // ----- CUSTOM BUTTONS -----
  { id: 'btn-setup', group: 'buttons', title: 'Set your custom buttons', why: 'A focus-first layout so the camera is quick in the street. The Buttons tab walks you through every one tap by tap; this is the summary.', steps: ['MENU → Setup → Operation Customize → Custom Key/Dial Set. (the still-photo set).', 'AF-ON → AF-On + Tracking. C2 → Eye AF. Wheel centre → Focus Standard (re-centre / clear a tracking lock).', 'C1 → Switch Focus Area. Wheel right → APS-C S35 Shooting. Wheel left → ISO. Wheel down → Silent Mode. Wheel up stays DISP.', 'MOVIE → AEL toggle. On the 20-70 G, the lens focus-hold button → Tracking On.', 'Drive Mode and White Balance go on the Fn grid (next section), not on a button.', 'For the guided, tap-by-tap version, open the Buttons tab and tap “Set up all my buttons”.'] },

  // ----- Fn MENU -----
  { id: 'fn-layout', group: 'fn', title: 'Lay out the Fn grid', why: 'The 12 tiles you reach by pressing Fn hold the jobs that are not on a button, like Drive and White Balance.', steps: ['MENU → Setup → Operation Customize → Fn Menu Settings.', 'Set the 12 tiles to: Drive Mode, White Balance, Focus Area, Metering Mode, Creative Look, AF/MF Selector, Grid Line, ISO AUTO Min. SS, Focus Mode, Subject Recognition, Exposure Comp., Finder/Monitor Sel.', 'Put the ones you change most in the top-left, nearest your thumb.'] },

  // ----- MY MENU -----
  { id: 'mymenu', group: 'mymenu', title: 'Build your My Menu', why: 'A short personal menu so the handful of deeper settings you touch are always one tap away.', steps: ['MENU → go to the My Menu tab (the star).', 'Choose "Add Item".', 'Add: Format, Auto ISO min shutter, APS-C/Super35 crop, Silent Shooting, Airplane Mode, Wireless transfer.', 'Set "Display From My Menu" to ON so MENU opens here first.'] },
  { id: 'memory-recall', group: 'mymenu', title: 'Save a street setup to slot 1', why: 'Twist the mode dial to 1 and the whole camera is configured for street in an instant.', steps: ['Set the camera exactly how you like it for street (A mode, AF-C, Wide, Auto ISO).', 'MENU → Shooting → Shooting Mode → Camera Set. Memory.', 'Register it to slot 1. Save night to slot 2 and food to slot 3 later.'] },

  // ----- DEFAULTS -----
  { id: 'def-iso', group: 'defaults', title: 'Auto ISO range + minimum shutter', why: 'Keeps shots sharp by raising ISO only after the shutter would get too slow.', steps: ['Set ISO to Auto (press Fn → ISO, or MENU → Exposure/Color → Exposure → ISO).', 'MENU → Exposure/Color → Exposure → ISO Range Limit: set 100 to 12800.', 'MENU → Exposure/Color → Exposure → ISO AUTO Min. SS: set 1/250 for street.'] },
  { id: 'def-focus', group: 'defaults', title: 'Focus defaults', why: 'Sensible street defaults so you are ready the moment you lift the camera.', steps: ['Focus Mode: AF-C (MENU → Focus → Focus Mode).', 'Focus Area: Wide (MENU → Focus → Focus Area).', 'MENU → Focus → Subject Recognition: Subject Recog. in AF On, Target Human (switch to Animal for street dogs and temple cats).'] },
  { id: 'def-quality', group: 'defaults', title: 'File quality & helpers', why: 'Decide your file type and turn off little annoyances.', steps: ['MENU → Shooting → Image Quality/Rec → File Format: RAW & JPEG (or JPEG only to save space).', 'MENU → Setup → Audio Signals: Off, for discreet street shooting.', 'MENU → Shooting → Shooting Display → Auto Review: Off, so the screen does not freeze after each shot.', 'MENU → Shooting → Shooting Display → Grid Line Display: On (Rule of 3rds), and keep a screen layout with the level gauge via the DISP button.'] },
  { id: 'def-silent', group: 'defaults', title: 'Silent mode ready', why: 'So you can switch to a no-sound shutter for temples and candid moments.', steps: ['MENU → Shooting → Shutter/Silent → Silent Mode Settings is the home of this switch.', 'Your wheel-down button is set to Silent Mode (see the Buttons tab), so it is one press away.', 'Leave it Off by default, flick it On inside temples and quiet markets.'] },
  { id: 'def-extras', group: 'defaults', title: 'Set-and-forget quality helpers', why: 'A few options to switch on once that quietly improve every photo.', steps: ['MENU → Shooting → Image Quality/Rec → Lens Compensation: set Shading, Chromatic Aberration and Distortion all to Auto.', 'MENU → Shooting → Shutter/Silent → Anti-flicker Set.: Anti-flicker Shooting On, to kill stripes under market and shop lights.', 'MENU → Shooting → Image Quality/Rec → High ISO NR: Normal, for cleaner night shots.', 'Then forget them, they work in the background.'] },

  // ----- IMAGE QUALITY -----
  { id: 'img-files', group: 'image', title: 'RAW type, size & shape', why: 'Lock in the best-quality master file and the standard photo shape.', steps: ['MENU → Shooting → Image Quality/Rec → RAW File Type: Lossless Compressed (full quality, smaller file).', 'JPEG/HEIF Quality: Extra Fine, for the most detail in the share-ready copy.', 'JPEG/HEIF Image Size: L, to use the full 33 megapixels.', 'Aspect Ratio: 3:2, the sensor’s natural full shape.'] },
  { id: 'img-heif', group: 'image', title: 'JPEG or HEIF format', why: 'Pick the everyday file. JPEG opens anywhere; HEIF is smaller with smoother colour.', steps: ['MENU → Shooting → Image Quality/Rec → JPEG/HEIF Switch.', 'Choose JPEG if you want photos that open on any phone, computer or website (recommended).', 'Choose HEIF only if you are happy managing the newer format.'] },
  { id: 'img-colorspace', group: 'image', title: 'Colour space', why: 'The colour range baked into JPEGs. Standard is best for sharing.', steps: ['MENU → Shooting → Image Quality/Rec → Color Space: sRGB.', 'Only switch to AdobeRGB if a professional print lab asks for it.'] },

  // ----- FOCUS FINE-TUNING -----
  { id: 'foc-recog', group: 'focustune', title: 'Subject recognition for people & pets', why: 'Tell the camera who to lock onto, so eyes stay sharp.', steps: ['MENU → Focus → Subject Recognition → Subject Recog. in AF: On.', 'Recognition Target: Human (switch to Animal for temple cats and street dogs).', 'Right/Left Eye Select: Auto, so it picks the nearer eye for you.'] },
  { id: 'foc-tracksens', group: 'focustune', title: 'Tracking stickiness', why: 'How eagerly focus jumps to something crossing in front of your subject.', steps: ['MENU → Focus → AF Tracking Sensitivity: 3 (the balanced middle) for street.', 'Lower it (1–2) to hold a subject through clutter; raise it (4–5) to switch subjects faster.'] },
  { id: 'foc-preaf', group: 'focustune', title: 'Pre-AF & battery', why: 'The camera can keep focusing before you press. Off saves battery for a long day.', steps: ['MENU → Focus → Pre-AF: Off.', 'You still focus instantly with a half-press or the AF-ON button.'] },
  { id: 'foc-illum', group: 'focustune', title: 'Focus assist lamp', why: 'A small light that helps focus in the dark, but draws attention to you.', steps: ['MENU → Focus → AF Illuminator: Off for discreet street and temples.', 'Set it to Auto instead if you often struggle to focus in very dark spots.'] },

  // ----- SCREEN & VIEW -----
  { id: 'scr-disp', group: 'screen', title: 'Choose your screen layouts', why: 'Decide what the DISP button cycles, so the level and histogram are a press away.', steps: ['MENU → Shooting → Shooting Display → DISP (Screen Disp) Set.', 'Tick the layouts you want, including one with the Level and one with the Histogram.', 'While shooting, press DISP (top of the control wheel) to cycle through them.'] },
  { id: 'scr-bright', group: 'screen', title: 'Screen & viewfinder brightness', why: 'Brighten the screen so you can see it in Vietnam’s harsh midday sun.', steps: ['MENU → Setup → Monitor Brightness: nudge it up a step (or Sunny Weather outdoors).', 'Viewfinder Bright.: Auto.', 'Remember a brighter screen drinks more battery, so ease it back indoors.'] },
  { id: 'scr-finderrate', group: 'screen', title: 'Smoother viewfinder (optional)', why: 'Makes the viewfinder buttery for motion, at a small battery cost.', steps: ['MENU → Setup → Finder Frame Rate: High if you shoot lots of movement.', 'Leave it Standard to save battery.'] },

  // ----- COLOUR & LOOK -----
  { id: 'col-look', group: 'colour', title: 'Default colour style', why: 'Set the out-of-camera colour mood for your JPEGs.', steps: ['MENU → Exposure/Color → Creative Look: ST for natural, or VV for punchy markets and food.', 'Your RAW files keep all their data either way, so this only styles the JPEG.'] },
  { id: 'col-awb', group: 'colour', title: 'Keep warm ambience', why: 'Stop Auto white balance scrubbing away the cosy glow of neon and lanterns.', steps: ['MENU → Exposure/Color → White Balance → Priority Set in AWB: Ambience.'] },
  { id: 'col-dro', group: 'colour', title: 'Lift shadows automatically', why: 'Gently brightens dark areas of JPEGs so shadows keep detail.', steps: ['MENU → Exposure/Color → D-Range Optimizer: DRO Auto.'] },
  { id: 'col-meterface', group: 'colour', title: 'Brighten for faces', why: 'Helps expose people’s faces nicely in tricky, contrasty light.', steps: ['MENU → Exposure/Color → Metering Mode: Multi (whole-scene).', 'Face Priority in Multi Metering: On.'] },

  // ----- POWER, CARD & CARE -----
  { id: 'pow-power', group: 'power', title: 'Battery, heat & USB power', why: 'A few power tweaks for long, hot days out shooting.', steps: ['MENU → Setup → Power Save Start Time: 1 min (it wakes instantly on a half-press).', 'MENU → Setup → Auto Power OFF Temp.: High, to keep going in the heat.', 'MENU → Setup → USB Power Supply: On, so a USB-C power bank tops you up as you shoot.'] },
  { id: 'card-format', group: 'power', title: 'Format your cards', why: 'Start each card clean and camera-ready before the trip.', steps: ['Copy off anything you want to keep first, this erases the whole card.', 'MENU → Shooting → Media → Format.', 'Do it on every card you are taking, and always format in the camera, not a computer.'] },
  { id: 'card-extras', group: 'power', title: 'File naming & copyright', why: 'Optional touches that make photos easier to sort and prove are yours.', steps: ['MENU → Setup → File/Folder Settings: set a 3-letter file name prefix (e.g. your initials).', 'MENU → Setup → Copyright Info: turn Write Copyright Info On and type your name.'] },
  { id: 'care-sensor', group: 'power', title: 'Sensor protection & cleaning', why: 'Keep dust off the sensor between lens swaps.', steps: ['MENU → Setup → Anti-dust Function → Shutter When Power OFF: On, so the shutter closes to shield the sensor when you switch off.', 'Run Cleaning Mode there if you ever spot dust marks in your photos.', 'Always swap lenses with the camera pointed down.'] },

  // ----- PHONE & WIRELESS -----
  { id: 'con-datetime', group: 'connect', title: 'Date, time & zone', why: 'So your photos are stamped with the right local time on your trip.', steps: ['MENU → Setup → Area/Date/Time Setting.', 'Set Area to Vietnam while you are there, then the date and time.'] },
  { id: 'con-pair', group: 'connect', title: 'Pair the phone app', why: 'Transfer photos and use your phone as a remote, no mobile data needed.', steps: ['Install Sony’s Creators’ App on your phone.', 'MENU → Network → Smartphone Connection, then follow the app to pair once.'] },
  { id: 'con-wireless', group: 'connect', title: 'Bluetooth, remote & location', why: 'A low-power link for pairing, a remote shutter, and tagging where you shot.', steps: ['MENU → Network → Bluetooth Settings → Bluetooth Function: On.', 'Pair a small Bluetooth remote here if you have one (handy for tripod night shots).', 'MENU → Network → Location Info Link Set.: On, to tag photos using your phone’s GPS.'] },
  { id: 'con-airplane', group: 'connect', title: 'Airplane mode', why: 'Switch all wireless off to save battery and for flights.', steps: ['MENU → Network → Airplane Mode: On whenever you do not need wireless.', 'It noticeably stretches battery life through a long day.'] },

  // ----- HANDLING & QUICK WINS -----
  { id: 'han-touch', group: 'handling', title: 'Tap to pick what is in focus', why: 'Tap a subject on the screen and the camera locks on and follows it. Your main, fastest way to choose focus.', steps: ['MENU → Setup → Touch Operation: On.', 'MENU → Setup → Touch Panel/Pad: Touch Panel+Pad, so dragging your thumb also works at the viewfinder.', 'MENU → Setup → Touch Func. in Shooting: Touch Tracking. Now a tap locks onto that subject and follows it; tap someone else to switch.'] },
  { id: 'han-delete', group: 'handling', title: 'Quick delete while reviewing', why: 'Cull bad shots fast with a double-press, no “are you sure?” every time.', steps: ['In the Setup tab, find Delete pressing twice and set it On.', 'Now a double-press of the Delete button bins a photo instantly.'] },
  { id: 'han-expstep', group: 'handling', title: 'Finer exposure steps', why: 'Smaller brightness jumps give you more precise control.', steps: ['MENU → Exposure/Color → Exposure step: 0.3 EV (the finest setting).'] },
  { id: 'han-zebra', group: 'handling', title: 'Too-bright warning (zebra)', why: 'Stripes flag areas about to lose detail from being too bright.', steps: ['MENU → Exposure/Color → Zebra Display → Zebra Display: On.', 'Set the level to 100+, so stripes only appear where highlights are truly blowing out.'] },

  // ----- PACK -----
  { id: 'pack-list', group: 'pack', title: 'Pack & charge checklist', why: 'The night-before list so nothing lets you down in Vietnam.', steps: ['Battery charged + spare battery charged.', 'Memory card formatted, plus a spare card.', 'Firmware updated (check Sony’s site before you fly).', 'Lens(es) and sensor wiped clean. Pack a microfibre cloth + blower.', 'USB-C cable + power bank. A small travel tripod if you want night skylines.', 'Install the Creators’ App on your phone and pair it once.'] },
]

export const setupGroups: SetupGroup[] = [
  { id: 'buttons', label: 'Custom buttons', icon: 'click' },
  { id: 'fn', label: 'Fn menu', icon: 'grid' },
  { id: 'mymenu', label: 'My Menu & recall', icon: 'star' },
  { id: 'defaults', label: 'Default settings', icon: 'sliders' },
  { id: 'image', label: 'Image quality', icon: 'aperture' },
  { id: 'focustune', label: 'Focus fine-tuning', icon: 'focus' },
  { id: 'screen', label: 'Screen & view', icon: 'eye' },
  { id: 'colour', label: 'Colour & look', icon: 'palette' },
  { id: 'power', label: 'Power, card & care', icon: 'battery' },
  { id: 'connect', label: 'Phone & wireless', icon: 'wifi' },
  { id: 'handling', label: 'Handling & quick wins', icon: 'hand' },
  { id: 'pack', label: 'Pack & charge', icon: 'luggage' },
]
