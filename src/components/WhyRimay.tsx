"use client";

import FadeIn from "./FadeIn";

export default function WhyRimay() {
  const principles = [
    {
      title: "Agnóstico",
      description: "Utiliza diferentes modelos, clientes y frameworks.",
      color: "#DF50A9",
    },
    {
      title: "Observable",
      description: "Comprende cómo operan los agentes.",
      color: "#9A8BB8",
    },
    {
      title: "Componible",
      description: "Reutiliza contexto, herramientas y capacidades.",
      color: "#7CA5BF",
    },
    {
      title: "Colaborativo",
      description: "Comparte agentes entre equipos.",
      color: "#68B5C2",
    },
    {
      title: "Escalable",
      description: "Comienza pequeño y evoluciona progresivamente.",
      color: "#DF50A9",
    },
    {
      title: "Controlable",
      description: "Mantén personas dentro del proceso cuando sea necesario.",
      color: "#9A8BB8",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
              Por qué Qhipa
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Implementar IA no debería significar reconstruir toda tu arquitectura
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Qhipa funciona como una capa que conecta modelos, herramientas, contexto y agentes.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Esto permite experimentar con nuevas tecnologías sin comprometer toda la infraestructura.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Sus principios</h3>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <FadeIn key={index} delay={100 + index * 50}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${principle.color}20`,
                      color: principle.color 
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">{principle.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
