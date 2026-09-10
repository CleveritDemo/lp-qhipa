"use client";

import FadeIn from "./FadeIn";

export default function Teams() {
  const teams = [
    {
      title: "Business AI Orchestrators",
      description: "Dirigen agentes especializados para descubrir, estructurar y validar iniciativas.",
      color: "#DF50A9", // Rosa
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Engineering AI Orchestrators",
      description: "Dirigen agentes especializados para diseñar, desarrollar, probar y desplegar soluciones.",
      color: "#9A8BB8", // Lavanda
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Las personas",
      description: "Se concentran en intención, estrategia, validación y gobierno.",
      color: "#7CA5BF", // Azul claro
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
              Para todos los equipos
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              De ejecutores a orquestadores
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Qhipa permite que diferentes perfiles participen en la creación de soluciones con agentes.
            </p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    backgroundColor: `${team.color}20`,
                    color: team.color 
                  }}
                >
                  {team.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {team.title}
                </h3>
                <p className="text-gray-600">{team.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
