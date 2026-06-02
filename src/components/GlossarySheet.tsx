import { createContext, useContext, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { Pill } from './ui'
import { glossaryById } from '../data/glossary'

interface GlossaryCtx {
  open: (id: string) => void
}
const Ctx = createContext<GlossaryCtx | null>(null)

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const navigate = useNavigate()
  const term = openId ? glossaryById(openId) : undefined

  return (
    <Ctx.Provider value={{ open: setOpenId }}>
      {children}
      {term && (
        <div className="sheet-scrim" onClick={() => setOpenId(null)}>
          <div className="sheet safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="grabber" />
            <div className="row between" style={{ marginBottom: 8 }}>
              <span className="data" style={{ fontSize: 16, color: 'var(--accent-text)' }}>{term.term}</span>
              <button onClick={() => setOpenId(null)} className="tap" style={{ color: 'var(--text-3)' }}>
                <Icon name="x" size={20} />
              </button>
            </div>
            <p className="body">{term.plain}</p>
            {term.also && (
              <div className="row" style={{ gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                {term.also.split(',').map((a) => <Pill key={a} tone="line">{a.trim()}</Pill>)}
              </div>
            )}
            <button
              onClick={() => { const id = openId; setOpenId(null); navigate(`/learn/glossary#${id}`) }}
              className="tap row"
              style={{ gap: 6, marginTop: 16, color: 'var(--accent-text)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.05em' }}
            >
              OPEN FULL GLOSSARY <Icon name="arrowRight" size={13} />
            </button>
          </div>
        </div>
      )}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGlossary() {
  const ctx = useContext(Ctx)
  // A no-op fallback keeps text rendering even outside the provider.
  return ctx ?? { open: () => {} }
}
