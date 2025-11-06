import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      className={`container mx-auto px-4 py-16 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Menumbuhkan Kekuatan, <span className="text-primary">Mewujudkan Perubahan</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        SAMARA adalah sarana pemberdayaan perempuan Gen Z Kalbar, mendukung pendidikan, keterampilan digital, dan jejaring komunitas agar perempuan lebih percaya diri dan mandiri.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          onClick={() => scrollToSection('programs')}
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white font-semibold"
        >
          Lihat Program
        </Button>
        <Button 
          onClick={() => scrollToSection('about')}
          size="lg" 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary/5"
        >
          Pelajari Lebih
        </Button>
      </div>
    </section>
  );
};

export default Hero;
