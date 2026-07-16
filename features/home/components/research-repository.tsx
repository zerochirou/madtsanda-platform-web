import Link from "next/link";
import { ArrowRight, BookOpenText, CalendarDays, FileText, Microscope } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { formatReadableDate } from "@/lib/date";
import type { ResearchPaginateDTO } from "@/types/dto/research";

export function ResearchRepository({
  research,
}: {
  research: ResearchPaginateDTO | null;
}) {
  const latestResearch = research?.data?.slice(0, 3) ?? [];

  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-16 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/40 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-500">
              <span className="h-px w-8 bg-emerald-500" />
              Research Repository
            </p>
            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-zinc-950 dark:text-white md:text-5xl">
              Akses karya riset Madtsanda
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Repository riset menjadi ruang publikasi karya ilmiah murid,
              laporan riset camp, dan proyek inovasi madrasah yang dapat
              diakses dari landing page.
            </p>
            <Button asChild variant="outline" className="border-emerald-300 bg-white text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-zinc-950 dark:text-emerald-300 dark:hover:bg-emerald-500/10">
              <Link href="/research">
                Buka repository
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-500/20 dark:bg-emerald-500/10 md:p-8">
            <Microscope className="mb-6 size-10 text-emerald-700 dark:text-emerald-300" />
            <h3 className="text-2xl font-black text-zinc-950 dark:text-white">
              Terhubung ke pusat publikasi riset
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              Warga madrasah dapat membaca ringkasan karya, menelusuri kategori,
              dan masuk ke detail publikasi dari halaman repository.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-white p-4 dark:bg-zinc-950/60">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-300">
                  {research?.metadata.total ?? 0}
                </div>
                <div className="mt-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                  Publikasi
                </div>
              </div>
              <div className="rounded-md bg-white p-4 dark:bg-zinc-950/60">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-300">
                  24/7
                </div>
                <div className="mt-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                  Akses digital
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {latestResearch.length > 0 ? (
              latestResearch.map((item) => (
                <Link
                  key={item.id}
                  href={`/research/${item.id}`}
                  className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-emerald-500/50"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <Badge className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25">
                      <BookOpenText className="size-3.5" />
                      {item.researchTag?.category ?? "Riset"}
                    </Badge>
                    <Badge variant="outline">
                      <CalendarDays className="size-3.5" />
                      {formatReadableDate(item.createdAt)}
                    </Badge>
                  </div>
                  <h3 className="line-clamp-2 text-xl font-black leading-snug text-zinc-950 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.abstrack}
                  </p>
                </Link>
              ))
            ) : (
              <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center dark:border-zinc-700 dark:bg-zinc-950">
                <FileText className="mx-auto mb-4 size-10 text-zinc-400" />
                <h3 className="text-xl font-black">Repository belum berisi data.</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Publikasi riset akan muncul otomatis saat data sudah tersedia
                  dari Madtsanda Connect.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
