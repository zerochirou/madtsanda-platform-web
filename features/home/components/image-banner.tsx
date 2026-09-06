"use client";

import Link from "next/link";

import { FadeLeft } from "@/components/animation/animations";
import { Button } from "@/components/ui/button";

export const ImageBanner = () => {
  return (
    <section className="relative flex min-h-[620px] w-full items-center overflow-hidden py-14 sm:min-h-[680px] sm:py-16 md:min-h-[80vh] md:py-20">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 sm:bg-black/45" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: 'url("/images/kegiatan-sekolah.jpg")',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6">
        <FadeLeft>
          <div className="max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold leading-[1.05] tracking-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:mb-8 lg:text-7xl">
              <span className="block">Lebih Dari</span>
              <span className="block">Sekadar</span>
              <span className="block text-emerald-400">
                Madrasah
              </span>
            </h2>

            <p className="mb-7 max-w-xl text-sm font-medium leading-6 text-zinc-200 sm:mb-8 sm:text-base sm:leading-7 md:mb-10 md:text-lg lg:text-xl lg:leading-relaxed">
              Ini adalah ekosistem para pemikir, kreator, dan inovator
              berakhlakul karimah. Bergabunglah bersama kami untuk
              membangun masa depan dengan dukungan fasilitas berstandar
              nasional.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Button
                asChild
                className="h-12 w-full rounded-full bg-emerald-500 px-6 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-500/40 sm:w-auto sm:px-8 sm:text-base"
              >
                <Link href="/facilities">
                  Jelajahi Lingkungan
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-full border-white/30 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/20 hover:text-white sm:w-auto sm:px-8 sm:text-base"
              >
                <Link href="/about/galeri">
                  Tur Virtual
                </Link>
              </Button>
            </div>
          </div>
        </FadeLeft>
      </div>
    </section>
  );
};
