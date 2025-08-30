import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const specialties = [
  {
    title: "Ansiedade & pânico",
    description: "Técnicas de regulação e reestruturação para reduzir crises e recuperar estabilidade."
  },
  {
    title: "Depressão & desmotivação", 
    description: "Cuidado acolhedor, resgate de sentido e estratégias de ativação comportamental."
  },
  {
    title: "Angústia & vazio",
    description: "Exploração segura das raízes emocionais para construir novos significados."
  },
  {
    title: "Autoestima & confiança",
    description: "Fortalecimento da autoimagem, limites saudáveis e comunicação assertiva."
  },
  {
    title: "Relações familiares",
    description: "Padrões relacionais, cicatrizes emocionais e novas formas de vínculo."
  },
  {
    title: "Travas financeiras",
    description: "Crenças, medos e emoções que bloqueiam prosperidade e realização no trabalho."
  }
];

const SpecialtiesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useRevealAnimation();

  return (
    <section id="especialidades" className="bg-white text-therapy-ink py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={titleVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Especialidades</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Em quais áreas posso te ajudar?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {specialties.map((specialty, index) => {
            const { ref, isVisible } = useRevealAnimation();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`card-therapy-white ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              >
                <h3 className="text-lg font-semibold mb-2 mt-1">{specialty.title}</h3>
                <p className="text-muted-foreground">{specialty.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;