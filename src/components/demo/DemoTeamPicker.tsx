'use client'

import type { CSSProperties } from 'react'
import './demoPanels.css'
import { DEMO_BRAND_COLORS, DemoBrandIcon } from './DemoBrandIcon'

export interface DemoTeamPickerProps {
  providers: { id: string; label: string; accent: string }[]
  agents: { id: string; name: string; role: string; provider: string }[]
  canAdd?: boolean
  canRemove?: boolean
  onAdd: (id: string) => void
  onRemove: (id: string) => void
  onContinue: () => void
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function DemoTeamPicker({
  providers,
  agents,
  canAdd = true,
  canRemove = true,
  onAdd,
  onRemove,
  onContinue,
}: DemoTeamPickerProps) {
  return (
    <section className="demo-panel" aria-labelledby="demo-team-title">
      <h2 id="demo-team-title" className="demo-panel__title">
        Crear equipo Qhipa
      </h2>
      <p className="demo-panel__subtitle">Elige el CLI de cada especialista.</p>

      <div className="demo-provider-grid" role="list">
        {providers.map((provider) => (
          <button
            key={provider.id}
            type="button"
            className="demo-provider-card"
            role="listitem"
            disabled={!canAdd}
            style={
              { '--demo-brand': DEMO_BRAND_COLORS[provider.id] ?? provider.accent } as CSSProperties
            }
            onClick={() => onAdd(provider.id)}
          >
            <DemoBrandIcon provider={provider.id} size={14} />
            <span>{provider.label}</span>
          </button>
        ))}
      </div>

      <div className="demo-agent-list" aria-label="Agentes del equipo">
        {agents.map((agent) => (
          <div key={agent.id} className="demo-agent-card">
            <button
              type="button"
              className="demo-agent-card__remove"
              aria-label={`Quitar ${agent.name}`}
              disabled={!canRemove}
              onClick={() => onRemove(agent.id)}
            >
              ×
            </button>
            <div className="demo-agent-card__header">
              <div className="demo-agent-card__identity">
                <span className="demo-agent-card__monogram" aria-hidden="true">
                  {initials(agent.name)}
                </span>
                <span className="demo-agent-card__name">{agent.name}</span>
              </div>
              <DemoBrandIcon provider={agent.provider} size={11} />
            </div>
            <span className="demo-agent-card__role">{agent.role}</span>
          </div>
        ))}
      </div>

      <div className="demo-panel__actions">
        <button
          type="button"
          className="demo-btn-primary"
          disabled={agents.length === 0}
          onClick={onContinue}
        >
          Continuar
        </button>
      </div>
    </section>
  )
}
