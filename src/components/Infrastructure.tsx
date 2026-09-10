"use client";

import { useEffect, useState, useRef } from "react";
import FadeIn from "./FadeIn";

function CheckAnimation({ 
  isActive, 
  isPast 
}: { 
  isActive: boolean; 
  isPast: boolean;
}) {
  return (
    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
      isActive 
        ? "bg-primary-500 scale-110" 
        : isPast 
          ? "bg-primary-100" 
          : "bg-gray-100"
    }`}>
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          isActive 
            ? "text-white scale-110" 
            : isPast 
              ? "text-primary-500" 
              : "text-gray-300"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
          className={`transition-all duration-300 ${
            isActive || isPast ? "opacity-100" : "opacity-40"
          }`}
        />
      </svg>
    </div>
  );
}

function UseCasesAnimation() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const useCases = [
    "Automatizar procesos internos.",
    "Crear asistentes especializados.",
    "Conectar agentes con sistemas corporativos.",
    "Desarrollar copilotos para distintos equipos.",
    "Orquestar múltiples agentes.",
    "Incorporar IA dentro de productos digitales.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const animateChecks = () => {
      let currentIndex = -1;

      const showNextCheck = () => {
        currentIndex++;
        setActiveIndex(currentIndex);

        if (currentIndex < useCases.length) {
          timeout = setTimeout(showNextCheck, 600);
        } else {
          // All checks done, wait and restart
          timeout = setTimeout(() => {
            setActiveIndex(-1);
            timeout = setTimeout(animateChecks, 800);
          }, 2000);
        }
      };

      timeout = setTimeout(showNextCheck, 500);
    };

    animateChecks();

    return () => clearTimeout(timeout);
  }, [isVisible, useCases.length]);

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr max-w-4xl mx-auto">
      {useCases.map((useCase, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border h-full transition-all duration-300 ${
            index === activeIndex
              ? "border-primary-300 shadow-md scale-[1.02]"
              : index < activeIndex
                ? "border-primary-100"
                : "border-gray-100"
          }`}
        >
          <CheckAnimation
            isActive={index === activeIndex}
            isPast={index < activeIndex}
          />
          <span className={`transition-colors duration-300 ${
            index <= activeIndex ? "text-gray-900" : "text-gray-500"
          }`}>
            {useCase}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Infrastructure() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Una infraestructura para agentes.{" "}
              <span className="text-primary-700">Múltiples posibilidades.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              La IA empresarial ya no se trata solamente de utilizar un asistente.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Se trata de construir agentes capaces de consultar información, utilizar herramientas, ejecutar tareas, colaborar con otros agentes y participar en procesos reales del negocio.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-4 text-lg leading-8 text-gray-900 font-medium">
              Qhipa entrega la infraestructura necesaria para hacerlo de forma{" "}
              <span className="text-primary-700">controlada</span>,{" "}
              <span className="text-primary-700">observable</span> y{" "}
              <span className="text-primary-700">escalable</span>.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16">
          <FadeIn>
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-8">
              Puedes utilizarlo para
            </h3>
          </FadeIn>
          <UseCasesAnimation />
        </div>
      </div>
    </section>
  );
}
