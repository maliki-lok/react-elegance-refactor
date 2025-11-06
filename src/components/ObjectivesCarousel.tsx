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
      <h2 className="text-3xl font-bold text-center mb-8">Tujuan Program SAMARA</h2>
      <Card className="max-w-4xl mx-auto p-8 relative bg-white shadow-lg card-hover">
        <div className="text-center">
          <p className="text-lg font-semibold text-primary min-h-[100px] flex items-center justify-center">
            {objectives[currentSlide]}
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            {objectives.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default ObjectivesCarousel;
