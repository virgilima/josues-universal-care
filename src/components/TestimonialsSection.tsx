import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const testimonials = [
  {
    text: "O Josué me ajudou a lidar com a ansiedade de um jeito que eu nunca tinha experimentado. Sinto-me mais estável e confiante.",
    author: "R. A."
  },
  {
    text: "Me senti acolhida desde a primeira sessão. A conversa foi um divisor de águas para mim.",
    author: "M. S."
  },
  {
    text: "A abordagem universalista é diferente de tudo que já conheci. Simples, respeitosa e eficaz.",
    author: "C. P."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isVisible: sectionVisible } = useRevealAnimation();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={sectionVisible ? 'reveal-visible' : 'reveal-hidden'}
        >
          <div className="text-accent font-semibold tracking-wide mb-2">Depoimentos</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O que dizem os pacientes
          </h2>
        </div>
        
        <div className="relative bg-gradient-to-b from-white/4 to-white/2 border border-accent/25 rounded-3xl overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <article key={index} className="min-w-full p-8">
                <p className="text-lg md:text-xl mb-3">"{testimonial.text}"</p>
                <div className="text-accent font-semibold opacity-85">
                  — {testimonial.author}
                </div>
              </article>
            ))}
          </div>
          
          <div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
            <Button
              variant="ghost-therapy"
              size="sm"
              onClick={goToPrevious}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost-therapy"
              size="sm"
              onClick={goToNext}
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-white/35'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;