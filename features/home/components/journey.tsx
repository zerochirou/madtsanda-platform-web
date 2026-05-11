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
    <section className="py-20 lg:py-32 bg-zinc-950 text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        <FadeUp>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 lg:mb-16">
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
                  <div className="flex gap-6 items-center">
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
          <div className="relative h-125 lg:h-175 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
            <Image
              src="/images/muh-nizar.jpeg"
              alt="Kepala Madrasah"
              className="object-cover object-top opacity-90"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl max-w-sm">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-1">
                Drs. Muh Nizar, M.Pd
              </p>
              <p className="text-emerald-400 text-base font-medium">
                Kepala Madrasah
              </p>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};
