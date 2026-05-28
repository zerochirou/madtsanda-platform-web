import { FeaturedNews, NewsList, NewsSubnav } from "@/features/news/components";
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
      className="min-h-screen bg-zinc-50 pb-12 pt-[54px] selection:bg-emerald-500/30 selection:text-emerald-900 transition-colors duration-300 dark:bg-zinc-950 dark:selection:text-emerald-100 md:pt-[64px]"
    >
      <NewsSubnav categories={newsCategory} />
      <FeaturedNews sideNews={featuredNews} topNews={featuredNews?.data[0]} />
      <NewsList weeklyNews={news} />
      <DynamicPagination totalPages={totalPage ? totalPage : 0} />
    </div>
  );
}
