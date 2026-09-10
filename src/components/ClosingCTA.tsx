"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { asset } from "@/lib/basePath";
import { orchestratorHref } from "@/lib/routes";

function AnimatedSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    "Empieza con un proceso.",
    "Conecta tus herramientas.",
    "Entrega contexto.",
    "Observa su comportamiento.",
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

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <div ref={containerRef} className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2 sm:gap-4">
          <span
            className={`transition-all duration-500 whitespace-nowrap ${
              index === activeIndex
                ? "text-primary-600 font-semibold scale-110"
                : "text-gray-500"
            }`}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <svg
              className={`w-4 h-4 transition-all duration-500 hidden sm:block ${
                index === activeIndex ? "text-primary-400" : "text-gray-600"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ClosingCTA() {
  return (
    <>
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex justify-center mb-6">
                <Image
                  src={asset("/images/favicon.svg")}
                  alt="Qhipa"
                  width={48}
                  height={48}
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Tu próximo colaborador puede ser un{" "}
                <span className="text-primary-400">agente</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <AnimatedSteps />
            </FadeIn>

            <FadeIn delay={150}>
              <p className="mt-8 text-lg text-gray-400">
                Y construye desde ahí una nueva generación de experiencias y automatizaciones impulsadas por IA.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#descargas"
                  className="inline-flex items-center justify-center rounded-full bg-primary-400 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 transition-colors duration-200"
                >
                  Implementar Qhipa
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href={orchestratorHref()}
                  className="inline-flex items-center justify-center rounded-full border border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors duration-200"
                >
                  Conviértete en orquestador IA
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credicorp backing - fondo blanco */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {/* Qhipa Logo */}
              <Image
                src={asset("/images/logotipo-qhipa.svg")}
                alt="Qhipa Context Platform"
                width={200}
                height={60}
                className="hover:opacity-80 transition-opacity duration-300"
              />
              
              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
              
              {/* Credicorp Logo */}
              <Image
                src={asset("/images/bycredicorp.svg")}
                alt="Credicorp"
                width={160}
                height={40}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
