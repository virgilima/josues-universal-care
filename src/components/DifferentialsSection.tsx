import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const differentials = [
  {
    title: "Resultados práticos de vida",
    description: "Mais energia, sono melhor, autoconfiança renovada, relações mais leves e desbloqueios financeiros."
  },
  {
    title: "Travas financeiras",
    description: "Tratamos crenças emocionais sobre prosperidade e trabalho, indo além do óbvio."
  },
  {
    title: "Interculturalidade",
    description: "Compreensão sensível das influências culturais/espirituais em sua saúde mental — sem julgamentos."
  }
];

const DifferentialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useRevealAnimation();

  return (
    <section id="diferenciais" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={titleVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Diferenciais</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O que você só encontra aqui
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {differentials.map((differential, index) => {
            const { ref, isVisible } = useRevealAnimation();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`card-therapy ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
              >
                <h3 className="text-xl font-semibold mb-2">{differential.title}</h3>
                <p className="opacity-95">{differential.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;