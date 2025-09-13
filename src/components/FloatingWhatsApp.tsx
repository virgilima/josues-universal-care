import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="wa-float">
      <Button 
        variant="whatsapp" 
        size="therapy"
        className="rounded-2xl"
        onClick={() => window.open('https://wa.me/5531985961903?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20mais%20detalhes%20', '_blank')}
        aria-label="Agendar pelo WhatsApp"
      >
        💬 Agendar
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;