"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
// import { sideNews } from "@/components/data/news";
import { NewsItem, NewsResponseDTO } from "@/types/dto/news";
import { formatReadableDate } from "@/lib/date";

export function FeaturedNews({
  sideNews,
  topNews,
}: {
  sideNews: NewsResponseDTO | null;
  topNews: NewsItem | undefined;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 relative rounded-2xl overflow-hidden group h-[400px] md:h-[500px]"
        >
          <Image
            src={topNews?.imageUrl as string}
            alt={topNews?.title as string}
            fill
            unoptimized
            className="object-cover h-150 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-4 left-4 bg-white/90 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full">
            {topNews?.newsCategory.category}
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <Link href={`/news/${topNews?.id}`} className="block">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-emerald-400 transition-colors">
                {topNews?.title}
              </h2>
            </Link>
            <p className="text-zinc-300 text-sm md:text-base line-clamp-2 max-w-2xl"></p>
          </div>
        </motion.div>

        {/* Side Articles */}
        <div className="flex flex-col gap-6 justify-between h-full">
          {sideNews?.data?.slice(1).map((news, index) => (
            <Link
              href={`/news/${news.id}`}
              className="block"
              prefetch={true}
              key={news.id}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="relative w-28 h-20 md:w-32 md:h-24 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={news.imageUrl as string}
                    alt={news.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    // className="object-cover h-30 transition-transform duration-500 group-hover:scale-105"
                    sizes="128px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row gap-2">
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-emerald-50 px-3 text-xs font-medium text-sky-700 dark:border-sky-800/50 dark:bg-emerald-900/30 dark:text-sky-400">
                      {formatReadableDate(news.createdAt)}
                    </span>
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 dark:bg-amber-300 px-3 text-xs font-medium text-amber-700 dark:border-amber-800/50 dark:text-amber-400">
                      {news.user.username}
                    </span>
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
