import { Megaphone } from "lucide-react";

export default function AnnouncementCreatePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-4rem)]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
        <Megaphone className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      </div>
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Fitur Segera Hadir
      </h2>
      <p className="max-w-md text-zinc-500 dark:text-zinc-400 text-lg">
        Pembuatan pengumuman saat ini sedang dalam tahap pengembangan. Fitur ini akan segera tersedia.
      </p>
    </div>
  );
}