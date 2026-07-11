"use client";

import React from "react";
import { FadeLeft, FadeRight } from "@/components/animation/animations";
import { GoogleMap } from "@/components/shared/google-maps";

export const Locations = () => {
  return (
    // Tambahkan overflow-hidden pada section sebagai pengaman berlapis
    <section className="overflow-hidden bg-zinc-950 pt-16 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-8">
        {/* PERUBAHAN DI SINI: Ditambahkan w-full min-w-0 overflow-hidden agar kolom grid tidak ikut melar */}
        <FadeRight className="order-2 lg:order-1 w-full min-w-0 overflow-hidden">
          {/* Tambahkan juga overflow-hidden pada komponen Carousel */}
          <GoogleMap />
        </FadeRight>
        <FadeLeft
          delay={0.2}
          className="order-1 min-w-0 space-y-6 overflow-hidden lg:order-2 lg:space-y-8"
        >
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase flex items-center gap-2">
            <span className="h-px w-8 bg-emerald-500"></span>
            Location
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
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
