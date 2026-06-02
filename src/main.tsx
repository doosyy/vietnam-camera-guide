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
