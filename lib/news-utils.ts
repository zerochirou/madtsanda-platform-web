import type { NewsCategoryDTO } from "@/types/dto/news-category";
import type { NewsItem } from "@/types/dto/news";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Emerald News";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function stripHtml(value: string, maxLength = 160): string {
  const text = value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;

  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
}

export function formatNewsDate(value: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(value));
}

export function getNewsHref(news: Pick<NewsItem, "id">): string {
  return `/news/${news.id}`;
}

export function getCategoryHref(category: NewsCategoryDTO): string {
  return `/category/${slugify(category.category)}`;
}

export function sortNewsByPriority(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => {
    const pinDiff = Number(b.pin ?? 0) - Number(a.pin ?? 0);
    if (pinDiff !== 0) return pinDiff;

    return (
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  });
}

export function getAuthorName(user: unknown): string {
  if (!user || typeof user !== "object") return SITE_NAME;

  const maybeUser = user as {
    name?: unknown;
    username?: unknown;
    email?: unknown;
  };

  if (typeof maybeUser.name === "string") return maybeUser.name;
  if (typeof maybeUser.username === "string") return maybeUser.username;
  if (typeof maybeUser.email === "string") return maybeUser.email;

  return SITE_NAME;
}