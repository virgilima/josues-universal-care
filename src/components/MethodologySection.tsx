import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const steps = [
  {
    number: "1",
    title: "Escuta",
    description: "Você fala, eu escuto sem julgamentos. Construímos confiança e clareza."
  },
  {
    number: "2", 
    title: "Raiz",
    description: "Identificamos o que está por trás dos sintomas e repetição de padrões."
  },
  {
    number: "3",
    title: "Estratégia", 
    description: "Plano terapêutico com técnicas adequadas ao seu caso e sua fase."
  },
  {
    number: "4",
    title: "Aplicação",
    description: "Ferramentas práticas para mudanças reais no cotidiano."
  }
];

const MethodologySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useRevealAnimation();

  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={titleVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Como funciona</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Um caminho claro para sua transformação
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const { ref, isVisible } = useRevealAnimation();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`card-therapy ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{step.number}) {step.title}</h3>
                <p className="opacity-95">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;