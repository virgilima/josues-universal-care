import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="wa-float">
      <Button 
        variant="whatsapp" 
        size="therapy"
        className="rounded-2xl"
        onClick={() => window.open('https://wa.me/5531999999999?text=Olá%2C%20Josué%2C%20quero%20agendar%20uma%20sessão.', '_blank')}
        aria-label="Agendar pelo WhatsApp"
      >
        💬 Agendar
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;