"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { FadeUp } from "@/components/animation/animations";
import { reviewsData } from "@/components/data/testimonials";
import Image from "next/image";
import type { Review } from "@/types/testimonial";

const firstRow = reviewsData.slice(0, Math.ceil(reviewsData.length / 2));
const secondRow = reviewsData.slice(Math.ceil(reviewsData.length / 2));

const roleColorMap: Record<string, string> = {
  Murid: "text-emerald-600 dark:text-emerald-400",
  Siswi: "text-emerald-600 dark:text-emerald-400",
  Alumni: "text-blue-600 dark:text-blue-400",
  "Orang Tua": "text-amber-600 dark:text-amber-400",
  Guru: "text-violet-600 dark:text-violet-400",
  Ustadzah: "text-violet-600 dark:text-violet-400",
};

function getRoleColor(role: string): string {
  for (const [key, value] of Object.entries(roleColorMap)) {
    if (role.includes(key)) return value;
  }
  return "text-zinc-500 dark:text-zinc-400";
}

const ReviewCard = ({ name, role, body, img }: Review) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-5",
        "border-zinc-200 bg-white hover:border-emerald-200 hover:shadow-md",
        "dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800",
        "transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full ring-2 ring-emerald-100 dark:ring-emerald-900"
          width={40}
          height={40}
          alt={name}
          src={img}
          unoptimized
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-zinc-900 dark:text-white">
            {name}
          </figcaption>
          <p className={cn("text-xs font-medium", getRoleColor(role))}>
            {role}
          </p>
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
};

export const Testimonial = () => (
  <section className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Section Header */}
      <FadeUp className="text-center mb-12">
        <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-emerald-500" />
          Testimoni
          <span className="h-px w-8 bg-emerald-500" />
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter">
          Apa Kata Mereka
        </h2>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Cerita dan pengalaman dari murid, alumni, orang tua, dan guru yang
          menjadi bagian dari keluarga besar Madtsanda.
        </p>
      </FadeUp>
    </div>

    {/* Marquee */}
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-zinc-50 dark:from-zinc-950 pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r" />
      <div className="from-zinc-50 dark:from-zinc-950 pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l" />
    </div>
  </section>
);
