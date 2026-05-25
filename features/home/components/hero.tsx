"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";

export const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/gedung-madtsanda.jpg"
        alt="Gedung MTsN 2 Kota Kediri"
        fill
        className="object-cover scale-105 animate-slow-zoom"
        priority
      />
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
      >
        Selamat Datang di MTsN 2 Kota Kediri
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight mb-8"
      >
        <WordRotate words={["MTsN 2 Kota Kediri", "Madtsanda.", "Islami.", "Terampil.", "Inovatif.", "Kompetitif.", "Berakhlakul", "Karimah."]} duration={3000} />
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          variant="secondary"
          className="rounded-full pl-6 pr-2 py-6 flex items-center space-x-4 mx-auto group hover:scale-105 transition-all duration-300 text-zinc-900 bg-white/95 hover:bg-white shadow-xl shadow-black/20"
        >
          <span className="font-semibold text-sm">Lihat Video Profil</span>
          <div className="bg-emerald-500 p-2 rounded-full group-hover:bg-emerald-400 group-hover:rotate-12 transition-all duration-300">
            <Play className="w-4 h-4 fill-white text-white" />
          </div>
        </Button>
      </motion.div>
    </div>
  </section>
);

