"use client";

import { motion } from "motion/react";
import {
  Clock,
  GraduationCap,
  Ruler,
  Users,
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { introStats } from "@/components/data/intro-stats";

const iconMap = [Clock, GraduationCap, Ruler, Users];

export const Intro = () => {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4">
            Madrasah Adiwiyata Nasional
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter">
            MTsN 2 Kota Kediri dalam Angka
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Sejarah panjang prestasi dan dedikasi MTsN 2 Kota Kediri dalam mewujudkan pendidikan berkualitas tinggi berbasis karakter Islami, kelestarian lingkungan, dan keunggulan akademik global.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {introStats.map((stat, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group relative text-center p-6 lg:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 transition-colors group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Counter */}
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span className="text-4xl lg:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                    <NumberTicker
                      value={stat.value}
                      className="dark:text-white"
                    />
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl lg:text-3xl font-bold text-emerald-500 tracking-tight">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-16 bg-emerald-500 rounded-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* ISTIKOMAH tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 px-6 py-3">
            <span className="text-sm font-bold tracking-[3px] text-emerald-600 dark:text-emerald-400 uppercase">
              ISTIKOMAH
            </span>
            <span className="h-4 w-px bg-emerald-300 dark:bg-emerald-700" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Islami · Terampil · Inovatif · Kompetitif · Berakhlakul Karimah
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
