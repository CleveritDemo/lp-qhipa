'use client'

import './demoMiniColumn.css'

export interface DemoMiniCard {
  id: string
  title: string
  status: string
  lines: string[]
}

export interface DemoMiniColumnProps {
  side: 'left' | 'right'
  cards: DemoMiniCard[]
  activeId?: string | null
  onOpen?: (id: string) => void
  onClose?: (id: string) => void
}

export function DemoMiniColumn(props: DemoMiniColumnProps): React.ReactElement | null {
  const { side, cards, activeId, onOpen, onClose } = props

  if (cards.length === 0) {
    return null
  }

  return (
    <div className={`demo-mini-column demo-mini-column--${side}`}>
      {cards.map((card) => {
        const isActive = card.id === activeId
        const visibleLines = card.lines.slice(0, 3)

        return (
          <button
            key={card.id}
            type="button"
            className={`demo-mini-card${isActive ? ' demo-mini-card--active' : ''}`}
            onClick={() => onOpen?.(card.id)}
          >
            <span className="demo-mini-card__badge">{card.title}</span>
            <span className="demo-mini-card__status">{card.status}</span>
            <span className="demo-mini-card__lines">
              {visibleLines.map((line, index) => (
                <span key={`${card.id}-line-${index}`} className="demo-mini-card__line">
                  {line}
                </span>
              ))}
            </span>
            {onClose ? (
              <span
                role="button"
                tabIndex={-1}
                className="demo-mini-card__close"
                aria-label={`Cerrar ${card.title}`}
                onClick={(event) => {
                  event.stopPropagation()
                  onClose(card.id)
                }}
              >
                ×
              </span>
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
