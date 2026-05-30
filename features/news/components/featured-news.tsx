import Image from "next/image";
import Link from "next/link";
import { CalendarDays, PenLine, UserRound } from "lucide-react";
import type { NewsItem, NewsResponseDTO } from "@/types/dto/news";
import { formatReadableDate } from "@/lib/date";
import { Avatar, AvatarFallback, Badge, Button } from "@/components/ui";
import { BlockRenderDynamicNoType } from "@/components/shared/block-render";
import { getNewsImage } from "@/lib/news";

const newsImageFallback = "/images/kegiatan-sekolah.jpg";

function NewsMeta({
  category,
  date,
  username,
}: {
  category: string;
  date: string;
  username: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25">
        {category}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
        <CalendarDays className="size-3.5" />
        {formatReadableDate(date)}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
        <UserRound className="size-3.5" />
        {username}
      </span>
    </div>
  );
}

export function FeaturedNews({
  sideNews,
  topNews,
}: {
  sideNews: NewsResponseDTO | null;
  topNews: NewsItem | undefined;
}) {
  const sideArticles =
    sideNews?.data?.filter((news) => news.id !== topNews?.id).slice(0, 4) ?? [];

  if (!topNews) {
    return (
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 md:px-6">
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            Berita utama belum tersedia.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 md:px-6">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="border-b border-zinc-200 px-4 py-4 dark:border-zinc-800 md:px-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-500">
                Madtsanda News
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
                Berita & Pengumuman Madrasah
              </h1>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Kabar terbaru dari MTsN 2 Kota Kediri, dirangkum rapi untuk warga
              madrasah dan keluarga Madtsanda.
            </p>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr_0.9fr]">
          <div className="group block border-b border-zinc-200 p-4 dark:border-zinc-800 lg:border-b-0 lg:border-r md:p-6">
            <div className="mb-2 flex flex-row items-center gap-2">
              <Avatar className="">
                <AvatarFallback className="bg-emerald-400 text-white font-semibold">
                  {topNews.user.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-row items-center gap-1">
                <span className="font-semibold text-lg">
                  {topNews.user.username}
                </span>
                <Badge variant={"outline"}>{topNews.user.role}</Badge>
              </div>
            </div>
            <h2 className="text-2xl mb-2 font-bold leading-tight text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300 md:text-3xl">
              {topNews.title}
            </h2>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={getNewsImage(topNews.title, topNews.imageUrl)}
                alt={topNews.title}
                fill
                unoptimized
                priority
                fetchPriority="high"
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
            <div className="mt-5 space-y-4">
              <NewsMeta
                category={topNews.newsCategory.category}
                date={topNews.createdAt}
                username={topNews.user.username}
              />
              <div className="relative max-h-60 overflow-hidden ">
                <div className="prose prose-md">
                  <BlockRenderDynamicNoType md={topNews.content} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80 pointer-events-none" />
              </div>
              <Link href={`/news/${topNews.id}`}>
                <Button variant={"outline"} className="">
                  Baca berita utama
                  <PenLine className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="divide-y divide-zinc-200 border-b border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800 lg:border-b-0 lg:border-r">
            {sideArticles.slice(0, 2).map((news) => (
              <Link
                href={`/news/${news.id}`}
                key={news.id}
                className="group grid min-h-52 content-between gap-4 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-950 md:p-6"
              >
                <NewsMeta
                  category={news.newsCategory.category}
                  date={news.createdAt}
                  username={news.user.username}
                />
                <h3 className="text-xl font-bold leading-snug text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                  {news.title}
                </h3>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 lg:aspect-[4/3]">
                  <Image
                    src={getNewsImage(news.title, news.imageUrl)}
                    alt={news.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 96px, 22vw"
                  />
                </div>
                <span className="text-xs font-semibold text-zinc-400">
                  Baca selengkapnya
                </span>
              </Link>
            ))}
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {sideArticles.slice(2, 4).map((news) => (
              <Link
                href={`/news/${news.id}`}
                key={news.id}
                className="group grid grid-cols-[96px_1fr] gap-4 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-950 md:p-6 lg:grid-cols-1"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 lg:aspect-[4/3]">
                  <Image
                    src={getNewsImage(news.title, news.imageUrl)}
                    alt={news.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 96px, 22vw"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                    {news.newsCategory.category}
                  </span>
                  <h3 className="line-clamp-3 text-sm font-bold leading-snug text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300 md:text-base">
                    {news.title}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {formatReadableDate(news.createdAt)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
