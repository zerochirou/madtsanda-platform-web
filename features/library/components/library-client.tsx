"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Clock,
  Phone,
  MapPin,
  BookMarked,
  Filter,
  X,
} from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { libraryInfo } from "@/components/data/library-data";
import { Button } from "@/components/ui/button";
import type { LibraryItem } from "@/types/dto/library";
import { useLibraryCatalog } from "../hooks/use-library-catalog";
import { BookCard } from "./book-card";

const categoryColors: Record<string, string> = {
  emerald:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50",
  violet:
    "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-400 border-violet-200/50 dark:border-violet-900/50",
  amber:
    "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400 border-rose-200/50 dark:border-rose-900/50",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/50",
};

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export function LibraryClient({ books }: { books: LibraryItem[] }) {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    stats,
    filteredBooks,
    resetFilters,
  } = useLibraryCatalog(books);

  return (
    <div className="selection:bg-emerald-500 selection:text-white">
      {/* ==================== STATS OVERLAP SECTION ==================== */}
      <section className="relative z-20 -mt-16 md:-mt-20 max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 backdrop-blur-md p-6 text-center hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group shadow-xl shadow-zinc-200/50 dark:shadow-none"
            >
              <div className="text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">
                <NumberTicker
                  value={stat.value}
                  className="text-zinc-900 dark:text-white"
                />
                <span className="text-emerald-500 dark:text-emerald-400">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 font-medium tracking-wide uppercase text-[11px] group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
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
            {categories.map((cat, i) => {
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
                  <h3
                    className={`text-sm font-bold mb-1 ${
                      isSelected
                        ? "text-white"
                        : "text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className={`text-xs ${isSelected ? "text-emerald-100" : "text-zinc-500"}`}
                  >
                    {formatNumber(cat.count)} buku
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== KATALOG BUKU SECTION ==================== */}
      <section
        id="katalog-buku"
        className="py-20 lg:py-28 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10"
      >
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
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="hover:text-red-500 transition-colors"
                  >
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
                  <BookCard key={book.id || book.title + i} book={book} index={i} />
                ))}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                {books.length === 0 ? (
                  <BookMarked className="h-12 w-12 text-zinc-300 dark:text-zinc-700 mb-4" />
                ) : (
                  <Search className="h-12 w-12 text-zinc-300 dark:text-zinc-700 mb-4" />
                )}
                <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-300">
                  {books.length === 0 ? "Koleksi Belum Tersedia" : "Buku tidak ditemukan"}
                </h3>
                <p className="text-sm text-zinc-500 mt-2">
                  {books.length === 0
                    ? "Saat ini belum ada koleksi buku digital yang terdaftar."
                    : searchTerm
                      ? `Tidak ada buku yang cocok dengan kata kunci "${searchTerm}".`
                      : "Tidak ada buku yang cocok dengan kategori yang dipilih."}
                </p>
                {searchTerm || selectedCategory ? (
                  <Button
                    onClick={resetFilters}
                    variant="outline"
                    className="mt-6 border-emerald-500 text-emerald-600 hover:bg-emerald-500/10 rounded-xl"
                  >
                    Reset Pencarian
                  </Button>
                ) : null}
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
                <a
                  href={`https://wa.me/${libraryInfo.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
