import React from "react";
import { PageHero, FadeUp } from "@/components/animation/animations";
import { Button } from "@/components/ui/button";
import { programsData } from "@/components/data/programs";
import Image from "next/image";
import { ProgramSheet } from "@/components/shared/program-sheet";

export default function Programs() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero
        title="Program Kelas"
        subtitle="Akademik Unggulan"
        description="Temukan berbagai program kelas unggulan yang dirancang untuk membekali siswa dengan pengetahuan, keterampilan, dan karakter Islami."
        imageSrc="/images/kegiatan-tka.jpg"
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Program Kelas Madtsanda
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Pilih program kelas yang sesuai dengan minat dan potensi untuk
              masa depan yang gemilang.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {programsData.map((prog, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="container rounded-3xl p-8 border border-dashed hover:-translate-y-2 transition-all duration-300 group">
                <div className="mt-6 px-4 group-hover:rotate-3 grayscale-100 group-hover:grayscale-0 transition-all flex flex-col items-center duration-500 hover:scale-110">
                  <Image
                    src={prog.icon}
                    width={200}
                    height={200}
                    alt={prog.title}
                  />
                  {/*<prog.icon className="w-8 h-8 stroke-1" />*/}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                  {prog.school}
                </p>
                <ProgramSheet mdx={prog.content} title={prog.title} />
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
