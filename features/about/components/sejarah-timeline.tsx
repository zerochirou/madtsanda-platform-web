"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { timelineMilestones } from "@/components/data/timeline-data";

export function SejarahTimeline() {
  return (
    <div className="relative">
      {/* Center vertical line for desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
      {/* Left vertical line for mobile */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:hidden" />

      <div className="space-y-12 md:space-y-20">
        {timelineMilestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Desktop layout: 3-column grid (Left, Node, Right) */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-center">
                {/* Left side content */}
                {isLeft ? (
                  <div className="group grid gap-5 pr-4 text-right">
                    {milestone.imageSrc && (
                      <div className="relative ml-auto aspect-[16/10] w-full max-w-md overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <Image
                          src={milestone.imageSrc}
                          alt={milestone.imageAlt ?? milestone.title}
                          fill
                          sizes="(max-width: 1024px) 45vw, 420px"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-mono text-sm tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 font-bold">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div />
                )}

                {/* Center Node */}
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-emerald-500 bg-white dark:bg-zinc-950 shadow-md shadow-emerald-500/20 z-10">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Right side content */}
                {!isLeft ? (
                  <div className="group grid gap-5 pl-4 text-left">
                    {milestone.imageSrc && (
                      <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <Image
                          src={milestone.imageSrc}
                          alt={milestone.imageAlt ?? milestone.title}
                          fill
                          sizes="(max-width: 1024px) 45vw, 420px"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-mono text-sm tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 font-bold">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </div>

              {/* Mobile layout */}
              <div className="md:hidden pl-14 relative group">
                {/* Mobile node */}
                <div className="absolute left-4 top-1.5 z-10">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-emerald-500 bg-white dark:bg-zinc-950 shadow-md shadow-emerald-500/20">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {milestone.imageSrc && (
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <Image
                      src={milestone.imageSrc}
                      alt={milestone.imageAlt ?? milestone.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="font-mono text-sm tracking-widest text-emerald-600 dark:text-emerald-400 mb-1 font-bold">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
