import { NewsSubnav } from "@/features/news/components/sub-nav";
import { FeaturedNews } from "@/features/news/components/featured-nav";
import { NewsList } from "@/features/news/components/news-list";
import {
  getAllNewsCategoryService,
  getNewsWithLimitService,
  getNewsWithPaginate,
} from "@/features/news/services";
import { DynamicPagination } from "@/features/news/components/paginate";

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
      className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100 pb-12 pt-[54px] md:pt-[64px]"
    >
      <NewsSubnav categories={newsCategory} />
      <FeaturedNews sideNews={featuredNews} topNews={featuredNews?.data[0]} />
      <NewsList weeklyNews={news} />
      <DynamicPagination totalPages={totalPage ? totalPage : 0} />
    </div>
  );
}
