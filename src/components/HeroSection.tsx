import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import portraitHero from "@/assets/portrait-hero-new.jpg";

const HeroSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useRevealAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useRevealAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-background text-white">
      <div className="container mx-auto px-4 py-20 pt-24">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div 
            ref={leftRef}
            className={`${leftVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <span className="eyebrow text-white">
              Atendimento 100% online • CRP 04/69208
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-4">
              Psicólogo Online • Terapia Integrativa
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-prose mb-6">
              Escuta profunda, técnicas integradas aplicáveis na sua vida real.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button 
                variant="whatsapp" 
                size="therapy"
                onClick={() => window.open('https://wa.me/5531985961903', '_blank')}
              >
                💬 Agendar sessão de acolhimento
              </Button>
              <Button 
                variant="ghost-therapy" 
                size="therapy"
                onClick={() => window.open('https://wa.me/5531985961903', '_blank')}
              >
                💬 Falar no WhatsApp
              </Button>
            </div>
            <div className="text-white/90">
              Atendo do seu espaço, com sigilo e horários flexíveis.
            </div>
          </div>
          
          <div 
            ref={rightRef}
            className={`flex justify-center ${rightVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <img 
              src={portraitHero}
              alt="Foto profissional do psicólogo Josué, expressão acolhedora"
              className="portrait-hero max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;