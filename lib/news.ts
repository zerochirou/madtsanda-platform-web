export function getNewsImage(title: string, dbImageUrl: string | null): string {
  if (!title) return dbImageUrl || "/images/kegiatan-sekolah.jpg";
  const t = title.toLowerCase();
  if (t.includes("tka di mtsn")) return "/images/news/berita-01.jpg";
  if (t.includes("persiapan tka") || t.includes("apel pagi")) return "/images/news/berita-02.jpg";
  if (t.includes("rihlah spiritual")) return "/images/news/berita-03.jpg";
  if (t.includes("ramadan") || t.includes("al-ma'un")) return "/images/news/berita-04.jpg";
  if (t.includes("dua hari mengguncang") || t.includes("generasi peneliti masa depan")) return "/images/news/berita-05.jpg";
  if (t.includes("gelar riset camp")) return "/images/news/berita-06.jpg";
  if (t.includes("menyalakan api riset") || t.includes("hari pertama riset camp")) return "/images/news/berita-07.jpg";
  if (t.includes("hab kemenag")) return "/images/news/berita-08.jpg";
  if (t.includes("studi tiru")) return "/images/news/berita-09.jpg";
  return dbImageUrl || "/images/kegiatan-sekolah.jpg";
}

export function resolveNewsImageUrl(item?: { imageUrl?: string | null; imageKey?: string | null; title?: string } | null): string {
  if (!item) return "/images/kegiatan-sekolah.jpg";

  if (item.imageUrl && (item.imageUrl.startsWith("http://") || item.imageUrl.startsWith("https://"))) {
    return item.imageUrl;
  }

  if (item.imageUrl && item.imageUrl.startsWith("/")) {
    const apiBase = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1").replace(/\/api\/v1\/?$/, "");
    return `${apiBase}${item.imageUrl}`;
  }

  if (item.imageKey) {
    const s3Base = (process.env.NEXT_PUBLIC_S3 || "http://localhost:9000/madtsanda-platform-storage").replace(/\/$/, "");
    return `${s3Base}/${item.imageKey.replace(/^\//, "")}`;
  }

  return getNewsImage(item.title || "", item.imageUrl || null);
}
