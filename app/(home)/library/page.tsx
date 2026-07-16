import { LibraryClient } from "@/features/library/components";
import { PageHero } from "@/components/animation/animations";
import { getPublicLibraryService } from "@/features/library/service";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Perpustakaan Digital & Fisik | MTsN 2 Kota Kediri",
  description:
    "Cari dan temukan ribuan koleksi buku, e-book, jurnal, dan karya tulis ilmiah berkualitas tinggi di Perpustakaan MTsN 2 Kota Kediri.",
  path: "/library",
  keywords: ["perpustakaan MTsN 2 Kota Kediri", "perpustakaan Madtsanda", "koleksi buku murid"],
});

export default async function LibraryPage() {
  const library = await getPublicLibraryService();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            collectionJsonLd({
              name: "Perpustakaan MTsN 2 Kota Kediri",
              description:
                "Katalog buku, e-book, jurnal, dan karya literasi MTsN 2 Kota Kediri.",
              path: "/library",
            }),
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Perpustakaan", path: "/library" },
            ]),
          ]),
        }}
      />
      <PageHero
        title="Gerbang Ilmu Digital & Fisik"
        subtitle="Perpustakaan Madrasah"
        description="Akses ribuan koleksi buku, e-book, dan jurnal ilmiah untuk mendukung pembelajaran interaktif serta riset kolaboratif murid Madtsanda."
        imageSrc="/images/perpustakaan2.jpg"
      />
      <LibraryClient books={library?.data ?? []} />
    </div>
  );
}
