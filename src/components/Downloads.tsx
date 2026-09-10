import FadeIn from "./FadeIn";

const VERSION = "1.27.0";
const RELEASE_DOWNLOAD =
  "https://github.com/credicorp-internal/qhipa-manifest/releases/download";

const INSTALLERS = [
  {
    href: `${RELEASE_DOWNLOAD}/v${VERSION}/Qhipa-Platform-${VERSION}-arm64.dmg`,
    label: "macOS (Apple Silicon)",
    variant: "primary" as const,
  },
  {
    href: `${RELEASE_DOWNLOAD}/v${VERSION}/Qhipa-Platform-${VERSION}-setup-x64.exe`,
    label: "Windows (x64)",
    variant: "secondary" as const,
  },
  {
    href: `${RELEASE_DOWNLOAD}/v${VERSION}/Qhipa-Platform-${VERSION}-x86_64.AppImage`,
    label: "Linux (x86_64)",
    variant: "secondary" as const,
  },
] as const;

function DownloadGlyph() {
  return (
    <svg
      className="mr-2 h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

function InstallerLink({
  href,
  label,
  variant,
}: (typeof INSTALLERS)[number]) {
  const appearance =
    variant === "primary"
      ? "rounded-full bg-primary-400 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
      : "rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400";

  return (
    <a
      href={href}
      download
      aria-label={`Descargar Qhipa Platform ${VERSION} para ${label}`}
      className={`inline-flex items-center justify-center transition-colors duration-200 ${appearance}`}
    >
      <DownloadGlyph />
      {label}
    </a>
  );
}

export default function Downloads() {
  return (
    <section id="descargas" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-primary-400/20 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-400/30 mb-4">
              Versión {VERSION}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Descarga Qhipa Platform
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Instala la plataforma en tu equipo y empieza a orquestar agentes con el contexto de tu organización.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              {INSTALLERS.map((installer) => (
                <InstallerLink key={installer.href} {...installer} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <a
              href="https://github.com/credicorp-internal/qhipa-manifest/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              Ver todas las versiones
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="mt-8 text-sm text-gray-500 max-w-xl mx-auto">
              La descarga requiere una sesión de GitHub con acceso al repositorio interno.
              El instalador de Windows no está firmado con certificado; Windows mostrará un aviso de SmartScreen la primera vez que lo ejecutes.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
