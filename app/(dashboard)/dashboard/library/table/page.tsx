import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LibraryList } from "@/features/dashboard/library/components";
import { getLibraryService } from "@/features/dashboard/library/service";

export default async function LibraryTablePage() {
  const library = await getLibraryService();

  return (
    <section className="space-y-6 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Digital Library</h1>
          <p className="text-muted-foreground">
            Kelola koleksi buku yang tampil di halaman publik.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/library/create">Tambah Koleksi</Link>
        </Button>
      </div>
      <LibraryList data={library?.data ?? []} />
    </section>
  );
}
