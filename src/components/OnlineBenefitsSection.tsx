import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const benefits = [
  {
    title: "Conforto",
    description: "Sessões no seu espaço, com privacidade."
  },
  {
    title: "Sigilo",
    description: "Conforme normas do CFP."
  },
  {
    title: "Flexibilidade", 
    description: "Horários combinados com você."
  },
  {
    title: "Acessível",
    description: "Atendimento de qualquer lugar do Brasil."
  }
];

const OnlineBenefitsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useRevealAnimation();

  return (
    <section className="bg-white text-therapy-ink py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={titleVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Online</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Mais comodidade, mais privacidade, mais acessibilidade.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const { ref, isVisible } = useRevealAnimation();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`card-therapy-white ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              >
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnlineBenefitsSection;