import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { asset } from "@/lib/basePath";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bookish-disco-pz48qyq.pages.github.io";

export const metadata: Metadata = {
  // Títulos
  title: {
    default: "Qhipa - Orquestando el futuro del Software Delivery",
    template: "%s | Qhipa",
  },
  
  // Descripción
  description: "Qhipa permite a los equipos evolucionar de ejecutar trabajo a orquestar agentes especializados. Las personas definen la intención, los agentes ejecutan y Qhipa orquesta el ciclo completo de entrega de software: desde la ideación hasta la operación.",
  
  // Keywords
  keywords: [
    "agentes de IA",
    "inteligencia artificial",
    "automatización empresarial",
    "IA empresarial",
    "agentes inteligentes",
    "Qhipa",
    "Credicorp",
    "machine learning",
    "LLM",
    "plataforma IA",
    "infraestructura IA",
    "observabilidad IA",
    "software delivery",
    "orquestación de agentes",
    "AI orchestrator",
    "entrega de software",
  ],
  
  // Autores
  authors: [{ name: "Credicorp" }],
  creator: "Credicorp",
  publisher: "Credicorp",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons
  icons: {
    icon: asset("/images/favicon.svg"),
    shortcut: asset("/images/favicon.svg"),
    apple: asset("/images/favicon.svg"),
  },
  
  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Qhipa",
    title: "Qhipa - Orquestando el futuro del Software Delivery",
    description: "Las personas definen la intención. Los agentes ejecutan. Qhipa orquesta el ciclo completo de entrega de software, con el respaldo de Credicorp.",
    images: [
      {
        url: `${siteUrl}/images/og-image.png?v=3`,
        width: 1200,
        height: 630,
        alt: "Qhipa - Orquestando el futuro del Software Delivery",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Qhipa - Orquestando el futuro del Software Delivery",
    description: "Las personas definen la intención. Los agentes ejecutan. Qhipa orquesta el ciclo completo de entrega de software, con el respaldo de Credicorp.",
    images: [`${siteUrl}/images/og-image.png?v=3`],
    creator: "@credicorp",
  },
  
  // Verificación (añadir IDs reales cuando estén disponibles)
  // verification: {
  //   google: "google-site-verification-id",
  // },
  
  // Categoría
  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
