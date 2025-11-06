import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Programs = () => {
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
      id="programs"
      ref={ref}
      className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl font-bold mb-8">Program Pemberdayaan</h2>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md border-none overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-lg font-semibold text-primary">
            Pelatihan UMKM
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 space-y-4">
            <p className="font-semibold">Pelatihan UMKM</p>
            <p>Membekali perempuan Gen Z Kalbar dengan keterampilan usaha agar lebih mandiri secara finansial dan kreatif.</p>
            
            <div>
              <p className="font-semibold mb-2">Materi Pelatihan:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Produksi:</strong> Membuat produk atau jasa secara efisien dan berkualitas.</li>
                <li><strong>Pemasaran Digital:</strong> Memasarkan produk melalui media sosial, marketplace, dan strategi online.</li>
                <li><strong>Pengelolaan Keuangan Sederhana:</strong> Mencatat pemasukan dan pengeluaran, menghitung keuntungan, serta merencanakan anggaran usaha.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Tujuan:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Meningkatkan kemandirian ekonomi perempuan.</li>
                <li>Mendorong perempuan menjadi kreatif dan percaya diri dalam membangun usaha.</li>
                <li>Menciptakan dasar yang kuat agar perempuan bisa mengembangkan peluang bisnis sendiri.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Contoh Penerapan:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Membuka toko online atau jasa kreatif.</li>
                <li>Membuat konten promosi di Instagram, TikTok, atau marketplace.</li>
                <li>Mengelola catatan keuangan harian untuk kelancaran usaha.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border-none overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-lg font-semibold text-primary">
            Kelompok Dukungan
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 space-y-4">
            <p className="font-semibold">Ruang Aman & Mentoring</p>
            <p>Menyediakan tempat bagi perempuan Gen Z berbagi pengalaman, mendapatkan mentoring, dan memperkuat jaringan sosial untuk meningkatkan kepercayaan diri.</p>

            <p className="font-semibold">Membuat Algoritma Tanpa Terbawa Algoritma:</p>
            <p>Algoritma media sosial bisa memperkuat stereotip atau bias jika diikuti tanpa berpikir kritis.</p>

            <div>
              <p className="font-semibold mb-2">Strategi SAMARA:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Pahami cara kerja algoritma:</strong> Memahami bahwa algoritma menampilkan konten berdasarkan interaksi sebelumnya, sehingga tidak mudah terpengaruh stereotip.</li>
                <li><strong>Kontrol interaksi digital:</strong> Pilih konten positif dan edukatif, jangan like atau share otomatis.</li>
                <li><strong>Ciptakan konten sendiri:</strong> Buat postingan, video, atau karya digital bernilai positif agar algoritma menampilkanmu sebagai kreator positif.</li>
                <li><strong>Evaluasi dampak digital:</strong> Pastikan konten yang dikonsumsi atau dibuat memperkuat kemandirian, kreativitas, dan pengetahuan.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border-none overflow-hidden">
          <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 text-lg font-semibold text-primary">
            Wanita Harus Tetap Aman
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Keamanan Data:</strong> Jagalah informasi pribadi dengan bijak, buat kata sandi kuat, dan pikirkan sebelum membagikan data online.</li>
              <li><strong>Etika Digital:</strong> Berinteraksilah sopan dan penuh hormat di dunia maya. Gunakan kata-kata membangun.</li>
              <li><strong>Jejak Digital:</strong> Sadari setiap jejak di internet. Atur privasi akun, tinjau konten lama, dan pastikan mencerminkan diri positif.</li>
              <li><strong>Literasi Informasi:</strong> Belajarlah menilai informasi dengan hati-hati, periksa sumber, bandingkan referensi, dan gunakan info terpercaya.</li>
              <li><strong>Kegiatan Kreatif & Positif:</strong> Buat konten edukatif, inspiratif, dan kreatif yang menguatkan diri dan memberi manfaat bagi teman sebaya.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Programs;
