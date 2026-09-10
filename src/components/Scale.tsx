"use client";

import FadeIn from "./FadeIn";

export default function Scale() {
  const stages = [
    {
      count: "1",
      label: "Assistants",
      description: "Asistentes que responden dentro del flujo de trabajo.",
      size: "w-20 h-20",
      position: "bottom-8",
    },
    {
      count: "2",
      label: "Agents",
      description: "Agentes que ejecutan tareas de punta a punta.",
      size: "w-20 h-20",
      position: "bottom-12",
    },
    {
      count: "3",
      label: "Multi-Agent Systems",
      description: "Equipos de agentes que colaboran y se coordinan.",
      size: "w-24 h-24",
      position: "bottom-16",
    },
    {
      count: "4",
      label: "Autonomous Systems",
      description: "Sistemas que operan con supervisión, no con instrucción.",
      size: "w-28 h-28",
      position: "bottom-24",
    },
    {
      count: "5",
      label: "Software Factories",
      description: "Entrega de software continua y agéntica.",
      size: "w-32 h-32",
      position: "bottom-32",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-700/10 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-4">
              Construido para escalar
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              De asistentes a fábricas de software
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Puedes comenzar con un caso de uso pequeño y evolucionar progresivamente.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Graph background with grid lines - Desktop only */}
          <div className="absolute inset-0 hidden sm:block pointer-events-none z-0">
            {/* Horizontal grid lines */}
            <div className="absolute left-0 right-0 bottom-[20%] h-px bg-gray-200"></div>
            <div className="absolute left-0 right-0 bottom-[40%] h-px bg-gray-200"></div>
            <div className="absolute left-0 right-0 bottom-[60%] h-px bg-gray-200"></div>
            <div className="absolute left-0 right-0 bottom-[80%] h-px bg-gray-200"></div>
            
            {/* Vertical grid lines */}
            <div className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: 'calc(10% - 8px)' }}></div>
            <div className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: 'calc(30% - 4px)' }}></div>
            <div className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: 'calc(50%)' }}></div>
            <div className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: 'calc(70% + 4px)' }}></div>
            <div className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: 'calc(90% + 8px)' }}></div>
          </div>

          {/* Ascending straight line connecting circles - Desktop only */}
          <svg
            className="absolute hidden sm:block pointer-events-none"
            style={{
              left: 'calc(10% - 8px)',
              width: 'calc(80% + 16px)',
              top: '6rem',
              height: 'calc(220px - 1.5rem)',
              zIndex: 0,
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 100 C 30 90, 60 50, 100 0"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DF50A9" />
                <stop offset="33%" stopColor="#9A8BB8" />
                <stop offset="66%" stopColor="#7CA5BF" />
                <stop offset="100%" stopColor="#68B5C2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Desktop Layout */}
          <div className="hidden sm:grid sm:grid-cols-5 gap-4 relative z-10 pt-8 pb-4 min-h-[300px]">
            {stages.map((stage, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div 
                  className="relative flex flex-col items-center h-full"
                  style={{ 
                    paddingTop: `${[220, 175, 130, 65, 0][index]}px`
                  }}
                >
                  <div 
                    className={`relative z-10 ${stage.size} bg-white rounded-full border-4 border-primary-400 flex flex-col items-center justify-center shadow-lg mb-4 transition-transform hover:scale-110 px-1`}
                  >
                    <span className={`font-bold text-primary-500 ${index === 4 ? 'text-2xl' : index >= 2 ? 'text-xl' : 'text-lg'}`}>
                      {stage.count}
                    </span>
                    <span className={`text-gray-500 text-center leading-tight ${index >= 2 ? 'text-[10px]' : 'text-xs'}`}>{stage.label}</span>
                  </div>
                  <p className="text-center text-gray-600 text-sm mt-auto">
                    {stage.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile Layout - Vertical with equal spacing */}
          <div className="sm:hidden relative z-10">
            {/* Vertical connecting line */}
            <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#DF50A9] via-[#9A8BB8] to-[#68B5C2]"></div>
            
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex items-center gap-4">
                    {/* Circle */}
                    <div 
                      className="relative z-10 w-20 h-20 bg-white rounded-full border-4 border-primary-400 flex flex-col items-center justify-center shadow-lg flex-shrink-0 px-1"
                    >
                      <span className="font-bold text-primary-500 text-xl">
                        {stage.count}
                      </span>
                      <span className="text-gray-500 text-[9px] leading-tight text-center">{stage.label}</span>
                    </div>
                    
                    {/* Text */}
                    <p className="text-gray-700 text-sm flex-1 leading-snug">
                      {stage.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
