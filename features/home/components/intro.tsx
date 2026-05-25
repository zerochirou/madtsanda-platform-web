"use client";

import { FadeLeft, FadeRight } from "@/components/animation/animations";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export const Intro = () => {
  const { theme } = useTheme();
  return (
    <section className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 lg:gap-20">
        <FadeLeft>
          <motion.div>
            <DiaTextReveal
              text="MTsN 2 Kota Kediri Madrasah Adiwiyata Nasional"
              repeatDelay={0.5}
              once={false}
              colors={["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]}
              textColor={theme === "dark" || theme === "system" ? "#fff" : "#000"}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight"
            />
          </motion.div>
          <div className="mt-10 lg:mt-14 space-y-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <p>Sejak tahun 1978</p>
            </div>
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <p>4 Program Kelas Unggulan</p>
            </div>
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <p>Fasilitas Ma&apos;had Al-Azhar</p>
            </div>
          </div>
        </FadeLeft>
        <FadeRight delay={0.2} className="flex flex-col justify-center">
          <DiaTextReveal
            text="MTsN 2 Kota Kediri (Madtsanda) merupakan madrasah tsanawiyah negeri unggulan yang mengedepankan pendidikan berbasis riset, penguatan akhlakul karimah, serta kepedulian terhadap lingkungan melalui program Adiwiyata."
            repeatDelay={0.5}
            once={false}
            textColor={theme === "dark" || theme === "system" ? "#fff" : "#000"}
            colors={["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 font-medium"
          />
          <DiaTextReveal
            text="Berakar pada nilai-nilai agama Islam, empati, dan intelektualitas,
          kami mempersiapkan generasi yang tidak hanya unggul dalam ilmu
          pengetahuan dan teknologi, tetapi juga memiliki karakter yang mulia
          (ISTIKOMAH)."
            repeatDelay={0.5}
            once={false}
            textColor={theme === "dark" || "system" ? "#fff" : "#000"}
            colors={["#c679c4", "#fa3d1d", "#ffb005", "#e1e1fe", "#0358f7"]}
            className="text-lg md:text-xl text-zinc-600 opacity-60 dark:text-zinc-400 leading-relaxed mb-8 font-medium"
          />
        </FadeRight>
      </div>
    </section>
  );
};
