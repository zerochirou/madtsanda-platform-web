import { Button } from "@/components/ui";
import { getNewsByCategoryIdService } from "@/features/news/services";
import { formatReadableDate } from "@/lib/date";
import { ArrowLeft, ArrowRight, CalendarDays, Tag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsImageFallback = "/images/kegiatan-sekolah.jpg";

export default async function NewsCategory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsByCategoryIdService(id);
  
  if (!news?.data || news.data.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50 pt-28 transition-colors dark:bg-zinc-950">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center md:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">
            Madtsanda News
          </p>
          <h2 className="mb-3 text-3xl font-bold text-zinc-950 dark:text-white md:text-4xl">
            Tidak ada berita
          </h2>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            Tidak ada berita yang ditemukan untuk kategori ini.
          </p>
          <Link href="/news">
            <Button className="mt-6 border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300" variant="outline">
              <ArrowLeft className="size-4" />
              Kembali ke berita
            </Button>
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="min-h-screen bg-zinc-50 pb-16 pt-28 transition-colors dark:bg-zinc-950">
        <section className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="border-b border-zinc-200 px-5 py-6 dark:border-zinc-800 md:px-8 md:py-8">
              <Link
                href="/news"
                className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-300"
              >
                <ArrowLeft className="size-4" />
                Kembali ke Madtsanda News
              </Link>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">
                Kategori Berita
              </p>
              <h1 className="mt-2 text-3xl font-bold capitalize tracking-tight text-zinc-950 dark:text-white md:text-5xl">
                {news.data[0].newsCategory.category}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Ikuti berita {news.data[0].newsCategory.category} dari MTsN 2
                Kota Kediri dalam format ringkas dan mudah dipindai.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {news.data.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group flex h-full flex-col border-b border-zinc-200 p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-950 sm:border-r"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={item.imageUrl ?? newsImageFallback}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex grow flex-col pt-4">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
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
                    <h2 className="mb-5 line-clamp-3 text-lg font-bold leading-snug text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                      {item.title}
                    </h2>
                    <div className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                      Baca selengkapnya
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
              </div>
    );
  }
}
