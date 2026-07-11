import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { NewsItem, NewsResponseDTO } from "@/types/dto/news";
import { formatReadableDate } from "@/lib/date";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper, Tag, UserRound } from "lucide-react";
import { getNewsImage } from "@/lib/news";

const NewsCard = ({ item, index }: { item: NewsItem; index: number }) => {
  return (
    <Link
      href={`/news/${item.id}`}
      className={`group grid overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/50 ${
        index === 0 ? "lg:grid-cols-[1.1fr_0.9fr] lg:col-span-2" : ""
      }`}
    >
      <div className="relative min-h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3}/${item.imageKey}`}
          alt={item.title}
          fill
          placeholder="empty"
          unoptimized
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes={index === 0 ? "(max-width: 1024px) 100vw, 44vw" : "(max-width: 768px) 100vw, 33vw"}
          priority={index === 0}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25">
            <Tag className="size-3.5" />
            {item.newsCategory.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
            <CalendarDays className="size-3.5" />
            {formatReadableDate(item.createdAt)}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
            <UserRound className="size-3.5" />
            {item.user.username}
          </span>
        </div>
        <h3 className="mb-5 line-clamp-3 text-xl font-bold leading-snug text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300 lg:text-2xl">
          {item.title}
        </h3>
        <div className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
          Baca selengkapnya
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export const Newsroom = ({ news }: { news: NewsResponseDTO | null }) => {
  const items = news?.data?.slice(0, 4) ?? [];

  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-zinc-950 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-500">
              <span className="h-px w-8 bg-emerald-500" />
              Newsroom
            </p>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
              Berita & Pengumuman Madrasah
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Kabar Madtsanda dalam format editorial yang ringkas, mudah
              dipindai, dan tetap terhubung dengan aktivitas madrasah.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <Link href={"/news"}>
              <Button variant="outline" className="border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                Lihat semua
              </Button>
            </Link>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            {items.map((item, index) => {
              return <NewsCard item={item} index={index} key={item.id} />;
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <Newspaper className="mx-auto mb-4 size-10 text-zinc-400" />
            <h3 className="text-xl font-black text-zinc-950 dark:text-white">
              Berita belum tersedia.
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Kabar terbaru akan muncul otomatis setelah dipublikasikan melalui
              Madtsanda Connect.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
