"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

function TelemetryPanel() {
  const [animationCycle, setAnimationCycle] = useState(0);
  const [executions, setExecutions] = useState(0);
  const [avgTime, setAvgTime] = useState(0);
  const [barWidths, setBarWidths] = useState([0, 0, 0]);

  const targetExecutions = 1284;
  const targetTime = 1.2;
  const targetBars = [85, 65, 45];

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    const duration = 2000; // 2 seconds for animation
    const pauseDuration = 3000; // 3 seconds pause before restart

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setExecutions(Math.floor(targetExecutions * easeOutQuart));
      setAvgTime(parseFloat((targetTime * easeOutQuart).toFixed(1)));
      setBarWidths(targetBars.map((target) => target * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Pause then restart
        setTimeout(() => {
          startTime = 0;
          setAnimationCycle((prev) => prev + 1);
        }, pauseDuration);
      }
    };

    // Reset values and start animation
    setExecutions(0);
    setAvgTime(0);
    setBarWidths([0, 0, 0]);
    
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [animationCycle]);

  const agents = ["Agente A", "Agente B", "Agente C"];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-gray-900">Panel de Telemetría</h4>
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          En vivo
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Ejecuciones hoy</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {executions.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Tiempo promedio</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {avgTime}s
          </p>
        </div>
      </div>

      {/* Activity bars */}
      <div className="space-y-3">
        {agents.map((agent, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xs text-gray-500 w-16">{agent}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary-400 h-2 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${barWidths[index]}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 w-8 tabular-nums">
              {Math.round(barWidths[index])}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HumanLoopFlow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      label: "Agente ejecuta",
      bgColor: "bg-gray-100",
      activeBgColor: "bg-primary-50",
      iconBgColor: "bg-primary-400",
      activeIconBgColor: "bg-primary-500",
      textColor: "text-gray-700",
      activeTextColor: "text-primary-700",
      borderColor: "border-transparent",
      activeBorderColor: "border-primary-400",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Requiere revisión",
      bgColor: "bg-amber-50",
      activeBgColor: "bg-amber-100",
      iconBgColor: "bg-amber-500",
      activeIconBgColor: "bg-amber-600",
      textColor: "text-amber-700",
      activeTextColor: "text-amber-800",
      borderColor: "border-amber-200",
      activeBorderColor: "border-amber-400",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      label: "Persona aprueba",
      bgColor: "bg-green-50",
      activeBgColor: "bg-green-100",
      iconBgColor: "bg-green-500",
      activeIconBgColor: "bg-green-600",
      textColor: "text-green-700",
      activeTextColor: "text-green-800",
      borderColor: "border-green-200",
      activeBorderColor: "border-green-400",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="flex flex-col items-center gap-4">
          {steps.map((step, index) => (
            <div key={index}>
              <div
                className={`rounded-xl p-4 flex items-center gap-3 border-2 transition-all duration-500 ${
                  activeStep === index
                    ? `${step.activeBgColor} ${step.activeBorderColor} scale-110 shadow-lg`
                    : `${step.bgColor} ${step.borderColor} scale-100`
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    activeStep === index ? step.activeIconBgColor : step.iconBgColor
                  }`}
                >
                  {step.icon}
                </div>
                <span
                  className={`font-medium transition-all duration-500 ${
                    activeStep === index ? step.activeTextColor : step.textColor
                  }`}
                >
                  {step.label}
                </span>
                {activeStep === index && (
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse ml-2"></div>
                )}
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg
                    className={`w-6 h-6 transition-all duration-500 ${
                      activeStep === index ? "text-primary-500 scale-125" : "text-gray-300"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Observability() {
  const observeItems = [
    "Ejecuciones.",
    "Herramientas utilizadas.",
    "Flujos entre agentes.",
    "Tiempos de respuesta.",
    "Errores.",
    "Interacciones.",
    "Comportamientos inesperados.",
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Observability */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <FadeIn className="order-2 lg:order-1">
            <TelemetryPanel />
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
                Observabilidad para agentes
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Entiende qué hacen tus agentes
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Cuando los agentes comienzan a participar en procesos reales, necesitas saber qué están haciendo, qué herramientas utilizan y dónde pueden estar fallando.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Qhipa incorpora telemetría basada en <strong className="text-gray-900">OpenTelemetry (OTEL)</strong> para entregar visibilidad sobre la operación de los agentes.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Observa</h3>
                <div className="flex flex-wrap gap-2">
                  {observeItems.map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-sm text-gray-700 border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Human in the Loop */}
        <FadeIn>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
                  Human in the loop
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  IA con personas dentro del proceso
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  No todos los procesos deberían ejecutarse de manera completamente autónoma.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Qhipa permite diseñar flujos donde una persona pueda revisar, aprobar o intervenir cuando sea necesario.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Esto permite combinar la velocidad de la automatización con el criterio humano.
                </p>
                <div className="mt-8 space-y-2">
                  <p className="text-lg font-semibold text-gray-900">
                    Agentes cuando pueden actuar.
                  </p>
                  <p className="text-lg font-semibold text-primary-700">
                    Personas cuando deben decidir.
                  </p>
                </div>
              </div>

              <HumanLoopFlow />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
