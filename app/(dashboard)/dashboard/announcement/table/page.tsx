import { FileQuestion, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnnouncementTablePage() {
  return (
    <div className="flex flex-col flex-1 p-6 gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pengumuman</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Kelola semua pengumuman madrasah di sini.
          </p>
        </div>
        <Link href="/dashboard/announcement/create">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
            <Plus className="h-4 w-4" />
            Buat Pengumuman
          </Button>
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-8 text-center min-h-[400px]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 mb-6">
          <FileQuestion className="h-10 w-10 text-zinc-400 dark:text-zinc-500" />
        </div>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Belum Ada Pengumuman
        </h2>
        <p className="max-w-md text-zinc-500 dark:text-zinc-400 mb-6">
          Saat ini belum ada pengumuman yang dibuat. Klik tombol di atas untuk membuat pengumuman baru.
        </p>
        <Link href="/dashboard/announcement/create">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Buat Pengumuman Baru
          </Button>
        </Link>
      </div>
    </div>
  );
}