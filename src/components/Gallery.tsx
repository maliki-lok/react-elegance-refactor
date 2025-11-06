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
      <h2 className="text-3xl font-bold mb-4">
        Recode Kemandirian: Perempuan Gen Z Kalbar Menulis Ulang Kebebasan Digital
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {items.map((item, idx) => (
          <Card 
            key={idx}
            className="p-6 bg-white shadow-md card-hover flex items-center justify-center min-h-[150px] text-center"
          >
            <p className="font-semibold text-muted-foreground">{item}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
