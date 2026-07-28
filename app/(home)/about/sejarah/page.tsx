import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SejarahTimeline } from "@/features/about/components/sejarah-timeline";

export const metadata = {
  title: "Perjalanan Sejarah Madtsanda | MTsN 2 Kota Kediri",
  description: "Dari cikal bakal PGAN 6 Tahun di tahun 1962 hingga menjadi madrasah modern berbasis riset, inilah tonggak-tonggak sejarah yang membentuk Madtsanda.",
};

export default function SejarahmadtsandaPage() {
  return (
    <div className="mt-20 min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      {/* ==================== HEADER ==================== */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div>
          <div className="text-xs font-semibold tracking-[3px] text-emerald-600 dark:text-emerald-400">
            TIMELINE
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tighter">
            Perjalanan Madtsanda
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Dari cikal bakal PGAN 6 Tahun di tahun 1962 hingga menjadi madrasah
            modern berbasis riset, inilah tonggak-tonggak sejarah yang membentuk
            madtsanda.
          </p>
        </div>
      </section>

      {/* ==================== VERTICAL TIMELINE ==================== */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SejarahTimeline />
      </section>

      {/* ==================== CLOSING ==================== */}
      <section className="border-t border-zinc-200 py-16 dark:border-zinc-900">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            madtsanda terus berkembang dengan menjaga akar tradisi sambil membuka
            diri terhadap kemajuan zaman.
          </p>
          <Link href="/about">
            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-600 active:scale-[0.985] dark:bg-emerald-600 dark:hover:bg-emerald-500">
              Lihat Profil Lengkap <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}