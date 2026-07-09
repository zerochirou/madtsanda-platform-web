"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeLeft } from "@/components/animation/animations";


export const ImageBanner = () => (
  <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/images/kegiatan-sekolah.jpg")' }}
    />
    <div className="relative z-20 h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center">
      <FadeLeft>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl mb-8">
          Lebih Dari<br />Sekadar<br /><span className="text-emerald-400">Madrasah</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-200 max-w-xl mb-10 leading-relaxed font-medium">
          Ini adalah ekosistem para pemikir, kreator, dan inovator berakhlakul karimah. Bergabunglah bersama kami untuk membangun masa depan dengan dukungan fasilitas berstandar nasional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/facilities">
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 py-6 font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-1">
              Jelajahi Lingkungan
            </Button>
          </Link>
          <Link href="/facilities">
            <Button variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full px-8 py-6 font-bold text-base transition-all hover:-translate-y-1">
              Tur Virtual
            </Button>
          </Link>
        </div>
      </FadeLeft>
    </div>
  </section>
);
