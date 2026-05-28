"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  Clock,
  GraduationCap,
  Home,
  FlaskConical,
  Heart,
  Leaf,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

export const Intro = () => {
  const features = [
    {
      title: "Sejak 1978",
      description:
        "Telah berdiri dan berkembang selama lebih dari 45 tahun sebagai madrasah unggulan.",
      icon: Clock, // Menggantikan 🕒
    },
    {
      title: "4 Program Kelas Unggulan",
      description:
        "Program unggulan yang dirancang untuk mengembangkan potensi siswa secara optimal.",
      icon: GraduationCap, // Menggantikan 🎓
    },
    {
      title: "Fasilitas Ma'had Al-Azhar",
      description:
        "Dukungan fasilitas asrama modern untuk pembinaan karakter dan keilmuan.",
      icon: Home, // Menggantikan 🏛️ (Home/Hotel lebih cocok untuk konsep Asrama/Ma'had)
    },
    {
      title: "Pendidikan Berbasis Riset",
      description:
        "Mengutamakan pendekatan riset, inovasi, dan pengembangan ilmu pengetahuan.",
      icon: FlaskConical, // Menggantikan 🔬
    },
    {
      title: "Akhlakul Karimah",
      description:
        "Penguatan karakter mulia, empati, dan nilai-nilai keislaman dalam kehidupan sehari-hari.",
      icon: Heart, // Menggantikan 🌿 (Heart melambangkan ketulusan dan akhlak)
    },
    {
      title: "Madrasah Adiwiyata",
      description:
        "Kepedulian tinggi terhadap lingkungan melalui program Adiwiyata Nasional.",
      icon: Leaf, // Menggantikan 🌍 (Leaf/Daun sangat identik dengan Adiwiyata/Hijau)
    },
  ];

  return (
    <section className="pt-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter"
          >
            MTsN 2 Kota Kediri
          </motion.h2>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Madrasah Adiwiyata Nasional
          </p>
        </div>

        {/* Feature Grid - ala Next.js */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative w-full overflow-hidden group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm flex flex-col"
            >
              <BorderBeam
                duration={10 + index * 2}
                size={100}
                className="from-transparent via-emerald-500 to-transparent"
              />
              <div className="text-4xl mb-6 opacity-80 transition-transform duration-300">
                <feature.icon />
              </div>

              <h3 className="font-semibold text-xl text-zinc-900 dark:text-white tracking-tight mb-3">
                {feature.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed flex-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Card (seperti card Next.js 16) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden mt-2 rounded-xl border bg-white dark:bg-zinc-900 p-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <ShineBorder shineColor={["#34d399", "#10b981", "#059669"]} />
          <div className="flex-1">
            <div className="uppercase tracking-[3px] text-xs text-emerald-400 font-medium mb-2">
              NILAI UTAMA KAMI
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">ISTIKOMAH</h3>
            <p className="mt-3 text-zinc-400 max-w-md">
              Berakar pada nilai-nilai agama Islam, empati, dan intelektualitas.
              Kami mempersiapkan generasi yang unggul dalam ilmu pengetahuan,
              teknologi, dan memiliki karakter mulia.
            </p>
          </div>

          <div className="text-sm text-zinc-500 max-w-65">
            Kami percaya bahwa pendidikan yang baik adalah perpaduan antara
            kecerdasan intelektual dan kebaikan akhlak.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
