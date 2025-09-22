import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <div className="wa-float">
      <Button 
        variant="whatsapp" 
        size="therapy"
        className="rounded-2xl"
        onClick={() => window.open('https://wa.me/5531985961903', '_blank')}
        aria-label="Agendar pelo WhatsApp"
      >
        💬 Agendar
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;