"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp } from "@/components/animation/animations";
import { NewsItem, NewsResponseDTO } from "@/types/dto/news";
import { formatReadableDate } from "@/lib/date";
import Link from "next/link";
import { ChevronRight, ClockFading, Tag, User } from "lucide-react";

const NewsCard = ({ item, index }: { item: NewsItem; index: number }) => {
  return (
    <FadeUp delay={index * 0.1} className="group cursor-pointer">
      <Card className="px-0 pt-0 pb-1 flex flex-col h-full border border-zinc-200 dark:border-zinc-700 border-dashed shadow-none overflow-hidden dark:bg-zinc-900  bg-transparent">
        <div className="relative rounded-xt-l overflow-hidden mb-1 h-64 lg:h-72">
          <Image
            src={item.imageUrl as string}
            alt={item.title}
            fill
            placeholder="empty"
            unoptimized={true}
            className="object-cover w-full group-hover:scale-110 transition duration-700"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <CardContent className="px-4 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex flex-row items-center gap-1 px-3 capitalize py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 text-xs font-bold rounded-full">
              <Tag className="w-4 h-4" />
              {item.newsCategory.category}
            </span>
            <span className="flex flex-row items-center gap-1 px-3 capitalize py-1 bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 text-xs font-bold rounded-full">
              <ClockFading className="w-4 h-4" />
              {formatReadableDate(item.createdAt)}
            </span>
            <span className="flex flex-row items-center gap-1 px-3 capitalize py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400 text-xs font-bold rounded-full">
              <User className="w-4 h-4" /> {item.user.username}
            </span>
          </div>
          <h3 className="text-xl mb-4 lg:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug line-clamp-2">
            {item.title}
          </h3>
          <div className="flex justify-end w-full">
            <Link href={`/news/${item.id}`}>
              <Button variant={"ghost"} className="text-lg">
                Baca selengkapnya <ChevronRight />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </FadeUp>
  );
};

export const Newsroom = ({ news }: { news: NewsResponseDTO | null }) => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
          <div>
            <p className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500"></span>
              Newsroom
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Berita & Pengumuman Madrasah
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <Link href={"/news"}>
              <Button variant="outline" className="bg-emerald-400">
                Lainnnya
              </Button>
            </Link>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {news?.data.map((item, index) => {
            return <NewsCard item={item} index={index} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
