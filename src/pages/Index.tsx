import React from 'react';
import TherapyNavigation from '@/components/TherapyNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import UniversalistSection from '@/components/UniversalistSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import MethodologySection from '@/components/MethodologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OnlineBenefitsSection from '@/components/OnlineBenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TherapyNavigation />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <UniversalistSection />
        <DifferentialsSection />
        <SpecialtiesSection />
        <MethodologySection />
        <TestimonialsSection />
        <OnlineBenefitsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Josué Psicologia",
            "description": "Psicologia Universalista online: acolhimento, ciência e resultados práticos para ansiedade, depressão, autoestima, relações e travas financeiras.",
            "areaServed": "BR",
            "serviceType": "Terapia online",
            "provider": {
              "@type": "Person",
              "name": "Josué Victor de Sousa Santos",
              "identifier": "CRP 04/69208",
              "jobTitle": "Psicólogo Clínico"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wa.me/5531999999999"
            }
          })
        }}
      />
    </div>
  );
};

export default Index;
