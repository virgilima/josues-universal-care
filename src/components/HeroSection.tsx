import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import portraitHero from "@/assets/portrait-hero.jpg";

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
              Psicologia Universalista: terapia sem rótulos, feita para a sua vida real.
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-prose mb-6">
              Acolhimento, ciência e resultados práticos para ansiedade, depressão, autoestima, 
              relações humanas e travas financeiras. Comece pela primeira sessão de acolhimento.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button 
                variant="whatsapp" 
                size="therapy"
                onClick={() => window.open('https://wa.me/5531999999999?text=Olá%2C%20Josué%2C%20quero%20agendar%20uma%20sessão.', '_blank')}
              >
                💬 Agendar sessão pelo WhatsApp
              </Button>
              <Button 
                variant="ghost-therapy" 
                size="therapy"
                onClick={() => scrollToSection('universalista')}
              >
                Como funciona
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