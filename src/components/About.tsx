import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const About = () => {
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

  return (
    <section
      id="about"
      ref={ref}
      className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="p-8 md:p-12 bg-white shadow-lg card-hover">
        <h2 className="text-3xl font-bold mb-6">Tentang SAMARA</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          SAMARA adalah platform digital buatan mahasiswa kreatif, bertujuan membantu perempuan Gen Z di Kalimantan Barat. Web ini menyediakan edukasi tentang dunia digital, menjelaskan cara kerja algoritma media sosial, serta meningkatkan kreativitas perempuan. SAMARA membangun tempat belajar, berbagi pengalaman, dan membuat konten positif agar perempuan lebih percaya diri dan mandiri di ruang digital.
        </p>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Perempuan memiliki peran penting dalam membangun masyarakat secara sosial, ekonomi, dan budaya. Namun, kenyataannya, perempuan Gen Z di Kalimantan Barat masih menghadapi banyak tantangan dalam mengakses dan menggunakan ruang digital secara efektif. Tingkat literasi digital yang rendah membuat mereka mudah terpengaruh oleh informasi palsu, stereotip gender, serta pengaruh algoritma yang tidak adil.
          </p>
          <p>
            Banyak orang mengira hambatan dalam memperkuat peran perempuan berasal dari sistem patriarki atau dari laki-laki, tetapi di lapangan, banyak perempuan sudah beradaptasi dengan ketimpangan tersebut—mereka merasa "cukup" dengan kondisi yang sebenarnya menghalangi potensi mereka.
          </p>
          <p>
            Melihat situasi ini, diperlukan suatu wadah yang bisa membantu perempuan Gen Z memahami teknologi, mengenali cara kerja media sosial, dan membuat konten yang bermanfaat. <strong className="text-primary">SAMARA (Sarana Mandiri Perempuan Kalbar)</strong> hadir sebagai platform digital yang menyediakan edukasi, ruang diskusi, dan pelatihan kreativitas untuk membantu perempuan menjadi lebih mandiri secara digital.
          </p>
          <p>
            Dengan pendekatan ini, perempuan Gen Z tidak hanya menjadi pengguna teknologi, tetapi juga bisa menjadi pembuat perubahan yang mampu memanfaatkan teknologi untuk belajar, berkarya, dan berpartisipasi aktif dalam masyarakat.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default About;
