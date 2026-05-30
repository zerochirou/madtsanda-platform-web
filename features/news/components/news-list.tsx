import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Tag, UserRound } from "lucide-react";
import type { NewsPaginateDTO } from "@/types/dto/news";
import { formatReadableDate } from "@/lib/date";
import { Skeleton } from "@/components/ui/skeleton";
import { getNewsImage } from "@/lib/news";

const newsImageFallback = "/images/kegiatan-sekolah.jpg";

function NewsCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-none dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative w-full aspect-4/3">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="p-5 flex flex-col grow gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-20" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[80%]" />
        </div>
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
  weeklyNews: NewsPaginateDTO | null;
}) {
  const isLoading = !weeklyNews;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <div className="mb-6 flex flex-col gap-3 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">
            Arsip Berita
          </p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white md:text-3xl">
            Update Terbaru Madtsanda
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          Informasi kegiatan, pengumuman, dan publikasi madrasah dalam tampilan
          ringkas untuk dibaca cepat.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => <NewsCardSkeleton key={i} />)
        ) : (
          weeklyNews?.data?.map((news) => (
            <Link
              href={`/news/${news.id}`}
              key={news.id}
              className="group grid h-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/50"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={getNewsImage(news.title, news.imageUrl)}
                  alt={news.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex grow flex-col p-5">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25">
                    <Tag className="size-3.5" />
                      {news.newsCategory.category}
                  </span>
                  <span
                    suppressHydrationWarning
                    className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                  >
                    <CalendarDays className="size-3.5" />
                      {formatReadableDate(news.createdAt)}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
                    <UserRound className="size-3.5" />
                    {news.user.username}
                  </span>
                </div>
                <h3 className="mb-5 line-clamp-3 text-lg font-bold leading-snug text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                  {news.title}
                </h3>
                <div className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-colors dark:text-emerald-300">
                  Baca selengkapnya
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
