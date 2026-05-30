"use client";

import Link from "next/link";
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
import { ProgramSheet } from "@/components/shared/program-sheet";
import { ArrowRight } from "lucide-react";

export const Programs = () => {
  return (
    <section className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500" />
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
            const Icon = prog.icon;
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <ProgramSheet mdx={prog.content} title={prog.title}>
                  <Card className={`group border-zinc-200 dark:border-zinc-800 hover:shadow-2xl ${prog.shadowColor} transition-all duration-300 cursor-pointer h-full border bg-white dark:bg-zinc-900/50 hover:-translate-y-2 overflow-hidden`}>
                    {/* Gradient Icon Area */}
                    <div className={`relative flex items-center justify-center py-12 bg-linear-to-br ${prog.gradient} group-hover:bg-linear-to-br ${prog.gradientHover} transition-all duration-500`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
                      <div className="relative p-5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                        <Icon className="h-14 w-14 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    <CardHeader className="px-8 pt-6">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {prog.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-500 dark:text-zinc-400 text-base">
                        {prog.school}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 flex-1" />
                    <CardFooter className="p-8 pt-0 flex justify-between items-end mt-auto">
                      <span className="text-zinc-600 dark:text-zinc-400 font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:underline transition-colors decoration-2 underline-offset-4">
                        Lihat detail program →
                      </span>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${prog.accentBg} ${prog.accentText} group-hover:scale-110 transition-transform`}>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </CardFooter>
                  </Card>
                </ProgramSheet>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
