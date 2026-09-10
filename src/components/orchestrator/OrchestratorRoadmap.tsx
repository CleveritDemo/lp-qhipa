import FadeIn from "../FadeIn";

export interface RoadmapStage {
  phase: string;
  title: string;
  objective: string;
  capabilities: string[];
  deliverables: string[];
  outcome: string;
}

const STAGES: RoadmapStage[] = [
  {
    phase: "Etapa 1",
    title: "Fundamentos",
    objective:
      "Comprender el cambio de paradigma: de ejecutar tareas a definir intención y gobernar resultados.",
    capabilities: [
      "Marco de orquestación y roles AI-native",
      "Primeros turnos con agentes en Qhipa Platform",
      "Contexto, permisos y trazabilidad básica",
    ],
    deliverables: [
      "Plan de adopción por equipo",
      "Catálogo inicial de agentes y contextos",
      "Primer caso de uso orquestado de punta a punta",
    ],
    outcome:
      "Equipos que definen objetivos claros y validan entregables de agentes sin ejecutar manualmente el trabajo.",
  },
  {
    phase: "Etapa 2",
    title: "Orquestación Guiada",
    objective:
      "Coordinar especialistas y delegaciones con criterios de aceptación explícitos.",
    capabilities: [
      "Delegación entre agentes con gates verificables",
      "Salas de brainstorming y rondas de refinamiento",
      "Wiki y memoria de proyecto compartida",
    ],
    deliverables: [
      "Playbook de delegación por tipo de iniciativa",
      "Plantillas de contexto reutilizables",
      "Métricas de calidad y revisión humana",
    ],
    outcome:
      "Orquestadores que dirigen olas de trabajo especializado con visibilidad del progreso y del riesgo.",
  },
  {
    phase: "Etapa 3",
    title: "Multiagente",
    objective:
      "Escalar a sistemas multiagente para iniciativas complejas en el ciclo de software delivery.",
    capabilities: [
      "Cadenas de agentes con worktrees aislados",
      "Integración con repos, CI y artefactos de release",
      "Lienzo, previews y entregables visuales",
    ],
    deliverables: [
      "Pipeline multiagente para una iniciativa real",
      "Políticas de merge, review y release",
      "Dashboard de observabilidad del plano agéntico",
    ],
    outcome:
      "Equipos que orquestan descubrimiento, diseño, desarrollo y calidad como una fábrica coordinada.",
  },
  {
    phase: "Etapa 4",
    title: "Operación Autónoma",
    objective:
      "Gobernar operación continua con agentes que detectan, corrigen y escalan con supervisión humana.",
    capabilities: [
      "Loops y cadenas autónomas con intervalos controlados",
      "Alertas, pulse y telemetría de turnos",
      "Gobierno de permisos y cumplimiento corporativo",
    ],
    deliverables: [
      "Runbooks de operación autónoma",
      "SLAs y escalamiento humano-in-the-loop",
      "Roadmap de evolución hacia software factories",
    ],
    outcome:
      "Organizaciones que operan software con agentes autónomos bajo intención estratégica humana.",
  },
];

export default function OrchestratorRoadmap() {
  return (
    <section
      id="roadmap"
      className="bg-gray-50 py-20 sm:py-24"
      aria-labelledby="orchestrator-roadmap-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Roadmap del programa
            </p>
            <h2
              id="orchestrator-roadmap-title"
              className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Cuatro etapas hacia la orquestación AI-native
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un recorrido progresivo alineado con la madurez de Qhipa: desde
              asistentes hasta sistemas multiagente y operación autónoma.
            </p>
          </div>
        </FadeIn>

        <ol className="mt-14 space-y-8">
          {STAGES.map((stage, index) => (
            <FadeIn key={stage.title} delay={index * 80}>
              <li className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="lg:max-w-sm lg:shrink-0">
                    <span className="inline-flex items-center rounded-full bg-primary-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700 ring-1 ring-inset ring-primary-400/30">
                      {stage.phase}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {stage.objective}
                    </p>
                  </div>

                  <div className="grid flex-1 gap-6 sm:grid-cols-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Capacidades
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {stage.capabilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-6 text-gray-600"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Entregables
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {stage.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-6 text-gray-600"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-inset ring-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Resultado esperado
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-gray-700">
                        {stage.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
