"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp, ScaleIn } from "@/components/animation/animations";
import { journeySteps } from "@/components/data/journeys";

export const Journey = () => {
  return (
    <section className="relative overflow-hidden border-t border-zinc-900 bg-zinc-950 py-16 text-white lg:py-32">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* DIUBAH:
          - Pada mobile (layar HP): ukuran diperkecil jadi w-72 h-72, blur diturunkan jadi [70px]
          - Pada desktop (lg:): ukuran kembali ke asal w-125 h-125, blur [120px]
        */}
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-125 lg:h-125 bg-emerald-500/10 rounded-full blur-[70px] lg:blur-[120px]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          <FadeUp>
            <h2 className="mb-10 text-3xl font-bold leading-tight sm:text-4xl lg:mb-16 lg:text-6xl">
              Alur Pendaftaran
              <br />
              PPDB Madtsanda
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full border-none"
              defaultValue="item-0"
            >
              {journeySteps.map((step, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-zinc-800 py-3"
                >
                  <AccordionTrigger className="hover:no-underline text-left data-[state=open]:text-emerald-400 text-lg lg:text-2xl font-bold group">
                    <div className="flex min-w-0 items-center gap-4 sm:gap-6">
                      <span className="font-mono text-base text-zinc-600 group-data-[state=open]:text-emerald-500">
                        0{i + 1}
                      </span>
                      {step.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pl-14 text-base lg:text-lg pb-4">
                    {step.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Link href="https://pmbm.mtsn2kotakediri.sch.id/" target="_blank">
              <Button className="mt-10 lg:mt-14 bg-emerald-500 text-white hover:bg-emerald-600 rounded-full font-bold px-8 py-6 flex gap-2 text-base transition-transform hover:-translate-y-1">
                Mulai Pendaftaran <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </FadeUp>

          <ScaleIn delay={0.2}>
            <div className="relative h-[32rem] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl sm:h-125 lg:h-175">
              <Image
                src="/images/muh-nizar.jpeg"
                alt="Kepala Madrasah"
                className="object-cover object-top opacity-90"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:max-w-sm sm:p-6 lg:bottom-12 lg:left-12">
                <p className="mb-1 text-xl font-bold text-white lg:text-3xl">
                  Drs. Muh Nizar, M.Pd
                </p>
                <p className="text-emerald-400 text-base font-medium">
                  Kepala Madrasah
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};
