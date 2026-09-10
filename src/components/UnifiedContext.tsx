"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

function ContextAnimation() {
  const [pulseSize, setPulseSize] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseSize((prev) => (prev + 1) % 100);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="bg-gray-50 rounded-2xl p-8">
        {/* Central context with animated pulse */}
        <div className="relative flex items-center justify-center h-48">
          {/* Expanding pulse rings */}
          <div
            className="absolute rounded-full bg-primary-300/30 transition-all duration-100"
            style={{
              width: `${80 + pulseSize * 1.5}px`,
              height: `${80 + pulseSize * 1.5}px`,
              opacity: 1 - pulseSize / 100,
            }}
          ></div>
          <div
            className="absolute rounded-full bg-primary-400/20 transition-all duration-100"
            style={{
              width: `${80 + ((pulseSize + 33) % 100) * 1.5}px`,
              height: `${80 + ((pulseSize + 33) % 100) * 1.5}px`,
              opacity: 1 - ((pulseSize + 33) % 100) / 100,
            }}
          ></div>
          <div
            className="absolute rounded-full bg-primary-500/10 transition-all duration-100"
            style={{
              width: `${80 + ((pulseSize + 66) % 100) * 1.5}px`,
              height: `${80 + ((pulseSize + 66) % 100) * 1.5}px`,
              opacity: 1 - ((pulseSize + 66) % 100) / 100,
            }}
          ></div>

          {/* Static background circles */}
          <div className="absolute w-48 h-48 bg-primary-200/30 rounded-full"></div>
          <div className="absolute w-32 h-32 bg-primary-300/40 rounded-full"></div>

          {/* Central lock icon */}
          <div className="relative z-10 w-20 h-20 bg-primary-400 rounded-full flex items-center justify-center shadow-lg shadow-primary-400/40 animate-pulse">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Connection lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full" style={{ position: "absolute" }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#45c89c" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#45c89c" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#45c89c" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Connections to agents - Laptops */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {["Agente A", "Agente B", "Agente C", "Agente D"].map(
            (agent, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md border-2 border-primary-100 flex flex-col items-center gap-2 hover:shadow-lg hover:border-primary-300 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary-400/20 rounded-xl flex items-center justify-center shadow-inner">
                  <svg
                    className="w-7 h-7 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">{agent}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Conectado</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function UnifiedContext() {
  const contexts = [
    "Diferentes agentes.",
    "Diferentes modelos.",
    "Diferentes aplicaciones.",
    "Diferentes equipos.",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
                Contexto unificado
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Tus agentes necesitan contexto para tomar mejores decisiones
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Qhipa permite construir una capa de contexto compartido para que los agentes puedan acceder a la información necesaria durante sus tareas.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                En lugar de mantener conocimiento aislado en cada implementación, puedes centralizar y reutilizar información relevante.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Un mismo contexto para
                </h3>
                <ul className="space-y-3">
                  {contexts.map((context, index) => {
                    const colors = ['#DF50A9', '#9A8BB8', '#7CA5BF', '#68B5C2'];
                    const color = colors[index % colors.length];
                    return (
                    <li key={index} className="flex items-center gap-3">
                      <div 
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${color}20`, color: color }}
                      >
                        <svg
                          className="w-4 h-4"
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
                      <span className="text-gray-700">{context}</span>
                    </li>
                  )})}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <p className="mt-8 text-xl font-semibold text-primary-700">
                Más contexto. Menos duplicación. Mejores respuestas.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={100}>
            <ContextAnimation />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
