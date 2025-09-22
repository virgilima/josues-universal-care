import { Button } from "@/components/ui/button";
import logoJosue from "@/assets/logo-josue-removebg-preview.png";

const TherapyNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="therapy-nav">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3.5">
          <a 
            href="#top" 
            className="flex items-center gap-3 text-white no-underline"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src={logoJosue} 
              alt="Josué Victor - Psicologia" 
              className="h-24 w-auto"
            />
          </a>
          
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white opacity-90 hover:opacity-100 ml-5 font-medium transition-opacity"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-white opacity-90 hover:opacity-100 ml-5 font-medium transition-opacity"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('especialidades')}
              className="text-white opacity-90 hover:opacity-100 ml-5 font-medium transition-opacity"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-white opacity-90 hover:opacity-100 ml-5 font-medium transition-opacity"
            >
              Depoimentos
            </button>
            <Button 
              variant="whatsapp" 
              size="therapy"
              className="ml-5"
              onClick={() => window.open('https://wa.me/5531985961903', '_blank')}
            >
              Agendar
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TherapyNavigation;