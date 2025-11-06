import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const items = [
    "Klik Anggun, Berkarya Positif",
    "Digital Elegan, Mandiri dan Cerah",
    "Jejakmu, Kilau Kemandirianmu",
    "Ciptakan, Berbagi, Bersinar",
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

  return (
    <section
      id="gallery"
      ref={ref}
      className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
        Recode Kemandirian: Perempuan Gen Z Kalbar Menulis Ulang Kebebasan Digital
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {items.map((item, idx) => (
          <Card 
            key={idx}
            className="group p-6 bg-gradient-to-br from-white to-secondary/30 shadow-lg card-modern border-0 flex items-center justify-center min-h-[180px] text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-semibold text-foreground relative z-10 group-hover:scale-105 transition-transform duration-300">{item}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
