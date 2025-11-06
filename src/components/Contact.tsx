import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="p-8 md:p-12 bg-gradient-to-br from-white via-white to-secondary/30 shadow-xl card-modern border-0">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
          SAMARA TALKS
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <Input 
              placeholder="Nama" 
              required 
              className="border-border/50 focus:border-primary transition-colors bg-white/50"
            />
            <Input 
              type="email" 
              placeholder="Email" 
              required 
              className="border-border/50 focus:border-primary transition-colors bg-white/50"
            />
          </div>
          <Input 
            placeholder="Subjek" 
            required 
            className="border-border/50 focus:border-primary transition-colors bg-white/50"
          />
          <Textarea 
            placeholder="Pesan..." 
            rows={5} 
            required 
            className="resize-none border-border/50 focus:border-primary transition-colors bg-white/50"
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-pink-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold"
            size="lg"
          >
            Kirim Pesan
          </Button>
        </form>
        <div className="mt-6 space-y-1 text-sm text-muted-foreground">
          <p>Alamat: Universitas Tanjungpura, Pontianak — Kalbar</p>
          <p>Email: SAMARA@GMAIL.COM</p>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
