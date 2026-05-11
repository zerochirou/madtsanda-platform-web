"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { FadeUp } from "@/components/animation/animations";
import { programsData } from "@/components/data/programs";
import Image from "next/image";
import { ProgramSheet } from "@/components/shared/program-sheet";

export const Programs = () => {
  return (
    <section className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500"></span>
              Programs
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white max-w-2xl leading-tight">
              Program Kelas Unggulan Madtsanda
            </h2>
          </div>
          <Link href="/programs">
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 font-bold dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              View All Programs
            </Button>
          </Link>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {programsData.map((prog, i) => {
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="container border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 group cursor-pointer h-full border-none shadow-none bg-white dark:bg-zinc-900/50 hover:-translate-y-2">
                  <div className="mt-6 px-4 group-hover:rotate-3 grayscale-100 group-hover:grayscale-0 transition-all flex flex-col items-center duration-500 hover:scale-110">
                    <Image
                      src={prog.icon}
                      width={200}
                      height={200}
                      alt={prog.title}
                    />
                  </div>
                  <CardHeader className="px-8">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {prog.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-500 dark:text-zinc-400 text-base">
                      {prog.school}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 flex-1"></CardContent>
                  <CardFooter className="p-8 pt-0 flex justify-between items-end mt-auto">
                    <ProgramSheet mdx={prog.content} title={prog.title} />
                  </CardFooter>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
