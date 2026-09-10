'use client'

import './demoRoomSetup.css'

export interface DemoRoomSetupAgent {
  id: string
  name: string
  roleCode: string
}

export interface DemoRoomSetupProps {
  goal: string
  ceremony: string
  ceremonyGoal: string
  gate: string
  rounds: number
  participants: DemoRoomSetupAgent[]
  onStart: () => void
}

export function DemoRoomSetup({
  goal,
  ceremony,
  ceremonyGoal,
  gate,
  rounds,
  participants,
  onStart,
}: DemoRoomSetupProps) {
  return (
    <section className="demo-room-setup" aria-labelledby="demo-room-setup-title">
      <h2 id="demo-room-setup-title" className="demo-room-setup__title">
        Nueva sala
      </h2>

      <div className="demo-room-setup__goal">
        <span className="demo-room-setup__label">¿Qué quieres resolver?</span>
        <p className="demo-room-setup__goal-text">{goal}</p>
      </div>

      <div className="demo-room-setup__participants">
        <span className="demo-room-setup__label">Participantes</span>
        <ul className="demo-room-setup__participant-row">
          {participants.map((participant, index) => (
            <li key={participant.id} className="demo-room-setup__participant">
              <span className="demo-room-setup__turn" aria-hidden="true">
                {index + 1}
              </span>
              <span className="demo-room-setup__role" aria-hidden="true">
                {participant.roleCode.slice(0, 2).toUpperCase()}
              </span>
              <span className="demo-room-setup__name">{participant.name}</span>
            </li>
          ))}
        </ul>
        <p className="demo-room-setup__hint">Hablan en el orden en que los eliges.</p>
      </div>

      <div className="demo-room-setup__ceremony">
        <span className="demo-room-setup__label">Ceremonia</span>
        <p className="demo-room-setup__ceremony-name">{ceremony}</p>
        <p className="demo-room-setup__ceremony-goal">{ceremonyGoal}</p>
        <p className="demo-room-setup__gate">
          <span className="demo-room-setup__gate-label">Gate de salida</span>
          <span className="demo-room-setup__gate-value">{gate}</span>
        </p>
      </div>

      <p className="demo-room-setup__rounds">{rounds} rondas</p>

      <div className="demo-room-setup__actions">
        <button type="button" className="demo-room-setup__start" onClick={onStart}>
          Abrir sala
        </button>
      </div>
    </section>
  )
}
