"use client"

import { PageHero, FadeUp } from "@/components/animation/animations";
import { programsData } from "@/components/data/programs";
import { ProgramSheet } from "@/components/shared/program-sheet";

export default function Programs() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero
        title="Program Kelas"
        subtitle="Akademik Unggulan"
        description="Temukan berbagai program kelas unggulan yang dirancang untuk membekali murid dengan pengetahuan, keterampilan, dan karakter Islami."
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
              <ProgramSheet mdx={prog.content} title={prog.title}>
                <div className="container cursor-pointer rounded-3xl p-8 border border-dashed hover:-translate-y-2 transition-all duration-300 group">
                  <div className={`mt-6 flex flex-col items-center justify-center py-8 rounded-2xl bg-linear-to-br ${prog.gradient} group-hover:scale-105 transition-all duration-500`}>
                    <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                      <prog.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                    {prog.school}
                  </p>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 font-bold group-hover:text-emerald-500 transition-colors group-hover:underline decoration-2 underline-offset-4">
                    Lihat detail program →
                  </span>
                </div>
              </ProgramSheet>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
