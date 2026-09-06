import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function HomeHeader() {
  return (
    <div className="m-3 rounded-2xl bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-600 px-5 py-8 text-white sm:m-6 sm:rounded-3xl sm:px-8 sm:py-12 shadow-xl shadow-emerald-950/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Portal Pembelajaran Digital</span>
          </div>
          <h1 className="mt-1 mb-6 max-w-2xl text-2xl font-bold leading-tight sm:text-4xl text-white">
            Tingkatkan Pengalaman Pembelajaran Anda dengan Madtsanda.
            <span className="text-emerald-200">Connect</span>
          </h1>
          <Button
            asChild
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 px-6 py-5 text-sm font-semibold text-white shadow-xl transition-all hover:gap-3"
          >
            <Link href="/dashboard/profile">
              Lihat Profil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="hidden lg:flex items-center justify-center w-52 h-52 relative">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-2 gap-3.5 relative z-10">
            <div className="w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-1 shadow-lg transition-transform hover:scale-105">
              <GraduationCap className="w-7 h-7 text-emerald-200" />
              <span className="text-[10px] font-bold text-white/90">Prestasi</span>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl border border-white/25 flex flex-col items-center justify-center gap-1 shadow-lg transition-transform hover:scale-105">
              <BookOpen className="w-7 h-7 text-white" />
              <span className="text-[10px] font-bold text-white/90">Literasi</span>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl border border-white/25 flex flex-col items-center justify-center gap-1 shadow-lg transition-transform hover:scale-105">
              <ShieldCheck className="w-7 h-7 text-white" />
              <span className="text-[10px] font-bold text-white/90">Karakter</span>
            </div>
            <div className="w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center gap-1 shadow-lg transition-transform hover:scale-105">
              <Sparkles className="w-7 h-7 text-emerald-200" />
              <span className="text-[10px] font-bold text-white/90">Inovasi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
