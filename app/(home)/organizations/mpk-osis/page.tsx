import React from "react";
import Image from "next/image";
import { FadeUp } from "@/components/animation/animations";
import { Card, CardContent } from "@/components/ui";
import {
  AtSign,
  User,
  Award,
  Shield,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { organizationsData } from "@/components/data/organizations";
import { OrganizationHero } from "@/features/organizations/components";

export default function MpkOsisPage() {
  const osis = organizationsData.find((org) => org.name === "OSIS");
  const mpk = organizationsData.find((org) => org.name === "MPK");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <OrganizationHero
        title="MPK & OSIS"
        eyebrow="Organisasi Utama Kesiswaan"
        description="Pilar kepemimpinan dan perwakilan siswa MTsN 2 Kota Kediri yang bertugas menggerakkan kegiatan kesiswaan serta menyalurkan aspirasi secara dinamis."
        imageSrc="/images/apel-pagi.jpg"
        imageAlt="Kegiatan apel dan organisasi siswa MTsN 2 Kota Kediri"
        tone="emerald"
        metrics={[
          { value: "2", label: "Lembaga utama siswa" },
          { value: "9+", label: "Bidang kerja OSIS" },
          { value: "100%", label: "Aspirasi kelas terwakili" },
        ]}
      />

      {/* Main Content Sections */}
      <div className="py-20 lg:py-28 max-w-7xl mx-auto px-4 md:px-6 space-y-24 md:space-y-32">
        {/* SECTION 1: MPK */}
        {mpk && (
          <section className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Logo and Info Card (Left) */}
            <div className="lg:col-span-5">
              <FadeUp>
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-xl relative overflow-hidden group">
                  <div className="absolute -inset-px bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <div className="w-28 h-28 relative rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/40 mb-6 flex items-center justify-center p-2 shadow-inner border border-zinc-200/50 dark:border-zinc-700/30">
                    <Image
                      src={mpk.image}
                      alt={mpk.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-4">
                    {mpk.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {mpk.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <AtSign className="w-5 h-5 text-emerald-500" />
                      <span className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400">
                        <a
                          href={`https://www.instagram.com/${mpk.ig}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          @{mpk.ig}
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <User className="w-5 h-5 text-emerald-500" />
                      <span>
                        Pendiri:{" "}
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                          {mpk.founder}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* MPK Details and Roles (Right) */}
            <div className="lg:col-span-7 space-y-8">
              <FadeUp delay={0.2}>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
                    Lembaga Legislatif Siswa
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
                    Peran & Fungsi Legislatif MPK
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Sebagai organisasi tertinggi kesiswaan, MPK berperan sebagai
                    jembatan resmi antara pihak sekolah dan perwakilan kelas.
                    MPK mengemban fungsi pengawasan terhadap jalannya roda
                    organisasi OSIS demi menjaga transparansi dan kualitas
                    program kerja.
                  </p>
                </div>
              </FadeUp>

              <div className="grid sm:grid-cols-2 gap-6">
                <FadeUp delay={0.3}>
                  <Card className="border-zinc-200 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-lg">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white mb-1">
                            Pengawasan OSIS
                          </h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Memantau, mengevaluasi, dan menilai pelaksanaan
                            setiap program kerja yang diselenggarakan oleh
                            pengurus OSIS.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <Card className="border-zinc-200 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-zinc-900 dark:text-white mb-1">
                            Aspirasi Kelas
                          </h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Menampung saran, kritik, dan usulan dari perwakilan
                            kelas untuk kemudian dikoordinasikan kepada pihak
                            madrasah.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeUp>
              </div>

              {/* Roles list */}
              <FadeUp delay={0.5}>
                <div className="bg-white/80 dark:bg-zinc-900/20 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
                  <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-500" />
                    Struktur Kerja MPK
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Komisi A (Pengawasan AD/ART)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Komisi B (Pengawasan Kegiatan)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Komisi C (Humas & Aspirasi)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      Sidang Pleno & Istimewa
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </div>
          </section>
        )}

        {/* SECTION 2: OSIS */}
        {osis && (
          <section className="grid lg:grid-cols-12 gap-12 items-center pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
            {/* OSIS Details and Programs (Left) - Shifted order for layout balance */}
            <div className="lg:col-span-7 space-y-8 lg:order-1 order-2">
              <FadeUp>
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
                    Lembaga Eksekutif Siswa
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">
                    Roda Pelaksana Program Kerja OSIS
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Sebagai organisasi eksekutif utama di MTsN 2 Kota Kediri,
                    OSIS bertanggung jawab merencanakan, melaksanakan, dan
                    mengoordinasikan berbagai kegiatan kesiswaan. Melalui
                    pembagian Seksi Bidang (Sekbid), OSIS mewadahi pengembangan
                    potensi akademik maupun non-akademik siswa.
                  </p>
                </div>
              </FadeUp>

              {/* Visi Misi & Proker Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <FadeUp delay={0.2}>
                  <div className="bg-white/80 dark:bg-zinc-900/20 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
                    <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-500" />
                      Fokus Karakter OSIS
                    </h4>
                    <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>
                          <strong>Agamis:</strong> Penyelenggaraan kegiatan hari
                          besar keagamaan secara rutin.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>
                          <strong>Kolaboratif:</strong> Menghubungkan seluruh
                          ekstrakurikuler dalam event besar.
                        </span>
                      </li>
                    </ul>
                  </div>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <div className="bg-white/80 dark:bg-zinc-900/20 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
                    <h4 className="font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-500" />
                      Program Kerja Utama
                    </h4>
                    <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Class Meeting Semesteran
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Peringatan Hari Besar Islam (PHBI)
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        Bakti Sosial & Kepedulian
                      </li>
                    </ul>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Logo and Info Card (Right) */}
            <div className="lg:col-span-5 lg:order-2 order-1">
              <FadeUp delay={0.2}>
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-xl relative overflow-hidden group">
                  <div className="absolute -inset-px bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <div className="w-28 h-28 relative rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/40 mb-6 flex items-center justify-center p-2 shadow-inner border border-zinc-200/50 dark:border-zinc-700/30">
                    <Image
                      src={osis.image}
                      alt={osis.name}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-4">
                    {osis.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {osis.desc}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <AtSign className="w-5 h-5 text-emerald-500" />
                      <span className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400">
                        <a
                          href={`https://www.instagram.com/${osis.ig}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          @{osis.ig}
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <User className="w-5 h-5 text-emerald-500" />
                      <span>
                        Pendiri:{" "}
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                          {osis.founder}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
