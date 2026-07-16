import { Wrench } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-4rem)]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-6">
        <Wrench className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Pengaturan Segera Hadir
      </h2>
      <p className="max-w-md text-zinc-500 dark:text-zinc-400 text-lg">
        Fitur pengaturan saat ini sedang dalam tahap pengembangan. Kami sedang bekerja keras untuk memberikan pengalaman terbaik untuk Anda.
      </p>
    </div>
  );
}
