"use client";

import React from "react";
import Image from "next/image";
import { FadeLeft } from "@/components/animation/animations";

export const Testimonial = () => (
  <section className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="bg-emerald-500 dark:bg-emerald-600 rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:grid lg:grid-cols-2 shadow-2xl">
        <FadeLeft className="p-10 md:p-16 lg:p-24 order-2 lg:order-1 flex flex-col justify-center">
          <p className="text-emerald-950 font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-emerald-950"></span>
            Testimoni
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 lg:mb-12">
            Apa Kata<br className="hidden md:block" />Mereka<br />Tentang Kami
          </h2>
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-6xl text-emerald-700/30 font-serif leading-none">&quot;</span>
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-10 leading-relaxed relative z-10 italic">
              Masuk kelas PDCI (Peserta Didik Cerdas Istimewa) melatih saya untuk disiplin, kompetitif, dan berprestasi. Bekal akademik dan spiritual dari Madtsanda sangat membantu saya saat melanjutkan pendidikan ke tingkat selanjutnya.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-xl">N</div>
            <div>
              <p className="font-bold text-white text-lg">Nisa & Keluarga</p>
              <p className="text-emerald-100 text-sm">Alumni Program Akselerasi (PDCI)</p>
            </div>
          </div>
        </FadeLeft>
        <div className="relative h-80 md:h-125 lg:h-auto w-full order-1 lg:order-2 overflow-hidden">
          <Image src="/images/testimoni-alumni.jpg" alt="Alumni MTsN 2 Kota Kediri" className="object-cover object-top hover:scale-105 transition-transform duration-1000" fill sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply"></div>
        </div>
      </div>
    </div>
  </section>
);

