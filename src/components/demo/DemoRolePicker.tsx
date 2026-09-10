'use client'

import './demoPanels.css'

export interface DemoRolePickerProps {
  onPick: (role: 'plan' | 'execute') => void
}

function IconBrain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.5 4a3.5 3.5 0 0 0-3.5 3.5V8a3 3 0 0 0-2 2.83A3 3 0 0 0 7 13.66V15a3 3 0 0 0 3 3h.5" />
      <path d="M13.5 4A3.5 3.5 0 0 1 17 7.5V8a3 3 0 0 1 2 2.83A3 3 0 0 1 17 13.66V15a3 3 0 0 1-3 3h-.5" />
      <path d="M10 8a2 2 0 0 0-2 2" />
      <path d="M14 8a2 2 0 0 1 2 2" />
      <path d="M12 4v16" />
      <path d="M10 16a2 2 0 0 0 2 2" />
      <path d="M14 16a2 2 0 0 1-2 2" />
    </svg>
  )
}

function IconOrchestrator() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="4.6" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
      <path d="M12 9.6V6.8" />
      <path d="m10.3 13.7-3.6 3.6" />
      <path d="m13.7 13.7 3.6 3.6" />
    </svg>
  )
}

export function DemoRolePicker({ onPick }: DemoRolePickerProps) {
  return (
    <section className="demo-panel" aria-labelledby="demo-role-title">
      <p className="demo-panel__lead">Tú dices qué. El equipo hace el cómo.</p>
      <h2 id="demo-role-title" className="demo-panel__title">
        ¿Cuál es tu rol?
      </h2>
      <div className="demo-role-card">
        <button type="button" className="demo-role-option" onClick={() => onPick('plan')}>
          <span className="demo-role-option__icon">
            <IconBrain />
          </span>
          <span className="demo-role-option__body">
            <span className="demo-role-option__label">Planear</span>
            <span className="demo-role-option__hint">
              Salas de brainstorming: planificas y refinas con el equipo antes de ejecutar.
            </span>
          </span>
        </button>
        <button type="button" className="demo-role-option" onClick={() => onPick('execute')}>
          <span className="demo-role-option__icon">
            <IconOrchestrator />
          </span>
          <span className="demo-role-option__body">
            <span className="demo-role-option__label">Ejecutar</span>
            <span className="demo-role-option__hint">
              El plano: chat con el equipo, agentes y terminales.
            </span>
          </span>
        </button>
        <p className="demo-role-card__footer">¿Te invitaron a un equipo?</p>
      </div>
    </section>
  )
}
