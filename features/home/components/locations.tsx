"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shared/corousel";
import { FadeLeft, FadeRight } from "@/components/animation/animations";
import { locationsData } from "@/components/data/locations";

export const Locations = () => {

  return (
    <section className="py-20 lg:py-32 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeRight className="order-2 lg:order-1">
          <Carousel className="w-full">
            <CarouselContent>
              {locationsData.map((loc, i) => (
                <CarouselItem key={i}>
                  <div className="text-emerald-400 font-mono text-xl mb-6 flex items-center gap-4">
                    <span className="text-3xl font-bold">0{i + 1}</span> 
                    <span className="text-zinc-600 text-lg">/ 02</span>
                  </div>
                  <div className="h-87.5 lg:h-112.5 bg-zinc-900 rounded-2xl overflow-hidden relative group">
                    <Image src="/images/kegiatan-sekolah.jpg" className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Campus map" fill sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">{loc.name}</h3>
                      <p className="text-zinc-300 text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{loc.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 mt-6 lg:hidden justify-end">
              <CarouselPrevious className="static translate-y-0 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white" />
            </div>
          </Carousel>
        </FadeRight>

        <FadeLeft delay={0.2} className="space-y-6 lg:space-y-8 order-1 lg:order-2">
          <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase flex items-center gap-2">
            <span className="h-px w-8 bg-emerald-500"></span>
            Location
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Explore Our<br />Campuses Location</h2>
          <p className="text-zinc-400 text-lg leading-relaxed hidden lg:block max-w-md">Swipe through the images to explore our different campus facilities and learning environments tailored for your success.</p>
        </FadeLeft>
      </div>
    </section>
  );
};
