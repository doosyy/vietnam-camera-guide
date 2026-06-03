import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { GlossaryProvider } from './components/GlossarySheet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppProvider>
        <GlossaryProvider>
          <App />
        </GlossaryProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)

// Fade out the launch splash once the app has painted, then remove it so it
// never traps taps. Kept brief so it reads as a hand-off, not a wait. Uses
// setTimeout (not rAF, which pauses in background tabs) so it always clears.
const splash = document.getElementById('splash')
if (splash) {
  const remove = () => splash.remove()
  setTimeout(() => {
    splash.classList.add('hide')
    splash.addEventListener('transitionend', remove, { once: true })
    setTimeout(remove, 700) // safety net if transitionend never fires
  }, 480)
}
