import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { NewsItem } from "@/types/dto/news";
import {
  formatNewsDate,
  getCategoryHref,
  getNewsHref,
  sortNewsByPriority,
  stripHtml,
} from "@/lib/news-utils";
import { NewsCard } from "./news-card";
import { NewsImage } from "./news-image";
import { MotionReveal } from "./motion-reveals";

interface NewsHeadlineProps {
  items: NewsItem[];
}

export function NewsHeadline({ items }: NewsHeadlineProps) {
  const sorted = sortNewsByPriority(items);
  const [main, second, third, ...rest] = sorted;

  if (!main) {
    return (
      <section
        aria-label="Headline berita"
        className="border border-zinc-950 p-8"
      >
        <p className="text-sm text-zinc-600">Belum ada berita tersedia.</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="headline-title">
      <div className="grid border-x border-t border-zinc-950 lg:grid-cols-12">
        <MotionReveal className="lg:col-span-8">
          <article className="min-h-full border-b border-zinc-950 bg-white p-5 lg:border-b-0 lg:border-r">
            <div className="mb-4 flex items-center gap-3">
              <Link
                href={getCategoryHref(main.newsCategory)}
                className="bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white"
              >
                {main.newsCategory.category}
              </Link>

              <time
                dateTime={main.createdAt}
                className="text-xs uppercase tracking-[0.18em] text-zinc-500"
              >
                {formatNewsDate(main.createdAt)}
              </time>
            </div>

            <h1
              id="headline-title"
              className="max-w-5xl font-serif text-5xl font-black uppercase leading-[0.93] tracking-[-0.06em] text-zinc-950 md:text-7xl lg:text-8xl"
            >
              <Link href={getNewsHref(main)}>{main.title}</Link>
            </h1>

            <p className="mt-5 max-w-2xl border-l-4 border-emerald-600 pl-4 text-base leading-7 text-zinc-700">
              {stripHtml(main.content, 220)}
            </p>

            <div className="mt-6">
              <Button
                asChild
                className="rounded-none bg-zinc-950 text-white hover:bg-emerald-700"
              >
                <Link href={getNewsHref(main)}>Baca berita utama</Link>
              </Button>
            </div>
          </article>
        </MotionReveal>

        <aside className="grid lg:col-span-4" aria-label="Pilihan editor">
          {second && (
            <article className="border-b border-zinc-950 bg-white">
              <Link href={getNewsHref(second)} aria-label={second.title}>
                <NewsImage
                  news={second}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </Link>

              <div className="space-y-3 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">
                  Editor&apos;s Pick
                </p>

                <h2 className="text-xl font-black leading-tight tracking-[-0.03em]">
                  <Link
                    href={getNewsHref(second)}
                    className="underline-offset-4 hover:underline"
                  >
                    {second.title}
                  </Link>
                </h2>
              </div>
            </article>
          )}

          {third && <NewsCard news={third} compact />}
        </aside>
      </div>

      {rest.length > 0 && (
        <div className="grid border border-zinc-950 md:grid-cols-3">
          {rest.slice(0, 3).map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}
    </section>
  );
}