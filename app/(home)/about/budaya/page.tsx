import {
  BookOpen,
  Landmark,
  HeartHandshake,
  Clock3,
  Smile,
  PenLine,
  Users,
  Shirt,
  ArrowRight,
} from "lucide-react";
import { budayaPillars, akhlakDetails } from "@/components/data/budaya-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHero, FadeUp } from "@/components/animation/animations";

const akhlakIcons = [Smile, PenLine, Users, Shirt];

export default function BudayaPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      <PageHero
        title="Budaya Madrasah Kami"
        subtitle="Pilar Karakter"
        description="Empat pilar esensial yang berorientasi pada perwujudan karakter siswa yang beraqidah kuat, beribadah benar, berakhlak karimah, disiplin, dan mandiri."
        imageSrc="/images/bg-mts.jpg"
      />

      {/* ==================== BENTO GRID ASIMETRIS ==================== */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 — Aqidah (large) */}
          <FadeUp className="h-full">
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 lg:p-10 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 h-full">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  {budayaPillars[0].title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {budayaPillars[0].description}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Card 2 — Ibadah (large) */}
          <FadeUp delay={0.1} className="h-full">
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 lg:p-10 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 h-full">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-100/50 dark:bg-amber-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  <Landmark className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">
                  {budayaPillars[1].title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {budayaPillars[1].description}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Card 3 — Akhlak Karimah (full width, dark bg) */}
          {/* Card 3 — Grid Akhlak Karimah */}
          <FadeUp delay={0.2} className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-emerald-900 dark:bg-emerald-950 border border-emerald-800 p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_60%)]" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                  <div>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
                      <HeartHandshake className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">
                      {budayaPillars[2].title}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-emerald-100/80">
                      {budayaPillars[2].description}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 text-sm font-semibold text-amber-300">
                    Detail Khusus
                  </div>
                </div>

                {/* Sub-grid: 4 akhlak items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {akhlakDetails.map((item, idx) => {
                    const Icon = akhlakIcons[idx];
                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-emerald-700/40 bg-emerald-950/60 backdrop-blur-sm p-5 hover:border-amber-400/40 hover:bg-emerald-900/60 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-amber-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h4 className="text-sm font-bold text-white">
                            {item.label}
                          </h4>
                        </div>
                        <p className="text-sm leading-relaxed text-emerald-100/70">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Card 4 — Disiplin & Mandiri (medium) */}
          <FadeUp delay={0.3} className="md:col-span-2">
            <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 lg:p-10 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 h-full">
              <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-violet-100/50 dark:bg-violet-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="mb-0 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400">
                  <Clock3 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">
                    {budayaPillars[3].title}
                  </h3>
                  <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    {budayaPillars[3].description}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Ingin mengenal lebih dalam budaya dan nilai-nilai yang kami anut?
          </p>
          <Link href="/about/visi-misi">
            <Button className="mt-8 group h-12 rounded-full bg-emerald-600 px-6 font-bold text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500">
              Lihat Visi & Misi Kami
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
