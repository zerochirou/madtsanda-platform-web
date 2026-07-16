import Image from "next/image";
import { PageHero, FadeUp, ScaleIn } from "@/components/animation/animations";

export default function CampusPage() {
  const facilities = [
    { name: "Perpustakaan", img: "/images/perpustakaan.jpg" },
    { name: "Laboratorium", img: "/images/kegiatan-sekolah.jpg" },
    { name: "Graha Paseban", img: "/images/paseban-1.JPG" },
    { name: "Asrama Al-Azhar", img: "/images/mahad-alazhar.jpg" },
    { name: "Paseban 2", img: "/images/paseban-2.jpg" },
    { name: "Kantin", img: "/images/kantin.jpg" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero 
        title="Lingkungan Madrasah" 
        subtitle="Fasilitas & Kampus" 
        description="Lingkungan belajar yang asri, modern, dan bernuansa Islami. Jelajahi fasilitas yang mendukung pengembangan diri murid."
        imageSrc="/images/paseban-1.JPG"
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Fasilitas Utama</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">Infrastruktur terbaik yang dirancang untuk memfasilitasi inovasi, kolaborasi, dan prestasi murid.</p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {facilities.map((fac, idx) => (
            <ScaleIn key={idx} delay={idx * 0.1}>
              <div className="group relative rounded-3xl overflow-hidden h-[300px] lg:h-[400px] shadow-2xl">
                <Image 
                  src={fac.img} 
                  alt={fac.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{fac.name}</h3>
                  <div className="h-1 w-12 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 origin-left transition-transform duration-500 delay-100"></div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>
    </div>
  );
}
