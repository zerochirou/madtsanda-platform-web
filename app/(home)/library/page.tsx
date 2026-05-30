import { LibraryClient } from "@/features/library/components";

export const metadata = {
  title: "Perpustakaan Digital & Fisik | MTsN 2 Kota Kediri",
  description: "Cari dan temukan ribuan koleksi buku, e-book, jurnal, dan karya tulis ilmiah berkualitas tinggi di Perpustakaan MTsN 2 Kota Kediri.",
};

export default function LibraryPage() {
  return (
    <div className="mt-20 min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white">
      <LibraryClient />
    </div>
  );
}
