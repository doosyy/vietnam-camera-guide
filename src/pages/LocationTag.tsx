import Icon from '../components/Icon'
import { BackBar, Eyebrow, SectionTitle, NumberStep, Note, Pill, SeeAlso } from '../components/ui'

// A small recreated version of the camera's on-screen location indicator, in two
// states so you can recognise it at a glance. Not Sony's exact glyph, just clear.
function LocPin({ on }: { on: boolean }) {
  const c = on ? 'var(--accent)' : 'var(--text-4)'
  return (
    <svg viewBox="0 0 24 30" style={{ width: 26, height: 32, flexShrink: 0 }} aria-hidden>
      <path d="M12 2 C6.5 2 2.5 6 2.5 11 C2.5 17.5 12 27.5 12 27.5 C12 27.5 21.5 17.5 21.5 11 C21.5 6 17.5 2 12 2 Z"
        fill={on ? 'color-mix(in oklab, var(--accent) 22%, transparent)' : 'transparent'} stroke={c} strokeWidth={1.8} />
      <circle cx="12" cy="11" r="3.4" fill={c} />
      {!on && <line x1="3" y1="3" x2="21" y2="27" stroke="var(--bad)" strokeWidth={2} strokeLinecap="round" />}
    </svg>
  )
}

function IconState({ on, title, children }: { on: boolean; title: string; children: string }) {
  return (
    <div className="card flush row" style={{ gap: 13, padding: 13, alignItems: 'center' }}>
      <LocPin on={on} />
      <span style={{ minWidth: 0 }}>
        <span className="row" style={{ gap: 7 }}>
          <span className="h3" style={{ fontSize: 14 }}>{title}</span>
          <Pill tone={on ? 'good' : 'line'}>{on ? 'Recording' : 'Not recording'}</Pill>
        </span>
        <span className="small" style={{ display: 'block', color: 'var(--text-2)', marginTop: 3 }}>{children}</span>
      </span>
    </div>
  )
}

export default function LocationTag() {
  return (
    <div className="screen anim-fwd">
      <BackBar to="/trip" label="Trip" />
      <div style={{ marginBottom: 16 }}>
        <Eyebrow style={{ marginBottom: 9 }}>Location tagging</Eyebrow>
        <h1 className="h1" style={{ fontSize: 25 }}>Geotag every photo from your phone</h1>
        <p className="body" style={{ marginTop: 7 }}>Pair once, keep your phone in your pocket, and the camera stamps each shot with where you stood. One little icon tells you it is working.</p>
      </div>

      <Note tone="plain" icon="info" title="How it works">
        Your phone gets the GPS fix and feeds it to the camera over Bluetooth. The camera does not have its own GPS, so the link to your phone is what makes geotagging happen.
      </Note>

      <section style={{ marginTop: 22 }}>
        <SectionTitle icon="wifi">Set it up once</SectionTitle>
        <ol className="card stack" style={{ '--g': '12px', listStyle: 'none' } as React.CSSProperties}>
          <NumberStep n={1}>On your phone, install Sony’s <b>Creators’ App</b>, and turn the phone’s <b>Location</b> and <b>Bluetooth</b> on.</NumberStep>
          <NumberStep n={2}>On the camera, set <b>MENU → Network → Bluetooth → Bluetooth Function: On</b> and <b>Airplane Mode: Off</b>.</NumberStep>
          <NumberStep n={3}>Pair them: <b>MENU → Network → Smartphone Connection</b>, then follow the Creators’ App to pair once. You only do this the first time.</NumberStep>
          <NumberStep n={4}>In the Creators’ App, open <b>Cameras → Setup → Location Information Linkage</b> and switch <b>Location Information Linkage On</b>.</NumberStep>
          <NumberStep n={5}>While you are there, also turn on <b>Auto Time Correction</b> and <b>Auto Area Adjustment</b>, so the camera sets Vietnam’s clock and time zone from your phone automatically.</NumberStep>
          <NumberStep n={6}>In your phone’s settings, allow the Creators’ App to use location <b>“Always” / in the background</b>, so it keeps feeding the camera even with the screen off.</NumberStep>
        </ol>
      </section>

      <section style={{ marginTop: 22 }}>
        <SectionTitle icon="check">Check it is working</SectionTitle>
        <p className="small" style={{ color: 'var(--text-2)', marginBottom: 11 }}>On the shooting screen, find the small location icon (top of the screen, with the other status icons). This is the one thing to glance at:</p>
        <div className="stack" style={{ '--g': '8px' } as React.CSSProperties}>
          <IconState on title="Icon showing">The phone is linked and the camera is stamping your location onto every photo. You are good to shoot.</IconState>
          <IconState on={false} title="Icon with a line / missing">Location is not being recorded yet. Give it up to a minute outdoors, or use the fixes below.</IconState>
        </div>
        <div style={{ marginTop: 12 }}>
          <Note tone="good" icon="check" title="Double-check a photo">
            Press <b>Play</b>, then press <b>DISP</b> until the shot info shows: a geotagged photo displays the location icon. On your phone, the photo’s <b>Details / Map</b> view shows a pin where you took it.
          </Note>
        </div>
      </section>

      <section style={{ marginTop: 22 }}>
        <SectionTitle icon="pin">Keep it linked all day</SectionTitle>
        <ul className="card stack" style={{ '--g': '10px', listStyle: 'none' } as React.CSSProperties}>
          {[
            'Keep Bluetooth on and your phone within a few metres. A pocket or bag is fine.',
            'Do not force-close the Creators’ App, let it run quietly in the background.',
            'After any camera Setting Reset or firmware update, pair again, the pairing gets wiped.',
          ].map((t) => (
            <li key={t} className="row small" style={{ gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}><Icon name="check" size={14} strokeWidth={2.4} /></span>
              <span style={{ flex: 1, color: 'var(--text-2)' }}>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 22 }}>
        <SectionTitle icon="alert">If the icon shows no location</SectionTitle>
        <ol className="card stack" style={{ '--g': '11px', listStyle: 'none' } as React.CSSProperties}>
          <NumberStep n={1}>Check the phone’s <b>Location is on</b> and the Creators’ App has location permission set to <b>Always</b>.</NumberStep>
          <NumberStep n={2}>Open the Creators’ App for a moment to wake the link, then pocket it again.</NumberStep>
          <NumberStep n={3}>Step outside. GPS struggles indoors and the first fix can take <b>30 to 60 seconds</b>.</NumberStep>
          <NumberStep n={4}>Toggle the camera’s <b>Bluetooth Function</b> off and on, and confirm <b>Airplane Mode is Off</b>.</NumberStep>
        </ol>
        <div style={{ marginTop: 12 }}>
          <Note tone="amber" icon="eye">Geotags stay in the photo when you share it. Turn Location Information Linkage off in the app before posting shots of private places.</Note>
        </div>
      </section>

      <SeeAlso links={[
        { to: '/trip/setup', label: 'Before You Fly', icon: 'check', kind: 'tool' },
        { to: '/trip/vietnam', label: 'Vietnam cities', icon: 'pin', kind: 'location' },
        { to: '/trip/light', label: 'Light clock', icon: 'sun', kind: 'tool' },
      ]} />
    </div>
  )
}
