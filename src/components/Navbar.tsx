import Image from "next/image";
import { asset, BASE_PATH } from "@/lib/basePath";
import { orchestratorHref } from "@/lib/routes";

export default function Navbar() {
  const navLinks = [
    { label: "Producto", href: "#producto" },
    { label: "Casos de uso", href: "#casos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Demo", href: "#demo" },
    { label: "Arquitectura", href: "#arquitectura" },
    { label: "Descargas", href: "#descargas" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href={`${BASE_PATH}/`} className="flex items-center">
            <Image
              src={asset("/images/logotipo-qhipa.svg")}
              alt="Qhipa"
              width={140}
              height={32}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={orchestratorHref()}
              className="inline-flex items-center justify-center rounded-full bg-primary-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
            >
              Ser orquestador IA
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Abrir menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
