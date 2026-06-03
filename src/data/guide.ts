import type { GuideChapter } from './types'

// A full, plain-English walk through everything the Sony A7C II manual covers.
// Grouped so the Learn hub can show neat sections. No jargon left unexplained.
export const guideChapters: GuideChapter[] = [
  // ════════════════════════ GETTING STARTED ════════════════════════
  {
    id: 'first-10',
    title: 'Your first 10 minutes',
    icon: 'rocket',
    group: 'Getting started',
    summary: 'Get the camera ready to shoot, no menu-diving.',
    sections: [
      {
        heading: 'Charge and load',
        body: [
          'Charge the battery fully the night before. You can plug a USB-C cable straight into the camera, or use the separate charger if you have one.',
          'Slide a memory card into the slot behind the door on the side. Use a fast SD card (look for "V30" or higher printed on it) so the camera never stutters during a burst.',
          'Format the card once in the camera (MENU → Shooting → Media → Format). Formatting wipes it clean, so do this with a fresh card before you take any keepers.',
        ],
        tip: 'Pack a spare battery. Mirrorless cameras drink power, and you do not want to run flat at a night market.',
      },
      {
        heading: 'Set a safe starting point',
        body: [
          'On the top of the camera, turn the round mode dial to A (Aperture Priority). This is the friendliest mode to learn in.',
          'Set ISO (the brightness booster) to Auto so the camera balances exposure for you.',
          'Set photo quality to RAW + JPEG if you might edit later, or JPEG only to keep it simple and save space.',
          'Make sure the small dial on the top-left is set to the camera icon (stills), not the movie or S&Q icon.',
        ],
        tip: 'JPEG is the finished, ready-to-share photo. RAW is the editable master file. Shooting both gives you options with no real downside but bigger files.',
      },
      {
        heading: 'Set the date, language and a few comforts',
        body: [
          'On first power-up the camera asks for your language, date and time zone. Set the time zone to Vietnam while you are there so photo times are right.',
          'Turn on the grid line (MENU → Shooting → Display Review) to help keep horizons straight.',
          'Dial the viewfinder to your eyesight: look through the little eye-window and turn the tiny wheel beside it until the on-screen text is sharp. This is just for your eye, it does not affect photos.',
        ],
      },
    ],
  },
  {
    id: 'menu-system',
    title: 'Finding things in the menu',
    icon: 'grid',
    group: 'Getting started',
    summary: 'Sony’s menu looks huge. Here is the map so it stops being scary.',
    sections: [
      {
        heading: 'How the menu is organised',
        body: [
          'Press MENU. Down the left edge are coloured tabs, each a big topic: Shooting, Exposure/Colour, Focus, Playback, Network, Setup, and My Menu (the star).',
          'Pick a tab, then a sub-group appears, then the actual settings. It is three steps deep: tab → group → setting.',
          'The front and rear dials, or the touchscreen, both scroll the menu. Press the centre button to open a setting, change it, then press again to confirm.',
        ],
        tip: 'You rarely need the full menu once your Fn menu and My Menu are set up. Think of the big menu as the basement you visit only occasionally.',
      },
      {
        heading: 'Three faster ways in',
        body: [
          'Fn button: press it while shooting to get a grid of your 12 most-used settings. This is where you live day to day.',
          'My Menu: your own short list of deep settings, pinned to the star tab so you never hunt for them.',
          'Search-style memory: the menu remembers where you last were, so repeated tweaks are quick.',
        ],
      },
    ],
  },
  {
    id: 'screen-evf',
    title: 'The screen & viewfinder',
    icon: 'eye',
    group: 'Getting started',
    summary: 'Two ways to see your shot, and when each one wins.',
    sections: [
      {
        heading: 'Screen vs viewfinder',
        body: [
          'The flip-out screen is great for waist-level or overhead shots, and for video. It swings out and rotates, even to face you.',
          'The viewfinder (the eye-window, called the EVF) is best in bright sun when the screen is hard to see, and it steadies the camera against your face.',
          'A sensor near the viewfinder switches automatically: lift the camera to your eye and the screen turns off to save battery.',
        ],
        tip: 'For discreet street shooting, the viewfinder makes you look like you are just glancing, not pointing a screen at people.',
      },
      {
        heading: 'What the display shows',
        body: [
          'Press the DISP button (top of the control wheel) to cycle through display layouts: lots of info, a clean view, a level gauge, a live histogram, and a grid.',
          'The level gauge shows if the camera is tilted, handy for straight horizons and buildings.',
          'The live preview is honest: what you see for brightness and colour is roughly what you get. If it looks too dark on screen, the photo will be too dark.',
        ],
      },
    ],
  },
  {
    id: 'touch',
    title: 'Touchscreen controls',
    icon: 'hand',
    group: 'Getting started',
    summary: 'Tap to focus, swipe to browse. The quick gestures worth knowing.',
    sections: [
      {
        heading: 'Touch to focus and shoot',
        body: [
          'Tap anywhere on the screen to move focus there. Turn on "Touch Shutter" if you want a tap to also take the photo.',
          'While looking through the viewfinder, you can slide your thumb on the screen to nudge the focus point. This is called the touch pad.',
          'In playback, swipe left and right to flick through photos, and pinch to zoom in and check sharpness.',
        ],
        tip: 'Tap-to-focus is the fastest way to grab a precise spot, like a face through a crowd or the front of a dish.',
      },
      {
        heading: 'The four touch actions',
        body: [
          'Touch Focus: a tap sets where the camera focuses.',
          'Touch Tracking: a tap locks onto a moving subject and follows it. Great for a child weaving through a market.',
          'Touch Shutter: a tap focuses and fires the photo in one go.',
          'Touch AE: a tap sets the brightness from that spot, handy when a face is much darker than the background.',
        ],
        tip: 'You choose which of these a tap does under MENU → Setup → Touch Operation. Touch Focus or Touch Tracking are the most useful day to day.',
      },
    ],
  },

  // ════════════════════════ EXPOSURE & LIGHT ════════════════════════
  {
    id: 'exposure',
    title: 'Exposure made simple',
    icon: 'sun',
    group: 'Exposure & light',
    summary: 'Brightness comes from three dials. Here is what each really does.',
    sections: [
      {
        heading: 'The three controls',
        body: [
          'Aperture (the f-number): how wide the lens opens. A low number like f/2.8 lets in lots of light and blurs the background. A high number like f/8 lets in less and keeps everything sharp.',
          'Shutter speed: how long the camera looks at the scene. Fast (1/500s) freezes motion. Slow (1/30s) can blur it.',
          'ISO: how hard the camera amplifies the light. Low (100) is clean. High (12800) is brighter in the dark but grainier.',
        ],
        tip: 'Picture a bucket catching light: aperture is how wide the tap opens, shutter is how long it stays open, ISO is how thirsty the bucket is.',
      },
      {
        heading: 'How the three trade off',
        body: [
          'They balance each other. Open the aperture and you can use a faster shutter or lower ISO. Close it down and you need a slower shutter or higher ISO.',
          'Each "stop" doubles or halves the light: f/4 to f/2.8 is one stop brighter, 1/250s to 1/125s is one stop brighter, ISO 800 to 1600 is one stop brighter.',
          'In Aperture Priority you only choose the aperture, and the camera juggles the rest. That is why it is the perfect learner mode.',
        ],
      },
    ],
  },
  {
    id: 'aperture-dof',
    title: 'Aperture & background blur',
    icon: 'aperture',
    group: 'Exposure & light',
    summary: 'The f-number controls both light and how blurry the background is.',
    sections: [
      {
        heading: 'Low number, blurry background',
        body: [
          'A low f-number (f/2.8, f/4) makes only a thin slice of the scene sharp, melting the background into a soft blur. Lovely for portraits and food.',
          'A high f-number (f/8, f/11) keeps the whole scene sharp front to back. That is what you want for buildings, streets and landscapes.',
          'How much blur you get also depends on how close you are and how far the background is: get closer to your subject, with distance behind them, for more blur.',
        ],
        tip: 'On the kit lens the lowest f-number changes as you zoom (f/4 at 28mm, f/5.6 at 60mm). A constant-aperture lens like the 20-70 f/4 stays the same as you zoom.',
      },
      {
        heading: 'The sharpest aperture',
        body: [
          'Most lenses are at their crispest around f/5.6 to f/8. If you want maximum detail across a scene, that range is the sweet spot.',
          'Going past f/11 to f/16 actually softens the image slightly (a physics quirk called diffraction). Only use those tiny apertures when you truly need everything sharp.',
        ],
      },
    ],
  },
  {
    id: 'shutter-motion',
    title: 'Shutter speed & motion',
    icon: 'timer',
    group: 'Exposure & light',
    summary: 'Freeze a moment, or let it blur on purpose.',
    sections: [
      {
        heading: 'Fast to freeze, slow to blur',
        body: [
          'Fast shutter (1/500s and up) freezes action: a passing motorbike, a child running.',
          'Around 1/250s is a safe everyday speed for walking people on the street.',
          'Slow shutter (1/30s and below) blurs movement. On a tripod that gives silky water or light trails; handheld it just gives blur.',
        ],
        tip: 'A rule of thumb for sharp handheld shots: keep the shutter at least as fast as 1 divided by your zoom. At 50mm, that means 1/50s or faster. The camera’s stabiliser buys you a few stops of leeway.',
      },
      {
        heading: 'Letting the camera pick',
        body: [
          'In Aperture Priority the camera chooses the shutter for you. To stop it choosing too slow (and blurring people), set a minimum shutter speed inside the Auto ISO settings.',
          'If you specifically want to control motion, switch the mode dial to S (Shutter Priority) and dial the speed yourself.',
        ],
      },
    ],
  },
  {
    id: 'iso-noise',
    title: 'ISO & grain',
    icon: 'gauge',
    group: 'Exposure & light',
    summary: 'The brightness booster, and the speckly price it charges.',
    sections: [
      {
        heading: 'What ISO does',
        body: [
          'ISO brightens a photo when there is not enough light. ISO 100 is the cleanest. As you raise it (400, 1600, 6400) the image gets brighter but adds "noise", a fine speckly grain.',
          'The A7C II is a full-frame camera, which means it handles high ISO well. ISO 6400 is very usable, and even 12800 is fine for night markets.',
          'Leave ISO on Auto and set an upper limit (a ceiling) so it never goes grainier than you like.',
        ],
        tip: 'A sharp, slightly grainy photo always beats a clean but blurry one. Do not be afraid to let ISO climb in the dark.',
      },
      {
        heading: 'Auto ISO done right',
        body: [
          'Set the Auto ISO range to 100 as the floor and 12800 as the ceiling for travel.',
          'Set the Auto ISO minimum shutter speed so the camera keeps the shutter fast enough before it starts raising ISO. "1/250s" or "Faster" suits street.',
          'In very dark scenes the camera will hit your ceiling and then start slowing the shutter, so brace yourself for those shots.',
        ],
      },
    ],
  },
  {
    id: 'metering',
    title: 'How the camera reads light',
    icon: 'contrast',
    group: 'Exposure & light',
    summary: 'Metering: the camera’s built-in light reader, and when to overrule it.',
    sections: [
      {
        heading: 'Metering modes',
        body: [
          'Metering is how the camera measures brightness to decide the exposure. The default, "Multi", reads the whole frame and is right almost all the time.',
          '"Centre" weights the middle of the frame. "Spot" reads just one tiny point, useful when a subject is lit very differently from the background, like a face in a spotlight.',
          'For street and travel, leave it on Multi and use exposure compensation (next chapter) to fine-tune.',
        ],
        tip: 'If your photos of bright scenes (beaches, misty bays) come out grey and dull, the meter is being fooled. Brighten with exposure compensation rather than changing metering mode.',
      },
    ],
  },
  {
    id: 'exp-comp',
    title: 'Brighten or darken instantly',
    icon: 'sliders',
    group: 'Exposure & light',
    summary: 'Exposure compensation: the one-dial fix for "too dark / too bright".',
    sections: [
      {
        heading: 'The fastest fix you own',
        body: [
          'Exposure compensation nudges the whole photo brighter or darker without leaving your mode. Plus (+) brightens, minus (−) darkens.',
          'On the A7C II, assign it to the rear dial (it may already be there) so it is always under your thumb.',
          'Watch the live preview as you turn it: when the screen looks right, the photo will look right.',
        ],
        tip: 'Snowy, sandy or misty scenes usually need +0.7 to brighten. Strong sunsets or neon often look richer at −0.3 to −0.7.',
      },
    ],
  },
  {
    id: 'white-balance',
    title: 'Getting colours right',
    icon: 'palette',
    group: 'Exposure & light',
    summary: 'White balance keeps colours natural under any light.',
    sections: [
      {
        heading: 'Why colours go funny',
        body: [
          'Different lights have different colours: daylight is neutral, tungsten bulbs are orange, shade is bluish, neon is all over the place. White balance corrects for this so whites look white.',
          'Auto white balance is excellent on this camera and handles most situations, including Vietnam’s mixed neon and lantern light.',
          'If a scene looks too orange or too blue, switch from Auto to a matching preset (Daylight, Shade, Incandescent) or warm it up to taste.',
        ],
        tip: 'If you shoot RAW you can change white balance later on a computer with no quality loss. One more reason to keep RAW + JPEG on.',
      },
      {
        heading: 'Setting it by hand (custom white balance)',
        body: [
          'If a room has stubborn, odd-coloured light, you can teach the camera what white looks like there. This is "custom white balance".',
          'Fill the frame with something white or grey (a napkin, a wall), choose Custom Setup in the white balance menu, and press to capture. The camera now matches that light exactly.',
          'You only need this in extreme mixed lighting. For everyday Vietnam shooting, Auto is genuinely excellent.',
        ],
      },
    ],
  },
  {
    id: 'modes',
    title: 'Shooting modes explained',
    icon: 'sliders',
    group: 'Exposure & light',
    summary: 'What every letter on the mode dial means.',
    sections: [
      {
        heading: 'The letters',
        body: [
          'Auto: the camera does everything. Fine in a pinch, but you learn nothing and control nothing.',
          'P (Program): the camera sets aperture and shutter, you can nudge them. A gentle half-step up from Auto.',
          'A (Aperture Priority): you set the blur, the camera sets brightness. Your home base.',
          'S (Shutter Priority): you set the shutter, the camera does the rest. Use it to freeze or blur motion on purpose.',
          'M (Manual): you set everything. For tripod night shots and total control.',
        ],
        tip: 'The 1, 2, 3 slots on the dial recall a whole saved setup. Save your street settings to slot 1 (see the Memory recall chapter) and you are ready instantly.',
      },
    ],
  },
  {
    id: 'judging-exposure',
    title: 'Reading the light precisely',
    icon: 'gauge',
    group: 'Exposure & light',
    summary: 'Two on-screen tools that tell you if the brightness is truly right.',
    sections: [
      {
        heading: 'The histogram',
        body: [
          'The histogram is a little graph of how bright your photo is. The left side is the darks, the right side is the brights, and the height shows how much of the photo sits at each level.',
          'If the graph is squashed against the right wall, the brightest parts are "blown out" (pure white with no detail). Squashed against the left wall means the shadows are crushed to black.',
          'Aim for the bulk of the graph sitting between the two walls. Press the DISP button to bring the histogram up on screen.',
        ],
        tip: 'In tricky light like a bright Ha Long Bay sky, trust the histogram over the screen brightness, which can fool your eye.',
      },
      {
        heading: 'Zebra stripes',
        body: [
          'Turn on Zebra Display and the camera paints moving diagonal stripes over any area that is too bright and about to lose detail.',
          'It is a live warning: if a white shirt or a bright sky fills with zebras, dial in some minus exposure compensation until the stripes calm down.',
          'It is especially handy for keeping detail in bright clouds, water and pale walls.',
        ],
      },
    ],
  },

  // ════════════════════════ FOCUS ════════════════════════
  {
    id: 'autofocus',
    title: 'Autofocus demystified',
    icon: 'scan',
    group: 'Focus',
    summary: 'All those AF letters and boxes, finally in plain English.',
    sections: [
      {
        heading: 'AF-S vs AF-C',
        body: [
          'AF-S (single): focuses once when you half-press, then holds. Perfect for still things, food, buildings.',
          'AF-C (continuous): keeps adjusting focus as things move. Perfect for people walking and street life.',
          'When unsure on the street, use AF-C. It copes with movement and still nails still subjects.',
        ],
        tip: 'There is an AF-A "auto" setting that guesses between the two, but choosing yourself is more reliable.',
      },
      {
        heading: 'Half-press, the most important habit',
        body: [
          'A gentle half-press of the shutter focuses and meters the light. A green box or beep confirms focus is locked.',
          'A full press then takes the photo. Pausing at the half-press for a beat is the difference between sharp and soft shots.',
          'Later you can move focusing onto a thumb button instead (back-button focus), covered in the custom controls chapter.',
        ],
      },
    ],
  },
  {
    id: 'focus-areas',
    title: 'Where the camera looks',
    icon: 'crosshair',
    group: 'Focus',
    summary: 'Focus areas: telling the camera which part of the frame matters.',
    sections: [
      {
        heading: 'The main focus areas',
        body: [
          'Wide: the camera picks the subject from the whole frame. Fast and great for reacting to street moments.',
          'Spot (S, M or L): a single box you place exactly where you want, for precise focus like an eye through a gap or the front of a dish.',
          'Zone: a medium block you position, a middle ground between Wide and Spot.',
          'Tracking: you lock onto a subject and the box follows it around the frame as it (or you) moves.',
        ],
        tip: 'Assign Focus Area to your C1 button so you can flip between Wide and Spot in a heartbeat without diving into menus.',
      },
      {
        heading: 'Moving the focus box',
        body: [
          'With a Spot or Zone area, nudge the box around with the control wheel edges, or just tap where you want on the screen.',
          'Press the centre button to snap the box back to the middle if it wanders off.',
        ],
      },
    ],
  },
  {
    id: 'eye-af',
    title: 'Face, Eye & subject focus',
    icon: 'eye',
    group: 'Focus',
    summary: 'The camera’s party trick: it locks onto eyes by itself.',
    sections: [
      {
        heading: 'Eye autofocus',
        body: [
          'With Face/Eye Priority turned on, the camera finds a person’s eye and sticks to it automatically. A small green box appears on the eye, you just half-press and shoot.',
          'It works while the person moves and even when they turn away and back, which is why street portraits feel almost too easy on this camera.',
          'In the menu you can set it to recognise Humans or Animals. For Vietnam’s street dogs and temple cats, switch it to Animal.',
        ],
        tip: 'Put Eye AF on the C2 button or the centre of the control wheel so one thumb press snaps focus to the nearest eye the instant someone turns to you.',
      },
      {
        heading: 'Smart subject recognition',
        body: [
          'The A7C II has an extra brain (an AI chip) that recognises whole subjects, not just eyes: people, animals, birds, insects, cars, trains and planes.',
          'It can hold focus on a person by their head and body even when their face is hidden, great in busy crowds.',
          'You normally leave this on Auto/Human and forget about it. It quietly makes your keeper rate much higher.',
        ],
      },
      {
        heading: 'Remembering a face',
        body: [
          'You can register a few faces (Face Memory) so the camera gives them priority when several people are in the frame.',
          'Register your travel companions once, and in a busy market the camera will lock onto them rather than a passing stranger.',
          'It is optional and a little fiddly to set up, but lovely for keeping the people you care about pin-sharp.',
        ],
      },
    ],
  },
  {
    id: 'manual-focus',
    title: 'Manual focus, made easy',
    icon: 'focus',
    group: 'Focus',
    summary: 'Two helpers turn fiddly manual focus into a sure thing.',
    sections: [
      {
        heading: 'When and how',
        body: [
          'Sometimes autofocus struggles: through glass, in near-darkness, or for precise night skylines. Switch Focus Mode to MF (manual focus) and turn the ring on the lens yourself.',
          'Peaking: turn on "Peaking Display" and the camera paints bright coloured edges on whatever is in focus. When your subject lights up, it is sharp.',
          'Magnify: press the assigned button to zoom the preview in, so you can nail focus on fine detail, then shoot.',
        ],
        tip: 'For tripod night shots, manual focus on a distant bright light, then leave the ring alone for the rest of the session.',
      },
      {
        heading: 'Autofocus, then tweak by hand (DMF)',
        body: [
          'Direct Manual Focus (DMF) lets the camera autofocus first, then you nudge the focus ring by hand to perfect it, all in one motion.',
          'It is the best of both worlds: the speed of autofocus with a final manual touch for things like a flower or a face through railings.',
          'Set Focus Mode to DMF, half-press to focus, then turn the ring while still half-pressed.',
        ],
      },
      {
        heading: 'Composing in near-darkness',
        body: [
          'In very dark scenes the screen can be too dim to frame a shot. Turn on Bright Monitoring and the camera brightens the live preview so you can see to compose.',
          'The preview gets a little rough while it does this, but your actual photo is unaffected. Turn it off again afterwards.',
        ],
      },
    ],
  },

  // ════════════════════════ DRIVE & CAPTURE ════════════════════════
  {
    id: 'drive-burst',
    title: 'Single shots, bursts & timer',
    icon: 'layers',
    group: 'Capture',
    summary: 'Drive mode: one photo, a rapid burst, or a delayed shot.',
    sections: [
      {
        heading: 'Drive modes',
        body: [
          'Single: one photo per press. Best for thoughtful street and most travel.',
          'Continuous (Lo / Mid / Hi): holds down for a burst, up to 10 photos a second on Hi. Use it for action so you can pick the best frame.',
          'Self-timer: a 2 or 10 second delay. The 2-second timer is brilliant on a tripod to avoid the wobble from your finger press.',
        ],
        tip: 'Continuous Lo is the sweet spot for street: a short burst catches the perfect step or gesture without filling your card.',
      },
      {
        heading: 'Bursts and your card',
        body: [
          'Long bursts of RAW files fill the camera’s short-term memory (the buffer) and it pauses to catch up. A fast V60 or V90 card clears it quicker.',
          'If you mostly shoot single frames, any decent V30 card is plenty.',
        ],
      },
    ],
  },
  {
    id: 'silent-shutter',
    title: 'Silent shooting',
    icon: 'shield',
    group: 'Capture',
    summary: 'Shoot with no click at all, for candid and quiet moments.',
    sections: [
      {
        heading: 'The silent (electronic) shutter',
        body: [
          'Turn on "Silent Mode" and the camera takes photos with no shutter sound, perfect for temples, markets and candid street portraits where a click would break the moment.',
          'There is a small catch: under flickering lights or with very fast movement, the silent shutter can add banding or slight skew. For most street scenes you will never notice.',
          'You can also just turn the beep off (Audio Signals) while keeping the gentle mechanical click.',
        ],
        tip: 'Silent mode plus the viewfinder makes you almost invisible: no sound, no screen glow, just you and the moment.',
      },
    ],
  },
  {
    id: 'bracketing',
    title: 'Bracketing & tricky light',
    icon: 'layers',
    group: 'Capture',
    summary: 'Take several versions at once when the light is hard to judge.',
    sections: [
      {
        heading: 'Exposure bracketing',
        body: [
          'Bracketing takes a quick set of the same shot at different brightnesses (for example normal, darker, brighter). You then keep the best, or blend them later.',
          'It shines for high-contrast scenes like a bright sky over a dark alley, where no single exposure captures everything.',
          'Set it under Drive Mode → Bracket. Three frames at 1 stop apart is a sensible start.',
        ],
        tip: 'On a steady surface, bracketing plus editing software can merge into one balanced "HDR" image with both bright sky and shadow detail.',
      },
    ],
  },
  {
    id: 'flicker',
    title: 'Banding under indoor lights',
    icon: 'zap',
    group: 'Capture',
    summary: 'Why some indoor photos get stripes, and the two switches that fix it.',
    sections: [
      {
        heading: 'What the stripes are',
        body: [
          'Many indoor and market lights (fluorescent tubes and cheap LEDs) flicker far too fast for your eye to see. The camera, though, can catch that flicker as dark horizontal bands across the photo, or as colours that shift shot to shot.',
          'You will meet this a lot in Vietnam: markets, shops, restaurants and metro stations often have flickering lights.',
        ],
        tip: 'If your indoor photos have faint stripes or uneven colour, flicker is the cause, not your settings.',
      },
      {
        heading: 'The two fixes',
        body: [
          'Anti-flicker Shooting: turn it On and the camera detects the flicker and quietly times each shot to the bright moment. Half-press and wait for the little flicker icon, then shoot. This handles the common 100/120-cycle lights.',
          'Variable Shutter: for stubborn LED banding, this lets you fine-tune the shutter speed while watching the screen until the stripes vanish.',
          'Both live under MENU → Shooting → Shutter/Silent → Anti-flicker Set. For most cases, Anti-flicker Shooting On is enough.',
        ],
        tip: 'These only work with the normal (mechanical) shutter, so if you are using Silent Mode and see banding, switch Silent off.',
      },
    ],
  },
  {
    id: 'timelapse',
    title: 'Time-lapse & slow motion',
    icon: 'clock',
    group: 'Capture',
    summary: 'Speed time up, or slow it right down, for memorable travel clips.',
    sections: [
      {
        heading: 'Time-lapse (speeding time up)',
        body: [
          'A time-lapse turns a long, slow event (clouds drifting over Ha Long Bay, a market filling up, sunset colours) into a short, sped-up clip.',
          'Two ways on the A7C II: the built-in time-lapse mode can build the finished clip for you, or Interval Shooting takes a series of photos at a set gap that you assemble into a movie later on a computer (Sony’s free Imaging Edge app).',
          'Rest the camera on something rock-steady, set how often it shoots and for how long, then leave it. Plug in a power bank, as it runs for a while and can warm up.',
        ],
        tip: 'A great first try: one photo every 2 seconds for 5 minutes of a busy street corner makes a lovely few-second clip.',
      },
      {
        heading: 'Slow motion (slowing time down)',
        body: [
          'The S&Q (slow & quick) mode records video that plays back in graceful slow motion, lovely for splashing water, street performers or fluttering lanterns.',
          'Turn the small top-left dial to S&Q, and the camera films faster than normal so the playback looks slowed down.',
          'It needs good light to look clean, so save it for daytime.',
        ],
      },
    ],
  },

  // ════════════════════════ IMAGE QUALITY & LOOK ════════════════════════
  {
    id: 'raw-jpeg',
    title: 'RAW, JPEG & file size',
    icon: 'film',
    group: 'Image quality',
    summary: 'Which file type to shoot, and what it costs you.',
    sections: [
      {
        heading: 'The two file types',
        body: [
          'JPEG is the finished photo: the camera bakes in colour and sharpening, the file is small and ready to share straight away.',
          'RAW is the untouched master: it holds far more detail in the brights and shadows, so you can rescue and adjust it later, but it needs editing software and is much bigger.',
          'RAW + JPEG gives you both: a ready-to-share JPEG now, and a RAW safety net if a shot is worth perfecting.',
        ],
        tip: 'For a trip of a lifetime, shoot RAW + JPEG. Storage is cheap, missed detail is gone forever.',
      },
      {
        heading: 'Sizes and compression',
        body: [
          'RAW comes in Lossless Compressed (smaller, no quality loss, recommended) or Uncompressed (huge, no benefit for most people).',
          'JPEG has quality levels (Extra Fine, Fine, Standard) and sizes (L, M, S). Extra Fine Large is the one to use.',
          'A 128GB card holds thousands of RAW + JPEG pairs, plenty for a long trip with a spare card as backup.',
        ],
      },
      {
        heading: 'A newer photo format: HEIF',
        body: [
          'The A7C II can also save photos as HEIF instead of JPEG. HEIF holds smoother colour gradations (think subtle sunset skies) in a smaller file.',
          'The catch is that some older phones, computers and apps still cannot open HEIF, so it is less universally shareable than JPEG.',
          'For a trip, plain JPEG (alongside RAW) is the safe, share-anywhere choice. Try HEIF later once you know your devices handle it.',
        ],
      },
    ],
  },
  {
    id: 'creative-looks',
    title: 'Creative Looks (colour styles)',
    icon: 'palette',
    group: 'Image quality',
    summary: 'Built-in colour recipes that change the mood of your JPEGs.',
    sections: [
      {
        heading: 'Picking a look',
        body: [
          'Creative Looks are Sony’s colour presets, applied to your JPEGs in-camera. ST (Standard) is the natural default.',
          'Useful ones for Vietnam: VV (Vivid) for punchy markets and lanterns, NT (Neutral) for a flatter, easy-to-edit look, FL for a moody film vibe, and BW for black and white street.',
          'Switch them under Fn or MENU → Exposure/Colour → Colour/Tone → Creative Look.',
        ],
        tip: 'If you shoot RAW + JPEG, the look only affects the JPEG. Your RAW stays neutral, so you can try a bold look without losing the original.',
      },
    ],
  },
  {
    id: 'dro-crop',
    title: 'Shadows, highlights & crop',
    icon: 'contrast',
    group: 'Image quality',
    summary: 'A couple of switches that change how much detail and reach you get.',
    sections: [
      {
        heading: 'Lifting shadows (DRO)',
        body: [
          'D-Range Optimiser (DRO) gently brightens dark areas in your JPEGs so a backlit face or a shadowed alley keeps detail. Auto is a safe everyday setting.',
          'It only touches JPEGs, and only the shadows, so it is a subtle, natural help rather than a heavy effect.',
        ],
      },
      {
        heading: 'APS-C crop for extra reach',
        body: [
          'Turning on "APS-C / Super35" crops into the middle of the sensor, which makes your lens look more zoomed-in (your 28-60 becomes roughly a 42-90), at the cost of resolution.',
          'Handy when you cannot get closer and need more reach, like a detail across a market. Turn it off for everyday wide shooting.',
        ],
        tip: 'Aspect Ratio (3:2, 4:3, 16:9, 1:1) changes the shape of the frame. 1:1 square is fun for social posts; 3:2 is the full, standard shape.',
      },
    ],
  },
  {
    id: 'steadyshot',
    title: 'Stabilisation & sharp shots',
    icon: 'shield',
    group: 'Image quality',
    summary: 'SteadyShot fights camera shake so you can shoot slower handheld.',
    sections: [
      {
        heading: 'What SteadyShot does',
        body: [
          'The A7C II floats its sensor on tiny motors that cancel out your hand wobble, worth several stops of shutter speed. That means sharp shots at slower speeds in dim light.',
          'Leave it ON for all handheld shooting. It works with any lens.',
          'Turn it OFF when the camera is locked on a tripod, where it can occasionally fight a perfectly still camera and cause slight blur.',
        ],
        tip: 'Stabilisation steadies the camera, not your subject. A moving person still needs a fast enough shutter to freeze them.',
      },
      {
        heading: 'Other ways to get sharp',
        body: [
          'Brace against a wall or post, tuck your elbows in, and breathe out as you press.',
          'Use the viewfinder against your face for a third point of contact.',
          'Check sharpness in playback by zooming in on the eyes or a key edge.',
        ],
      },
    ],
  },
  {
    id: 'reach',
    title: 'Reaching further',
    icon: 'crosshair',
    group: 'Image quality',
    summary: 'How to get more zoom out of the short kit lens when you cannot get closer.',
    sections: [
      {
        heading: 'Clear Image Zoom',
        body: [
          'Your 28-60 kit lens is short, so a detail across a market can feel out of reach. Clear Image Zoom pushes in further (about double) using clever processing, with very little loss of quality.',
          'Turn it on with MENU → Shooting → Zoom → Zoom Range → Clear Image Zoom, then zoom past the end of the lens.',
          'Digital Zoom goes even further but gets noticeably soft, so use it only when you truly must.',
        ],
        tip: 'Clear Image Zoom works on JPEG/HEIF, not RAW. If you shoot RAW + JPEG, the JPEG gets the extra reach.',
      },
      {
        heading: 'Or crop in afterwards',
        body: [
          'The A7C II’s photos are big (33 megapixels), so you can simply crop into a shot later and still have plenty of detail.',
          'That is often the easiest "zoom": frame a little wide, then crop to taste on your phone or computer.',
          'The APS-C crop setting (in the Shadows, highlights & crop chapter) does the same thing in-camera for instant extra reach.',
        ],
      },
    ],
  },
  {
    id: 'clean-files',
    title: 'Cleaner files at night',
    icon: 'sparkle',
    group: 'Image quality',
    summary: 'Quiet helpers that reduce grain and fix lens quirks automatically.',
    sections: [
      {
        heading: 'Noise reduction',
        body: [
          'High ISO NR gently smooths the grain that appears in dark, high-ISO shots. Normal is a good balance; turn it Low if you prefer to keep fine detail.',
          'Long Exposure NR helps tripod night shots: after a multi-second exposure the camera takes a second, quick "dark" frame to cancel out hot speckles. It doubles the wait, but cleans up star and skyline shots.',
          'These only affect JPEGs. RAW files stay untouched, so you control noise later in editing.',
        ],
        tip: 'For handheld night markets, leave High ISO NR on Normal and do not worry about it.',
      },
      {
        heading: 'Automatic lens fixes',
        body: [
          'Lens Compensation quietly corrects three small lens quirks: darker corners, faint colour fringing on hard edges, and slight bending of straight lines.',
          'Leave all three on Auto and forget about them. Your photos just look cleaner, especially architecture with straight edges.',
        ],
      },
    ],
  },

  // ════════════════════════ CUSTOM CONTROLS ════════════════════════
  {
    id: 'custom-buttons',
    title: 'Custom buttons & the Fn menu',
    icon: 'click',
    group: 'Custom controls',
    summary: 'Make the camera fit your hands so settings are one press away.',
    sections: [
      {
        heading: 'Custom buttons',
        body: [
          'Several buttons (C1, C2, AF-ON, the control-wheel edges and centre, even the movie button) can be reassigned to any job you like. Note the A7C II has C1 and C2, not a separate "AEL" button.',
          'Set them under MENU → Setup → Operation Customize → Custom Key/Dial Set. You can even set different jobs for stills, video and playback.',
          'Good street choices: C1 → Focus Area, C2 → Eye AF (or Silent Mode), control-wheel right → ISO, left → Drive Mode.',
        ],
        tip: 'The full recommended layout, step by step, lives in the "Before You Fly" checklist on the Trip tab.',
      },
      {
        heading: 'The Fn menu',
        body: [
          'Pressing Fn brings up a grid of 12 settings you choose. It is your control centre, so you skip the big menu almost entirely.',
          'Fill it with the things you actually change: ISO, Drive Mode, Focus Mode, Focus Area, White Balance, Metering, Face/Eye, Creative Look, SteadyShot, Silent Mode, Quality, and one spare.',
          'Put the most-used tiles top-left, nearest your thumb.',
        ],
      },
    ],
  },
  {
    id: 'my-menu-recall',
    title: 'My Menu & saved setups',
    icon: 'star',
    group: 'Custom controls',
    summary: 'Pin your deep settings, and recall a whole configuration in one twist.',
    sections: [
      {
        heading: 'My Menu',
        body: [
          'My Menu is your personal tab (the star) where you pin the handful of deeper settings you actually touch: Format, Auto ISO min shutter, APS-C crop, Silent Mode, Airplane Mode, wireless transfer.',
          'Add items with MENU → My Menu → Add Item, and turn on "Display From My Menu" so the menu opens here first.',
        ],
      },
      {
        heading: 'Memory recall (1, 2, 3)',
        body: [
          'The numbered slots on the mode dial save a complete setup: mode, aperture, ISO behaviour, focus settings, everything.',
          'Set the camera exactly how you like it for street, then MENU → Shooting → Shooting Mode → Camera Set. Memory → register it to slot 1.',
          'Now twisting to 1 instantly recalls your whole street recipe. Save slot 2 for night, slot 3 for food.',
        ],
        tip: 'This is the single biggest time-saver. One twist of the dial and the camera is configured for the moment.',
      },
      {
        heading: 'Back up your whole setup',
        body: [
          'Once you have set up custom buttons, the Fn menu and My Menu, save the lot to your memory card with Save/Load Settings.',
          'If you ever reset the camera by accident, or buy a second body, you can load it all back in one go rather than redoing every step.',
          'Do this after finishing the "Before You Fly" checklist, then keep that card safe.',
        ],
      },
    ],
  },

  // ════════════════════════ VIDEO ════════════════════════
  {
    id: 'video-basics',
    title: 'Shooting video',
    icon: 'video',
    group: 'Video & playback',
    summary: 'Capturing clips of the trip, kept simple.',
    sections: [
      {
        heading: 'Getting a clean clip',
        body: [
          'Turn the small top-left dial to the movie icon. Press the red record button to start and stop.',
          'For natural-looking motion, set the frame rate to 25 or 30 and the shutter to roughly double that (around 1/50s). The camera’s Auto can handle this if you would rather not fiddle.',
          'The A7C II shoots up to 4K, which is sharp enough for any screen. 4K at 24-30 frames is plenty for travel clips.',
        ],
        tip: 'SteadyShot has an "Active" mode for video that smooths out walking shots. Turn it on for handheld strolling clips.',
      },
      {
        heading: 'Sound and framing',
        body: [
          'The built-in microphone is fine for ambience. For interviews or vlogging, a small mic on the hot shoe sounds much better.',
          'Flip the screen to face you for selfie-style clips. Eye autofocus keeps you sharp as you move.',
        ],
      },
      {
        heading: 'Filming yourself, hands-free',
        body: [
          'Auto Framing can follow you around the frame and crop to keep you nicely placed, even with the camera sitting still on a table. It is like having an invisible camera operator.',
          'Framing Stabilizer smooths out the wobble so a walk-and-talk clip looks steady.',
          'Both are video-only and live in the movie menus. Flip the screen to face you, turn them on, and just talk.',
        ],
        tip: 'You can ignore the Picture Profile and Log settings entirely. They are for advanced colour grading and only make footage look flat and grey otherwise.',
      },
    ],
  },
  {
    id: 'playback',
    title: 'Reviewing & tidying photos',
    icon: 'eye',
    group: 'Video & playback',
    summary: 'Check focus, rate keepers, and delete duds, on the camera.',
    sections: [
      {
        heading: 'Review like a pro',
        body: [
          'Press the play button to review. Spin the front dial or pinch to zoom in and check the eyes are truly sharp.',
          'Rotate to a grid view to scan many photos quickly, then tap one to open it.',
          'Delete with the trash button. Be a little ruthless each evening so your card and your editing stay manageable.',
        ],
        tip: 'Give your best shots a star rating in playback. Later, your computer can filter to just the rated keepers, saving hours.',
      },
      {
        heading: 'Protect, crop & grab a frame',
        body: [
          'Protect a favourite so a careless "delete all" can never wipe it.',
          'Crop straightens or tightens a shot right on the camera if you want to share it immediately.',
          'Photo Capture pulls a single still out of a video clip, a neat way to rescue a moment you only caught on film.',
        ],
      },
    ],
  },

  // ════════════════════════ POWER, STORAGE & CONNECT ════════════════════════
  {
    id: 'power-storage',
    title: 'Battery, power & cards',
    icon: 'battery',
    group: 'Power & storage',
    summary: 'Keep shooting all day, and never lose a photo.',
    sections: [
      {
        heading: 'Power that lasts',
        body: [
          'The battery (NP-FZ100) is good for a few hundred shots. Carry at least one spare, fully charged.',
          'You can top up over USB-C from a power bank, even while a strap is round your neck between sights.',
          'Turn on power-saving (the screen dims and sleeps) and use the viewfinder to stretch a charge further.',
        ],
        tip: 'In Vietnam’s heat, batteries drain a touch faster. Two spares and a USB-C power bank means you never miss golden hour.',
      },
      {
        heading: 'Memory cards',
        body: [
          'The A7C II takes one SD card (UHS-II for the fastest performance). A V30 card suits photos; V60/V90 helps with long bursts and 4K video.',
          'Format a new card in the camera before first use. Carry a spare card as cheap insurance abroad.',
          'Back up to your phone or a small drive each evening, so a lost camera never means lost memories.',
        ],
      },
      {
        heading: 'Heat in the tropics',
        body: [
          'In Vietnam’s heat, long video clips or time-lapses can make the camera warm and eventually pause to cool down.',
          'If you film a lot, set Auto Power OFF Temp. to High, which lets the camera keep running while it gets a little warmer to the touch.',
          'Keep it out of direct sun between shots, and flip the screen away from your body so heat can escape.',
        ],
        tip: 'For stills-only street shooting you will almost never see a heat warning. It mainly matters for long 4K clips.',
      },
    ],
  },
  {
    id: 'connect-transfer',
    title: 'Phone transfer & Wi-Fi',
    icon: 'wifi',
    group: 'Power & storage',
    summary: 'Get photos onto your phone to share or back up on the road.',
    sections: [
      {
        heading: 'Creators’ App',
        body: [
          'Install Sony’s free "Creators’ App" on your phone. Pair it with the camera once over Bluetooth and Wi-Fi.',
          'Then you can copy photos to your phone to edit and share, control the camera remotely (handy for tripod group shots), and add your location to photos.',
          'Transfer happens over the camera’s own Wi-Fi, so it works with no internet, perfect for a hotel room with patchy signal.',
        ],
        tip: 'Set the camera to send a smaller JPEG to your phone for quick sharing, while the full RAW stays safe on the card.',
      },
      {
        heading: 'Airplane mode',
        body: [
          'When you are not transferring, turn on Airplane Mode to switch off the radios and save battery.',
          'It is also required on flights, and it is one tap from your My Menu.',
          'Back home, a single USB-C cable turns the camera into a high-quality webcam (USB Streaming) for video calls, no extra software needed.',
        ],
      },
    ],
  },

  // ════════════════════════ CARE & PROBLEM-SOLVING ════════════════════════
  {
    id: 'care',
    title: 'Care, cleaning & firmware',
    icon: 'shield',
    group: 'Care & fixing',
    summary: 'Keep the camera healthy on a dusty, humid trip.',
    sections: [
      {
        heading: 'Keeping it clean',
        body: [
          'Wipe the lens front with a microfibre cloth; use a blower puff to remove grit before wiping so you do not scratch it.',
          'Change lenses quickly, pointing the camera down, to keep dust off the sensor. The camera shakes its sensor to shed dust each time you power off.',
          'If you see the same dark spot on every photo, run Sensor Cleaning in the menu, or have a shop clean it.',
        ],
        tip: 'Humidity and air-conditioning cause condensation. Let the camera warm up gradually when moving from a cold room into hot, humid air, and keep a silica gel packet in your bag.',
      },
      {
        heading: 'Firmware updates',
        body: [
          'Before you fly, check Sony’s website for a firmware update (the camera’s internal software). Updates add features and fix bugs.',
          'It updates over USB from a computer, or via the Creators’ App. Do it on a full battery and do not interrupt it.',
        ],
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'When something goes wrong',
    icon: 'alert',
    group: 'Care & fixing',
    summary: 'Quick answers to the most common head-scratchers.',
    sections: [
      {
        heading: 'Common fixes',
        body: [
          'Photos blurry: shutter too slow (raise the Auto-ISO minimum shutter), or focus missed (use AF-C + Eye AF), or you moved (brace and breathe out).',
          'Photos too dark or bright: use exposure compensation, plus to brighten, minus to darken.',
          'Shutter will not fire: the camera may be trying to focus and failing in low contrast, switch to a Spot area on something with an edge, or use manual focus.',
          'Colours look off: switch white balance from Auto to a matching preset, or shoot RAW and fix later.',
        ],
        tip: 'If the camera ever behaves strangely, turn it off and on. If it is still odd, "Setting Reset" returns everything to factory defaults (you will need to redo your custom buttons).',
      },
      {
        heading: 'Card and battery messages',
        body: [
          '"Cannot recognise card": reseat it, or format it in the camera (after backing up).',
          'Battery draining fast: turn on Airplane Mode and power-saving, and lower screen brightness.',
          '"Card full" mid-trip: delete duds in playback, or swap to your spare card.',
        ],
      },
    ],
  },

  // ════════════════════════ MORE EXPOSURE TOPICS ════════════════════════
  {
    id: 'auto-scene-modes',
    title: 'Auto & scene modes',
    icon: 'sliders',
    group: 'Exposure & light',
    summary: 'The fully-automatic options, for when you just want the shot.',
    sections: [
      {
        heading: 'Intelligent Auto',
        body: [
          'Turn the mode dial to the green Auto and the camera handles everything: brightness, focus, even recognising the scene.',
          'It is a fine safety net when you have no time to think, like a fleeting street moment. You give up creative control, but you get a solid photo.',
          'As you grow, move to A (Aperture Priority) so you keep the one creative choice that matters: background blur.',
        ],
        tip: 'Auto is great for handing the camera to someone else to take a photo of you.',
      },
      {
        heading: 'Scene picker & Bulb',
        body: [
          'Scene Selection offers ready-made recipes (Portrait, Landscape, Sunset, Night Scene and more) if you would rather pick a situation than juggle settings.',
          'Bulb is the opposite extreme: the shutter stays open for as long as you hold it, for very long night exposures like light trails. Use a tripod and the timer.',
        ],
        advanced: true,
      },
    ],
  },
  {
    id: 'flash',
    title: 'Using a flash',
    icon: 'zap',
    group: 'Exposure & light',
    summary: 'The A7C II has no built-in flash. Here is what to know if you add one.',
    sections: [
      {
        heading: 'When you might want one',
        body: [
          'There is no pop-up flash on this camera, which is fine: it is so good in low light you rarely need one for travel.',
          'A small flash on the hot shoe helps in two spots: filling harsh midday shadows on faces, and adding a catch-light indoors.',
          'Point the flash head at the ceiling (bounce) for soft, natural light rather than a harsh straight-on blast.',
        ],
        tip: 'For night markets, a fast lens and high ISO almost always look more natural than a flash.',
      },
      {
        heading: 'Flash settings',
        body: [
          'Flash Mode decides when it fires: Fill-flash forces it on (great for shadowed faces in daylight), Slow Sync keeps the background bright at night.',
          'Flash Compensation dials the flash brighter or softer if it looks too strong.',
          'Red-Eye Reduction fires a quick pre-flash, and Wireless Flash lets you place compatible flashes off to the side.',
        ],
        advanced: true,
      },
    ],
  },
  {
    id: 'display-tools',
    title: 'Display & framing aids',
    icon: 'frame',
    group: 'Getting started',
    summary: 'On-screen helpers for level horizons, exposure and clean framing.',
    sections: [
      {
        heading: 'The everyday helpers',
        body: [
          'Press DISP to cycle screen layouts: a clean view, a detailed view, a level gauge, the brightness graph (histogram), and a grid.',
          'The grid (with rule-of-thirds or square styles) helps you place subjects and keep horizons straight.',
          'The level gauge shows if the camera is tilted left/right or leaning forward, perfect for buildings and seascapes.',
        ],
        tip: 'Turn on both the grid and the level for architecture, so verticals stay upright.',
      },
      {
        heading: 'Going deeper',
        body: [
          'Zebra stripes warn when something is too bright (covered in the "Reading the light" chapter).',
          'Markers can overlay a chosen crop or aspect outline for video framing.',
          'Gamma Display Assist makes flat Log video look normal on screen while you film. Bright Monitoring brightens the preview in near-darkness so you can compose.',
        ],
        advanced: true,
      },
    ],
  },

  // ════════════════════════ MOVIE SUITE ════════════════════════
  {
    id: 'movie-suite',
    title: 'The full movie toolkit',
    icon: 'video',
    group: 'Video & playback',
    summary: 'Everything beyond pressing record, kept light unless you dig in.',
    sections: [
      {
        heading: 'Sound that matches the picture',
        body: [
          'The built-in mic captures ambience well. For talking, a small shoe-mounted mic is a big step up and needs no cables thanks to the digital hot shoe.',
          'Audio Rec Level lets you turn the recording volume up or down, and Wind Noise Reduction cuts that rumble on breezy days by the bay.',
        ],
      },
      {
        heading: 'Recording formats & quality',
        body: [
          'Movie Settings picks the resolution (4K or HD) and smoothness (frames per second). 4K at 24-30 is ideal for travel.',
          'File Format chooses the underlying video type; XAVC S is the simple, widely-compatible one.',
          'Slow & Quick (S&Q) records graceful slow motion or sped-up motion in-camera.',
        ],
        advanced: true,
      },
      {
        heading: 'Pro colour: Log, LUTs & Picture Profiles',
        body: [
          'These exist for film-makers who colour-grade afterwards. Log records a flat, grey-looking image that holds maximum detail to push around in editing.',
          'A LUT is a colour preset that turns that flat footage back into a finished look, and you can preview it on-screen while filming.',
          'For normal clips, ignore all of this and leave Picture Profile off. Your footage will look great straight out of the camera.',
        ],
        advanced: true,
      },
      {
        heading: 'Backup & timing extras',
        body: [
          'Proxy saves a tiny second copy of each clip so you can edit quickly on a phone, then swap in the full-quality version later.',
          'Time Code stamps each frame with a running clock, used to sync multiple cameras on a shoot.',
          'These are pro conveniences you will likely never need for travel video.',
        ],
        advanced: true,
      },
    ],
  },

  // ════════════════════════ NETWORK ════════════════════════
  {
    id: 'networking',
    title: 'Wireless, in full',
    icon: 'wifi',
    group: 'Power & storage',
    summary: 'Every way the camera connects, from phone transfer to pro upload.',
    sections: [
      {
        heading: 'The two you will actually use',
        body: [
          'Phone transfer: the free Creators’ App copies photos to your phone over the camera’s own Wi-Fi, with no internet needed.',
          'Remote control: the same app turns your phone into a live viewfinder and shutter, brilliant for group shots and tripod selfies in Vietnam.',
          'Pair once over Bluetooth, and the camera can even add your location to each photo from the phone’s GPS.',
        ],
        tip: 'Set transfers to send a smaller JPEG for speedy sharing while the full RAW stays safe on the card.',
      },
      {
        heading: 'Bluetooth remote',
        body: [
          'A tiny Sony remote or shooting grip can fire the shutter over Bluetooth, handy for shake-free night shots and self-portraits.',
        ],
        advanced: true,
      },
      {
        heading: 'Pro connections',
        body: [
          'USB Streaming turns the camera into a high-quality webcam with a single cable.',
          'FTP Transfer auto-sends photos to a server, and Wired LAN / tethering plug the camera into a network by cable. These are for press and studio pros.',
          'Creators’ Cloud is Sony’s optional online backup and sharing service.',
        ],
        advanced: true,
      },
    ],
  },

  // ════════════════════════ REFERENCE ════════════════════════
  {
    id: 'specs',
    title: 'The camera at a glance',
    icon: 'info',
    group: 'Reference',
    summary: 'Key numbers for your A7C II, in plain terms.',
    sections: [
      {
        heading: 'What the numbers mean',
        body: [
          'Sensor: 33 megapixels, full-frame. Big and detailed, with lovely low-light ability and room to crop.',
          'Focus: 759 points covering most of the frame, with AI subject recognition for people, animals, birds, insects and vehicles.',
          'Speed: up to 10 photos per second. Stabilisation worth up to 7 stops, so sharp handheld shots in dim light.',
          'ISO: 100 to 51200 (stretchable further). Video up to 4K. One UHS-II SD card slot. USB-C charging.',
        ],
        tip: 'In short: a small body with the guts of Sony’s bigger cameras. The "C" is for compact, not cut-down.',
      },
    ],
  },
  {
    id: 'warnings',
    title: 'Warning messages & fixes',
    icon: 'alert',
    group: 'Reference',
    summary: 'What the camera is telling you, and what to do about it.',
    sections: [
      {
        heading: 'Common messages',
        body: [
          '"No card" or "Cannot recognise card": reseat the card; if it persists, back it up and format it in the camera.',
          'Overheating (thermometer icon): the camera is hot from long video. Let it rest in shade; set Auto Power OFF Temp. to High to run longer.',
          '"Unable to magnify" or focus will not lock: there is too little contrast. Aim at a defined edge or switch to manual focus.',
          'Battery icon flashing: charge soon, or top up from a USB-C power bank.',
        ],
        tip: 'When in doubt, turn the camera off and on. If it stays odd, a Setting Reset cures most gremlins (you will redo your custom buttons).',
      },
      {
        heading: 'Looking after it in Vietnam',
        body: [
          'Heat and humidity cause condensation when moving from air-conditioning into hot air. Let the camera adjust gradually and keep a silica gel packet in your bag.',
          'Wipe the lens with a microfibre cloth, and blow grit off before wiping so you do not scratch it.',
          'Change lenses quickly with the camera pointed down to keep dust off the sensor; it shakes itself clean at power-off.',
        ],
      },
    ],
  },
]

export const guideChapterById = (id: string): GuideChapter | undefined =>
  guideChapters.find((c) => c.id === id)

// Ordered list of group labels for the Learn hub.
export const guideGroups: string[] = [
  'Getting started',
  'Exposure & light',
  'Focus',
  'Capture',
  'Image quality',
  'Custom controls',
  'Video & playback',
  'Power & storage',
  'Care & fixing',
  'Reference',
]

// Rough reading time in minutes. ~150 words/min, a realistic pace for taking in
// new photography concepts rather than skimming.
export const chapterMinutes = (c: GuideChapter): number => {
  const count = (s: string) => s.trim().split(/\s+/).length
  let words = count(c.title) + count(c.summary)
  c.sections.forEach((sec) => {
    words += count(sec.heading)
    sec.body.forEach((b) => (words += count(b)))
    if (sec.tip) words += count(sec.tip)
  })
  return Math.max(2, Math.round(words / 150))
}

// A curated, ordered "read this on the plane" list: foundations first, then the
// skills that matter most for street/night photography in Vietnam.
export const flightReading: string[] = [
  'first-10', 'modes', 'exposure', 'aperture-dof', 'shutter-motion', 'iso-noise',
  'exp-comp', 'white-balance', 'autofocus', 'focus-areas', 'eye-af',
  'silent-shutter', 'custom-buttons', 'clean-files', 'troubleshooting',
]
