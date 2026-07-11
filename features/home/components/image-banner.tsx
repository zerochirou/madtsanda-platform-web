"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeLeft } from "@/components/animation/animations";


export const ImageBanner = () => (
  <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/images/kegiatan-sekolah.jpg")' }}
    />
    <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
      <FadeLeft className="w-full min-w-0">
        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-8 md:text-6xl lg:text-7xl">
          Lebih Dari<br />Sekadar<br /><span className="text-emerald-400">Madrasah</span>
        </h2>
        <p className="mb-8 max-w-xl text-base font-medium leading-relaxed text-zinc-200 md:mb-10 md:text-xl">
          Ini adalah ekosistem para pemikir, kreator, dan inovator berakhlakul karimah. Bergabunglah bersama kami untuk membangun masa depan dengan dukungan fasilitas berstandar nasional.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link href="/facilities">
            <Button className="w-full rounded-full bg-emerald-500 px-6 py-5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-500/40 sm:w-auto sm:px-8 sm:py-6 sm:text-base">
              Jelajahi Lingkungan
            </Button>
          </Link>
          <Link href="/facilities">
            <Button variant="outline" className="w-full rounded-full border-white/30 bg-white/10 px-6 py-5 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-6 sm:text-base">
              Tur Virtual
            </Button>
          </Link>
        </div>
      </FadeLeft>
    </div>
  </section>
);
