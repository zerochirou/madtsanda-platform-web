import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Tag, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNewsByIdService } from "@/features/news/services";
import { formatReadableDate } from "@/lib/date";
import { BlockRenderDynamic } from "@/components/shared/block-render";
import { Share } from "@/features/news/components/share";
import {
  breadcrumbJsonLd,
  buildMetadata,
  newsArticleJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

const newsImageFallback = "/images/kegiatan-sekolah.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsByIdService(id);

  if (!news) {
    return buildMetadata({
      title: "Berita tidak ditemukan",
      description: "Berita MTsN 2 Kota Kediri tidak ditemukan.",
      path: `/news/${id}`,
    });
  }

  return buildMetadata({
    title: news.data.title,
    description: news.data.content.replace(/[#*_>`]/g, "").slice(0, 160),
    path: `/news/${news.data.id}`,
    image: news.data.imageUrl ?? newsImageFallback,
    type: "article",
    publishedTime: news.data.createdAt,
    modifiedTime: news.data.updatedAt,
    authors: [news.data.user?.username || "Redaksi Madtsanda"],
    keywords: [news.data.newsCategory?.category || "Berita Madtsanda"],
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

    const news = await getNewsByIdService(id);

  if (!news) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-4 text-center dark:bg-zinc-950">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">
          Madtsanda News
        </p>
        <h1 className="mb-4 text-2xl font-bold text-zinc-950 dark:text-white">
          Berita tidak ditemukan
        </h1>
        <Link href="/news">
          <Button variant="outline">Kembali ke Madtsanda News</Button>
        </Link>
      </div>
    );
  }
  const image = `${process.env.NEXT_PUBLIC_S3}/${news.data.imageUrl}`;

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-24 transition-colors duration-300 dark:bg-zinc-950 md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            newsArticleJsonLd(news.data),
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Berita", path: "/news" },
              { name: news.data.title, path: `/news/${news.data.id}` },
            ]),
          ]),
        }}
      />
      <article className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/news"
            className="group inline-flex items-center text-sm font-semibold text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Madtsanda News
          </Link>
        </div>

        <header className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="space-y-6 border-b border-zinc-200 p-5 dark:border-zinc-800 md:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25">
                <Tag className="size-3.5" />
                {news.data.newsCategory.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
                <CalendarDays className="size-3.5" />
                <span>{formatReadableDate(news.data.createdAt)}</span>
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-zinc-950 dark:text-white md:text-5xl">
              {news.data.title}
            </h1>

            <div className="flex flex-col gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow-sm shadow-emerald-500/30">
                  {news.data.user.username.slice(0, 1)}
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-950 dark:text-white">
                    {news.data.user.username}
                  </p>
                  <p className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <UserRound className="size-3" />
                    Editor Madtsanda
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Share id={news.data.id} />
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image
                src={`${process.env.NEXT_PUBLIC_S3}/${news.data.imageKey}`}
              alt={news.data.title}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              fetchPriority="high"
              priority
            />
          </div>
        </header>

        <div className="prose-lg prose-zinc mx-auto mt-10 max-w-4xl dark:prose-invert">
          <BlockRenderDynamic
            md={news.data.content}
            name={news.data.user.username}
                  />
        </div>

        <footer className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-zinc-500">Tags:</span>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {news.data.newsCategory.category}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
