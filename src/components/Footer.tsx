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
      <Card className="p-8 md:p-12 bg-gradient-to-br from-white via-white to-secondary/30 shadow-xl card-modern border-0 text-center">
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent relative z-10">
            Dukung SAMARA
          </h3>
          <p className="text-muted-foreground mb-8 text-lg relative z-10 max-w-2xl mx-auto">
            Donasi, relawan, atau kolaborasi sangat membantu kami menjangkau lebih banyak perempuan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
            >
              Donasi
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-pink-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Gabung Sebagai Relawan
            </Button>
          </div>
        </div>
      </Card>
      
      <div className="text-center mt-8 pb-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} WAFIQ AZIZAH SAMARA. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
