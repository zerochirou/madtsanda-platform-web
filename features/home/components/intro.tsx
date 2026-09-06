"use client";

import { motion } from "motion/react";
import { Award, CheckCircle2, Clock, GraduationCap, Ruler, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { NumberTicker } from "@/components/ui/number-ticker";
import { introStats } from "@/components/data/intro-stats";

import { medsos } from "@/components/data/medsos";
import { Card } from "@/components/ui";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const iconMap = [Clock, GraduationCap, Ruler, Users];

export function PopupProgramUnggulan({ children }: { children: React.ReactNode }) {
  const programs = [
    "Smart Islamic School",
    "Madrasah Unggulan Akademik",
    "Madrasah Riset",
    "Madrasah Wasatiyah",
    "Madrasah Literasi",
    "Madrasah Siaga Kependudukan",
    "Madrasah Sehat / UKS",
    "Madrasah Ramah Anak",
    "Layanan Belajar Siswa Cerdas Istimewa",
    "Madrasah Zona Integritas (ZI)",
    "Madrasah Adiwiyata",
    "Madrasah Pengembang Bimbingan Baca Kitab Kuning",
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl max-h-[85vh] flex flex-col">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            <Award className="h-5 w-5 text-amber-500" />
            Program Unggulan Madrasah
          </DialogTitle>
          <DialogDescription>
            Berikut adalah daftar program unggulan yang diselenggarakan oleh madrasah.
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Container untuk menjaga modal tetap muat di layar HP */}
        <div className="overflow-y-auto pr-1 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {programs.map((program, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg border bg-muted/40 hover:bg-muted/80 hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-tight">
                  {program}
                </span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const Intro = () => {
  return (
    <section className=" border-zinc-200 bg-zinc-50 pt-12 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950 sm:py-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-500 sm:mb-4 sm:text-sm sm:tracking-widest">
            Madrasah Adiwiyata Nasional
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl lg:tracking-tighter">
            MTsN 2 Kota Kediri dalam Angka
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-base sm:leading-relaxed">
            Sejarah panjang prestasi dan dedikasi MTsN 2 Kota Kediri dalam
            mewujudkan pendidikan berkualitas tinggi berbasis karakter Islami,
            kelestarian lingkungan, dan keunggulan akademik global.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {introStats.map((stat, index) => {
            const Icon = iconMap[index];

            if (!stat.isPopup) {
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-center transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 sm:rounded-2xl sm:p-6 lg:p-8"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-900 sm:size-14">
                    <Icon className="size-6 sm:size-7" aria-hidden="true" />
                  </div>

                  {/* Counter */}
                  <div className="mb-2 flex items-baseline justify-center gap-0.5">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl lg:tracking-tighter">
                      <NumberTicker
                        // decimalPlaces={3}
                        value={stat.value}
                        className="text-zinc-900 dark:text-white"
                      />
                    </span>

                    {stat.suffix && (
                      <span className="text-xl font-bold tracking-tight text-emerald-500 sm:text-2xl lg:text-3xl">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200 sm:text-base">
                    {stat.label}
                  </p>

                  <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400 sm:text-sm sm:leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-500 group-hover:w-16" />
                </motion.div>
              );
            }
            return (
              <PopupProgramUnggulan key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-center transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 sm:rounded-2xl sm:p-6 lg:p-8"
                  // onClick={stat.isPopup}
                >
                  {/* Icon */}
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-900 sm:size-14">
                    <Icon className="size-6 sm:size-7" aria-hidden="true" />
                  </div>

                  {/* Counter */}
                  <div className="mb-2 flex items-baseline justify-center gap-0.5">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl lg:tracking-tighter">
                      <NumberTicker
                        // decimalPlaces={3}
                        value={stat.value}
                        className="text-zinc-900 dark:text-white"
                      />
                    </span>

                    {stat.suffix && (
                      <span className="text-xl font-bold tracking-tight text-emerald-500 sm:text-2xl lg:text-3xl">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="mb-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200 sm:text-base">
                    {stat.label}
                  </p>

                  <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400 sm:text-sm sm:leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-emerald-500 transition-all duration-500 group-hover:w-16" />
                </motion.div>
              </PopupProgramUnggulan>
            );
          })}
        </div>

        {/* ISTIKOMAH tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-10 text-center sm:mt-12"
        >
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 dark:border-emerald-800 dark:bg-emerald-950/50 sm:w-auto sm:flex-row sm:justify-center sm:gap-3 sm:rounded-full sm:px-6 sm:py-3">
            <span className="text-xs font-bold uppercase tracking-[2px] text-emerald-600 dark:text-emerald-400 sm:text-sm sm:tracking-[3px]">
              ISTIKOMAH
            </span>

            <span className="h-px w-10 bg-emerald-300 dark:bg-emerald-700 sm:h-4 sm:w-px" />

            <span className="text-xs leading-5 text-zinc-600 dark:text-zinc-400 sm:text-sm">
              Islami · Terampil · Inovatif · Kompetitif · Berakhlakul Karimah
            </span>
          </div>
        </motion.div>
      </div>
      <div className="relative mt-10 flex mb-20 items-center justify-center overflow-hidden px-4 py-2">
        <div className="grid w-full max-w-6xl grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {medsos.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-border/50 bg-background/70 p-0 backdrop-blur-xl transition-all duration-300 hover:border-foreground/20 hover:shadow-xl">
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-400" />
  
                <div className="relative flex min-h-[20px] flex-col justify-between p-5">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/50 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={`/icons/${item.svg}`}
                        width={26}
                        height={26}
                        alt=""
                        className="object-contain"
                      />
                    </div>
  
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/50 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
  
                  {/* Text */}
                  <div className="mt-8">
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.name}
                    </h3>
  
                    <p className="mt-1 text-sm text-muted-foreground">
                      Follow us on {item.name}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
