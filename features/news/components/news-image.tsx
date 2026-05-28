import Image from "next/image";
import type { NewsItem } from "@/types/dto/news";

interface NewsImageProps {
  news: NewsItem;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function NewsImage({
  news,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: NewsImageProps) {
  return (
    <div
      className={[
        "relative aspect-[16/10] w-full overflow-hidden bg-zinc-100",
        className,
      ].join(" ")}
    >
      {news.imageUrl ? (
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 hover:scale-[1.025]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-emerald-950 text-sm uppercase tracking-[0.3em] text-emerald-100">
          News
        </div>
      )}
    </div>
  );
}