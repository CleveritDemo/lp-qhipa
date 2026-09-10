"use client";

import FadeIn from "./FadeIn";

export default function OpenArchitecture() {
  const categories = [
    {
      title: "Modelos",
      items: ["OpenAI", "Anthropic", "Gemini", "Modelos privados"],
      color: "primary",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Interfaces",
      items: ["Copilot", "Claude", "Cursor", "Aplicaciones propias"],
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: "Herramientas",
      items: ["APIs", "Bases de datos", "Servicios internos", "Sistemas corporativos"],
      color: "emerald",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Agentes",
      items: ["Asistentes", "Automatizaciones", "Agentes especializados", "Sistemas multiagente"],
      color: "amber",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary-100",
          text: "text-primary-500",
          dot: "bg-primary-400",
        };
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-500",
          dot: "bg-blue-500",
        };
      case "emerald":
        return {
          bg: "bg-emerald-100",
          text: "text-emerald-500",
          dot: "bg-emerald-500",
        };
      case "amber":
        return {
          bg: "bg-amber-100",
          text: "text-amber-500",
          dot: "bg-amber-500",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-500",
          dot: "bg-gray-500",
        };
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
              Arquitectura abierta
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Diseñado para un ecosistema de IA que cambia constantemente
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Los modelos, herramientas y frameworks evolucionan rápidamente.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Por eso Qhipa está pensado como una infraestructura flexible que evita depender de una única tecnología.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mb-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Puedes conectar</h3>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <FadeIn key={index} delay={100 + index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                  <div className="flex flex-col items-center mb-6">
                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} mb-3`}>
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-center">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm"
                      >
                        <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
