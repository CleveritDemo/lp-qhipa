"use client";

import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    { text: "$ qhipa agent create", type: "command" },
    { text: "# Configurando nuevo agente...", type: "comment" },
    { text: "✓ Agente creado exitosamente", type: "success" },
    { text: "", type: "empty" },
    { text: "$ qhipa agent deploy --env production", type: "command" },
    { text: "# Desplegando agente...", type: "comment" },
    { text: "✓ Agente activo en producción", type: "success" },
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        // Reset and start over after a pause
        timeout = setTimeout(() => {
          setVisibleLines(0);
          setCurrentText("");
          lineIndex = 0;
          charIndex = 0;
          setIsTyping(true);
          typeNextChar();
        }, 2000);
        return;
      }

      const currentLine = lines[lineIndex];
      
      if (charIndex <= currentLine.text.length) {
        setCurrentText(currentLine.text.slice(0, charIndex));
        setVisibleLines(lineIndex);
        charIndex++;
        
        // Typing speed varies by line type
        const speed = currentLine.type === "command" ? 50 : 30;
        timeout = setTimeout(typeNextChar, speed);
      } else {
        // Move to next line
        lineIndex++;
        charIndex = 0;
        setCurrentText("");
        
        // Pause between lines
        const pauseTime = currentLine.type === "success" ? 800 : 400;
        timeout = setTimeout(typeNextChar, pauseTime);
      }
    };

    typeNextChar();

    return () => clearTimeout(timeout);
  }, []);

  const getLineStyle = (type: string) => {
    switch (type) {
      case "command":
        return "text-primary-400";
      case "comment":
        return "text-gray-500";
      case "success":
        return "text-green-400";
      default:
        return "text-gray-300";
    }
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="font-mono text-sm space-y-2 text-left min-h-[180px]">
        {lines.slice(0, visibleLines).map((line, index) => (
          <p key={index} className={getLineStyle(line.type)}>
            {line.text}
          </p>
        ))}
        {visibleLines < lines.length && (
          <p className={getLineStyle(lines[visibleLines].type)}>
            {currentText}
            <span className="animate-pulse">▋</span>
          </p>
        )}
      </div>
    </div>
  );
}

function TeamsAnimation() {
  const [visibleTeams, setVisibleTeams] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const totalTeams = 6;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateTeams = () => {
      setVisibleTeams(0);
      setShowBadge(false);

      let currentTeam = 0;

      const showNextTeam = () => {
        if (currentTeam < totalTeams) {
          currentTeam++;
          setVisibleTeams(currentTeam);
          timeout = setTimeout(showNextTeam, 300);
        } else {
          // Show badge after all teams appear
          timeout = setTimeout(() => {
            setShowBadge(true);
            // Wait and restart
            timeout = setTimeout(animateTeams, 2500);
          }, 500);
        }
      };

      timeout = setTimeout(showNextTeam, 500);
    };

    animateTeams();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`bg-white rounded-xl p-4 shadow-sm flex flex-col items-center transition-all duration-300 ${
              i <= visibleTeams
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
              style={{ backgroundColor: '#9A8BB820', color: '#9A8BB8' }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-500">Equipo {i}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <div
          className={`inline-flex items-center gap-2 bg-primary-400 text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-500 ${
            showBadge
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Agente compartido
        </div>
      </div>
    </div>
  );
}

function ToolsCarousel() {
  const tools = [
    {
      name: "GitHub Copilot",
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "Claude",
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor" fillRule="nonzero">
          <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/>
        </svg>
      ),
    },
    {
      name: "Cursor",
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor" fillRule="evenodd">
          <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z"/>
        </svg>
      ),
    },
    {
      name: "OpenAI",
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
      ),
    },
    {
      name: "VS Code",
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
      ),
    },
    {
      name: "Slack",
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      ),
    },
  ];

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <div className="bg-gray-50 rounded-2xl p-8 overflow-hidden">
      <p className="text-sm font-medium text-gray-500 mb-6 text-center">
        Compatible con herramientas como
      </p>
      <div className="relative">
        <div className="flex animate-scroll gap-8">
          {duplicatedTools.map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 min-w-[120px]"
            >
              <div className="text-primary-500 mb-3">
                {tool.logo}
              </div>
              <span className="text-gray-700 font-medium text-sm text-center whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const agenticBenefits = [
    "Desarrollo rápido de agentes.",
    "Pruebas y experimentación.",
    "Despliegue simplificado.",
    "Configuración centralizada.",
    "Colaboración entre equipos.",
  ];

  return (
    <section id="producto" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
              Features principales
            </span>
          </div>
        </FadeIn>

        {/* Agentic Terminal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <FadeIn>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
                Agentic Terminal
              </h3>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                El espacio donde tus agentes cobran vida
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Construye, prueba y despliega agentes desde un entorno diseñado específicamente para flujos de trabajo con inteligencia artificial.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Experimenta rápidamente, conecta herramientas y pasa desde una prueba de concepto hasta una implementación real.
              </p>
            </FadeIn>
            <ul className="mt-8 space-y-3">
              {agenticBenefits.map((benefit, index) => (
                <FadeIn key={index} delay={200 + index * 50}>
                  <li className="flex items-center gap-3">
                    <div 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#68B5C220', color: '#68B5C2' }}
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
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
          <FadeIn delay={100}>
            <TerminalAnimation />
          </FadeIn>
        </div>

        {/* Comparte agentes */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <FadeIn className="order-2 lg:order-1">
            <TeamsAnimation />
          </FadeIn>
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
                Comparte agentes con tu equipo
              </h3>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                De un prototipo individual a una capacidad para toda la organización
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Crea un agente una vez y permite que otros equipos puedan utilizarlo, probarlo o integrarlo dentro de sus propios procesos.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Reduce esfuerzos duplicados y convierte los aprendizajes individuales en capacidades reutilizables para toda la organización.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-6 text-xl font-semibold text-gray-900">
                Build once. Share everywhere.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Harness Agnostic */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
                Harness Agnostic
              </h3>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Usa las herramientas que tu equipo ya conoce
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Qhipa puede integrarse con distintos entornos y asistentes de desarrollo.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Tu organización puede adoptar agentes sin quedar limitada a un único proveedor o ecosistema.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={100}>
            <ToolsCarousel />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
