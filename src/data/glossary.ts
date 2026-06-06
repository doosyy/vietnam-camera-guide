import type { GlossaryTerm } from './types'

// Topic groups, in a sensible learning order. Used by the "By topic" view.
export const glossaryCategories: { id: string; label: string }[] = [
  { id: 'exposure', label: 'Exposure & light' },
  { id: 'focus', label: 'Focus' },
  { id: 'shooting', label: 'Modes, drive & shutter' },
  { id: 'files', label: 'Files, colour & look' },
  { id: 'lens', label: 'Lenses, blur & framing' },
  { id: 'body', label: 'Camera & sensor' },
  { id: 'video', label: 'Video & extras' },
]

export const glossaryTerms: GlossaryTerm[] = [
  { id: 'aperture', term: 'Aperture (f-number)', cat: 'exposure', plain: 'How wide the lens opens. A low number like f/2.8 lets in lots of light and blurs the background. A high number like f/8 keeps everything sharp.', also: 'f-stop, depth of field' },
  { id: 'shutter', term: 'Shutter speed', cat: 'exposure', plain: 'How long the camera looks at the scene. Fast (1/500s) freezes action. Slow (1/30s) can blur movement.', also: 'motion blur' },
  { id: 'iso', term: 'ISO', cat: 'exposure', plain: 'How much the camera boosts the light. Low (100) is clean. High (12800) is brighter in the dark but adds grain.', also: 'noise, grain' },
  { id: 'exposure', term: 'Exposure', cat: 'exposure', plain: 'A fancy word for how bright or dark your photo turns out. Set by aperture, shutter and ISO together.' },
  { id: 'exp-comp', term: 'Exposure compensation', cat: 'exposure', plain: 'A quick brightness override. Spin the dial to + to brighten, − to darken, without changing your mode.' },
  { id: 'stop', term: 'Stop', cat: 'exposure', plain: 'A unit of light. One stop means double or half the brightness. Used for aperture, shutter and ISO alike.' },
  { id: 'metering', term: 'Metering', cat: 'exposure', plain: 'How the camera measures brightness to decide the exposure. Leave it on the default (Multi) most of the time.' },
  { id: 'histogram', term: 'Histogram', cat: 'exposure', plain: 'A little graph showing how bright the photo is. Bunched on the left means dark; on the right means bright. Handy in tricky light.' },
  { id: 'noise', term: 'Noise / grain', cat: 'exposure', plain: 'The speckly texture that creeps in at high ISO. A little is fine and can even look filmic.', also: 'ISO' },
  { id: 'min-shutter', term: 'Min shutter speed', cat: 'exposure', plain: 'A safety limit you set so Auto ISO keeps the shutter fast enough to avoid blur before it raises ISO.' },
  { id: 'zebra', term: 'Zebra display', cat: 'exposure', plain: 'Diagonal stripes the camera draws over parts of the scene that are too bright and about to lose detail. A live "too bright" warning.', also: 'histogram, exposure' },
  { id: 'golden-hour', term: 'Golden hour', cat: 'exposure', plain: 'The hour after sunrise and before sunset, when light is warm, soft and flattering. The best time for portraits.' },
  { id: 'blue-hour', term: 'Blue hour', cat: 'exposure', plain: 'The short window after sunset when the sky glows deep blue. Beautiful for city and neon shots.' },

  { id: 'af-s', term: 'AF-S', cat: 'focus', plain: 'Single autofocus: locks focus once when you half-press. Best for still subjects.', also: 'autofocus' },
  { id: 'af-c', term: 'AF-C', cat: 'focus', plain: 'Continuous autofocus: keeps adjusting as things move. Best for street and people.', also: 'autofocus' },
  { id: 'eye-af', term: 'Eye AF', cat: 'focus', plain: 'The camera finds a person’s (or animal’s) eye and focuses on it automatically. Sony does this brilliantly.', also: 'autofocus, AF-C' },
  { id: 'focus-area', term: 'Focus area', cat: 'focus', plain: 'Where the camera looks to focus: Wide (anywhere), Spot (a point you place), Zone, or Tracking (follows a subject).' },
  { id: 'tracking', term: 'Tracking', cat: 'focus', plain: 'You lock onto a subject and the focus box follows it around the frame as it moves.', also: 'autofocus' },
  { id: 'back-button', term: 'Back-button focus', cat: 'focus', plain: 'Moving the focus job onto a thumb button (like AF-ON) so the shutter only takes the photo. A favourite street technique.', also: 'AF-ON' },
  { id: 'peaking', term: 'Focus peaking', cat: 'focus', plain: 'A manual-focus helper that paints bright coloured edges on whatever is sharp, so you can see your focus.', also: 'manual focus' },
  { id: 'dmf', term: 'DMF (direct manual focus)', cat: 'focus', plain: 'Let the camera autofocus, then turn the lens ring to fine-tune by hand, all in one move.', also: 'manual focus, autofocus' },

  { id: 'aperture-priority', term: 'Aperture Priority (A)', cat: 'shooting', plain: 'A mode where you set the f-number and the camera sets the brightness. The ideal everyday mode.', also: 'aperture' },
  { id: 'shutter-priority', term: 'Shutter Priority (S)', cat: 'shooting', plain: 'A mode where you set the shutter speed and the camera sets the rest. Use it to freeze or blur motion on purpose.' },
  { id: 'manual-mode', term: 'Manual (M)', cat: 'shooting', plain: 'You set aperture, shutter and ISO yourself. For tripod night shots and full control.' },
  { id: 'drive', term: 'Drive mode', cat: 'shooting', plain: 'Single shot, a burst of shots, or a self-timer. Use a burst for action, the timer for tripod night shots.' },
  { id: 'burst', term: 'Burst / Continuous', cat: 'shooting', plain: 'Holding the shutter to take many photos a second (up to 10 on the A7C II), so you can pick the best frame.', also: 'drive mode' },
  { id: 'buffer', term: 'Buffer', cat: 'shooting', plain: 'The camera’s short-term memory during a burst. When it fills, the camera pauses to save to the card. A fast card clears it quicker.' },
  { id: 'silent', term: 'Silent shutter', cat: 'shooting', plain: 'An electronic shutter that takes photos with no sound, great for candid and quiet moments.' },
  { id: 'bracketing', term: 'Bracketing', cat: 'shooting', plain: 'Taking several versions of one shot at different brightnesses, so you can pick or blend the best for tricky light.' },
  { id: 'electronic-shutter', term: 'Electronic vs mechanical shutter', cat: 'shooting', plain: 'The mechanical shutter makes a quiet click; the electronic one is silent. Silent is discreet but can band under flickering lights.', also: 'silent shutter, anti-flicker' },
  { id: 'anti-flicker', term: 'Anti-flicker / Variable Shutter', cat: 'shooting', plain: 'Tools that remove the stripes and colour shifts caused by fast-flickering indoor and LED lights. Common in markets and shops.', also: 'shutter type' },

  { id: 'raw', term: 'RAW', cat: 'files', plain: 'The full, editable master file. Bigger, but flexible if you want to adjust photos later.', also: 'JPEG' },
  { id: 'jpeg', term: 'JPEG', cat: 'files', plain: 'The finished, ready-to-share photo. Smaller, less editable.', also: 'RAW' },
  { id: 'heif', term: 'HEIF', cat: 'files', plain: 'A newer photo format that stores smoother colour in a smaller file than JPEG. The catch: some older phones and apps cannot open it yet.', also: 'JPEG, RAW' },
  { id: 'wb', term: 'White balance', cat: 'files', plain: 'Keeps colours looking right under different lights. Auto handles it well, even under neon.' },
  { id: 'custom-wb', term: 'Custom white balance', cat: 'files', plain: 'Teaching the camera what white looks like in odd lighting by photographing something white or grey.', also: 'white balance' },
  { id: 'creative-look', term: 'Creative Look', cat: 'files', plain: 'Sony’s built-in colour styles (Standard, Vivid, Neutral, film looks, black & white) applied to JPEGs in-camera.' },
  { id: 'dro', term: 'DRO', cat: 'files', plain: 'D-Range Optimiser. Gently brightens dark areas of a JPEG so shadows and backlit faces keep detail.' },
  { id: 'lens-compensation', term: 'Lens compensation', cat: 'files', plain: 'Automatic fixes for small lens quirks: darker corners, colour fringing on edges, and slight bending of straight lines. Leave on Auto.' },
  { id: 'noise-reduction', term: 'Noise reduction', cat: 'files', plain: 'Smoothing that reduces the speckly grain in dark, high-ISO shots. "Long Exposure NR" does the same for multi-second tripod shots.', also: 'noise, ISO' },

  { id: 'dof', term: 'Depth of field', cat: 'lens', plain: 'How much of the photo is in focus front-to-back. Shallow = blurry background. Deep = all sharp.', also: 'aperture, bokeh' },
  { id: 'bokeh', term: 'Bokeh', cat: 'lens', plain: 'The soft, creamy out-of-focus background. You get more of it at low f-numbers.', also: 'aperture' },
  { id: 'focal-length', term: 'Focal length (mm)', cat: 'lens', plain: 'How zoomed-in a lens is. Low mm (20) is wide for big scenes; higher mm (70) is more zoomed for portraits.' },
  { id: 'prime-zoom', term: 'Prime vs zoom', cat: 'lens', plain: 'A zoom changes its focal length (28-60mm). A prime is fixed at one (say 35mm) but is often brighter and sharper.' },
  { id: 'fast-lens', term: 'Fast lens', cat: 'lens', plain: 'A lens with a low f-number (like f/2.8) that gathers lots of light. "Fast" because it allows faster shutter speeds.', also: 'aperture' },
  { id: 'diffraction', term: 'Diffraction', cat: 'lens', plain: 'A slight softening that appears at very small apertures (f/16+). Why f/5.6–f/8 is usually the sharpest range.' },
  { id: 'apsc', term: 'APS-C / Super35', cat: 'lens', plain: 'A crop into the middle of the sensor that makes the lens look more zoomed-in, at the cost of some resolution.', also: 'crop, focal length' },
  { id: 'crop-factor', term: 'Crop factor', cat: 'lens', plain: 'How much a smaller frame zooms in. The A7C II’s APS-C crop is about 1.5×, turning a 28mm into roughly a 42mm view.' },
  { id: 'clear-image-zoom', term: 'Clear Image Zoom', cat: 'lens', plain: 'Extra zoom (about double) using clever processing with very little quality loss, handy when your lens is too short.', also: 'digital zoom, crop' },
  { id: 'digital-zoom', term: 'Digital zoom', cat: 'lens', plain: 'Zoom beyond Clear Image Zoom that simply enlarges the pixels, so the image gets soft. Use only as a last resort.', also: 'Clear Image Zoom' },

  { id: 'full-frame', term: 'Full-frame', cat: 'body', plain: 'The A7C II has a large sensor (the light-catching chip). Bigger sensors handle low light better and blur backgrounds more easily.', also: 'sensor, APS-C' },
  { id: 'sensor', term: 'Sensor', cat: 'body', plain: 'The chip inside that catches light and turns it into a photo. The A7C II’s is 33 megapixels and full-frame.' },
  { id: 'megapixel', term: 'Megapixel', cat: 'body', plain: 'A measure of how many dots make up the photo. The A7C II’s 33 means big, detailed prints and room to crop.' },
  { id: 'evf', term: 'EVF / viewfinder', cat: 'body', plain: 'The little eye-window that shows a live preview of your shot. Great in bright sun.' },
  { id: 'steadyshot', term: 'SteadyShot', cat: 'body', plain: 'Sony’s name for image stabilisation. It steadies small shakes so you can shoot slower handheld. Turn OFF on a tripod.', also: 'stabilisation' },
  { id: 'ibis', term: 'IBIS', cat: 'body', plain: 'In-body image stabilisation: the sensor floats on motors that cancel hand-shake. Works with any lens.', also: 'SteadyShot' },
  { id: 'hot-shoe', term: 'Hot shoe', cat: 'body', plain: 'The slot on top for adding a flash or microphone. Sony’s also carries digital audio for clean sound.' },
  { id: 'firmware', term: 'Firmware', cat: 'body', plain: 'The camera’s internal software. Free updates from Sony add features and fix bugs.' },

  { id: 'timelapse', term: 'Time-lapse', cat: 'video', plain: 'Many photos taken over a long time, played back fast, so clouds race and a market fills in seconds.', also: 'interval' },
  { id: 'interval', term: 'Interval shooting', cat: 'video', plain: 'The camera takes a photo every few seconds by itself. You join them into a time-lapse afterwards.', also: 'time-lapse' },
  { id: 'slow-motion', term: 'Slow motion (S&Q)', cat: 'video', plain: 'A video mode that films extra fast so the playback looks gracefully slowed down. Needs good light.' },
  { id: 'picture-profile', term: 'Picture Profile / Log', cat: 'video', plain: 'Advanced video colour settings for editing pros. Leave them off; they make normal footage look flat and grey.' },
  { id: 'bright-monitoring', term: 'Bright Monitoring', cat: 'video', plain: 'Brightens the live preview in near-darkness so you can frame a shot. Only the preview changes, not the photo.' },
  { id: 'auto-framing', term: 'Auto Framing', cat: 'video', plain: 'For video: the camera follows you and crops to keep you well placed, like an automatic camera operator.', also: 'framing stabilizer' },
  { id: 'creators-app', term: 'Creators’ App', cat: 'video', plain: 'Sony’s free phone app. Copy photos to your phone, control the camera remotely, and add your location, all over the camera’s own Wi-Fi.' },
]

export const glossaryById = (id: string): GlossaryTerm | undefined =>
  glossaryTerms.find((t) => t.id === id)
