import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { NewsItem } from "@/types/dto/news";
import {
  formatNewsDate,
  getCategoryHref,
  getNewsHref,
  stripHtml,
} from "@/lib/news-utils";
import { NewsImage } from "./news-image";

interface NewsCardProps {
  news: NewsItem;
  priority?: boolean;
  compact?: boolean;
}

export function NewsCard({
  news,
  priority = false,
  compact = false,
}: NewsCardProps) {
  return (
    <article className="group border border-zinc-950 bg-white">
      {!compact && (
        <Link
          href={getNewsHref(news)}
          aria-label={news.title}
          className="block border-b border-zinc-950"
        >
          <NewsImage news={news} priority={priority} />
        </Link>
      )}

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <Link href={getCategoryHref(news.newsCategory)}>
            <Badge className="rounded-none bg-emerald-600 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white hover:bg-emerald-700">
              {news.newsCategory.category}
            </Badge>
          </Link>

          <time
            dateTime={news.createdAt}
            className="text-xs uppercase tracking-[0.14em] text-zinc-500"
          >
            {formatNewsDate(news.createdAt)}
          </time>
        </div>

        <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-zinc-950">
          <Link
            href={getNewsHref(news)}
            className="underline-offset-4 group-hover:underline"
          >
            {news.title}
          </Link>
        </h3>

        {!compact && (
          <p className="line-clamp-3 text-sm leading-6 text-zinc-700">
            {stripHtml(news.content, 140)}
          </p>
        )}
      </div>
    </article>
  );
}