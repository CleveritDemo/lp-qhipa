import Image from "next/image";
import { asset } from "@/lib/basePath";

export default function Footer() {
  const productLinks = [
    { label: "Agentic Terminal", href: "#producto" },
    { label: "Gravity Client", href: "#producto" },
    { label: "Contexto Unificado", href: "#producto" },
    { label: "Observabilidad", href: "#producto" },
    { label: "Integraciones", href: "#arquitectura" },
  ];

  const resourceLinks = [
    {
      label: "Changelog",
      href: "https://github.com/credicorp-internal/qhipa-manifest/releases",
    },
  ];

  const companyLinks = [
    { label: "Credicorp", href: "https://www.credicorp.com" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src={asset("/images/logotipo-qhipa.svg")}
                alt="Qhipa"
                width={120}
                height={28}
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Infraestructura para construir, desplegar y escalar agentes de IA empresariales.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Producto</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Recursos</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Qhipa by Credicorp. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Todos los sistemas operativos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
