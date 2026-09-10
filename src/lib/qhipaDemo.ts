export type DemoStep = 'role' | 'team' | 'intent' | 'execute' | 'room'
export type DemoRole = 'plan' | 'execute'
export type DemoProviderId =
  | 'claude'
  | 'cursor'
  | 'copilot'
  | 'codex'
  | 'gemini'
  | 'kimi'
  | 'opencode'
  | 'pi'
  | 'hermes'
  | 'grok'
export type DemoAgentStatus = 'idle' | 'working' | 'done'

export interface DemoProvider {
  id: DemoProviderId
  label: string
  accent: string
}

export interface DemoAgent {
  id: string
  name: string
  role: string
  roleCode: string
  engine: string
  contexts: string[]
  provider: DemoProviderId
  status: DemoAgentStatus
  line: string
}

export interface DemoWorkspace {
  id: string
  title: string
}

export const DEMO_WORKSPACES: readonly DemoWorkspace[] = [
  { id: 'qhipa', title: 'qhipa' },
  { id: 'loyalty', title: 'loyalty' },
  { id: 'groowcity', title: 'groowcity' },
  { id: 'proposals', title: 'proposals' },
]

export interface DemoTerminalLine {
  kind: 'command' | 'output'
  text: string
}

export interface DemoTerminal {
  id: string
  title: string
  cwd: string
  lines: DemoTerminalLine[]
  revealed: number
  expanded: boolean
}

export interface DemoToast {
  id: string
  agentName: string
  title: string
  body: string
}

export interface DemoRoomTurnSpec {
  speaker: string
  roleCode: string
  text: string
}

export interface DemoRoomState {
  goal: string
  ceremony: string
  ceremonyGoal: string
  gate: string
  rounds: number
  round: number
  revealed: number
}

export interface DemoState {
  step: DemoStep
  role: DemoRole | null
  agents: DemoAgent[]
  prompt: string
  toasts: DemoToast[]
  tick: number
  workspaces: DemoWorkspace[]
  activeWorkspaceId: string
  terminals: DemoTerminal[]
  target: string | null
  room: DemoRoomState | null
}

export type DemoAction =
  | { type: 'pickRole'; role: DemoRole }
  | { type: 'addAgent'; provider: DemoProviderId }
  | { type: 'removeAgent'; id: string }
  | { type: 'goStep'; step: DemoStep }
  | { type: 'setPrompt'; value: string }
  | { type: 'send' }
  | { type: 'tick' }
  | { type: 'dismissToast'; id: string }
  | { type: 'reset' }
  | { type: 'newTerminal' }
  | { type: 'selectWorkspace'; id: string }
  | { type: 'addWorkspace' }
  | { type: 'closeWorkspace'; id: string }
  | { type: 'expandTerminal'; id: string }
  | { type: 'collapseTerminal' }
  | { type: 'closeTerminal'; id: string }
  | { type: 'terminalTick' }
  | { type: 'setTarget'; id: string }
  | { type: 'openRoom' }
  | { type: 'roomTick' }
  | { type: 'closeRoom' }

const BRAND_ACCENTS = ['#DF50A9', '#9A8BB8', '#7CA5BF', '#68B5C2'] as const

const PROVIDER_SPECS: ReadonlyArray<{ id: DemoProviderId; label: string }> = [
  { id: 'claude', label: 'Claude Code' },
  { id: 'cursor', label: 'Cursor Agent' },
  { id: 'copilot', label: 'GitHub Copilot' },
  { id: 'codex', label: 'Codex' },
  { id: 'gemini', label: 'Gemini' },
  { id: 'kimi', label: 'Kimi' },
  { id: 'opencode', label: 'Opencode' },
  { id: 'pi', label: 'Pi' },
  { id: 'hermes', label: 'Hermes' },
  { id: 'grok', label: 'Grok' },
]

export const DEMO_PROVIDERS: DemoProvider[] = PROVIDER_SPECS.map((spec, index) => ({
  ...spec,
  accent: BRAND_ACCENTS[index % BRAND_ACCENTS.length],
}))

export const DEMO_SUGGESTIONS: string[] = [
  'Implementa autenticación con GitHub en organizaciones',
  'Refactoriza la persistencia del lienzo a disco local',
  'Añade cobertura de tests al flujo de onboarding',
]

export const DEMO_ROOM_GOAL =
  'Decidir si el tenancy va por schema o por row-level security'
export const DEMO_ROOM_CEREMONY = 'Example Mapping'
export const DEMO_ROOM_CEREMONY_GOAL = 'Descubrir las reglas mediante ejemplos.'
export const DEMO_ROOM_GATE = 'Questions = 0 — bloquea el sello AI-Ready.'
export const DEMO_ROOM_ROUNDS = 2

export const DEMO_ROOM_TURNS: ReadonlyArray<DemoRoomTurnSpec> = [
  {
    speaker: 'Tech Lead',
    roleCode: 'TL',
    text: 'Regla: cada organización ve solo sus workspaces. Empecemos por la regla, no por la tabla.',
  },
  {
    speaker: 'Developer',
    roleCode: 'FE',
    text: 'Ejemplo: dos orgs con el mismo nombre de workspace no deben colisionar. Con schema por org sale gratis.',
  },
  {
    speaker: 'QA',
    roleCode: 'QA',
    text: 'Pregunta: ¿qué pasa cuando un usuario pertenece a dos organizaciones a la vez?',
  },
  {
    speaker: 'Tech Lead',
    roleCode: 'TL',
    text: 'Esa pregunta la cierra row-level security: la pertenencia es un dato, no un schema.',
  },
  {
    speaker: 'Developer',
    roleCode: 'FE',
    text: 'Ejemplo: migrar 40 orgs a schema son 40 migraciones por release. Con RLS, una.',
  },
  {
    speaker: 'QA',
    roleCode: 'QA',
    text: 'Questions = 0. La historia queda AI-Ready con RLS y la regla escrita.',
  },
]

const DEFAULT_TEAM: ReadonlyArray<{
  name: string
  role: string
  roleCode: string
  engine: string
  contexts: string[]
  provider: DemoProviderId
}> = [
  {
    name: 'Tech Lead',
    role: 'technical leader',
    roleCode: 'TL',
    engine: 'DEF',
    contexts: ['wiki', 'PRs', 'release'],
    provider: 'claude',
  },
  {
    name: 'Developer',
    role: 'software engineer',
    roleCode: 'FE',
    engine: 'C25',
    contexts: ['src/', 'tests'],
    provider: 'cursor',
  },
  {
    name: 'QA',
    role: 'qa expert',
    roleCode: 'QA',
    engine: 'G55',
    contexts: ['flujos', 'suite'],
    provider: 'copilot',
  },
]

export const MAX_AGENTS = 6
export const MAX_WORKSPACES = 6
const MAX_TOASTS = 3
export const MAX_TERMINALS = 4

const TERMINAL_SCRIPT: ReadonlyArray<DemoTerminalLine> = [
  { kind: 'command', text: 'npm run typecheck:baseline' },
  { kind: 'output', text: 'web 130 · node 87 — baseline OK' },
  { kind: 'command', text: 'npm test' },
  { kind: 'output', text: '5182 passed · 0 failed' },
  { kind: 'command', text: 'git status --porcelain' },
  { kind: 'output', text: 'árbol limpio' },
]

function providerLabel(id: DemoProviderId): string {
  return DEMO_PROVIDERS.find((provider) => provider.id === id)?.label ?? id
}

function seedDefaultAgents(): DemoAgent[] {
  return DEFAULT_TEAM.map((seed, index) => ({
    id: `${seed.provider}-${index}`,
    name: seed.name,
    role: seed.role,
    roleCode: seed.roleCode,
    engine: seed.engine,
    contexts: [...seed.contexts],
    provider: seed.provider,
    status: 'idle',
    line: '',
  }))
}

function workingLine(agent: DemoAgent): string {
  if (agent.name === 'Tech Lead') return 'Analizando el alcance…'
  if (agent.name === 'Developer') return 'Escribiendo el cambio…'
  if (agent.name === 'QA') return 'Preparando los casos…'
  return 'Trabajando…'
}

function doneLine(agent: DemoAgent): string {
  if (agent.name === 'Tech Lead') return 'Alcance definido: 3 tareas'
  if (agent.name === 'Developer') return 'Cambio listo: 12 archivos'
  if (agent.name === 'QA') return 'Suite en verde: 48 casos'
  return 'Listo'
}

export function demoInitialState(): DemoState {
  return {
    step: 'role',
    role: null,
    agents: [],
    prompt: '',
    toasts: [],
    tick: 0,
    workspaces: [...DEMO_WORKSPACES],
    activeWorkspaceId: 'qhipa',
    terminals: [],
    target: null,
    room: null,
  }
}

export function demoReduce(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'pickRole': {
      const agents = seedDefaultAgents()
      return {
        ...state,
        role: action.role,
        step: 'team',
        agents,
        target: agents[0]?.id ?? null,
      }
    }

    case 'addAgent': {
      if (state.agents.length >= MAX_AGENTS) return state
      const label = providerLabel(action.provider)
      return {
        ...state,
        agents: [
          ...state.agents,
          {
            id: `${action.provider}-${state.agents.length}`,
            name: label,
            role: 'specialist',
            roleCode: label.slice(0, 2).toUpperCase(),
            engine: 'DEF',
            contexts: [],
            provider: action.provider,
            status: 'idle',
            line: '',
          },
        ],
      }
    }

    case 'removeAgent': {
      if (state.agents.length <= 1) return state
      return {
        ...state,
        agents: state.agents.filter((agent) => agent.id !== action.id),
      }
    }

    case 'goStep':
      return { ...state, step: action.step }

    case 'setPrompt':
      return { ...state, prompt: action.value }

    case 'send': {
      if (state.prompt.trim() === '') return state
      return {
        ...state,
        step: 'execute',
        agents: state.agents.map((agent) => ({
          ...agent,
          status: 'working',
          line: workingLine(agent),
        })),
        tick: 0,
        toasts: [],
      }
    }

    case 'tick': {
      const nextTick = state.tick + 1
      if (nextTick > 3) {
        return { ...state, tick: nextTick }
      }

      const index = nextTick - 1
      const agent = state.agents[index]
      if (!agent) {
        return { ...state, tick: nextTick }
      }

      const line = doneLine(agent)
      const agents = state.agents.map((current, currentIndex) =>
        currentIndex === index ? { ...current, status: 'done' as const, line } : current,
      )
      const toast: DemoToast = {
        id: `toast-${nextTick}`,
        agentName: agent.name,
        title: agent.name,
        body: line,
      }
      const toasts = [...state.toasts, toast].slice(-MAX_TOASTS)

      return { ...state, tick: nextTick, agents, toasts }
    }

    case 'dismissToast':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.id),
      }

    case 'selectWorkspace': {
      if (!state.workspaces.some((workspace) => workspace.id === action.id)) return state
      return { ...state, activeWorkspaceId: action.id }
    }

    case 'addWorkspace': {
      if (state.workspaces.length >= MAX_WORKSPACES) return state
      const n = state.workspaces.length + 1
      const id = `ws-${n}`
      return {
        ...state,
        workspaces: [...state.workspaces, { id, title: `workspace ${n}` }],
        activeWorkspaceId: id,
      }
    }

    case 'closeWorkspace': {
      if (state.workspaces.length <= 1) return state
      const closingIndex = state.workspaces.findIndex((workspace) => workspace.id === action.id)
      if (closingIndex === -1) return state
      const workspaces = state.workspaces.filter((workspace) => workspace.id !== action.id)
      const activeWorkspaceId =
        state.activeWorkspaceId === action.id
          ? (workspaces[Math.max(0, closingIndex - 1)]?.id ?? workspaces[0].id)
          : state.activeWorkspaceId
      return { ...state, workspaces, activeWorkspaceId }
    }

    case 'newTerminal': {
      if (state.terminals.length >= MAX_TERMINALS) return state
      const n = state.terminals.length + 1
      const id = `terminal-${n}`
      return {
        ...state,
        terminals: [
          ...state.terminals.map((terminal) => ({ ...terminal, expanded: false })),
          {
            id,
            title: `terminal ${n}`,
            cwd: '~/rimay-context-platform',
            lines: [...TERMINAL_SCRIPT],
            revealed: 0,
            expanded: true,
          },
        ],
      }
    }

    case 'expandTerminal': {
      if (!state.terminals.some((terminal) => terminal.id === action.id)) return state
      return {
        ...state,
        terminals: state.terminals.map((terminal) => ({
          ...terminal,
          expanded: terminal.id === action.id,
        })),
      }
    }

    case 'collapseTerminal':
      return {
        ...state,
        terminals: state.terminals.map((terminal) => ({ ...terminal, expanded: false })),
      }

    case 'closeTerminal': {
      if (!state.terminals.some((terminal) => terminal.id === action.id)) return state
      return {
        ...state,
        terminals: state.terminals.filter((terminal) => terminal.id !== action.id),
      }
    }

    case 'terminalTick': {
      const terminalIndex = state.terminals.findIndex((terminal) => terminal.expanded)
      if (terminalIndex === -1) return state
      const terminal = state.terminals[terminalIndex]
      if (terminal.revealed >= terminal.lines.length) return state
      const terminals = state.terminals.map((current, index) =>
        index === terminalIndex
          ? { ...current, revealed: current.revealed + 1 }
          : current,
      )
      return { ...state, terminals }
    }

    case 'setTarget': {
      if (!state.agents.some((agent) => agent.id === action.id)) return state
      return { ...state, target: action.id }
    }

    case 'openRoom':
      return {
        ...state,
        step: 'room',
        room: {
          goal: DEMO_ROOM_GOAL,
          ceremony: DEMO_ROOM_CEREMONY,
          ceremonyGoal: DEMO_ROOM_CEREMONY_GOAL,
          gate: DEMO_ROOM_GATE,
          rounds: DEMO_ROOM_ROUNDS,
          round: 1,
          revealed: 0,
        },
      }

    case 'roomTick': {
      if (!state.room || state.room.revealed >= DEMO_ROOM_TURNS.length) return state
      const revealed = state.room.revealed + 1
      const round = Math.min(state.room.rounds, Math.floor(revealed / 3) + 1)
      return {
        ...state,
        room: { ...state.room, revealed, round },
      }
    }

    case 'closeRoom':
      return { ...state, step: 'team', room: null }

    case 'reset':
      return demoInitialState()

    default:
      return state
  }
}
