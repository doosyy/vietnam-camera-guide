import type { MenuTab, MenuRefItem } from './types'

// A-to-Z reference mirroring the camera's real menu. Every item gets a one-line,
// plain-English explanation written from scratch. "advanced" items tuck behind an
// expander so the everyday list stays light. Grouped by the A7C II's menu tabs.

export const menuTabs: MenuTab[] = [
  { id: 'shooting', label: 'Shooting', icon: 'camera', blurb: 'File types, drive, shutter, zoom and the shooting screen.' },
  { id: 'exposure', label: 'Exposure & Colour', icon: 'sun', blurb: 'Brightness, ISO, metering, white balance, flash and looks.' },
  { id: 'focus', label: 'Focus', icon: 'focus', blurb: 'Focus modes, areas, subject recognition and assists.' },
  { id: 'playback', label: 'Playback', icon: 'eye', blurb: 'Reviewing, rating, protecting and editing your shots.' },
  { id: 'network', label: 'Network', icon: 'wifi', blurb: 'Wi-Fi, Bluetooth, phone transfer and streaming.' },
  { id: 'setup', label: 'Setup', icon: 'sliders', blurb: 'Screen, sound, power, buttons, language and care.' },
]

export const menuItems: MenuRefItem[] = [
  // ════════════ SHOOTING ════════════
  // — File & quality
  { id: 'file-format', tab: 'shooting', group: 'File & quality', name: 'Photo file type', sony: 'File Format', plain: 'Choose RAW (editable master), JPEG/HEIF (ready to share), or both together.' },
  { id: 'raw-type', tab: 'shooting', group: 'File & quality', name: 'RAW type', sony: 'RAW File Type', plain: 'Lossless Compressed keeps full quality in a smaller file. Use it.' , advanced: true },
  { id: 'jpeg-heif', tab: 'shooting', group: 'File & quality', name: 'JPEG or HEIF', sony: 'JPEG/HEIF Switch', plain: 'Pick the ready-to-share format. JPEG opens anywhere; HEIF is smaller with smoother colour.' },
  { id: 'jpeg-quality', tab: 'shooting', group: 'File & quality', name: 'Photo quality', sony: 'JPEG/HEIF Quality', plain: 'How much the photo is compressed. Use Extra Fine for the best detail.' },
  { id: 'image-size', tab: 'shooting', group: 'File & quality', name: 'Photo size', sony: 'JPEG/HEIF Image Size', plain: 'Large uses the full 33 megapixels. Only drop it to save space.' },
  { id: 'aspect', tab: 'shooting', group: 'File & quality', name: 'Frame shape', sony: 'Aspect Ratio', plain: 'The shape of the photo: 3:2 (standard), 4:3, 16:9 (wide) or 1:1 (square).' },
  { id: 'hlg-still', tab: 'shooting', group: 'File & quality', name: 'HDR photo', sony: 'HLG Still Image', plain: 'Captures extra-bright-and-dark detail for HDR screens. Niche; leave off.', advanced: true },
  { id: 'color-space', tab: 'shooting', group: 'File & quality', name: 'Colour space', sony: 'Color Space', plain: 'Leave on sRGB unless a pro print lab asks for AdobeRGB.', advanced: true },
  { id: 'apsc', tab: 'shooting', group: 'File & quality', name: 'Crop for extra reach', sony: 'APS-C S35 Shooting', plain: 'Crops the middle of the sensor so your lens reaches further, at lower resolution.' },

  // — Movie formats
  { id: 'movie-format', tab: 'shooting', group: 'Movie recording', name: 'Video file type', sony: 'File Format (movie)', plain: 'The video format. XAVC S is the simple, widely-compatible choice.' },
  { id: 'movie-settings', tab: 'shooting', group: 'Movie recording', name: 'Video size & smoothness', sony: 'Movie Settings', plain: 'Sets the resolution (4K/HD) and frames per second of your clips.' },
  { id: 'sq-settings', tab: 'shooting', group: 'Movie recording', name: 'Slow & quick motion', sony: 'S&Q Settings', plain: 'Records slowed-down or sped-up video without editing afterwards.' },
  { id: 'timelapse-set', tab: 'shooting', group: 'Movie recording', name: 'Time-lapse', sony: 'Time-lapse Settings', plain: 'Builds a sped-up clip of a slow event right in the camera.' },
  { id: 'proxy', tab: 'shooting', group: 'Movie recording', name: 'Small backup video', sony: 'Proxy Settings', plain: 'Saves a tiny second copy of each clip for quick phone editing.', advanced: true },

  // — Drive & bracketing
  { id: 'drive', tab: 'shooting', group: 'Drive & bracketing', name: 'Single, burst or timer', sony: 'Drive Mode', plain: 'One shot, a rapid burst, or a self-timer delay.' },
  { id: 'self-timer', tab: 'shooting', group: 'Drive & bracketing', name: 'Self-timer', sony: 'Self-timer', plain: 'A 2 or 10 second delay before the shot. The 2-second avoids tripod wobble.' },
  { id: 'cont-bracket', tab: 'shooting', group: 'Drive & bracketing', name: 'Brightness bracket', sony: 'Cont./Single Bracket', plain: 'Takes several frames at different brightnesses for tricky light.', advanced: true },
  { id: 'focus-bracket', tab: 'shooting', group: 'Drive & bracketing', name: 'Focus bracket', sony: 'Focus Bracket', plain: 'Takes a set at different focus points to stack into one ultra-sharp macro.', advanced: true },
  { id: 'wb-bracket', tab: 'shooting', group: 'Drive & bracketing', name: 'Colour bracket', sony: 'WB Bracket', plain: 'Takes versions with slightly different colour casts. Rarely needed.', advanced: true },
  { id: 'dro-bracket', tab: 'shooting', group: 'Drive & bracketing', name: 'Shadow bracket', sony: 'DRO Bracket', plain: 'Takes versions with different shadow brightening. Rarely needed.', advanced: true },
  { id: 'interval', tab: 'shooting', group: 'Drive & bracketing', name: 'Interval shooting', sony: 'Interval Shoot Func.', plain: 'Takes a photo automatically every few seconds to assemble into a time-lapse.' },

  // — Shutter & silent
  { id: 'shutter-type', tab: 'shooting', group: 'Shutter & silent', name: 'Shutter type', sony: 'Shutter Type', plain: 'Mechanical (the click) or fully electronic. Auto picks for you.', advanced: true },
  { id: 'silent', tab: 'shooting', group: 'Shutter & silent', name: 'Silent shooting', sony: 'Silent Mode Settings', plain: 'Takes photos with no sound, for temples and candid moments.' },
  { id: 'anti-flicker', tab: 'shooting', group: 'Shutter & silent', name: 'Anti-flicker', sony: 'Anti-flicker Set.', plain: 'Removes the banding caused by fast-flickering indoor and LED lights.' },
  { id: 'release-no-lens', tab: 'shooting', group: 'Shutter & silent', name: 'Shoot without a lens', sony: 'Release w/o Lens', plain: 'Lets the shutter fire with no lens or an adapter attached.', advanced: true },
  { id: 'release-no-card', tab: 'shooting', group: 'Shutter & silent', name: 'Shoot without a card', sony: 'Release w/o Card', plain: 'Best set to Off so you never "shoot" with no card to save to.' },

  // — Zoom
  { id: 'zoom-range', tab: 'shooting', group: 'Zoom', name: 'Extra zoom type', sony: 'Zoom Range', plain: 'Clear Image Zoom adds reach with little loss; Digital Zoom adds more but softer.' },
  { id: 'zoom', tab: 'shooting', group: 'Zoom', name: 'Zoom amount', sony: 'Zoom', plain: 'Pushes the zoom past the lens using processing.' },

  // — Shooting display
  { id: 'grid', tab: 'shooting', group: 'Shooting screen', name: 'Grid lines', sony: 'Grid Line Display', plain: 'Overlays a grid to help you level horizons and place subjects.' },
  { id: 'grid-type', tab: 'shooting', group: 'Shooting screen', name: 'Grid style', sony: 'Grid Line Type', plain: 'Choose a rule-of-thirds, square or diagonal grid.' },
  { id: 'live-view', tab: 'shooting', group: 'Shooting screen', name: 'Live preview brightness', sony: 'Live View Display Set.', plain: 'Whether the screen previews your exposure and effects. Keep Effect On.', advanced: true },
  { id: 'disp-set', tab: 'shooting', group: 'Shooting screen', name: 'Screen layouts', sony: 'DISP (Screen Disp) Set', plain: 'Choose which info layouts the DISP button cycles through.' },
  { id: 'auto-review', tab: 'shooting', group: 'Shooting screen', name: 'Show photo after shooting', sony: 'Auto Review', plain: 'Briefly shows each shot after you take it. Off keeps you shooting faster.' },

  // ════════════ EXPOSURE & COLOUR ════════════
  { id: 'exp-comp', tab: 'exposure', group: 'Brightness', name: 'Brighten / darken', sony: 'Exposure Comp.', plain: 'Nudge the whole photo brighter (+) or darker (−) instantly.' },
  { id: 'exp-step', tab: 'exposure', group: 'Brightness', name: 'Adjustment step', sony: 'Exposure step', plain: 'How fine the brightness and shutter steps are (1/3 or 1/2 stop).', advanced: true },
  { id: 'auto-slow', tab: 'exposure', group: 'Brightness', name: 'Auto slow shutter', sony: 'Auto Slow Shutter', plain: 'In video, lets the shutter slow in dim light to keep brightness.', advanced: true },
  { id: 'zebra', tab: 'exposure', group: 'Brightness', name: 'Too-bright warning', sony: 'Zebra Display', plain: 'Paints stripes over areas about to lose detail from being too bright.' },
  { id: 'histogram', tab: 'exposure', group: 'Brightness', name: 'Brightness graph', sony: 'Histogram', plain: 'A live graph showing how dark or bright the shot is.' },
  { id: 'metering', tab: 'exposure', group: 'Metering', name: 'How light is measured', sony: 'Metering Mode', plain: 'Whole-frame (Multi) is best for almost everything. Spot reads one point.' },
  { id: 'face-meter', tab: 'exposure', group: 'Metering', name: 'Brighten for faces', sony: 'Face Priority in Multi Metering', plain: 'Helps expose people’s faces nicely. Leave on.', advanced: true },
  { id: 'iso', tab: 'exposure', group: 'ISO', name: 'ISO (light boost)', sony: 'ISO', plain: 'Brightens dark scenes. Auto with a sensible ceiling is ideal.' },
  { id: 'iso-range', tab: 'exposure', group: 'ISO', name: 'Auto ISO limits', sony: 'ISO Range Limit', plain: 'Set how high Auto ISO is allowed to climb (e.g. up to 12800).' },
  { id: 'iso-min-ss', tab: 'exposure', group: 'ISO', name: 'Auto ISO min shutter', sony: 'ISO AUTO Min. SS', plain: 'Keeps the shutter fast enough to avoid blur before ISO rises.' },
  { id: 'wb', tab: 'exposure', group: 'White balance', name: 'Colour balance', sony: 'White Balance', plain: 'Keeps colours natural under any light. Auto is excellent.' },
  { id: 'custom-wb', tab: 'exposure', group: 'White balance', name: 'Set white by hand', sony: 'Custom White Balance', plain: 'Teach the camera what white looks like in odd lighting.', advanced: true },
  { id: 'awb-priority', tab: 'exposure', group: 'White balance', name: 'Auto colour mood', sony: 'Priority Set in AWB', plain: 'Whether Auto keeps a warm ambience or neutralises it. Try "Ambience".', advanced: true },
  { id: 'dro', tab: 'exposure', group: 'Look & colour', name: 'Lift shadows', sony: 'D-Range Optimizer', plain: 'Gently brightens dark areas of JPEGs so shadows keep detail. Auto is safe.' },
  { id: 'creative-look', tab: 'exposure', group: 'Look & colour', name: 'Colour style', sony: 'Creative Look', plain: 'Built-in colour recipes: Standard, Vivid, film looks, black & white.' },
  { id: 'picture-profile', tab: 'exposure', group: 'Look & colour', name: 'Pro video colour', sony: 'Picture Profile', plain: 'Advanced flat/Log colour for video editing. Leave off for normal use.', advanced: true },
  { id: 'soft-skin', tab: 'exposure', group: 'Look & colour', name: 'Smooth skin', sony: 'Soft Skin Effect', plain: 'Softens skin in JPEGs/video. Subtle; optional.', advanced: true },
  // — Flash
  { id: 'flash-mode', tab: 'exposure', group: 'Flash', name: 'Flash mode', sony: 'Flash Mode', plain: 'When a fitted flash fires: off, auto, fill, or slow-sync.' },
  { id: 'flash-comp', tab: 'exposure', group: 'Flash', name: 'Flash power', sony: 'Flash Comp.', plain: 'Dial the flash brighter or softer without changing the rest.' },
  { id: 'red-eye', tab: 'exposure', group: 'Flash', name: 'Red-eye reduction', sony: 'Red Eye Reduction', plain: 'A pre-flash to shrink red-eye in flash portraits.', advanced: true },
  { id: 'wireless-flash', tab: 'exposure', group: 'Flash', name: 'Off-camera flash', sony: 'Wireless Flash', plain: 'Fire compatible flashes placed away from the camera.', advanced: true },

  // ════════════ FOCUS ════════════
  { id: 'focus-mode', tab: 'focus', group: 'Focus basics', name: 'Focus mode', sony: 'Focus Mode', plain: 'AF-S locks once (still subjects), AF-C tracks (moving), MF is manual.' },
  { id: 'focus-area', tab: 'focus', group: 'Focus basics', name: 'Focus area', sony: 'Focus Area', plain: 'Where the camera looks: Wide (anywhere), Spot (a point you place), Tracking.' },
  { id: 'tracking', tab: 'focus', group: 'Focus basics', name: 'Lock onto a subject', sony: 'Tracking function', plain: 'Sticks focus to a chosen subject as it moves around the frame.' },
  { id: 'dmf', tab: 'focus', group: 'Focus basics', name: 'Autofocus then tweak', sony: 'Direct Manual Focus', plain: 'Autofocus first, then fine-tune by turning the lens ring.', advanced: true },
  { id: 'subj-recog', tab: 'focus', group: 'Subject recognition', name: 'Recognise subjects', sony: 'Subject Recog in AF', plain: 'The camera finds and locks onto your subject automatically. Leave on.' },
  { id: 'recog-target', tab: 'focus', group: 'Subject recognition', name: 'What to recognise', sony: 'Recognition Target', plain: 'People, animals, birds, insects, cars, trains or planes.' },
  { id: 'eye-select', tab: 'focus', group: 'Subject recognition', name: 'Which eye', sony: 'Right/Left Eye Select', plain: 'Force focus to the near or far eye. Auto is usually fine.', advanced: true },
  { id: 'face-memory', tab: 'focus', group: 'Subject recognition', name: 'Remember faces', sony: 'Face Memory', plain: 'Register people so the camera gives them priority in a crowd.', advanced: true },
  { id: 'peaking', tab: 'focus', group: 'Manual focus aids', name: 'Focus glow (peaking)', sony: 'Peaking Display', plain: 'Outlines whatever is sharp, to help manual focus.' },
  { id: 'focus-magnifier', tab: 'focus', group: 'Manual focus aids', name: 'Magnify to focus', sony: 'Focus Magnifier', plain: 'Zooms the preview in so you can nail focus on fine detail.' },
  { id: 'focus-map', tab: 'focus', group: 'Manual focus aids', name: 'Focus depth map', sony: 'Focus Map', plain: 'Colours the scene by what is in front of / behind focus. Video aid.', advanced: true },
  { id: 'af-track-sens', tab: 'focus', group: 'Focus fine-tuning', name: 'Tracking stickiness', sony: 'AF Tracking Sensitivity', plain: 'How easily focus jumps to something crossing in front. Leave central.', advanced: true },
  { id: 'af-transition', tab: 'focus', group: 'Focus fine-tuning', name: 'Focus pull speed', sony: 'AF Transition Speed', plain: 'For video: how quickly focus shifts between subjects.', advanced: true },
  { id: 'af-assist', tab: 'focus', group: 'Focus fine-tuning', name: 'Manual nudge while AF', sony: 'AF Assist', plain: 'Turn the ring during autofocus to help it find the right subject.', advanced: true },
  { id: 'pre-af', tab: 'focus', group: 'Focus fine-tuning', name: 'Focus before you press', sony: 'Pre-AF', plain: 'The camera keeps focusing roughly before you half-press. Uses more battery.', advanced: true },
  { id: 'af-illuminator', tab: 'focus', group: 'Focus fine-tuning', name: 'Focus assist lamp', sony: 'AF Illuminator', plain: 'A small light that helps autofocus lock in the dark.', advanced: true },
  { id: 'switch-vh', tab: 'focus', group: 'Focus fine-tuning', name: 'Separate focus spots', sony: 'Switch V/H AF Area', plain: 'Remembers a different focus point for upright vs sideways shots.', advanced: true },

  // ════════════ PLAYBACK ════════════
  { id: 'play', tab: 'playback', group: 'Viewing', name: 'View photos', sony: 'Playback', plain: 'Review your shots; pinch or spin to zoom in and check sharpness.' },
  { id: 'image-index', tab: 'playback', group: 'Viewing', name: 'Thumbnail grid', sony: 'Image Index', plain: 'See many photos at once to scan quickly.' },
  { id: 'play-filter', tab: 'playback', group: 'Viewing', name: 'Filter what you see', sony: 'Playback Filter Condition', plain: 'Show only rated, protected or a chosen date’s shots.', advanced: true },
  { id: 'display-group', tab: 'playback', group: 'Viewing', name: 'Group bursts', sony: 'Display as Group', plain: 'Stacks burst and interval shots so they do not clutter playback.', advanced: true },
  { id: 'slideshow', tab: 'playback', group: 'Viewing', name: 'Slideshow', sony: 'Slide Show', plain: 'Plays your photos automatically one after another.' },
  { id: 'rating', tab: 'playback', group: 'Organise', name: 'Star ratings', sony: 'Rating', plain: 'Tag your keepers so your computer can filter to just the best.' },
  { id: 'protect', tab: 'playback', group: 'Organise', name: 'Protect from deletion', sony: 'Protect', plain: 'Locks a favourite so a "delete all" can never wipe it.' },
  { id: 'rotate', tab: 'playback', group: 'Edit', name: 'Rotate', sony: 'Rotate', plain: 'Turns a photo upright.' },
  { id: 'crop', tab: 'playback', group: 'Edit', name: 'Crop', sony: 'Crop', plain: 'Trim or straighten a photo right on the camera.' },
  { id: 'photo-capture', tab: 'playback', group: 'Edit', name: 'Grab a frame from video', sony: 'Photo Capture', plain: 'Saves a single still out of a video clip.' },
  { id: 'delete', tab: 'playback', group: 'Edit', name: 'Delete', sony: 'Delete', plain: 'Removes photos. Set "Delete by pressing twice" for quick culling.' },
  { id: 'hdmi-view', tab: 'playback', group: 'Viewing', name: 'View on a TV', sony: 'Viewing on TV', plain: 'Shows your photos on a TV over an HDMI cable.', advanced: true },

  // ════════════ NETWORK ════════════
  { id: 'smartphone', tab: 'network', group: 'Phone', name: 'Connect your phone', sony: 'Smartphone Connection', plain: 'Pair the free Creators’ App to transfer photos and shoot remotely.' },
  { id: 'send-to-phone', tab: 'network', group: 'Phone', name: 'Send photos to phone', sony: 'Select on Cam & Send', plain: 'Copy chosen photos to your phone over the camera’s own Wi-Fi.' },
  { id: 'remote-shoot', tab: 'network', group: 'Phone', name: 'Remote control', sony: 'Remote Shoot Setting', plain: 'Use your phone as a remote viewfinder and shutter.' },
  { id: 'location', tab: 'network', group: 'Phone', name: 'Add location', sony: 'Location Info Link', plain: 'Tags photos with where you took them, using your phone’s GPS.', advanced: true },
  { id: 'bluetooth', tab: 'network', group: 'Connections', name: 'Bluetooth', sony: 'Bluetooth Settings', plain: 'A low-power link for pairing and remote commanders.' },
  { id: 'bt-remote', tab: 'network', group: 'Connections', name: 'Bluetooth remote', sony: 'Bluetooth Rmt Ctrl', plain: 'Use a small Sony remote or grip to fire the shutter.', advanced: true },
  { id: 'wifi', tab: 'network', group: 'Connections', name: 'Wi-Fi', sony: 'Wi-Fi Settings', plain: 'The faster wireless link for transfers and streaming.' },
  { id: 'airplane', tab: 'network', group: 'Connections', name: 'Airplane mode', sony: 'Airplane Mode', plain: 'Switches all wireless off to save battery and for flights.' },
  { id: 'usb-streaming', tab: 'network', group: 'Streaming', name: 'Use as a webcam', sony: 'USB Streaming', plain: 'One USB cable turns the camera into a high-quality webcam.' },
  { id: 'ftp', tab: 'network', group: 'Streaming', name: 'Auto-upload (FTP)', sony: 'FTP Transfer Func.', plain: 'Pros use this to send photos straight to a server. Skip it.', advanced: true },
  { id: 'cloud', tab: 'network', group: 'Streaming', name: 'Creators’ Cloud', sony: 'Cloud Connection', plain: 'Sony’s optional online backup and sharing service.', advanced: true },

  // ════════════ SETUP ════════════
  { id: 'language', tab: 'setup', group: 'Basics', name: 'Language', sony: 'Language', plain: 'The menu language.' },
  { id: 'datetime', tab: 'setup', group: 'Basics', name: 'Date, time & zone', sony: 'Area/Date/Time Setting', plain: 'Set this to Vietnam while travelling so photo times are right.' },
  { id: 'format', tab: 'setup', group: 'Media', name: 'Format card', sony: 'Format', plain: 'Wipes a card clean. Do it once on a fresh card before shooting.' },
  { id: 'media-info', tab: 'setup', group: 'Media', name: 'Card space left', sony: 'Display Media Info.', plain: 'Shows how many photos and minutes of video fit.' },
  { id: 'file-folder', tab: 'setup', group: 'Media', name: 'File & folder names', sony: 'File/Folder Settings', plain: 'How photos are named and grouped on the card.', advanced: true },
  { id: 'copyright', tab: 'setup', group: 'Media', name: 'Copyright stamp', sony: 'Copyright Info', plain: 'Quietly embeds your name in each photo’s hidden data.', advanced: true },
  { id: 'audio-signal', tab: 'setup', group: 'Sound & screen', name: 'Beeps', sony: 'Audio Signal', plain: 'The focus/shutter beep. Turn off for discreet shooting.' },
  { id: 'monitor-bright', tab: 'setup', group: 'Sound & screen', name: 'Screen brightness', sony: 'Monitor Brightness', plain: 'Brighten the screen for harsh sunlight (uses more battery).' },
  { id: 'finder-bright', tab: 'setup', group: 'Sound & screen', name: 'Viewfinder brightness', sony: 'Viewfinder Bright.', plain: 'Brightness of the eye-window display.', advanced: true },
  { id: 'finder-rate', tab: 'setup', group: 'Sound & screen', name: 'Smoother viewfinder', sony: 'Finder Frame Rate', plain: 'High makes the viewfinder smoother for action, using more battery.', advanced: true },
  { id: 'gamma-assist', tab: 'setup', group: 'Sound & screen', name: 'Preview Log footage', sony: 'Gamma Disp. Assist', plain: 'Makes flat Log video look normal on screen while filming.', advanced: true },
  { id: 'power-save', tab: 'setup', group: 'Power', name: 'Sleep timer', sony: 'Power Save Start Time', plain: 'How long before the camera naps to save battery.' },
  { id: 'auto-temp', tab: 'setup', group: 'Power', name: 'Heat tolerance', sony: 'Auto Power OFF Temp.', plain: 'Set to High to keep filming longer in Vietnam’s heat.' },
  { id: 'usb-power', tab: 'setup', group: 'Power', name: 'Power over USB', sony: 'USB Power Supply', plain: 'Run or charge the camera from a USB-C power bank.' },
  { id: 'custom-key', tab: 'setup', group: 'Controls', name: 'Customise buttons', sony: 'Custom Key/Dial Set.', plain: 'Assign your most-used jobs to buttons and dials.' },
  { id: 'fn-menu', tab: 'setup', group: 'Controls', name: 'Fn menu layout', sony: 'Fn Menu Settings', plain: 'Choose the 12 quick-access tiles behind the Fn button.' },
  { id: 'my-menu', tab: 'setup', group: 'Controls', name: 'My Menu', sony: 'My Menu Settings', plain: 'Pin your most-used deep settings to one personal tab.' },
  { id: 'memory-recall', tab: 'setup', group: 'Controls', name: 'Save a setup', sony: 'Camera Set. Memory', plain: 'Store a whole configuration to a number on the mode dial.' },
  { id: 'save-load', tab: 'setup', group: 'Controls', name: 'Back up settings', sony: 'Save/Load Settings', plain: 'Copy your entire camera setup to a card as a backup.', advanced: true },
  { id: 'sensor-clean', tab: 'setup', group: 'Care', name: 'Clean the sensor', sony: 'Anti-dust Function', plain: 'Shakes dust off the sensor; can close the shutter when powered off.' },
  { id: 'pixel-mapping', tab: 'setup', group: 'Care', name: 'Fix stuck dots', sony: 'Pixel Mapping', plain: 'Re-checks the sensor to hide any stuck bright pixels.', advanced: true },
  { id: 'version', tab: 'setup', group: 'Care', name: 'Firmware version', sony: 'Version', plain: 'Shows the camera’s software version; update it before you fly.' },
  { id: 'reset', tab: 'setup', group: 'Care', name: 'Reset to factory', sony: 'Setting Reset', plain: 'Restores defaults if things get muddled (you’ll redo customisations).' },
  { id: 'screen-reader', tab: 'setup', group: 'Accessibility', name: 'Read the screen aloud', sony: 'Screen Reader', plain: 'Speaks menu items aloud for low-vision use.', advanced: true },
  { id: 'enlarge-screen', tab: 'setup', group: 'Accessibility', name: 'Enlarge menu text', sony: 'Enlarge Screen', plain: 'Magnifies the menus for easier reading.', advanced: true },
  { id: 'usb-mode', tab: 'setup', group: 'Connections', name: 'USB behaviour', sony: 'USB Connection Mode', plain: 'What happens when you plug into a computer (transfer or charge).', advanced: true },
  { id: 'hdmi', tab: 'setup', group: 'Connections', name: 'HDMI output', sony: 'HDMI Settings', plain: 'How video is sent out to a monitor or recorder.', advanced: true },
]

export const menuItemsByTab = (tab: string): MenuRefItem[] =>
  menuItems.filter((m) => m.tab === tab)
