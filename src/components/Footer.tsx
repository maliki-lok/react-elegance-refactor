import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

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
    <footer
      id="footer"
      ref={ref}
      className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="p-8 md:p-12 bg-white shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Dukung SAMARA</h3>
        <p className="text-muted-foreground mb-6">
          Donasi, relawan, atau kolaborasi sangat membantu kami menjangkau lebih banyak perempuan.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            Donasi
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Gabung Sebagai Relawan
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} WAFIQ AZIZAH SAMARA. Semua hak cipta dilindungi.
        </p>
      </Card>
    </footer>
  );
};

export default Footer;
