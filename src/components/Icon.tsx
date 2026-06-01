import type { ReactElement } from 'react'

// Simple stroke icon set, currentColor. <Icon name size strokeWidth />
const P: Record<string, ReactElement> = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V20h5v-6h4v6h5V9.5" />,
  wand: <g><path d="M5 19 19 5" /><path d="M15 5h4v4" /><path d="M9 4.5v3M5 7.5h3M16 15v2.5M14.5 16.5h3" /></g>,
  bolt: <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />,
  book: <g><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" /><path d="M5 17h13" /></g>,
  plane: <path d="M10.5 3.5a1.5 1.5 0 0 1 3 0V9l7 4v2l-7-2v4l2 1.5V20l-3.5-1L11 20v-1.5L13 17v-4l-7 2v-2l7-4V3.5Z" />,
  search: <g><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></g>,
  aperture: <g><circle cx="12" cy="12" r="9" /><path d="M12 3v6M19.8 7.5 14.6 11M19.8 16.5 14.6 13M12 21v-6M4.2 16.5 9.4 13M4.2 7.5 9.4 11" /></g>,
  camera: <g><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H7l1.5-2h7L17 7h2.5A1.5 1.5 0 0 1 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V8.5Z" /><circle cx="12" cy="13" r="3.5" /></g>,
  sun: <g><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M4.2 4.2 6 6M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" /></g>,
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />,
  sunrise: <g><path d="M12 3v5M8.5 6.5 12 3l3.5 3.5M3 18h18M5.5 14a6.5 6.5 0 0 1 13 0" /><path d="M2 21h20" /></g>,
  sunset: <g><path d="M12 9V3M8.5 5.5 12 9l3.5-3.5M3 18h18M5.5 14a6.5 6.5 0 0 1 13 0" /><path d="M2 21h20" /></g>,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronDown: <path d="m5 9 7 7 7-7" />,
  check: <path d="m4 12 5 5L20 6" />,
  x: <path d="M5 5 19 19M19 5 5 19" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  sparkle: <path d="M12 3c.6 3.8 1.4 4.6 5.2 5.2-3.8.6-4.6 1.4-5.2 5.2-.6-3.8-1.4-4.6-5.2-5.2C10.6 7.6 11.4 6.8 12 3ZM18 14c.3 1.6.7 2 2.3 2.3-1.6.3-2 .7-2.3 2.3-.3-1.6-.7-2-2.3-2.3 1.6-.3 2-.7 2.3-2.3Z" />,
  info: <g><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></g>,
  eye: <g><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></g>,
  bulb: <g><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.3 1 2.5h6c0-1.2.2-1.7 1-2.5A6 6 0 0 0 12 3Z" /></g>,
  alert: <g><path d="M12 3 22 20H2L12 3Z" /><path d="M12 10v5M12 18h.01" /></g>,
  bag: <g><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></g>,
  crosshair: <g><circle cx="12" cy="12" r="8" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></g>,
  focus: <g><circle cx="12" cy="12" r="3" /><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /></g>,
  timer: <g><circle cx="12" cy="13" r="8" /><path d="M12 13V9M9 2h6" /></g>,
  gauge: <g><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 14l4-4" /></g>,
  layers: <g><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></g>,
  palette: <g><path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2 0-1.5 1-2 2.5-2H18a3 3 0 0 0 3-3c0-5-4-9-9-9Z" /><circle cx="8" cy="11" r="1" /><circle cx="12" cy="8" r="1" /><circle cx="16" cy="11" r="1" /></g>,
  walk: <g><circle cx="13" cy="4.5" r="1.8" /><path d="M11 21l1.5-6-2.5-2 1-5 3 2 2.5 1M10.5 13 8 21M14 11l1 4" /></g>,
  food: <g><path d="M6 3v8M9 3v8M7.5 11v10M7.5 3v3" /><path d="M16 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4 2.5-1 2.5-4-1-5-2.5-5Zm0 9v9" /></g>,
  temple: <g><path d="M4 21V10l8-5 8 5v11" /><path d="M9 21v-6h6v6M3 10h18" /></g>,
  scan: <g><path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><path d="M9 14s1 1.5 3 1.5S15 14 15 14M9 10h.01M15 10h.01" /></g>,
  sliders: <g><path d="M5 21V14M5 10V3M12 21v-9M12 8V3M19 21v-5M19 12V3" /><path d="M3 12h4M10 8h4M17 16h4" /></g>,
  drive: <g><rect x="3" y="10" width="18" height="8" rx="2" /><path d="M7 14h.01M11 14h6" /></g>,
  click: <g><path d="M5 3v6M3 5h4M9 21l-1.5-9 7 3-3 1.5L14 21l-2 1-1.8-4.5L8 20Z" /></g>,
  grid: <g><rect x="4" y="4" width="6.5" height="6.5" rx="1" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" /></g>,
  star: <path d="m12 3 2.5 5.5L20 9.3l-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.5-.8L12 3Z" />,
  luggage: <g><rect x="6" y="7" width="12" height="13" rx="2" /><path d="M9 7V4h6v3M10 11v5M14 11v5" /></g>,
  rocket: <g><path d="M12 3c3 2 4.5 5 4.5 8.5L12 16l-4.5-4.5C7.5 8 9 5 12 3Z" /><circle cx="12" cy="9" r="1.3" /><path d="M7.5 14C6 15 5.5 17.5 6 20c2.5.5 5-.5 6-2" /></g>,
  frame: <g><rect x="4" y="4" width="16" height="16" rx="1.5" /><path d="M4 9h16M4 15h16M9 4v16M15 4v16" /></g>,
  pin: <g><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></g>,
  glossary: <g><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z" /><path d="M9.5 13 12 7l2.5 6M10.2 11.3h3.6" /></g>,
  checklist: <g><path d="M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 10M4 18l1.5 1.5L8 16M11 6h9M11 12h9M11 18h9" /></g>,
  rotate: <g><path d="M4 12a8 8 0 1 1 2.5 5.8" /><path d="M4 20v-4h4" /></g>,
  lens: <g><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 4v2M12 18v2" /></g>,
  flag: <g><path d="M5 21V4M5 4c2-1.5 5 1.5 7 0s5-1.5 7 0v9c-2 1.5-5-1.5-7 0s-5-1.5-7 0" /></g>,
  map: <g><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" /><path d="M9 4v14M15 6v14" /></g>,
  clock: <g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
  compass: <g><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></g>,
  battery: <g><rect x="3" y="8" width="16" height="9" rx="2" /><path d="M21 11v3" /><path d="M6 11v3M9 11v3" /></g>,
  wifi: <g><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" /><path d="M12 18.5h.01" /></g>,
  film: <g><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 4v16M17 4v16M3 9h4M3 14h4M17 9h4M17 14h4" /></g>,
  video: <g><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3Z" /></g>,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />,
  zap: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  hand: <g><path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2.5-4a1.6 1.6 0 0 1 2.6-1.8L8 13" /></g>,
  contrast: <g><circle cx="12" cy="12" r="9" /><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none" /></g>,
}

export default function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className = '',
  style,
}: {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
}) {
  const inner = P[name] || P.info
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {inner}
    </svg>
  )
}
