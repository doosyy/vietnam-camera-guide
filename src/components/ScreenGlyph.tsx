// Tiny recreated versions of the symbols you see on the camera's screen.
// Drawn from scratch in the app's style (not copied from Sony's manual).

const box = { fill: 'var(--surface-3)', stroke: 'var(--border-2)' }

function Letter({ t, color = 'var(--text)' }: { t: string; color?: string }) {
  return (
    <text
      x="20"
      y="26"
      textAnchor="middle"
      fontFamily="JetBrains Mono, monospace"
      fontSize={t.length > 3 ? 9 : t.length > 1 ? 12 : 16}
      fontWeight="700"
      style={{ fill: color }}
    >
      {t}
    </text>
  )
}

export default function ScreenGlyph({ glyph }: { glyph: string }) {
  let inner
  switch (glyph) {
    case 'modeA': inner = <Letter t="A" />; break
    case 'modeP': inner = <Letter t="P" />; break
    case 'modeS': inner = <Letter t="S" />; break
    case 'modeM': inner = <Letter t="M" />; break
    case 'plusminus': inner = <Letter t="±" color="var(--accent-text)" />; break
    case 'iso': inner = <Letter t="ISO" />; break
    case 'afs': inner = <Letter t="AF-S" />; break
    case 'afc': inner = <Letter t="AF-C" color="var(--accent-text)" />; break
    case 'mf': inner = <Letter t="MF" />; break
    case 'raw': inner = <Letter t="RAW" />; break
    case 'rawjpeg': inner = <Letter t="R+J" />; break
    case 'meter':
      inner = <g><rect x="11" y="13" width="18" height="14" rx="2" fill="none" stroke="var(--text-2)" strokeWidth="1.5" /><circle cx="20" cy="20" r="2.4" fill="var(--text)" /></g>
      break
    case 'eyebox':
      inner = <g stroke="var(--good)" strokeWidth="1.8" fill="none"><path d="M12 13h-2v2M28 13h2v2M12 27h-2v-2M28 27h2v-2" /><circle cx="20" cy="20" r="3.2" /></g>
      break
    case 'focusdot': inner = <circle cx="20" cy="20" r="5" fill="var(--good)" />; break
    case 'burst':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.6"><rect x="10" y="12" width="14" height="11" rx="1.5" /><rect x="14" y="16" width="14" height="11" rx="1.5" fill="var(--surface-3)" /></g>
      break
    case 'timer':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round"><circle cx="20" cy="21" r="7" /><path d="M20 21v-4M17 11h6" /></g>
      break
    case 'silent':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round"><path d="M14 17h3l4-3v12l-4-3h-3z" fill="var(--text)" stroke="none" /><path d="M25 15l4 10M29 15l-4 10" /></g>
      break
    case 'battery':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.6"><rect x="9" y="15" width="20" height="11" rx="2" /><path d="M31 18v5" /><rect x="11" y="17" width="11" height="7" rx="1" fill="var(--good)" stroke="none" /></g>
      break
    case 'card':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.6"><path d="M13 12h10l4 4v12H13z" /><path d="M16 12v3M19 12v3M22 12v3" /></g>
      break
    case 'nocard':
      inner = <g fill="none" stroke="var(--text-2)" strokeWidth="1.6"><path d="M13 12h10l4 4v12H13z" /><path d="M11 11l18 18" stroke="var(--bad)" /></g>
      break
    case 'rec':
      inner = <g><circle cx="14" cy="20" r="4.5" fill="var(--bad)" /><text x="22" y="24" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" style={{ fill: 'var(--bad)' }}>REC</text></g>
      break
    case 'heat':
      inner = <g fill="none" stroke="var(--bad)" strokeWidth="1.6" strokeLinecap="round"><path d="M18 12v9a3 3 0 1 0 4 0v-9a2 2 0 0 0-4 0z" /><circle cx="20" cy="24" r="1.6" fill="var(--bad)" stroke="none" /></g>
      break
    case 'flicker':
      inner = <g stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="round"><path d="M20 11l-5 9h5l-5 9" transform="translate(2 0)" /></g>
      break
    case 'wifi':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round"><path d="M12 18a11 11 0 0 1 16 0M15 21a7 7 0 0 1 10 0" /><circle cx="20" cy="25" r="1.4" fill="var(--text)" stroke="none" /></g>
      break
    case 'airplane':
      inner = <path d="M20 11l2 7 6 3v2l-6-1v4l2 1.5v1.5l-4-1-4 1V28l2-1.5v-4l-6 1v-2l6-3 2-7z" fill="var(--text)" />
      break
    case 'hand':
      inner = <g fill="none" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-5a1.3 1.3 0 0 1 2.6 0v4M18.6 20v-5.5a1.3 1.3 0 0 1 2.6 0V20M21.2 20v-4a1.3 1.3 0 0 1 2.6 0v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-4.2-2.5L11.5 23a1.4 1.4 0 0 1 2.3-1.6L16 24" /></g>
      break
    default:
      inner = <Letter t="?" color="var(--text-3)" />
  }
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="9" fill={box.fill} stroke={box.stroke} />
      {inner}
    </svg>
  )
}
