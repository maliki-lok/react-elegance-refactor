import FloatingElements from "@/components/FloatingElements";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ObjectivesCarousel from "@/components/ObjectivesCarousel";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ObjectivesCarousel />
        <About />
        <Programs />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
