import Link from "next/link";
import type { NewsCategoryDTO } from "@/types/dto/news-category";

export function NewsSubnav({
  categories,
}: {
  categories: NewsCategoryDTO[] | null;
}) {
  return (
    <div className="pointer-events-none sticky top-[112px] z-40 mx-auto mb-4 mt-2 flex max-w-7xl justify-center px-4 sm:top-[124px] md:mt-4">
      <div className="pointer-events-auto flex w-full max-w-7xl items-center justify-start rounded-2xl border border-zinc-200 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90 md:px-6 md:py-3">
        <div
          className="flex w-full items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Link
            href="/news"
            className="whitespace-nowrap rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
          >
            Semua
          </Link>
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/news/category/${category.id}`}
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-emerald-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-emerald-300"
            >
              {category.category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
