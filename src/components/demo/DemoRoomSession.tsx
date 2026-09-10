'use client'

import './demoRoomSession.css'

export interface DemoRoomTurn {
  id: string
  speaker: string
  roleCode: string
  round: number
  text: string
  state: 'done' | 'speaking' | 'pending'
}

export interface DemoRoomSessionProps {
  goal: string
  ceremony: string
  round: number
  rounds: number
  turns: DemoRoomTurn[]
  onClose: () => void
}

function speakerMonogram(speaker: string): string {
  const parts = speaker.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase()
  }
  return speaker.trim().slice(0, 2).toUpperCase()
}

export function DemoRoomSession(props: DemoRoomSessionProps) {
  const { goal, ceremony, round, rounds, turns, onClose } = props
  const visibleTurns = turns.filter((turn) => turn.state === 'done' || turn.state === 'speaking')

  return (
    <div className="demo-room">
      <header className="demo-room__head">
        <h2 className="demo-room__goal" title={goal}>{goal}</h2>
        <div className="demo-room__head-actions">
          <span className="demo-room__chip">{ceremony}</span>
          <span className="demo-room__chip">Ronda {round} de {rounds}</span>
          <button type="button" className="demo-room__close" onClick={onClose}>
            Cerrar sala
          </button>
        </div>
      </header>

      <div className="demo-room__lane" role="log" aria-live="polite">
        {visibleTurns.map((turn, index) => {
          const prevRound = index > 0 ? visibleTurns[index - 1].round : null
          const opensRound = prevRound === null || turn.round !== prevRound

          return (
            <div key={turn.id} className="demo-room__turn-block">
              {opensRound ? (
                <p className="demo-room__round-sep">Ronda {turn.round}</p>
              ) : null}
              <article
                className={[
                  'demo-room__row',
                  turn.state === 'speaking' ? 'demo-room__row--speaking' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="demo-room__avatar" aria-hidden="true">
                  {speakerMonogram(turn.speaker)}
                </span>
                <div className="demo-room__entry">
                  <div className="demo-room__speaker-line">
                    <span className="demo-room__speaker">{turn.speaker}</span>
                    <span className="demo-room__role">{turn.roleCode}</span>
                  </div>
                  {turn.state === 'speaking' ? (
                    <span className="demo-room__dots" aria-label="Hablando">
                      <span className="demo-room__dot" />
                      <span className="demo-room__dot" />
                      <span className="demo-room__dot" />
                    </span>
                  ) : (
                    <p className="demo-room__text">{turn.text}</p>
                  )}
                </div>
              </article>
            </div>
          )
        })}
      </div>

      <footer className="demo-room__timeline-wrap">
        <ol className="demo-room__timeline" aria-label="Turnos de la sala">
          {turns.map((turn) => (
            <li
              key={turn.id}
              className={[
                'demo-room__pip-item',
                turn.state === 'done' ? 'demo-room__pip-item--done' : '',
                turn.state === 'speaking' ? 'demo-room__pip-item--speaking' : '',
                turn.state === 'pending' ? 'demo-room__pip-item--pending' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className="demo-room__pip" aria-hidden="true" />
              <span className="demo-room__pip-label">{turn.speaker}</span>
            </li>
          ))}
        </ol>
      </footer>
    </div>
  )
}
