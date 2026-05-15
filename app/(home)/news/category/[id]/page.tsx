import { Button } from "@/components/ui";
import { getNewsByCategoryIdService } from "@/features/news/services";
import { formatReadableDate } from "@/lib/date";
import { ArrowRight, ChevronRight, LucideListCollapse } from "lucide-react";
import Link from "next/link";

export default async function NewsCategory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsByCategoryIdService(id);
  
  if (!news?.data || news.data.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 items-center justify-center flex flex-col h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3 capitalize">
          Tidak ada berita
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Tidak ada berita yang ditemukan untuk kategori ini.
        </p>
        <Link href="/news">
          <Button className="mt-4 bg-emerald-400" variant={'secondary'}>
            Kembali ke berita <ChevronRight/>
          </Button>
        </Link>
      </div>
    )
  } else {
    return (
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 border-t border-zinc-200 dark:border-zinc-800 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3 capitalize">
            {news?.data[0].newsCategory.category}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Ikuti berita {news?.data[0].newsCategory.category} kami. yang menghadirkan tren, wawasan, dan perkembangan terbaru dari <span className="text-emerald-400">MTsN 2 Kota Kediri.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news?.data?.map((news) => (
            <div
              key={news.id}
              className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={news.imageUrl as string}
                  alt={news.title}
                  // fill
                  className="object-cover h-60 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                  <span>{formatReadableDate(news.createdAt)}</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span className="bg-emerald-500 rounded-2xl px-2 py-0.5 text-white">
                    {news.newsCategory.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-500 transition-colors mb-4 line-clamp-3">
                  {news.title}
                </h3>

                <div className="mt-auto">
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
