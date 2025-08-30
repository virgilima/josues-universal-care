import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useRevealAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useRevealAnimation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="bg-white text-therapy-ink py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            ref={leftRef}
            className={leftVisible ? 'reveal-visible' : 'reveal-hidden'}
          >
            <div className="text-accent font-semibold tracking-wide mb-2">Quem é Josué</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escuta profunda, visão ampla e prática baseada em evidências.
            </h2>
            <p className="text-lg opacity-95 mb-4">
              Sou <strong>Josué Victor de Sousa Santos</strong> (<strong>CRP 04/69208</strong>). 
              Psicólogo clínico pós-graduado em Psicologia Clínica, Psicologia Organizacional e 
              Psicologia Escolar. Minha missão é oferecer uma escuta acolhedora e ética, utilizando 
              uma abordagem única: a <strong>Psicologia Universalista</strong>. Com ela, integro 
              técnicas de diferentes linhas (psicanálise, TCC, humanista, entre outras) às{' '}
              <em>suas</em> necessidades, para que a terapia se adapte a você — e não o contrário.
            </p>
            <div className="section-divider"></div>
            <p className="text-lg opacity-95 mb-6">
              Atendimento 100% online, com foco em mudanças reais no cotidiano: sono, energia, 
              autoconfiança, comunicação, relações pessoais e <strong>desbloqueios financeiros</strong>.
            </p>
            <Button 
              variant="whatsapp" 
              size="therapy"
              onClick={() => scrollToSection('agendar')}
            >
              Agendar primeira sessão
            </Button>
          </div>
          
          <div 
            ref={rightRef}
            className={rightVisible ? 'reveal-visible' : 'reveal-hidden'}
          >
            <div className="card-therapy-white">
              <div className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-accent/35 bg-accent/8 mb-3">
                ✔️ Primeira sessão de acolhimento
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-3">
                Como é a primeira conversa?
              </h3>
              <p className="text-muted-foreground mb-4">
                Um encontro para compreender sua história, mapear necessidades e definir um 
                caminho terapêutico sob medida. Sem rótulos. Sem julgamentos.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent my-4"></div>
              
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Flexível:</strong> horários e frequência combinados conforme sua rotina.
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Sigiloso:</strong> atendimento conforme as normas do CFP.
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Pragmático:</strong> foco em resultados aplicáveis no dia a dia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;