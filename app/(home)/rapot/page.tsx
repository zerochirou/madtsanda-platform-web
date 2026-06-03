import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  Info,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function Rapot() {
  const rdmUrl = "https://rdm.mtsnsatukotakediri.sch.id/";

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 overflow-hidden">
      {/* Background Decorators */}
      <DotPattern
        width={20}
        height={20}
        glow={true}
        className="opacity-25 dark:opacity-20 text-zinc-400 dark:text-zinc-700 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
      />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Hero Area */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              Layanan Digital Mandiri (RDM)
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Akses Rapor Digital <br />
                <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500 bg-clip-text text-transparent">
                  Siswa MTsN 2 Kediri
                </span>
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                Selamat datang di portal Rapor Digital Madrasah (RDM) MTsN 2
                Kota Kediri. Platform digital terintegrasi untuk mempermudah
                orang tua/wali dan siswa dalam melihat, memantau, dan mengunduh
                hasil evaluasi belajar secara mandiri, aman, dan efisien.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <ShinyButton
                href={rdmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-6 rounded-2xl font-semibold flex items-center justify-center gap-3 group bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-500/10"
              >
                Masuk ke Portal RDM
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </ShinyButton>
            </div>

            {/* Visual Steps */}
            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-500" />
                Panduan Penggunaan RDM:
              </h3>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    step: "01",
                    title: "Buka Portal RDM",
                    desc: "Klik tombol masuk ke RDM di atas untuk menuju link resmi.",
                  },
                  {
                    step: "02",
                    title: "Gunakan Akun Siswa",
                    desc: "Gunakan nomor NISN dan password yang diberikan wali kelas.",
                  },
                  {
                    step: "03",
                    title: "Unduh Rapor PDF",
                    desc: "Pilih semester aktif, lalu unduh dokumen hasil belajar.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-xs"
                  >
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      LANGKAH {item.step}
                    </span>
                    <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Preview Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group overflow-hidden">
              {/* Inner wrapper for image */}
              <div className="relative w-[280px] h-[560px] rounded-[1.8rem] overflow-hidden">
                <Image
                  src="/images/rapor-digital-madrasah.webp"
                  alt="Aplikasi Rapor Digital Madrasah MTsN 2 Kota Kediri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Decorative elements */}
              {/*<div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />*/}
              {/*<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />*/}
            </div>

            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Tampilan RDM Mobile
              </span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-16" />

        {/* Info Banner */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md p-8 md:p-10 mb-24 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-3 py-1 rounded-full"
            >
              Pemberitahuan Orang Tua
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">
              Butuh Pendampingan Belajar Siswa?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Rapor digital ini diterbitkan secara resmi oleh MTsN 2 Kota
              Kediri. Disarankan agar orang tua/wali murid mendampingi siswa
              saat membuka dan menganalisis nilai evaluasi belajar demi
              peningkatan kualitas prestasi akademik di masa mendatang.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="w-full md:w-auto p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Konsultasi Wali Kelas</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Jadwal konsultasi dibuka setiap hari kerja.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              Tanya Jawab Populer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto">
              Temukan jawaban atas kendala yang paling sering dialami saat
              mengakses Rapor Digital Madrasah (RDM).
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3 pt-6"
          >
            <AccordionItem
              value="faq-1"
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/20 px-6 py-1"
            >
              <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 font-semibold hover:no-underline py-4 text-base">
                Bagaimana cara mendapatkan NISN siswa?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm pt-2 pb-4">
                Nomor Induk Siswa Nasional (NISN) dapat dilihat pada kartu
                pelajar siswa, buku rapor semester sebelumnya, atau ditanyakan
                langsung kepada wali kelas masing-masing. Anda juga dapat
                memeriksa secara online melalui situs resmi NISN
                Kemendikbudristek.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/20 px-6 py-1"
            >
              <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 font-semibold hover:no-underline py-4 text-base">
                Saya tidak bisa login ke portal RDM, apa solusinya?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm pt-2 pb-4">
                Pastikan NISN dan password yang Anda masukkan sudah benar
                (sesuai yang dibagikan oleh wali kelas). Jika masih berkendala,
                silakan hubungi tim IT/Humas MTsN 2 Kota Kediri atau hubungi
                wali kelas untuk melakukan reset password login Anda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/20 px-6 py-1"
            >
              <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 font-semibold hover:no-underline py-4 text-base">
                Apakah rapor digital ini sah digunakan untuk keperluan resmi?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm pt-2 pb-4">
                Ya, rapor digital yang diunduh melalui portal RDM resmi MTsN 2
                Kota Kediri dilengkapi dengan Tanda Tangan Elektronik (TTE)
                kepala madrasah serta kode QR unik untuk validasi keaslian
                dokumen, sehingga sah digunakan untuk berbagai keperluan
                administrasi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
