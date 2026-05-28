import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  getNewsHref,
  stripHtml,
} from "@/lib/news-utils";
import { NewsItem } from "@/types/dto/news";
import { getAllNewsCategoryService, getNewsWithLimitService } from "@/features/news/services";
import { CategoryNav } from "@/features/news/components/category-nav";
import { NewsSearch } from "@/features/news/components/news-search";
import { NewsHeadline } from "@/features/news/components/news-headline";
import { JsonLd } from "@/features/news/components/json-ld";
import { LatestWires } from "@/features/news/components/latest-wires";

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Berita Terkini dan Analisis Mendalam`,
  description:
    "Portal berita modern dengan headline terkini, analisis mendalam, kategori editorial, dan laporan terbaru.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} | Berita Terkini`,
    description:
      "Headline terbaru, analisis, dan berita pilihan dari berbagai kategori.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Berita Terkini`,
    description:
      "Headline terbaru, analisis, dan berita pilihan dari berbagai kategori.",
  },
};

export default async function HomePage() {
  const [newsResponse, categoriesResponse] = await Promise.all([
    getNewsWithLimitService(14),
    getAllNewsCategoryService(),
  ]);

  const news = newsResponse?.data ?? [];
  const categories = categoriesResponse ?? [];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Latest News`,
    itemListElement: news.slice(0, 10).map((item: NewsItem, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${getNewsHref(item)}`,
      name: item.title,
      description: stripHtml(item.content, 120),
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <main className="min-h-screen bg-white text-zinc-950">
        <header className="border-b border-zinc-950 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 inline-block bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Independent Editorial
              </p>

              <h1 className="font-serif text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
                The Emerald Public
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
                Berita utama, laporan mendalam, dan analisis tajam dalam format
                editorial modern.
              </p>
            </div>

            <div className="border border-zinc-950 px-4 py-3 text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                Updated
              </p>
              <p className="mt-1 text-sm font-black text-zinc-950">
                Real-time newsroom
              </p>
            </div>
          </div>
        </header>

        <CategoryNav categories={categories} />

        <div className="mx-auto max-w-7xl space-y-10 px-4 py-8">
          <NewsSearch />

          <NewsHeadline items={news} />

          <section
            aria-labelledby="latest-section-title"
            className="grid gap-8 lg:grid-cols-[1fr_330px]"
          >
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-zinc-950 pb-3">
                <h2
                  id="latest-section-title"
                  className="text-2xl font-black uppercase tracking-[-0.04em]"
                >
                  Latest Reports
                </h2>

                <p className="text-xs uppercase tracking-[0.18em] text-emerald-700">
                  Updated hourly
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {news.slice(4, 10).map((item: NewsItem) => (
                  <article
                    key={item.id}
                    className="border border-zinc-950 p-4"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                      {item.newsCategory.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">
                      <a href={getNewsHref(item)}>{item.title}</a>
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-700">
                      {stripHtml(item.content, 150)}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <LatestWires items={news} />
          </section>
        </div>
      </main>
    </>
  );
}