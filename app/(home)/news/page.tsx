import { FeaturedNews, NewsList, NewsSubnav } from "@/features/news/components";
import {
  getAllNewsCategoryService,
  getNewsWithLimitService,
  getNewsWithPaginate,
} from "@/features/news/services";
import { DynamicPagination } from "@/features/news/components/paginate";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Berita MTsN 2 Kota Kediri | Kegiatan, Prestasi, dan Informasi",
  description:
    "Baca berita resmi MTsN 2 Kota Kediri tentang kegiatan madrasah, prestasi murid, agenda akademik, sosial keagamaan, dan informasi publik.",
  path: "/news",
  keywords: ["berita MTsN 2 Kota Kediri", "kegiatan Madtsanda", "prestasi murid Kediri"],
});

export default async function News({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const [newsCategory, featuredNews, news] = await Promise.all([
    getAllNewsCategoryService(),
    getNewsWithLimitService(5),
    getNewsWithPaginate(currentPage),
  ]);

  const totalPage = news?.metadata.lastPage;

  return (
    <div
      id="home"
      className="min-h-screen bg-zinc-50 pb-12 pt-[54px] selection:bg-emerald-500/30 selection:text-emerald-900 transition-colors duration-300 dark:bg-zinc-950 dark:selection:text-emerald-100 md:pt-[64px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            collectionJsonLd({
              name: "Berita MTsN 2 Kota Kediri",
              description:
                "Kumpulan berita resmi, kegiatan, dan prestasi MTsN 2 Kota Kediri.",
              path: "/news",
            }),
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Berita", path: "/news" },
            ]),
          ]),
        }}
      />
      <NewsSubnav categories={newsCategory} />
      <FeaturedNews sideNews={featuredNews} topNews={featuredNews?.data[0]} />
      <NewsList weeklyNews={news} />
      <DynamicPagination totalPages={totalPage ? totalPage : 0} />
    </div>
  );
}
