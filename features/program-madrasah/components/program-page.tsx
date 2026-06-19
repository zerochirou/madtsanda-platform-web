import Image from "next/image";
import { FadeUp } from "@/components/animation/animations";
import type { ProgramMadrasahPageData } from "@/types/program-madrasah";
import { ProgramHero } from "./program-hero";

export function ProgramMadrasahPage({
  data,
}: {
  data: ProgramMadrasahPageData;
}) {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <ProgramHero data={data} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <FadeUp>
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="relative aspect-[16/10]">
              <Image
                src={data.imageSrc}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
                  MTsN 2 Kota Kediri
                </p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid content-start gap-4">
          {data.metrics.map((metric, index) => (
            <FadeUp key={metric.label} delay={index * 0.08}>
              <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                  {metric.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:px-6 lg:grid-cols-3">
          {data.highlights.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {data.sections.map((section, index) => (
            <FadeUp key={section.title} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 md:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {section.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
