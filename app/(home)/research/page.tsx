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
import { mockResearchPaginate, mockResearchTags } from "@/components/data/research";

export const metadata = {
  title: "Repository Riset | MTsN 2 Kota Kediri",
  description: "Eksplorasi karya ilmiah, sains, teknologi, dan tulisan keagamaan mutakhir hasil riset siswa-siswi MTsN 2 Kota Kediri.",
};

export default async function ResearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const page = resolvedParams.page;
  
  const tagData = await getResearchTag();
  const researchData = await getResearchWithPaginate(Number(page) || 1);

  // Fallback to mock data if backend yields empty or null results
  const tag = (tagData && tagData.data && tagData.data.length > 0) ? tagData : mockResearchTags;
  const research = (researchData && researchData.data && researchData.data.length > 0) ? researchData : mockResearchPaginate;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      {/* ========== HERO SECTION (inspired by reference, emerald accent, glassmorphism) ========== */}
      <div className="relative min-h-screen flex items-center overflow-hidden dark:bg-black dark:text-white">
        {/* Subtle emerald particle grid */}
        <div className="absolute inset-0 dark:bg-[radial-gradient(#10b981_0.8px,transparent_1px)] bg-[length:5px_5px] opacity-30" />

        {/* Radiating lines (mimics reference particle burst) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-130 w-130">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-[1px] w-[260px] origin-left bg-gradient-to-r from-emerald-400/80 via-emerald-400/40 to-transparent"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 font-bold uppercase tracking-wider">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              MTsN 2 Kota Kediri Repository
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05]">
              Explore the
              <br />
              Frontiers of
              <br />
              Research
            </h1>

            <p className="max-w-200 text-xl text-zinc-400 leading-relaxed">
              Pusat publikasi ilmiah siswa Madtsanda. Akses karya tulis, laporan riset camp, dan proyek inovasi sains terintegrasi nilai keagamaan.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <ScrollButton />
              <Link href={'/login'}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-white/30 dark:text-white text-black hover:text-emerald-500 hover:bg-white/10 text-base rounded-2xl font-bold"
                >
                  Submit Paper
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 dark:bg-black/70 dark:backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 text-emerald-400">
                <FileText className="h-6 w-6" />
                <span className="text-5xl font-semibold tabular-nums tracking-tighter whitespace-pre-wrap text-white">
                  <NumberTicker
                    value={research.metadata.total}
                    className="dark:text-white"
                  />
                  +
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1 tracking-[1px] font-bold">
                RESEARCH PAPERS
              </p>
            </div>
            <div className="flex flex-col items-center border-l border-white/10 md:border-l">
              <div className="flex items-center gap-3 text-emerald-400">
                <Download className="h-6 w-6" />
                <span className="text-5xl font-semibold tabular-nums tracking-tighter whitespace-pre-wrap">
                  <NumberTicker value={1250} className="dark:text-white" />
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1 tracking-[1px] font-bold">
                TOTAL DOWNLOADS
              </p>
            </div>
            <div className="flex flex-col items-center border-l border-white/10 md:border-l">
              <div className="flex items-center gap-3 text-emerald-400">
                <Users className="h-6 w-6" />
                <span className="text-5xl font-semibold tabular-nums tracking-tighter whitespace-pre-wrap text-white">
                  <NumberTicker value={450} className="dark:text-white" />
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-1 tracking-[1px] font-bold">
                ACTIVE RESEARCHERS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== RESEARCH LIBRARY SECTION ========== */}
      <div id="research-library" className="max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-black">
        <ClientResearchList research={research} tags={tag} />
      </div>
    </div>
  );
}
