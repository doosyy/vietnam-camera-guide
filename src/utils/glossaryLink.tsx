import type { ReactNode } from 'react'
import { glossaryById } from '../data/glossary'

// Curated phrase -> glossary id. Hand-picked so we only link genuinely useful
// jargon, and never over-link very common words. Longest phrases win.
const ALIASES: Record<string, string> = {
  'aperture priority': 'aperture-priority',
  'shutter priority': 'shutter-priority',
  'depth of field': 'dof',
  'white balance': 'custom-wb',
  'custom white balance': 'custom-wb',
  'golden hour': 'golden-hour',
  'blue hour': 'blue-hour',
  'clear image zoom': 'clear-image-zoom',
  'digital zoom': 'digital-zoom',
  'lens compensation': 'lens-compensation',
  'noise reduction': 'noise-reduction',
  'focal length': 'focal-length',
  'fast lens': 'fast-lens',
  'full-frame': 'full-frame',
  'full frame': 'full-frame',
  'exposure compensation': 'exp-comp',
  'picture profile': 'picture-profile',
  'bright monitoring': 'bright-monitoring',
  'auto framing': 'auto-framing',
  'shutter speed': 'shutter',
  'silent shutter': 'silent',
  'silent shooting': 'silent',
  'anti-flicker': 'anti-flicker',
  'creators’ app': 'creators-app',
  'eye af': 'eye-af',
  'eye autofocus': 'eye-af',
  autofocus: 'af-s',
  bokeh: 'bokeh',
  aperture: 'aperture',
  shutter: 'shutter',
  iso: 'iso',
  exposure: 'exposure',
  metering: 'metering',
  histogram: 'histogram',
  zebra: 'zebra',
  raw: 'raw',
  jpeg: 'jpeg',
  heif: 'heif',
  steadyshot: 'steadyshot',
  stabilisation: 'ibis',
  viewfinder: 'evf',
  bracketing: 'bracketing',
  'time-lapse': 'timelapse',
  'slow motion': 'slow-motion',
  megapixel: 'megapixel',
  grain: 'noise',
  noise: 'noise',
  'af-c': 'af-c',
  'af-s': 'af-s',
  dmf: 'dmf',
}

// Only keep aliases whose target term actually exists.
const ENTRIES = Object.entries(ALIASES)
  .filter(([, id]) => glossaryById(id))
  .sort((a, b) => b[0].length - a[0].length)

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const RE = new RegExp(`\\b(${ENTRIES.map(([p]) => escape(p)).join('|')})\\b`, 'gi')
const LOOKUP = new Map(ENTRIES.map(([p, id]) => [p.toLowerCase(), id]))

// Wraps the first occurrence of each known term in tappable text.
export function linkGlossary(text: string, onOpen: (id: string) => void): ReactNode {
  RE.lastIndex = 0
  const out: ReactNode[] = []
  const linked = new Set<string>()
  let last = 0
  let match: RegExpExecArray | null
  let k = 0
  while ((match = RE.exec(text)) !== null) {
    const id = LOOKUP.get(match[0].toLowerCase())
    if (!id || linked.has(id)) continue
    linked.add(id)
    if (match.index > last) out.push(text.slice(last, match.index))
    out.push(
      <button key={`g${k++}`} className="gloss-link" onClick={() => onOpen(id)}>
        {match[0]}
      </button>
    )
    last = match.index + match[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}
