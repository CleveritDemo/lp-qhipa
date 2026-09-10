"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/basePath";
import FadeIn from "./FadeIn";

function AnimatedDiagram() {
  const [animationStep, setAnimationStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const connections = [
    {
      name: "Contexto",
      description: "Información y datos",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: "Herramientas",
      description: "APIs y servicios externos",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "Telemetría",
      description: "Métricas y trazabilidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: "Sistemas",
      description: "Infraestructura corporativa",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
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

    const runAnimation = () => {
      setAnimationStep(0);
      
      // Step 1: Line from Agents to Gravity (300ms)
      timeout = setTimeout(() => setAnimationStep(1), 300);
      // Step 2: Gravity Client pulses (600ms)
      timeout = setTimeout(() => setAnimationStep(2), 800);
      // Step 3: Line down from Gravity (1100ms)
      timeout = setTimeout(() => setAnimationStep(3), 1300);
      // Step 4: Horizontal line expands (1600ms)
      timeout = setTimeout(() => setAnimationStep(4), 1800);
      // Step 5: Vertical lines to cards (2100ms)
      timeout = setTimeout(() => setAnimationStep(5), 2300);
      // Step 6: Cards light up (2600ms)
      timeout = setTimeout(() => setAnimationStep(6), 2800);
      // Reset and loop (5000ms)
      timeout = setTimeout(runAnimation, 5500);
    };

    runAnimation();

    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center relative">
        {/* Agents */}
        <div className={`bg-gray-800 rounded-xl px-8 py-4 border border-gray-700 flex items-center gap-3 z-10 transition-all duration-300 ${
          animationStep >= 1 ? "border-primary-400/50 shadow-lg shadow-primary-400/10" : ""
        }`}>
          <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="text-left">
            <span className="text-white font-medium block">Agentes</span>
            <span className="text-gray-400 text-sm">Copilotos, asistentes, automatizaciones</span>
          </div>
        </div>
        
        {/* Vertical line from Agents to Gravity Client */}
        <div className="h-12 w-px relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b from-primary-400 to-primary-500 transition-transform duration-500 origin-top ${
            animationStep >= 1 ? "scale-y-100" : "scale-y-0"
          }`}></div>
          {/* Pulse effect */}
          <div className={`absolute w-2 h-2 -left-[3px] bg-primary-400 rounded-full shadow-lg shadow-primary-400/50 transition-all duration-700 ${
            animationStep >= 1 ? "top-full opacity-0" : "top-0 opacity-100"
          }`}></div>
        </div>
        
        {/* Gravity Client */}
        <div className={`bg-primary-400 rounded-xl px-8 py-4 shadow-lg flex items-center gap-3 z-10 transition-all duration-500 ${
          animationStep >= 2 ? "shadow-primary-400/50 scale-105" : "shadow-primary-400/25 scale-100"
        }`}>
          <Image
            src={asset("/images/favicon.svg")}
            alt="Qhipa"
            width={40}
            height={40}
          />
          <div className="text-left">
            <span className="text-white font-semibold block">Gravity Client</span>
            <span className="text-white/80 text-sm">SDK de conexión</span>
          </div>
        </div>
        
        {/* Connection lines container */}
        <div className="relative w-full h-20">
          {/* Main vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-12 w-px overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b from-primary-400 to-primary-300 transition-transform duration-500 origin-top ${
              animationStep >= 3 ? "scale-y-100" : "scale-y-0"
            }`}></div>
          </div>
          
          {/* Horizontal line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-12 h-px sm:left-[6.25%] sm:right-[6.25%] overflow-hidden">
            <div className={`absolute inset-0 bg-primary-400/70 transition-transform duration-700 ${
              animationStep >= 4 ? "scale-x-100" : "scale-x-0"
            }`}></div>
          </div>
          
          {/* Vertical lines to each card */}
          <div className="absolute left-[12.5%] sm:left-[6.25%] top-12 h-8 w-px overflow-hidden">
            <div className={`absolute inset-0 bg-primary-400/70 transition-transform duration-300 origin-top ${
              animationStep >= 5 ? "scale-y-100" : "scale-y-0"
            }`} style={{ transitionDelay: "0ms" }}></div>
          </div>
          <div className="absolute left-[37.5%] sm:left-[31.25%] top-12 h-8 w-px overflow-hidden">
            <div className={`absolute inset-0 bg-primary-400/70 transition-transform duration-300 origin-top ${
              animationStep >= 5 ? "scale-y-100" : "scale-y-0"
            }`} style={{ transitionDelay: "100ms" }}></div>
          </div>
          <div className="absolute left-[62.5%] sm:left-[56.25%] top-12 h-8 w-px overflow-hidden">
            <div className={`absolute inset-0 bg-primary-400/70 transition-transform duration-300 origin-top ${
              animationStep >= 5 ? "scale-y-100" : "scale-y-0"
            }`} style={{ transitionDelay: "200ms" }}></div>
          </div>
          <div className="absolute right-[12.5%] sm:right-[6.25%] top-12 h-8 w-px overflow-hidden">
            <div className={`absolute inset-0 bg-primary-400/70 transition-transform duration-300 origin-top ${
              animationStep >= 5 ? "scale-y-100" : "scale-y-0"
            }`} style={{ transitionDelay: "300ms" }}></div>
          </div>
        </div>
        
        {/* Connections */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {connections.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl px-4 py-4 border text-center flex flex-col items-center gap-2 transition-all duration-500 ${
                animationStep >= 6 
                  ? "border-primary-400/50 shadow-lg shadow-primary-400/10" 
                  : "border-gray-700"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-primary-400">
                {item.icon}
              </div>
              <span className="text-white font-medium text-sm">{item.name}</span>
              <span className="text-gray-400 text-xs">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GravityClient() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/20 mb-4">
              Gravity Client
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Un punto de conexión entre tus agentes y Qhipa
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              <strong className="text-white">Gravity Client</strong> permite conectar agentes, herramientas y aplicaciones con la infraestructura de Qhipa.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Funciona como una capa que facilita la comunicación entre tus agentes y los servicios que necesitan para operar.
            </p>
          </FadeIn>
        </div>

        {/* Visual Connection Diagram */}
        <FadeIn delay={200}>
          <AnimatedDiagram />
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-16 text-center text-lg text-gray-400 max-w-3xl mx-auto">
            Esto permite mantener una arquitectura desacoplada y preparada para evolucionar a medida que aparecen nuevos modelos, frameworks y herramientas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
