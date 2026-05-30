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
