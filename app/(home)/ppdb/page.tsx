import React from "react";
import { CheckCircle2 } from "lucide-react";
import {
  PageHero,
  FadeLeft,
  FadeRight,
} from "@/components/animation/animations";
import { Button } from "@/components/ui/button";

export default function PPDB() {
  const steps = [
    "Buat Akun Pendaftaran Online",
    "Lengkapi Data Diri",
    "Verifikasi Berkas Fisik",
    "Tes Seleksi Akademik & BTQ",
    "Pengumuman Kelulusan",
    "Lapor Diri / Daftar Ulang",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero
        title="PPDB"
        subtitle="Pendaftaran Murid Baru"
        description="Langkah awal menuju perjalanan pendidikan yang transformatif. Pelajari alur pendaftaran, persyaratan, dan jadwal penting."
        imageSrc="/images/foto-siswa.JPG"
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeLeft>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
              Alur PPDB Madtsanda
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Kami mencari generasi muda yang bersemangat, kompetitif, dan siap
              berprestasi. Proses seleksi kami meliputi tes kemampuan akademik,
              baca tulis Al-Qur&apos;an, dan wawancara untuk menggali potensi
              terbaik dari setiap calon murid.
            </p>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                      Langkah {idx + 1}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://pmbm.mtsn2kotakediri.sch.id/">
              <Button className="mt-12 bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-emerald-500/20 hover:-translate-y-1 transition-all">
                Mulai Pendaftaran
              </Button>
            </a>
          </FadeLeft>

          <FadeRight
            delay={0.2}
            className="bg-zinc-900 dark:bg-zinc-900/50 p-10 md:p-14 rounded-[3rem] text-white border border-zinc-800"
          >
            <h3 className="text-3xl font-bold mb-8">Jadwal Penting</h3>
            <div className="space-y-8">
              <div className="border-b border-zinc-800 pb-8">
                <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2">
                  Jalur Prestasi
                </p>
                <p className="text-2xl font-bold mb-2">Februari - Maret 2026</p>
                <p className="text-zinc-400">
                  Pengumuman seleksi di pertengahan Maret
                </p>
              </div>
              <div className="border-b border-zinc-800 pb-8">
                <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2">
                  Jalur Reguler
                </p>
                <p className="text-2xl font-bold mb-2">Mei 2026</p>
                <p className="text-zinc-400">Pengumuman seleksi di akhir Mei</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2">
                  Daftar Ulang
                </p>
                <p className="text-2xl font-bold mb-2">Juni 2026</p>
                <p className="text-zinc-400">
                  Lapor diri bagi murid yang dinyatakan lulus
                </p>
              </div>
            </div>
          </FadeRight>
        </div>
      </section>
    </div>
  );
}
