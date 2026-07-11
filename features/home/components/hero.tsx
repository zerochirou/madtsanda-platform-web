"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";

const heroImages = [
  "paseban-1.png",
  "paseban-2.jpg",
  "foto-siswa3.JPG",
  "paskibra2.jpeg",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative flex min-h-[calc(100vh-var(--site-banner-offset,0px))] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          key={heroImages[index]} // Sangat penting
          initial={{ opacity: 0, }} // Masuk dari kanan
          animate={{ opacity: 1,  }} // Ke posisi normal
          exit={{ opacity: 0, }} // Keluar ke kiri
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={`/images/${heroImages[index]}`}
            alt="Gedung MTsN 2 Kota Kediri"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            // priority={index === 0}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30 dark:bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-4xl px-4 pt-28 text-center sm:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:px-4 sm:text-sm"
        >
          Selamat Datang di MTsN 2 Kota Kediri
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-8xl"
        >
          <WordRotate
            words={[
              "MTsN 2 Kota Kediri",
              "Madtsanda.",
              "Islami.",
              "Terampil.",
              "Inovatif.",
              "Kompetitif.",
              "Berakhlakul",
              "Karimah.",
            ]}
            duration={3000}
          />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://youtu.be/iNpZNOQqlXA?si=TQJ78mMKo-eGsnUbi">
            <Button
              variant="secondary"
              className="group mx-auto flex rounded-full bg-white/95 py-5 pl-5 pr-2 text-zinc-900 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-white sm:space-x-4 sm:py-6 sm:pl-6"
            >
              <span className="font-semibold text-sm">Lihat Video Profil</span>
              <div className="bg-emerald-500 p-2 rounded-full group-hover:bg-emerald-400 group-hover:rotate-12 transition-all duration-300">
                <Play className="w-4 h-4 fill-white text-white" />
              </div>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
