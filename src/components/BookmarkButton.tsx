import Icon from './Icon'
import { useApp } from '../context/AppContext'
import type { Bookmark } from '../context/AppContext'

// A star toggle. Pass the bookmark it represents. `compact` renders just the
// star (no boxed background) for dense list rows.
export default function BookmarkButton({
  bookmark,
  size = 18,
  compact = false,
}: {
  bookmark: Bookmark
  size?: number
  compact?: boolean
}) {
  const { isBookmarked, toggleBookmark } = useApp()
  const on = isBookmarked(bookmark.id)
  const boxStyle = compact
    ? { padding: 6, color: on ? 'var(--accent)' : 'var(--text-4)' }
    : {
        width: 38,
        height: 38,
        borderRadius: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--accent-soft)' : 'var(--surface-2)',
        border: '1px solid ' + (on ? 'var(--accent-line)' : 'var(--border)'),
        color: on ? 'var(--accent)' : 'var(--text-3)',
      }
  return (
    <button
      onClick={(e) => { e.stopPropagation(); toggleBookmark(bookmark) }}
      className="tap"
      aria-label={on ? 'Remove bookmark' : 'Save bookmark'}
      style={{ flexShrink: 0, ...boxStyle }}
    >
      <Icon name="star" size={size} strokeWidth={on ? 2.4 : 1.8} />
    </button>
  )
}
