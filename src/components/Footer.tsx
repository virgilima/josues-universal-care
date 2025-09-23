import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-light text-white py-10 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
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
          <div className="text-center md:text-right">
            <div className="text-sm mb-3 opacity-80">Me siga nas redes sociais</div>
            <div className="flex gap-3 justify-center md:justify-end">
              <Button
                variant="ghost-therapy"
                size="sm"
                onClick={() => window.open('https://instagram.com/josue.psi', '_blank')}
                className="p-2"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost-therapy"
                size="sm"
                onClick={() => window.open('https://www.youtube.com/@josue.psicologo', '_blank')}
                className="p-2"
              >
                <Youtube size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;