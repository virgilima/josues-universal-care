import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary-light text-white py-10 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
          <div>
            <div className="font-semibold mb-1">
              Josué Victor de Sousa Santos — Psicólogo Clínico
            </div>
            <div className="mb-2">
              CRP 04/69208 • Atendimento 100% online
            </div>
            <div className="text-sm opacity-70">
              O atendimento psicológico online segue as normas do Conselho Federal de Psicologia (CFP).
            </div>
          </div>
          <div>
            <Button 
              variant="ghost-therapy" 
              size="therapy"
              onClick={() => window.open('mailto:contato@josuepsicologia.com.br', '_blank')}
            >
              contato@josuepsicologia.com.br
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;