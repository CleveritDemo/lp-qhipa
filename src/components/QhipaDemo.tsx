'use client'

import { useEffect, useReducer } from 'react'
import FadeIn from './FadeIn'
import DemoWindow from './demo/DemoWindow'
import { DemoRolePicker } from './demo/DemoRolePicker'
import { DemoTeamPicker } from './demo/DemoTeamPicker'
import { DemoPlane } from './demo/DemoPlane'
import { DemoTerminalPane } from './demo/DemoTerminalPane'
import { DemoMiniColumn } from './demo/DemoMiniColumn'
import { DemoWave } from './demo/DemoWave'
import { DemoRoomSetup } from './demo/DemoRoomSetup'
import { DemoRoomSession } from './demo/DemoRoomSession'
import {
  demoInitialState,
  demoReduce,
  DEMO_PROVIDERS,
  DEMO_ROOM_TURNS,
  DEMO_SUGGESTIONS,
  MAX_AGENTS,
  MAX_TERMINALS,
  MAX_WORKSPACES,
  type DemoProviderId,
} from '@/lib/qhipaDemo'

export default function QhipaDemo() {
  const [state, dispatch] = useReducer(demoReduce, undefined, demoInitialState)

  const expandedTerminal = state.terminals.find((t) => t.expanded) ?? null

  useEffect(() => {
    if (state.step !== 'execute' || state.tick >= 4) return
    const t = setInterval(() => dispatch({ type: 'tick' }), 1100)
    return () => clearInterval(t)
  }, [state.step, state.tick])

  useEffect(() => {
    if (!expandedTerminal) return
    if (expandedTerminal.revealed >= expandedTerminal.lines.length) return
    const t = setInterval(() => dispatch({ type: 'terminalTick' }), 600)
    return () => clearInterval(t)
  }, [expandedTerminal?.id, expandedTerminal?.revealed, expandedTerminal?.lines.length])

  useEffect(() => {
    if (state.step !== 'room' || !state.room) return
    if (state.room.revealed <= 0 || state.room.revealed >= DEMO_ROOM_TURNS.length) return
    const t = setInterval(() => dispatch({ type: 'roomTick' }), 1400)
    return () => clearInterval(t)
  }, [state.step, state.room?.revealed])

  const planeStage = expandedTerminal ? (
    <DemoTerminalPane
      title={expandedTerminal.title}
      cwd={expandedTerminal.cwd}
      lines={expandedTerminal.lines}
      revealed={expandedTerminal.revealed}
      onMinimize={() => dispatch({ type: 'collapseTerminal' })}
      onClose={() => dispatch({ type: 'closeTerminal', id: expandedTerminal.id })}
    />
  ) : state.step === 'execute' ? (
    <DemoWave
      prompt={state.prompt}
      busy={state.tick < 4}
      rows={state.agents.map((a) => ({
        id: a.id,
        specialist: a.name,
        role: a.role,
        text: a.line,
        state: a.status === 'done' ? 'done' : 'running',
      }))}
    />
  ) : undefined

  return (
    <section id="demo" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pruébalo
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Recorre un flujo simplificado de Qhipa Platform sin instalar nada.
            </p>
            <span className="mt-4 inline-flex items-center rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
              Demo: las respuestas están simuladas.
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <DemoWindow
            workspaces={state.workspaces}
            activeWorkspaceId={state.activeWorkspaceId}
            onSelectWorkspace={(id) => dispatch({ type: 'selectWorkspace', id })}
            onAddWorkspace={() => dispatch({ type: 'addWorkspace' })}
            canAddWorkspace={state.workspaces.length < MAX_WORKSPACES}
            onCloseWorkspace={(id) => dispatch({ type: 'closeWorkspace', id })}
            canCloseWorkspace={state.workspaces.length > 1}
            onNewTerminal={
              state.step === 'role'
                ? undefined
                : () => dispatch({ type: 'newTerminal' })
            }
            canNewTerminal={state.terminals.length < MAX_TERMINALS}
            onAddAgent={
              state.step === 'intent'
                ? () => dispatch({ type: 'goStep', step: 'team' })
                : undefined
            }
            footer={
              <button
                type="button"
                onClick={() => dispatch({ type: 'reset' })}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reiniciar
              </button>
            }
          >
            {state.step === 'room' && state.room ? (
              state.room.revealed === 0 ? (
                <DemoRoomSetup
                  goal={state.room.goal}
                  ceremony={state.room.ceremony}
                  ceremonyGoal={state.room.ceremonyGoal}
                  gate={state.room.gate}
                  rounds={state.room.rounds}
                  participants={state.agents.map((agent) => ({
                    id: agent.id,
                    name: agent.name,
                    roleCode: agent.roleCode,
                  }))}
                  onStart={() => dispatch({ type: 'roomTick' })}
                />
              ) : (
                <DemoRoomSession
                  goal={state.room.goal}
                  ceremony={state.room.ceremony}
                  round={state.room.round}
                  rounds={state.room.rounds}
                  turns={DEMO_ROOM_TURNS.map((turn, i) => ({
                    id: `turn-${i}`,
                    speaker: turn.speaker,
                    roleCode: turn.roleCode,
                    text: turn.text,
                    round: Math.floor(i / 3) + 1,
                    state:
                      i < state.room!.revealed - 1
                        ? 'done'
                        : i === state.room!.revealed - 1
                          ? 'speaking'
                          : 'pending',
                  }))}
                  onClose={() => dispatch({ type: 'closeRoom' })}
                />
              )
            ) : (
              <>
                {state.step === 'role' && (
                  <DemoRolePicker
                    onPick={(role) => dispatch({ type: 'pickRole', role })}
                  />
                )}
                {state.step === 'team' && (
                  <DemoTeamPicker
                    providers={DEMO_PROVIDERS}
                    agents={state.agents}
                    canAdd={state.agents.length < MAX_AGENTS}
                    canRemove={state.agents.length > 1}
                    onAdd={(provider) =>
                      dispatch({
                        type: 'addAgent',
                        provider: provider as DemoProviderId,
                      })
                    }
                    onRemove={(id) => dispatch({ type: 'removeAgent', id })}
                    onContinue={() =>
                      state.role === 'plan'
                        ? dispatch({ type: 'openRoom' })
                        : dispatch({ type: 'goStep', step: 'intent' })
                    }
                  />
                )}
                {(state.step === 'intent' || state.step === 'execute') && (
                  <DemoPlane
                    agents={state.agents}
                    left={
                      <DemoMiniColumn
                        side="left"
                        cards={state.terminals.map((t) => ({
                          id: t.id,
                          title: t.title,
                          status: t.expanded ? 'abierta' : 'en segundo plano',
                          lines: t.lines
                            .slice(0, t.revealed)
                            .map((l) => l.text),
                        }))}
                        activeId={expandedTerminal?.id ?? null}
                        onOpen={(id) => dispatch({ type: 'expandTerminal', id })}
                        onClose={(id) => dispatch({ type: 'closeTerminal', id })}
                      />
                    }
                    stage={planeStage}
                    prompt={state.prompt}
                    suggestions={DEMO_SUGGESTIONS}
                    sending={state.step === 'execute' && state.tick < 3}
                    target={state.target}
                    onPromptChange={(value) => dispatch({ type: 'setPrompt', value })}
                    onSend={() => dispatch({ type: 'send' })}
                    onSelectTarget={(id) => dispatch({ type: 'setTarget', id })}
                  />
                )}
              </>
            )}
          </DemoWindow>
        </FadeIn>
      </div>
    </section>
  )
}
