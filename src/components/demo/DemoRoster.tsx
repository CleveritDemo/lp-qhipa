'use client'

import './demoRoster.css'

export interface DemoRosterAgent {
  id: string
  name: string
  roleCode: string
  engine: string
  status: 'idle' | 'working' | 'done'
  line: string
  contexts: string[]
}

export interface DemoRosterProps {
  agents: DemoRosterAgent[]
  target: string | null
  onSelectTarget: (id: string) => void
}

function statusLabel(status: DemoRosterAgent['status']): string {
  if (status === 'working') return 'Trabajando…'
  if (status === 'done') return '✓ Listo'
  return 'En espera'
}

function IconUsers() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconZap() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13.5 2.5 5 13.5h6L10.5 21.5 19 10.5h-6Z" />
    </svg>
  )
}

function IconDocument() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  )
}

export function DemoRoster({ agents, target, onSelectTarget }: DemoRosterProps) {
  return (
    <div className="demo-roster" role="list" aria-label="Agentes del plano">
      {agents.map((agent, index) => {
        const isTarget = agent.id === target
        const showLine = agent.line.length > 0 && agent.status !== 'idle'
        const isOrchestrator = index === 0

        return (
          <button
            key={agent.id}
            type="button"
            role="listitem"
            className={[
              'demo-roster-card',
              `demo-roster-card--${agent.status}`,
              isTarget ? 'demo-roster-card--target' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-pressed={isTarget}
            onClick={() => onSelectTarget(agent.id)}
          >
            <span className="demo-roster-card__glow" aria-hidden="true" />
            <div className="demo-roster-card__main">
              <div className="demo-roster-card__header">
                <div className="demo-roster-card__identity">
                  <span className="demo-roster-card__monogram" aria-hidden="true">
                    {agent.roleCode.toUpperCase()}
                  </span>
                  <span className="demo-roster-card__name">{agent.name}</span>
                </div>
                <div className="demo-roster-card__meta">
                  <span
                    className={[
                      'demo-roster-card__meta-icon',
                      isOrchestrator ? 'demo-roster-card__meta-icon--accent' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-hidden="true"
                  >
                    <IconUsers />
                  </span>
                  <span
                    className={[
                      'demo-roster-card__meta-icon',
                      isOrchestrator ? 'demo-roster-card__meta-icon--accent' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-hidden="true"
                  >
                    <IconZap />
                  </span>
                  <span className="demo-roster-card__engine">{agent.engine}</span>
                </div>
              </div>

              <div className="demo-roster-card__body">
                <span className="demo-roster-card__status">{statusLabel(agent.status)}</span>
                {showLine ? <p className="demo-roster-card__line">{agent.line}</p> : null}
              </div>

              {agent.contexts.length > 0 ? (
                <div className="demo-roster-card__contexts">
                  {agent.contexts.map((context) => (
                    <span key={context} className="demo-roster-card__context">
                      {context}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <span className="demo-roster-card__results" aria-hidden="true">
              <IconDocument />
            </span>
          </button>
        )
      })}
    </div>
  )
}
