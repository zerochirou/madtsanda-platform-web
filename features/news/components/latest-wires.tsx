import Link from "next/link";
import type { NewsItem } from "@/types/dto/news";
import { formatNewsDate, getNewsHref } from "@/lib/news-utils";

interface LatestWiresProps {
  items: NewsItem[];
}

export function LatestWires({ items }: LatestWiresProps) {
  return (
    <aside
      aria-labelledby="latest-wires-title"
      className="border border-zinc-950 bg-zinc-50"
    >
      <h2
        id="latest-wires-title"
        className="border-b border-zinc-950 bg-emerald-600 px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-white"
      >
        Latest Wires
      </h2>

      <ol>
        {items.slice(0, 8).map((news) => (
          <li key={news.id} className="border-b border-zinc-300 last:border-b-0">
            <Link href={getNewsHref(news)} className="block p-4 hover:bg-white">
              <time
                dateTime={news.createdAt}
                className="text-[11px] uppercase tracking-[0.12em] text-zinc-500"
              >
                {formatNewsDate(news.createdAt)}
              </time>

              <p className="mt-1 text-sm font-bold leading-5 text-zinc-950">
                {news.title}
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}