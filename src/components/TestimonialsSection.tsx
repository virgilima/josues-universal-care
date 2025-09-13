import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

const testimonials = [
  {
    text: "Excelente escolha, abordagem personalizada, profissional confiável.",
    author: "Edson Lucena"
  },
  {
    text: "Josué Victor é um psicólogo excepcional. Sua competência é evidente em sua abordagem cuidadosa durante os atendimentos, criando um ambiente seguro para a exploração emocional. Sua empatia e habilidades terapêuticas são notáveis, contribuindo significativamente para meu autoconhecimento e desenvolvimento emocional. Recomendo seus serviços a quem busca uma abordagem profissional e acolhedora para o bem-estar psicológico.",
    author: "Vitório Pereira"
  },
  {
    text: "Excelente no que faz. Foram ótimas sessões e me ajudou bastante quando precisei, super atencioso.",
    author: "Wendy Gabriela"
  },
  {
    text: "Me identifiquei de primeira. Tem uma forma de atender muito acertiva, zelosa e com bastante troca. Sempre saio com uma certeza de que valeu a pena o escolher como psicólogo. Tem sido um tempo muito bom 😊",
    author: "Maycon Gustavo"
  },
  {
    text: "Um excelente profissional! Atencioso, cuidadoso nas observações, faz ponderações muito pertinentes. Tenho mais de um ano em atendimento e só tenho a agradecer pelo comprometimento, paciência e acolhimento. Muito obrigada pelo trabalho desenvolvido até aqui, você arrasa!!!",
    author: "Rosana Santos"
  },
  {
    text: "Ótimo profissional, têm me ajudado a recalcular minhas rotas de maneira gentil e muito acolhedora, recomendo!",
    author: "Rafaela Assis"
  },
  {
    text: "O Josué é o melhor terapeuta que já tive, fiz o maior progresso, me fez enxergar coisas que n enxerguei com mais nenhum. Um profissional que n utiliza rótulos e assim te faz enxergar que cada experiência sua vida é única, assim como as reações!",
    author: "Lucas Diogo"
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
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
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