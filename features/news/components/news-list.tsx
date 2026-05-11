"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ClockFading, Tag, User } from "lucide-react";
import { NewsResponseDTO } from "@/types/dto/news";
import { formatReadableDate } from "@/lib/date";
import { Skeleton } from "@/components/ui/skeleton";

// 1. Buat Komponen Skeleton Terpisah agar rapi
function NewsCardSkeleton() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-none">
      {/* Skeleton Gambar */}
      <div className="relative w-full aspect-4/3">
        <Skeleton className="w-full h-full" />
      </div>
      
      <div className="p-5 flex flex-col grow gap-4">
        {/* Skeleton Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-20" />
        </div>
        
        {/* Skeleton Title */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[80%]" />
        </div>

        {/* Skeleton Link */}
        <div className="mt-auto">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

export function NewsList({
  weeklyNews,
}: {
  weeklyNews: NewsResponseDTO | null;
}) {
  const isLoading = !weeklyNews;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
          Berita Utama Mingguan
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Tetap ikuti berita terkini mingguan kami, yang menghadirkan tren,
          wawasan, dan perkembangan terbaru dari seluruh dunia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          // Tampilkan 6 skeleton saat loading
          Array.from({ length: 6 }).map((_, i) => <NewsCardSkeleton key={i} />)
        ) : (
          weeklyNews?.data?.map((news, index) => (
            <Link href={`/news/${news.id}`} key={news.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-none transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={news.imageUrl as string}
                    alt={news.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col grow">
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    <span className="flex flex-row items-center gap-1 px-2 capitalize py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 text-xs font-bold rounded-sm">
                      <Tag className="w-4 h-4" />
                      {news.newsCategory.category}
                    </span>
                    <span suppressHydrationWarning className="flex flex-row items-center gap-1 px-2 capitalize py-1 bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 text-xs font-bold rounded-sm">
                      <ClockFading className="w-4 h-4" />
                      {formatReadableDate(news.createdAt)}
                    </span>
                    <span className="flex flex-row items-center gap-1 px-2 capitalize py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400 text-xs font-bold rounded-sm">
                      <User className="w-4 h-4" /> {news.user.username}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-500 transition-colors mb-4 line-clamp-3">
                    {news.title}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="inline-flex items-center text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}