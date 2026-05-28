import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SITE_NAME,
  SITE_URL,
  getCategoryHref,
  getNewsHref,
  slugify,
  stripHtml,
} from "@/lib/news-utils";
import { getAllNewsCategoryService, getNewsByCategoryIdService, getNewsCategoryBySlugService } from "@/features/news/services";
import { JsonLd } from "@/features/news/components/json-ld";
import { CategoryNav } from "@/features/news/components/category-nav";
import { NewsCard } from "@/features/news/components/news-card";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const categories = await getAllNewsCategoryService();

  return (
    categories?.map((category) => ({
      slug: slugify(category.category),
    })) ?? []
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getNewsCategoryBySlugService(slug);

  if (!category) {
    return {
      title: `Kategori tidak ditemukan | ${SITE_NAME}`,
    };
  }

  const title = `${category.category} News | ${SITE_NAME}`;
  const description = `Kumpulan berita terbaru dalam kategori ${category.category}.`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: getCategoryHref(category),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${getCategoryHref(category)}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const [category, allCategories] = await Promise.all([
    getNewsCategoryBySlugService(slug),
    getAllNewsCategoryService(),
  ]);

  if (!category) notFound();

  const response = await getNewsByCategoryIdService(category.id);
  const news = response?.data ?? [];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.category} News`,
    url: `${SITE_URL}${getCategoryHref(category)}`,
    hasPart: news.map((item) => ({
      "@type": "NewsArticle",
      headline: item.title,
      url: `${SITE_URL}${getNewsHref(item)}`,
      description: stripHtml(item.content, 150),
      datePublished: item.createdAt,
      dateModified: item.updatedAt,
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <main className="min-h-screen bg-white text-zinc-950">
        <header className="border-b border-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <p className="mb-3 inline-block bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white">
              Category
            </p>

            <h1 className="font-serif text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              {category.category}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
              Berita terbaru dan artikel pilihan dalam kategori{" "}
              <strong>{category.category}</strong>.
            </p>
          </div>
        </header>

        <CategoryNav categories={allCategories ?? []} />

        <section
          aria-labelledby="category-news-title"
          className="mx-auto max-w-7xl px-4 py-8"
        >
          <div className="mb-5 flex items-end justify-between border-b border-zinc-950 pb-3">
            <h2
              id="category-news-title"
              className="text-2xl font-black uppercase tracking-[-0.04em]"
            >
              Semua Berita {category.category}
            </h2>

            <p className="text-sm text-zinc-500">{news.length} berita</p>
          </div>

          {news.length === 0 ? (
            <div className="border border-zinc-950 p-8">
              <p className="text-sm text-zinc-600">
                Belum ada berita pada kategori ini.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}