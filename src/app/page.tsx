import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import Features from "@/components/Features";
import GravityClient from "@/components/GravityClient";
import QhipaDemo from "@/components/QhipaDemo";
import UnifiedContext from "@/components/UnifiedContext";
import Observability from "@/components/Observability";
import OpenArchitecture from "@/components/OpenArchitecture";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Scale from "@/components/Scale";
import Teams from "@/components/Teams";
import WhyRimay from "@/components/WhyRimay";
import Architecture from "@/components/Architecture";
import Downloads from "@/components/Downloads";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Qhipa",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Las personas definen la intención. Los agentes ejecutan. Qhipa orquesta el ciclo completo de entrega de software, con el respaldo de Credicorp.",
  offers: {
    "@type": "Offer",
    category: "Enterprise Software",
  },
  creator: {
    "@type": "Organization",
    name: "Credicorp",
    url: "https://www.credicorp.com",
  },
  featureList: [
    "Orquestación de agentes especializados",
    "Ideación, descubrimiento y refinamiento",
    "Planificación y diseño de soluciones",
    "Desarrollo, calidad y despliegue",
    "Contexto unificado entre agentes",
    "Observabilidad y gobierno",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Qhipa",
  description: "Plataforma de orquestación para el ciclo completo de entrega de software",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://credicorp-internal.github.io/brd-rimay-platform",
  parentOrganization: {
    "@type": "Organization",
    name: "Credicorp",
    url: "https://www.credicorp.com",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Infrastructure />
        <Features />
        <GravityClient />
        <QhipaDemo />
        <UnifiedContext />
        <Observability />
        <OpenArchitecture />
        <HowItWorks />
        <UseCases />
        <Scale />
        <Teams />
        <WhyRimay />
        <Architecture />
        <Downloads />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
