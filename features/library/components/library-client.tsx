"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Search,
  Clock,
  Phone,
  MapPin,
  BookMarked,
  CheckCircle2,
  XCircle,
  Filter,
  X,
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  libraryStats,
  libraryCategories,
  libraryBooks,
  libraryInfo,
} from "@/components/data/library-data";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50",
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-400 border-violet-200/50 dark:border-violet-900/50",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400 border-rose-200/50 dark:border-rose-900/50",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/50",
};

const getBookCoverGradient = (category: string) => {
  const c = category.toLowerCase();
  if (c.includes("agama") || c.includes("islam")) return "from-emerald-500 to-teal-600";
  if (c.includes("sains") || c.includes("ipa") || c.includes("riset")) return "from-sky-500 to-indigo-600";
  if (c.includes("sosial") || c.includes("ips") || c.includes("sejarah")) return "from-amber-500 to-orange-600";
  if (c.includes("bahasa") || c.includes("sastra") || c.includes("novel")) return "from-rose-500 to-pink-600";
  if (c.includes("kamus") || c.includes("referensi") || c.includes("umum")) return "from-violet-500 to-purple-600";
  return "from-emerald-500 to-emerald-700";
};

export function LibraryClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBooks = libraryBooks.filter((book) => {
    const matchesSearch =
      searchTerm === "" ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="selection:bg-emerald-500 selection:text-white">
      {/* ==================== HERO SECTION (Emerald-Dark Theme) ==================== */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        {/* Glow grid particle background in green */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.8px,transparent_1px)] bg-[length:24px_24px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 font-bold uppercase tracking-wider">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Perpustakaan Madrasah
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-white">
                Gerbang Ilmu
                <br />
                <span className="text-emerald-400">Digital & Fisik</span>
              </h1>

              <p className="max-w-lg text-lg text-zinc-400 leading-relaxed">
                Akses ribuan koleksi buku, e-book, dan jurnal ilmiah untuk mendukung
                pembelajaran interaktif serta riset kolaboratif siswa-siswi Madtsanda.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#katalog-buku">
                  <Button className="h-14 px-8 bg-emerald-600 hover:bg-emerald-500 text-white text-base rounded-2xl font-bold transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]">
                    <Search className="h-5 w-5 mr-2" />
                    Cari Koleksi Buku
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="h-14 px-8 border-zinc-800 text-white hover:bg-white/10 text-base rounded-2xl font-bold transition-all"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchTerm("");
                    const el = document.getElementById("katalog-buku");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Katalog Lengkap
                </Button>
              </div>
            </motion.div>

            {/* Stats (Emerald Styled) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {libraryStats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xs p-6 text-center hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter">
                    <NumberTicker value={stat.value} className="text-white" />
                    <span className="text-emerald-400">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-2 font-medium tracking-wide uppercase text-[11px] group-hover:text-emerald-400 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== KATEGORI SECTION ==================== */}
      <section className="py-20 lg:py-28 border-b border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center lg:text-left"
          >
            <div className="text-xs font-bold tracking-[3px] text-emerald-600 dark:text-emerald-400 uppercase">
              SEKTOR KOLEKSI
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
              Kategori Terpopuler
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {libraryCategories.map((cat, i) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setSelectedCategory(isSelected ? null : cat.name);
                    const el = document.getElementById("katalog-buku");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`group cursor-pointer rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 select-none ${
                    isSelected
                      ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700"
                  }`}
                >
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border ${
                      isSelected
                        ? "bg-white/20 text-white border-white/10"
                        : categoryColors[cat.color]
                    }`}
                  >
                    <BookMarked className="h-6 w-6" />
                  </div>
                  <h3 className={`text-sm font-bold mb-1 ${
                    isSelected ? "text-white" : "text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  }`}>
                    {cat.name}
                  </h3>
                  <p className={`text-xs ${isSelected ? "text-emerald-100" : "text-zinc-500"}`}>
                    {cat.count.toLocaleString()} buku
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== KATALOG BUKU SECTION ==================== */}
      <section id="katalog-buku" className="py-20 lg:py-28 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div>
              <div className="text-xs font-bold tracking-[3px] text-emerald-600 dark:text-emerald-400 uppercase">
                KATALOG DIGITAL
              </div>
              <h2 className="mt-2 text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
                Buku Populer Perpustakaan
              </h2>
            </div>

            {/* Filters + Search bar */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:max-w-lg">
              {/* Category Filter Indicator Tag */}
              {selectedCategory && (
                <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-3 py-2.5 rounded-xl text-xs font-bold">
                  <Filter className="h-3 w-3" />
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)} className="hover:text-red-500 transition-colors">
                    <X className="h-3 w-3 ml-1" />
                  </button>
                </div>
              )}

              {/* Search input with emerald focus */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari judul atau penulis buku..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-zinc-900 dark:text-white"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Book Cards Grid */}
          <AnimatePresence mode="popLayout">
            {filteredBooks.length > 0 ? (
              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredBooks.map((book, i) => (
                  <motion.div
                    layout
                    key={book.title + i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    {/* Visual Book Cover Cover Mockup (Dynamic motifs) */}
                    <div className={`relative h-48 bg-linear-to-br ${getBookCoverGradient(book.category)} flex flex-col justify-between p-4 text-white overflow-hidden shadow-inner select-none`}>
                      {/* Spine shadow overlay */}
                      <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-black/25" />
                      {/* Decorative overlay shine */}
                      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_70%)]" />

                      {/* Header category badge */}
                      <div className="text-[9px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded self-start border border-white/10">
                        {book.category}
                      </div>

                      {/* Center motif icon */}
                      <BookMarked className="h-10 w-10 opacity-30 self-center group-hover:scale-110 transition-transform duration-500" />

                      {/* Title & Author on Cover */}
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
                        <p className="text-xs text-zinc-500 mt-1">Penulis: {book.author}</p>
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
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search className="h-12 w-12 text-zinc-300 dark:text-zinc-700 mb-4" />
                <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-300">Buku tidak ditemukan</h3>
                <p className="text-sm text-zinc-500 mt-2">Tidak ada buku yang cocok dengan judul &ldquo;{searchTerm}&rdquo;.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                  variant="outline"
                  className="mt-6 border-emerald-500 text-emerald-600 hover:bg-emerald-500/10 rounded-xl"
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ==================== INFO PERPUSTAKAAN PERTEMUAN ==================== */}
      <section className="py-20 lg:py-28 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <div className="text-xs font-bold tracking-[3px] text-emerald-600 dark:text-emerald-400 uppercase">
              LOKASI & JADWAL
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
              Kunjungi Layanan Perpustakaan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours operational */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shadow-xs">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">Jam Layanan Operasional</h3>
              </div>
              <div className="space-y-4">
                {libraryInfo.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center pb-3.5 border-b border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      {h.day}
                    </span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-md">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contacts & Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shadow-xs">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">Informasi Kontak</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Alamat Fisik
                    </p>
                    <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                      {libraryInfo.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Layanan Telepon/WA
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-emerald-500" />
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">
                        {libraryInfo.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a href={`https://wa.me/${libraryInfo.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-md shadow-emerald-600/10">
                    Hubungi Pustakawan
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
