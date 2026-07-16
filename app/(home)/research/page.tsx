import {
  getResearchTag,
  getResearchWithPaginate,
} from "@/features/dashboard/research/service";
import { Button } from "@/components/ui";
import { Download, FileText, Users } from "lucide-react";
import { ClientResearchList } from "@/features/research/components/research-library";
import { ScrollButton } from "@/features/research/components/scroll-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import Link from "next/link";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Repository Riset | MTsN 2 Kota Kediri",
  description:
    "Eksplorasi karya ilmiah, sains, teknologi, dan tulisan keagamaan mutakhir hasil riset murid MTsN 2 Kota Kediri.",
  path: "/research",
  keywords: ["repository riset MTsN 2 Kota Kediri", "riset murid Madtsanda", "karya ilmiah murid Kediri"],
});

export default async function ResearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const page = resolvedParams.page;

  const tagData = await getResearchTag();
  const researchData = await getResearchWithPaginate(Number(page) || 1);

  const tag = tagData ?? { data: [] };
  const research = researchData ?? {
    data: [],
    metadata: {
      total: 0,
      perPage: 6,
      currentPage: 1,
      lastPage: 1,
      firstPage: 1,
      firstPageUrl: "/research?page=1",
      lastPageUrl: "/research?page=1",
      nextPageUrl: null,
      previousPageUrl: null,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            collectionJsonLd({
              name: "Repository Riset MTsN 2 Kota Kediri",
              description:
                "Kumpulan karya ilmiah, riset murid, dan proyek inovasi Madtsanda.",
              path: "/research",
            }),
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Repository Riset", path: "/research" },
            ]),
          ]),
        }}
      />
      {/* ========== HERO SECTION (inspired by reference, emerald accent, glassmorphism) ========== */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden dark:bg-black dark:text-white">
        {/* Subtle emerald particle grid */}
        <div className="absolute inset-0 dark:bg-[radial-gradient(#10b981_0.8px,transparent_1px)] bg-[length:5px_5px] opacity-30" />

        {/* Radiating lines (mimics reference particle burst) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-130 w-130">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-[1px] w-[260px] origin-left bg-linear-to-r from-emerald-400/80 via-emerald-400/40 to-transparent"
                style={{
                  transform: `rotate(${i * 20}deg)`,
                  animation: `pulse 3s ease-in-out infinite ${i * 0.1}s`,
                }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] opacity-90 drop-shadow-[0_0_60px_#10b981]">
              🧬
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-12 pt-28 sm:px-6 md:grid-cols-2 md:pb-32 md:pt-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 font-bold uppercase tracking-wider">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              MTsN 2 Kota Kediri Repository
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Explore the
              <br />
              Frontiers of
              <br />
              Research
            </h1>

            <p className="max-w-200 text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl">
              Pusat publikasi ilmiah murid Madtsanda. Akses karya tulis, laporan
              riset camp, dan proyek inovasi sains terintegrasi nilai keagamaan.
            </p>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
              <ScrollButton />
              <Link href={"/login"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-2xl border-white/30 px-6 text-base font-bold text-black hover:bg-white/10 hover:text-emerald-500 dark:text-white sm:h-14 sm:w-auto sm:px-8"
                >
                  Submit Paper
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Bar */}
        <div className="relative border-t border-white/10 bg-zinc-950 text-white dark:bg-black/70 dark:backdrop-blur-xl md:absolute md:bottom-0 md:left-0 md:right-0">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 text-center sm:px-6 md:grid-cols-3 md:gap-8 md:py-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 text-emerald-400">
                <FileText className="h-6 w-6" />
                <span className="text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl">
                  <NumberTicker
                    value={research.metadata.total}
                    className="dark:text-white"
                  />
                  +
                </span>
              </div>
              <p className="mt-1 text-xs font-bold tracking-[1px] text-zinc-400 sm:text-sm">
                RESEARCH PAPERS
              </p>
            </div>
            <div className="flex flex-col items-center border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pt-0">
              <div className="flex items-center gap-3 text-emerald-400">
                <Download className="h-6 w-6" />
                <span className="text-3xl font-semibold tabular-nums tracking-tight sm:text-5xl">
                  <NumberTicker value={1250} className="dark:text-white" />
                </span>
              </div>
              <p className="mt-1 text-xs font-bold tracking-[1px] text-zinc-400 sm:text-sm">
                TOTAL DOWNLOADS
              </p>
            </div>
            <div className="flex flex-col items-center border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pt-0">
              <div className="flex items-center gap-3 text-emerald-400">
                <Users className="h-6 w-6" />
                <span className="text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-5xl">
                  <NumberTicker value={450} className="dark:text-white" />
                </span>
              </div>
              <p className="mt-1 text-xs font-bold tracking-[1px] text-zinc-400 sm:text-sm">
                ACTIVE RESEARCHERS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== RESEARCH LIBRARY SECTION ========== */}
      <div
        id="research-library"
        className="mx-auto max-w-7xl bg-white px-4 py-16 dark:bg-black sm:px-6 sm:py-20"
      >
        <ClientResearchList research={research} tags={tag} />
      </div>
    </div>
  );
}
