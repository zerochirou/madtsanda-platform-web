import Link from "next/link";
import type { NewsCategoryDTO } from "@/types/dto/news-category";
import { getCategoryHref } from "@/lib/news-utils";

interface CategoryNavProps {
  categories: NewsCategoryDTO[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <nav
      aria-label="Kategori berita"
      className="border-y border-zinc-950 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center overflow-x-auto px-4">
        <Link
          href="/"
          className="border-x border-zinc-950 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] hover:bg-emerald-50"
        >
          Latest
        </Link>

        <ul className="flex">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={getCategoryHref(category)}
                className="block border-r border-zinc-950 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-emerald-50"
              >
                {category.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}