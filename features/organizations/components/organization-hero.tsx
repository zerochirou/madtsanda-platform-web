import Image from "next/image";
import { FadeUp } from "@/components/animation/animations";
import type { OrganizationHeroProps } from "@/types/section-hero";

const toneClass = {
  emerald: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    metric: "text-emerald-300",
    border: "border-emerald-400/25",
  },
  sky: {
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    metric: "text-sky-300",
    border: "border-sky-400/25",
  },
  amber: {
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    metric: "text-amber-300",
    border: "border-amber-400/25",
  },
};

export function OrganizationHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  tone,
  metrics,
}: OrganizationHeroProps) {
  const style = toneClass[tone];

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-38"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/45" />
      </div>

      <div className="relative mx-auto grid min-h-[72vh] max-w-7xl gap-10 px-4 py-28 md:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <FadeUp>
          <div className="max-w-3xl">
            <span
              className={`inline-flex rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] ${style.badge}`}
            >
              {eyebrow}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-normal md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
              {description}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className={`rounded-lg border ${style.border} bg-white/10 p-5 backdrop-blur-md`}
              >
                <div className={`text-3xl font-black ${style.metric}`}>
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-200">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
