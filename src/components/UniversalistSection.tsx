import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const UniversalistSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useRevealAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useRevealAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useRevealAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useRevealAnimation();
  const { ref: card4Ref, isVisible: card4Visible } = useRevealAnimation();

  return (
    <section id="universalista" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={titleVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Abordagem</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Terapia sem rótulos: a teoria se adapta a você.
          </h2>
        </div>
        
        
        <div className="space-y-6">
          <div 
            ref={card1Ref}
            className={`flex gap-3 items-start ${card1Visible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Integração inteligente</h3>
              <p className="opacity-95">
                Integro técnicas da psicanálise, TCC, humanismo e outras, escolhendo o que melhor 
                funciona para sua história.
              </p>
            </div>
          </div>
          
          <div 
            ref={card2Ref}
            className={`flex gap-3 items-start ${card2Visible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Respeito à singularidade</h3>
              <p className="opacity-95">
                Valorizo sua experiência única, contexto cultural e crenças, em um espaço de 
                escuta ética e profunda.
              </p>
            </div>
          </div>
          
          <div 
            ref={card3Ref}
            className={`flex gap-3 items-start ${card3Visible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Foco nas raízes</h3>
              <p className="opacity-95">
                Não trato apenas sintomas: buscamos as causas emocionais para promover 
                transformação consistente.
              </p>
            </div>
          </div>
          
          <div 
            ref={card4Ref}
            className={`flex gap-3 items-start ${card4Visible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resultados práticos</h3>
              <p className="opacity-95">
                Mudanças reais em sono, energia, comunicação, relações e prosperidade — com 
                aplicação imediata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalistSection;