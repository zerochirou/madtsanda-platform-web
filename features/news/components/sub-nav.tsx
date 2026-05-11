"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/components/data/news";
import { NewsCategoryDTO } from "@/types/dto/news-category";

export function NewsSubnav({
  categories,
}: {
  categories: NewsCategoryDTO[] | null;
}) {
  return (
    <div className="sticky mx-auto max-w-7xl z-40 top-[84px] md:top-[96px] flex justify-center px-4 mt-2 md:mt-4 mb-8 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-7xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-start">
        <div
          className="flex items-center space-x-6 overflow-x-auto w-full pb-1 md:pb-0 scrollbar-hide hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/news/category/${category.id}`}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {category.category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
