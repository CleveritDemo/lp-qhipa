import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import OrchestratorRoadmap from "@/components/orchestrator/OrchestratorRoadmap";
import OrchestratorRegisterForm from "@/components/orchestrator/OrchestratorRegisterForm";
import { BASE_PATH } from "@/lib/basePath";
import { ORCHESTRATOR_PATH } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Conviértete en un Orquestador de IA con Quipa",
  description:
    "Programa progresivo para evolucionar de ejecutar trabajo a orquestar agentes especializados con Qhipa. Roadmap por etapas y registro mock.",
  alternates: {
    canonical: ORCHESTRATOR_PATH,
  },
  openGraph: {
    title: "Conviértete en un Orquestador de IA con Quipa",
    description:
      "Las personas definen la intención. Los agentes ejecutan. Aprende a orquestar el ciclo completo de software delivery.",
  },
};

export default function OrchestratorPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-50/80 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <FadeIn>
              <a
                href={`${BASE_PATH}/`}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Volver al inicio
              </a>
            </FadeIn>

            <div className="mt-10 max-w-4xl">
              <FadeIn delay={80}>
                <span className="inline-flex items-center rounded-full bg-primary-400/15 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-400/30">
                  Programa de orquestadores
                </span>
              </FadeIn>
              <FadeIn delay={120}>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Conviértete en un Orquestador de IA con Quipa
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
                  Deja de ejecutar tareas manualmente. Aprende a definir
                  intención, gobernar resultados y coordinar agentes
                  especializados a lo largo del ciclo completo de entrega de
                  software.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#roadmap"
                    className="inline-flex items-center justify-center rounded-full bg-primary-400 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                  >
                    Ver el roadmap
                  </a>
                  <a
                    href="#registro"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                  >
                    Registrarme
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <OrchestratorRoadmap />
        <OrchestratorRegisterForm />
      </main>
      <Footer />
    </>
  );
}
