'use client'

import { useCallback, useEffect, useRef, type KeyboardEvent, type ReactNode } from 'react'
import { DemoRoster } from './DemoRoster'
import './demoPanels.css'

export interface DemoPlaneProps {
  agents: {
    id: string
    name: string
    role: string
    roleCode: string
    engine: string
    contexts: string[]
    provider: string
    status: 'idle' | 'working' | 'done'
    line: string
  }[]
  left?: ReactNode
  stage?: ReactNode
  prompt: string
  suggestions: string[]
  sending: boolean
  target: string | null
  onPromptChange: (v: string) => void
  onSend: () => void
  onSelectTarget: (id: string) => void
}

function IconSend() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}

export function DemoPlane({
  agents,
  left,
  stage,
  prompt,
  suggestions,
  sending,
  target,
  onPromptChange,
  onSend,
  onSelectTarget,
}: DemoPlaneProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const resizeComposer = useCallback(() => {
    const field = textareaRef.current
    if (!field) return
    field.style.height = 'auto'
    field.style.height = `${Math.min(field.scrollHeight, 145)}px`
  }, [])

  useEffect(() => {
    resizeComposer()
  }, [prompt, resizeComposer])

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!sending && prompt.trim() !== '') {
        onSend()
      }
    }
  }

  return (
    <section className="demo-panel demo-panel--plane" aria-label="Plano Qhipa">
      <div className="demo-plane-body">
        <div className="demo-plane-layout">
          <div className="demo-plane-aside" aria-hidden={left ? undefined : true}>
            {left}
          </div>
          <div className="demo-plane-main">
            <div className="demo-plane-stage">
              {stage ?? (
                <p className="demo-plane-empty">
                  El plano está vacío. Dale una intención al equipo y sus ventanas aparecerán aquí.
                </p>
              )}
            </div>

            <div className="demo-plane-composer">
              <div className="demo-composer-row">
                <div className="demo-composer-field">
                  <div className="demo-target-pills" role="group" aria-label="Destino del mensaje">
                    {agents.map((agent) => (
                      <button
                        key={agent.id}
                        type="button"
                        className={`demo-target-pill${agent.id === target ? ' demo-target-pill--active' : ''}`}
                        aria-pressed={agent.id === target}
                        onClick={() => onSelectTarget(agent.id)}
                      >
                        {agent.name}
                      </button>
                    ))}
                  </div>
                  <div className="demo-composer-input-shell">
                    <textarea
                      ref={textareaRef}
                      className="demo-composer-input"
                      rows={1}
                      value={prompt}
                      placeholder="Dale una intención al equipo…"
                      disabled={sending}
                      onChange={(event) => onPromptChange(event.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="demo-composer-send"
                  aria-label="Enviar intención"
                  disabled={sending || prompt.trim() === ''}
                  onClick={onSend}
                >
                  <IconSend />
                </button>
              </div>
              {suggestions.length > 0 ? (
                <div className="demo-suggestions" role="list">
                  <span className="demo-suggestions-label">Prueba:</span>
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      className="demo-suggestion-chip"
                      role="listitem"
                      onClick={() => onPromptChange(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <DemoRoster
            agents={agents}
            target={target}
            onSelectTarget={onSelectTarget}
          />
        </div>
      </div>
    </section>
  )
}
