"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import type { NewsItem } from "@/types/dto/news";
import { getNewsHref, stripHtml } from "@/lib/news-utils";
import { searchNewsService } from "../services";

function useDebouncedValue<T>(value: T, delay = 450): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

export function NewsSearch() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebouncedValue(query, 450);

  const shouldSearch = useMemo(
    () => debouncedQuery.trim().length >= 2,
    [debouncedQuery],
  );

  useEffect(() => {
    let active = true;

    async function runSearch() {
      if (!shouldSearch) {
        setItems([]);
        return;
      }

      setLoading(true);

      const response = await searchNewsService(debouncedQuery, 8);

      if (active) {
        setItems(response?.data ?? []);
        setLoading(false);
      }
    }

    runSearch();

    return () => {
      active = false;
    };
  }, [debouncedQuery, shouldSearch]);

  return (
    <section
      aria-labelledby="news-search-title"
      className="border border-zinc-950 bg-white"
    >
      <div className="grid gap-4 border-b border-zinc-950 p-4 md:grid-cols-[220px_1fr] md:items-center">
        <div>
          <h2
            id="news-search-title"
            className="text-sm font-black uppercase tracking-[0.2em] text-zinc-950"
          >
            Search News
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Cari judul atau isi berita.
          </p>
        </div>

        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Contoh: sport, ekonomi, teknologi..."
          className="h-12 rounded-none border-zinc-950 focus-visible:ring-emerald-600"
          aria-label="Cari berita"
        />
      </div>

      <AnimatePresence initial={false}>
        {query.trim().length > 0 && (
          <motion.div
            key="search-results"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
            aria-live="polite"
          >
            <div className="divide-y divide-zinc-200">
              {loading && (
                <p className="p-4 text-sm text-zinc-500">Mencari berita...</p>
              )}

              {!loading && shouldSearch && items.length === 0 && (
                <p className="p-4 text-sm text-zinc-500">
                  Tidak ada berita yang cocok.
                </p>
              )}

              {!loading &&
                items.map((news) => (
                  <article key={news.id} className="p-4 hover:bg-emerald-50/50">
                    <Link href={getNewsHref(news)} className="block">
                      <h3 className="text-base font-black leading-tight text-zinc-950">
                        {news.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">
                        {stripHtml(news.content, 130)}
                      </p>
                    </Link>
                  </article>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}