"use client";

import { motion } from "motion/react";
import { BookMarked, CheckCircle2, XCircle } from "lucide-react";
import type { LibraryItem } from "@/types/dto/library";

const getBookCoverGradient = (category: string) => {
  const c = category.toLowerCase();
  if (c.includes("agama") || c.includes("islam"))
    return "from-emerald-500 to-teal-600";
  if (c.includes("sains") || c.includes("ipa") || c.includes("riset"))
    return "from-sky-500 to-indigo-600";
  if (c.includes("sosial") || c.includes("ips") || c.includes("sejarah"))
    return "from-amber-500 to-orange-600";
  if (c.includes("bahasa") || c.includes("sastra") || c.includes("novel"))
    return "from-rose-500 to-pink-600";
  if (c.includes("kamus") || c.includes("referensi") || c.includes("umum"))
    return "from-violet-500 to-purple-600";
  return "from-emerald-500 to-emerald-700";
};

export function BookCard({ book, index }: { book: LibraryItem; index: number }) {
  return (
    <motion.div
      layout
      key={book.title + index}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
    >
      {/* Visual Book Cover Mockup */}
      <div
        className={`relative h-48 bg-linear-to-br ${getBookCoverGradient(book.category)} flex flex-col justify-between p-4 text-white overflow-hidden shadow-inner select-none`}
      >
        <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-black/25" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="text-[9px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded self-start border border-white/10">
          {book.category}
        </div>

        <BookMarked className="h-10 w-10 opacity-30 self-center group-hover:scale-110 transition-transform duration-500" />

        <div className="space-y-0.5 relative z-10 pl-2">
          <h4 className="text-xs font-black line-clamp-2 leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            {book.title}
          </h4>
          <p className="text-[9px] text-white/80 font-semibold truncate drop-shadow-sm">
            {book.author}
          </p>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white line-clamp-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-zinc-500 mt-1">
            Penulis: {book.author}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
            {book.category}
          </span>
          <div className="flex items-center gap-1">
            {book.available ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  Tersedia
                </span>
              </>
            ) : (
              <>
                <XCircle className="h-3.5 w-3.5 text-rose-500" />
                <span className="text-[11px] text-rose-600 dark:text-rose-400 font-bold">
                  Dipinjam
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
