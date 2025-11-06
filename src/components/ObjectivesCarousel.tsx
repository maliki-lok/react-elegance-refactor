import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ObjectivesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const objectives = [
    "Meningkatkan kemampuan perempuan Gen Z dalam mengakses, menilai, dan memanfaatkan informasi digital dengan aman dan efektif.",
    "Mendorong kemandirian sosial dan ekonomi melalui pemahaman digital.",
    "Memberikan keterampilan untuk mengelola identitas digital, keamanan online, dan etika penggunaan media sosial.",
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % objectives.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + objectives.length) % objectives.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
        Tujuan Program SAMARA
      </h2>
      <Card className="max-w-4xl mx-auto p-10 relative bg-gradient-to-br from-white via-white to-secondary/30 shadow-xl card-modern border-0 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="text-center relative z-10">
          <p className="text-xl font-semibold text-foreground min-h-[120px] flex items-center justify-center leading-relaxed px-4">
            {objectives[currentSlide]}
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-8 relative z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            {objectives.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-8 bg-primary shadow-md' : 'w-2 bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default ObjectivesCarousel;
