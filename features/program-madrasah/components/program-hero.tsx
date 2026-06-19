import Image from "next/image";
import { FadeUp } from "@/components/animation/animations";
import type { ProgramMadrasahPageData } from "@/types/program-madrasah";

const toneBySlug = {
  kurikulum: {
    frame: "from-emerald-600 to-teal-700",
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  kesiswaan: {
    frame: "from-sky-600 to-cyan-700",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    accent: "text-sky-600 dark:text-sky-400",
  },
  humas: {
    frame: "from-amber-500 to-orange-700",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    accent: "text-amber-600 dark:text-amber-400",
  },
  "sarana-prasarana": {
    frame: "from-violet-600 to-indigo-700",
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
    accent: "text-violet-600 dark:text-violet-400",
  },
};

export function ProgramHero({ data }: { data: ProgramMadrasahPageData }) {
  const tone =
    toneBySlug[data.slug as keyof typeof toneBySlug] ?? toneBySlug.kurikulum;

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={data.imageSrc}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/88 to-zinc-950/35" />
      </div>

      <div className="relative mx-auto grid min-h-[76vh] max-w-7xl gap-10 px-4 py-28 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <FadeUp>
          <div className="max-w-3xl">
            <span
              className={`inline-flex rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] ${tone.badge}`}
            >
              {data.subtitle}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-normal md:text-7xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              {data.description}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="grid gap-4">
            <div
              className={`rounded-lg bg-linear-to-br ${tone.frame} p-1 shadow-2xl shadow-black/30`}
            >
              <div className="rounded-md bg-white/12 p-6 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                  Fokus Bidang
                </p>
                <h2 className="mt-3 text-3xl font-black">{data.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  Program dirancang sebagai halaman kerja nyata, bukan dokumen
                  statis, agar warga madrasah mudah memahami arah layanan.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {data.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                >
                  <div className={`text-2xl font-black ${tone.accent}`}>
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-zinc-300">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
