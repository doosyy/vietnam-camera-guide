// Offline sun-position calculator (NOAA-based). No dependencies, no network.
// Given a place and date, it works out the day's light windows in local time.
// Accurate to about a minute, which is plenty for planning a shoot.

const rad = (d: number) => (d * Math.PI) / 180
const deg = (r: number) => (r * 180) / Math.PI

function julianDay0hUT(y: number, m: number, d: number): number {
  if (m <= 2) {
    y -= 1
    m += 12
  }
  const A = Math.floor(y / 100)
  const B = 2 - A + Math.floor(A / 4)
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5
}

interface SunParams {
  decl: number // solar declination, degrees
  eqTime: number // equation of time, minutes
}

function sunParams(y: number, m: number, d: number, tz: number): SunParams {
  const jd = julianDay0hUT(y, m, d) + (12 - tz) / 24 // local noon expressed in UT
  const T = (jd - 2451545.0) / 36525
  const L0 = (280.46646 + T * (36000.76983 + T * 0.0003032)) % 360
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T)
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T)
  const C =
    Math.sin(rad(M)) * (1.914602 - T * (0.004817 + 0.000014 * T)) +
    Math.sin(rad(2 * M)) * (0.019993 - 0.000101 * T) +
    Math.sin(rad(3 * M)) * 0.000289
  const trueLong = L0 + C
  const omega = 125.04 - 1934.136 * T
  const lambda = trueLong - 0.00569 - 0.00478 * Math.sin(rad(omega))
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60
  const eps = eps0 + 0.00256 * Math.cos(rad(omega))
  const decl = deg(Math.asin(Math.sin(rad(eps)) * Math.sin(rad(lambda))))
  const vy = Math.tan(rad(eps / 2)) ** 2
  const L0r = rad(L0)
  const Mr = rad(M)
  const eqTime =
    4 *
    deg(
      vy * Math.sin(2 * L0r) -
        2 * e * Math.sin(Mr) +
        4 * e * vy * Math.sin(Mr) * Math.cos(2 * L0r) -
        0.5 * vy * vy * Math.sin(4 * L0r) -
        1.25 * e * e * Math.sin(2 * Mr)
    )
  return { decl, eqTime }
}

function hourAngle(lat: number, decl: number, elevDeg: number): number | null {
  const cosH =
    (Math.sin(rad(elevDeg)) - Math.sin(rad(lat)) * Math.sin(rad(decl))) /
    (Math.cos(rad(lat)) * Math.cos(rad(decl)))
  if (cosH < -1 || cosH > 1) return null
  return deg(Math.acos(cosH)) // 0..180 degrees
}

function fmt(min: number | null): string {
  if (min == null || !isFinite(min)) return '—'
  let m = Math.round(min) % 1440
  if (m < 0) m += 1440
  const h = Math.floor(m / 60)
  const mm = m % 60
  return `${String(h).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
}

export type LightKind = 'gold' | 'blue' | 'sun' | 'harsh' | 'dark'

export interface LightWindow {
  key: string
  label: string
  kind: LightKind
  icon: string
  time: string // "HH:MM" or "HH:MM – HH:MM"
  note: string
}

export interface SunEvents {
  firstLight: number | null // sun -6deg, dawn
  sunrise: number | null
  goldMornEnd: number | null // sun +6deg
  goldEveStart: number | null
  sunset: number | null
  dusk: number | null // sun -6deg
}

// The day's key sun events, in local minutes from midnight. Shared by dayLight & nowLight.
function events(lat: number, lon: number, y: number, m: number, d: number, tz: number): SunEvents {
  const p = sunParams(y, m, d, tz)
  const noon = 720 - 4 * lon + 60 * tz - p.eqTime
  const ev = (elev: number, evening: boolean): number | null => {
    const H = hourAngle(lat, p.decl, elev)
    if (H == null) return null
    return evening ? noon + 4 * H : noon - 4 * H
  }
  return {
    firstLight: ev(-6, false),
    sunrise: ev(-0.833, false),
    goldMornEnd: ev(6, false),
    goldEveStart: ev(6, true),
    sunset: ev(-0.833, true),
    dusk: ev(-6, true),
  }
}

// The day's light windows, in order, for a place and date. tz defaults to Vietnam (+7).
export function dayLight(lat: number, lon: number, date: Date, tz = 7): LightWindow[] {
  const e = events(lat, lon, date.getFullYear(), date.getMonth() + 1, date.getDate(), tz)
  const { firstLight, sunrise, goldMornEnd, goldEveStart, sunset, dusk } = e
  const range = (a: number | null, b: number | null) => `${fmt(a)} – ${fmt(b)}`

  return [
    { key: 'blue-am', label: 'Blue hour', kind: 'blue', icon: 'moon', time: range(firstLight, sunrise), note: 'Deep-blue pre-dawn calm. Quiet streets, lakes, lights still glowing.' },
    { key: 'sunrise', label: 'Sunrise', kind: 'sun', icon: 'sunrise', time: fmt(sunrise), note: 'Soft warm light begins. Misty mornings and reflections.' },
    { key: 'gold-am', label: 'Golden hour', kind: 'gold', icon: 'sunrise', time: range(sunrise, goldMornEnd), note: 'Warm, flattering light. The best window for portraits and street.' },
    { key: 'midday', label: 'High sun', kind: 'harsh', icon: 'sun', time: `${fmt(goldMornEnd)} – ${fmt(goldEveStart)}`, note: 'Hard overhead light. Seek shade, alleys and interiors, or rest.' },
    { key: 'gold-pm', label: 'Golden hour', kind: 'gold', icon: 'sunset', time: range(goldEveStart, sunset), note: 'The warm hour returns. Open your aperture for that glow.' },
    { key: 'sunset', label: 'Sunset', kind: 'sun', icon: 'sunset', time: fmt(sunset), note: 'Silhouettes and rich colour. Expose for the sky.' },
    { key: 'blue-pm', label: 'Blue hour', kind: 'blue', icon: 'moon', time: range(sunset, dusk), note: 'The prize: neon and skylines pop against a deep-blue sky.' },
    { key: 'night', label: 'Night', kind: 'dark', icon: 'moon', time: `from ${fmt(dusk)}`, note: 'Full dark. Night markets, light trails and tripod work.' },
  ]
}

export interface NowLight {
  label: string
  kind: LightKind
  icon: string
  note: string
  endsInMin?: number // if currently in golden/blue hour, minutes until it ends
  next?: { label: string; kind: LightKind; inMin: number; at: string } // the next golden/blue hour
}

// What the light is doing *right now* at a place, plus the next golden/blue hour.
// Uses the destination's local time (Vietnam, UTC+7 by default) so it is correct
// whether you are still at home or already there.
export function nowLight(lat: number, lon: number, now: Date, tz = 7): NowLight {
  const local = new Date(now.getTime() + tz * 3600 * 1000) // shift so UTC fields = local time
  const y = local.getUTCFullYear()
  const m = local.getUTCMonth() + 1
  const d = local.getUTCDate()
  const t = local.getUTCHours() * 60 + local.getUTCMinutes()
  const e = events(lat, lon, y, m, d, tz)
  const { firstLight: fl, sunrise: sr, goldMornEnd: gme, goldEveStart: ges, sunset: ss, dusk: du } = e

  // Current phase.
  let phase: NowLight
  const blueNote = 'Neon, lakes and skylines glow against a deep-blue sky.'
  const goldNote = 'Warm, flattering light. The best window for street and portraits.'
  if (fl != null && t < fl) phase = { label: 'Pre-dawn', kind: 'dark', icon: 'moon', note: 'Still dark. Blue hour is on its way.' }
  else if (fl != null && sr != null && t < sr) phase = { label: 'Blue hour', kind: 'blue', icon: 'moon', note: blueNote, endsInMin: Math.round(sr - t) }
  else if (sr != null && gme != null && t < gme) phase = { label: 'Golden hour', kind: 'gold', icon: 'sunrise', note: goldNote, endsInMin: Math.round(gme - t) }
  else if (gme != null && ges != null && t < ges) phase = { label: 'High sun', kind: 'harsh', icon: 'sun', note: 'Hard overhead light. Seek shade, alleys and interiors.' }
  else if (ges != null && ss != null && t < ss) phase = { label: 'Golden hour', kind: 'gold', icon: 'sunset', note: goldNote, endsInMin: Math.round(ss - t) }
  else if (ss != null && du != null && t < du) phase = { label: 'Blue hour', kind: 'blue', icon: 'moon', note: blueNote, endsInMin: Math.round(du - t) }
  else phase = { label: 'Night', kind: 'dark', icon: 'moon', note: 'Full dark. Night markets, light trails and tripod work.' }

  // Next golden or blue hour start.
  const cands: { min: number; label: string; kind: LightKind }[] = []
  if (sr != null) cands.push({ min: sr, label: 'Golden hour', kind: 'gold' })
  if (ges != null) cands.push({ min: ges, label: 'Golden hour', kind: 'gold' })
  if (fl != null) cands.push({ min: fl, label: 'Blue hour', kind: 'blue' })
  if (ss != null) cands.push({ min: ss, label: 'Blue hour', kind: 'blue' })
  let upcoming = cands.filter((c) => c.min > t).sort((a, b) => a.min - b.min)[0]
  if (!upcoming && fl != null) upcoming = { min: fl + 1440, label: 'Blue hour', kind: 'blue' } // tomorrow's dawn
  if (upcoming) phase.next = { label: upcoming.label, kind: upcoming.kind, inMin: Math.round(upcoming.min - t), at: fmt(upcoming.min) }

  return phase
}
