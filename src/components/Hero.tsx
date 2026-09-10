import { orchestratorHref } from "@/lib/routes";
import FadeIn from "./FadeIn";
import HeroDome from "./HeroDome";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="bg-white relative overflow-hidden">
      <HeroDome />
      
      {/* Blur overlay on sides */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-28 lg:w-36 bg-gradient-to-r from-white/60 to-transparent pointer-events-none backdrop-blur-[2px]" style={{ zIndex: 2 }}></div>
      <div className="absolute inset-y-0 right-0 w-20 sm:w-28 lg:w-36 bg-gradient-to-l from-white/60 to-transparent pointer-events-none backdrop-blur-[2px]" style={{ zIndex: 2 }}></div>
      
      {/* Gradient overlay to blend with next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
      
      {/* Particles effect */}
      <ParticlesBackground />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
          {/* Badge */}
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-6">
              Qhipa by Credicorp
            </span>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
              Orquestando el futuro del{" "}
              <span className="text-primary-700">Software Delivery</span>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={200}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
              Las personas definen la intención. Los agentes ejecutan.{" "}
              <strong className="text-gray-900">Qhipa</strong> orquesta.
            </p>
          </FadeIn>
          <FadeIn delay={250}>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
              Qhipa permite a los equipos evolucionar de ejecutar trabajo a orquestar agentes especializados, a lo largo del ciclo completo de entrega de software: desde la ideación hasta la operación.
            </p>
          </FadeIn>

          <FadeIn delay={275}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
                Definí la intención
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
                Los agentes ejecutan
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
                Qhipa orquesta
              </span>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={orchestratorHref()}
                className="inline-flex items-center justify-center rounded-full bg-primary-400 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 transition-colors duration-200"
              >
                Conviértete en orquestador
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
                href="#descargas"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors duration-200"
              >
                Descargar Qhipa
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
