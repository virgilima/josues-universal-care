import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const CTASection = () => {
  const { ref, isVisible } = useRevealAnimation();

  return (
    <section id="agendar" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Comece hoje</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu processo de transformação começa agora.
          </h2>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto mb-6">
            Cada dia sem tratamento é um dia a mais convivendo com as mesmas dores. 
            Clique abaixo e agende sua <strong>primeira sessão de acolhimento</strong> com Josué.
          </p>
          <Button 
            variant="whatsapp" 
            size="therapy"
            onClick={() => window.open('https://wa.me/5531985961903?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20mais%20detalhes%20', '_blank')}
          >
            💬 Primeira sessão por metade do valor habitual - Quero agendar minha primeira sessão
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;