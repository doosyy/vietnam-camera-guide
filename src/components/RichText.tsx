import { useGlossary } from './GlossarySheet'
import { linkGlossary } from '../utils/glossaryLink'

// A paragraph whose known jargon words become tappable glossary links.
export default function RichText({ children, className = 'body' }: { children: string; className?: string }) {
  const { open } = useGlossary()
  return <p className={className}>{linkGlossary(children, open)}</p>
}
