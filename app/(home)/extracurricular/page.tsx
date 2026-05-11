"use client";

import React from "react";
import Image from "next/image";
import { PageHero, FadeUp } from "@/components/animation/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AtSign, User } from "lucide-react";
import { organizationsData } from "@/components/data/organizations";

export default function Extracurricular() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero
        title="Kesiswaan & Organisasi"
        subtitle="Pengembangan Diri"
        description="Membentuk karakter, kepemimpinan, dan potensi diri melalui berbagai kegiatan ekstrakurikuler dan organisasi unggulan MTsN 2 Kota Kediri."
        imageSrc="/images/apel-pagi.jpg"
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Wadah Kreativitas & Kepemimpinan
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Melalui organisasi kesiswaan yang aktif, siswa dilatih menjadi
              pribadi yang disiplin, tangguh, berjiwa sosial tinggi, dan siap
              menjadi pemimpin masa depan.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizationsData.map((org, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <Card className="pt-0 h-full hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 flex flex-col">
                <CardHeader className="p-8 pb-4">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={org.image}
                      alt={org.name}
                      className="object-contain h-100 p-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {org.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-1 leading-relaxed">
                    {org.desc}
                  </p>
                  <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <AtSign className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        <a href={`https://www.instagram.com/${org.ig}`}>
                          @{org.ig}
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <User className="w-4 h-4 text-emerald-500" />
                      <span>
                        Pendiri:{" "}
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                          {org.founder}
                        </span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
