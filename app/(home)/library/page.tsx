import { LibraryClient } from "@/features/library/components";
import { PageHero } from "@/components/animation/animations";

export const metadata = {
  title: "Perpustakaan Digital & Fisik | MTsN 2 Kota Kediri",
  description: "Cari dan temukan ribuan koleksi buku, e-book, jurnal, dan karya tulis ilmiah berkualitas tinggi di Perpustakaan MTsN 2 Kota Kediri.",
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300">
      <PageHero
        title="Gerbang Ilmu Digital & Fisik"
        subtitle="Perpustakaan Madrasah"
        description="Akses ribuan koleksi buku, e-book, dan jurnal ilmiah untuk mendukung pembelajaran interaktif serta riset kolaboratif siswa-siswi Madtsanda."
        imageSrc="/images/perpustakaan2.jpg"
      />
      <LibraryClient />
    </div>
  );
}
