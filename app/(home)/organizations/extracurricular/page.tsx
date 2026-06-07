import React from "react";
import { PageHero } from "@/components/animation/animations";
import { ExtracurricularList } from "@/features/organizations/components";
import { extracurricularsData } from "@/components/data/extracurriculars";

export default function ExtracurricularsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero
        title="Ekstrakurikuler"
        subtitle="Pengembangan Potensi Siswa"
        description="Jelajahi 25 jenis kegiatan ekstrakurikuler unggulan MTsN 2 Kota Kediri untuk menyalurkan minat, mengasah bakat, dan mengukir prestasi."
        imageSrc="/images/bg-mts.jpg"
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <ExtracurricularList data={extracurricularsData} />
      </section>
    </div>
  );
}
