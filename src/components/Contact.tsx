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
      <Card className="p-8 md:p-12 bg-white shadow-lg card-hover">
        <h2 className="text-3xl font-bold mb-6">SAMARA TALKS</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Nama" required />
            <Input type="email" placeholder="Email" required />
          </div>
          <Input placeholder="Subjek" required />
          <Textarea 
            placeholder="Pesan..." 
            rows={4} 
            required 
            className="resize-none"
          />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 font-semibold"
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
