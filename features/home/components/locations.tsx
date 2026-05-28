"use client";

import React from "react";
import { FadeLeft, FadeRight } from "@/components/animation/animations";
import { GoogleMap } from "@/components/shared/google-maps";

export const Locations = () => {
  return (
    // Tambahkan overflow-hidden pada section sebagai pengaman berlapis
    <section className="pt-20 lg:py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        {/* PERUBAHAN DI SINI: Ditambahkan w-full min-w-0 overflow-hidden agar kolom grid tidak ikut melar */}
        <FadeRight className="order-2 lg:order-1 w-full min-w-0 overflow-hidden">
          {/* Tambahkan juga overflow-hidden pada komponen Carousel */}
          <GoogleMap />
        </FadeRight>
        <FadeLeft
          delay={0.2}
          className="space-y-6 lg:space-y-8 order-1 lg:order-2"
        >
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase flex items-center gap-2">
            <span className="h-px w-8 bg-emerald-500"></span>
            Location
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Explore Our
            <br />
            School Location
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed hidden lg:block max-w-md">
            Swipe through the images to explore our different campus facilities
            and learning environments tailored for your success.
          </p>
        </FadeLeft>
      </div>
    </section>
  );
};
