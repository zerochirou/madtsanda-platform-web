"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ScaleIn } from "@/components/animation/animations";

export const InsideLeading = () => (
  <section className="py-10 lg:py-16 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <ScaleIn className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden h-125 lg:h-175 shadow-2xl">
        <Image src="/images/kegiatan-sekolah.jpg" className="object-cover transition-transform duration-1000 hover:scale-105" alt="Campus Hall" fill sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-full md:w-2/3 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 font-bold tracking-widest uppercase mb-4"
          >
            Virtual Tour
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-10"
          >
            Fasilitas Unggulan<br />MTsN 2<br />Kota Kediri
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full font-bold px-8 py-6 shadow-xl shadow-emerald-500/20 w-fit">
              Explore Campus Facilities
            </Button>
          </motion.div>
        </div>
      </ScaleIn>
    </div>
  </section>
);
