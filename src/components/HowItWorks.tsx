"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

function TimelineAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Define",
      description: "Identifica una tarea, proceso o problema donde un agente pueda generar valor.",
      color: "#DF50A9",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Construye",
      description: "Configura el agente, sus instrucciones, herramientas y fuentes de contexto.",
      color: "#9A8BB8",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Conecta",
      description: "Integra tus APIs, sistemas internos, datos y aplicaciones.",
      color: "#7CA5BF",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Prueba",
      description: "Experimenta con el comportamiento del agente antes de llevarlo a producción.",
      color: "#68B5C2",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Despliega",
      description: "Pon el agente a disposición de usuarios, equipos o aplicaciones.",
      color: "#DF50A9",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Observa",
      description: "Analiza su comportamiento mediante telemetría y trazabilidad.",
      color: "#9A8BB8",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: "07",
      title: "Escala",
      description: "Reutiliza componentes, contexto y agentes para nuevos casos de uso.",
      color: "#7CA5BF",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative">
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block">
        {/* Timeline line */}
        <div className="absolute top-10 left-0 right-0 h-1 bg-gray-700">
          <div 
            className="h-full transition-all duration-500"
            style={{ 
              width: `${((activeStep + 1) / steps.length) * 100}%`,
              background: 'linear-gradient(to right, #DF50A9, #9A8BB8, #7CA5BF, #68B5C2)'
            }}
          ></div>
        </div>

        {/* Timeline circles */}
        <div className="flex justify-between items-start relative z-10 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 ${
                  activeStep === index
                    ? "scale-110 shadow-lg"
                    : ""
                }`}
                style={{
                  backgroundColor: activeStep >= index ? step.color : '#374151'
                }}
              >
                {/* Icon */}
                <div
                  className={`transition-all duration-300 ${
                    activeStep >= index
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {step.icon}
                </div>
                {/* Number */}
                <span
                  className={`text-xs font-bold mt-1 transition-all duration-300 ${
                    activeStep >= index
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {step.number}
                </span>
              </div>
              {/* Small indicator dot */}
              {activeStep === index && (
                <div className="w-2 h-2 bg-white rounded-full mt-3 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="min-h-[120px] flex items-center justify-center">
          <div
            className="text-center max-w-2xl mx-auto transition-all duration-500"
            key={activeStep}
          >
            <h3 className="text-2xl font-bold text-white mb-3 animate-fade-in">
              {steps[activeStep].title}
            </h3>
            <p className="text-lg text-gray-300 animate-fade-in">
              {steps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? "bg-primary-400 w-6" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700">
            <div 
              className="w-full transition-all duration-500"
              style={{ 
                height: `${((activeStep + 1) / steps.length) * 100}%`,
                background: 'linear-gradient(to bottom, #DF50A9, #9A8BB8, #7CA5BF, #68B5C2)'
              }}
            ></div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 cursor-pointer relative z-10"
                onClick={() => setActiveStep(index)}
              >
                {/* Circle */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-500 ${
                    activeStep === index
                      ? "scale-110 shadow-lg ring-2 ring-white/20"
                      : ""
                  }`}
                  style={{
                    backgroundColor: activeStep >= index ? step.color : '#374151'
                  }}
                >
                  <div
                    className={`transition-all duration-300 scale-75 ${
                      activeStep >= index
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pt-1 transition-all duration-300 ${
                  activeStep === index ? "opacity-100" : "opacity-60"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ 
                        backgroundColor: `${step.color}30`,
                        color: step.color
                      }}
                    >
                      {step.number}
                    </span>
                    <h3 className={`font-bold transition-all duration-300 ${
                      activeStep === index ? "text-white text-lg" : "text-gray-300 text-base"
                    }`}>
                      {step.title}
                    </h3>
                    {activeStep === index && (
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${
                    activeStep === index ? "text-gray-300" : "text-gray-500"
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/20 mb-4">
              Cómo funciona
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              De una necesidad del negocio a un agente operativo
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <TimelineAnimation />
        </FadeIn>
      </div>
    </section>
  );
}
