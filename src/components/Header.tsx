import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Sarana Mandiri Perempuan Kalbar</div>
            <div className="text-xl font-bold text-foreground">SAMARA</div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
            Tentang
          </button>
          <button onClick={() => scrollToSection('programs')} className="text-foreground hover:text-primary transition-colors">
            Program
          </button>
          <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
            Galeri
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
            Kontak
          </button>
          <Button onClick={() => scrollToSection('footer')} variant="default" className="bg-primary hover:bg-primary/90">
            Bergabung
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
