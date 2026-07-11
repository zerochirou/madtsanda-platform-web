import { notFound } from "next/navigation";
import { getResearchById } from "@/features/dashboard/research/service";
import { Badge } from "@/components/ui/badge";
import { formatDateUTC } from "@/lib/date";
import { Button } from "@/components/ui/button";
import { Calendar, User, FileText, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import BlockRender from "@/components/shared/block-render/render";
import {
  breadcrumbJsonLd,
  buildMetadata,
  researchArticleJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

interface ResearchDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ResearchDetailPageProps) {
  const { id } = await params;
  const research = await getResearchById(id);

  if (!research) {
    return buildMetadata({
      title: "Riset tidak ditemukan",
      description: "Detail riset MTsN 2 Kota Kediri tidak ditemukan.",
      path: `/research/${id}`,
    });
  }

  return buildMetadata({
    title: `${research.data.title} | Repository Riset`,
    description:
      research.data.abstrack.replace(/[#*_>`]/g, "").slice(0, 160) ||
      "Detail penelitian MTsN 2 Kota Kediri.",
    path: `/research/${research.data.id}`,
    type: "article",
    publishedTime: research.data.publishedDate || research.data.createdAt,
    modifiedTime: research.data.updatedAt,
    authors: [research.data.user?.username || "Research Team"],
    keywords: [research.data.researchTag?.category || "Riset Madtsanda"],
  });
}

export default async function ResearchDetailPage({
  params,
}: ResearchDetailPageProps) {
  const { id } = await params;
  const research = await getResearchById(id);

  if (!research) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return formatDateUTC(dateString, "long");
  };

  return (
    <div className="mt-20 min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            researchArticleJsonLd(research.data),
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Repository Riset", path: "/research" },
              { name: research.data.title, path: `/research/${research.data.id}` },
            ]),
          ]),
        }}
      />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 mb-8 transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Repository
        </Link>

        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <Badge
              variant={
                research.data.status === "has_done" ? "default" : "secondary"
              }
              className="text-xs px-4 py-1"
            >
              {research.data.status === "has_done"
                ? "Published"
                : "Under Review"}
            </Badge>

            <Badge
              variant="outline"
              className="text-xs px-4 py-1 border-zinc-200 dark:border-zinc-800"
            >
              {research.data.researchTag.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-zinc-900 dark:text-white">
            {research.data.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Peneliti: {research.data.user?.username || "Research Team"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Dipublikasikan: {formatDate(research.data.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Diperbarui: {formatDate(research.data.updatedAt)}</span>
            </div>
          </div>
        </div>

        {/* Abstract Section */}
        <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 mb-8 bg-zinc-50/30 dark:bg-zinc-900/10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Abstrak Penelitian
          </h2>
          <div className="prose dark:prose-invert max-w-none text leading-relaxed text-zinc-700 dark:text-zinc-300">
            <BlockRender name="" md={research.data.abstrack} />
          </div>
        </div>

        {/* Document Section */}
        {research.data.documentUrl && (
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 mb-8 bg-zinc-50/50 dark:bg-zinc-900/20">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Dokumen Penelitian</h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">File dokumen riset lengkap tersedia untuk diunduh</p>
                <p className="text-xs text-zinc-400 mt-1">
                  Format: PDF / DOC / DOCX • Maksimal 50MB
                </p>
              </div>

              <a
                href={research.data.documentUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md shadow-emerald-600/10 active:scale-[0.985]">
                  <Download className="w-4 h-4" />
                  Download Paper
                </Button>
              </a>
            </div>
          </div>
        )}

        {/* Metadata Footer */}
        <div className="text-xs text-zinc-400 flex flex-wrap gap-x-6 gap-y-1 pt-4 border-t border-zinc-100 dark:border-zinc-900">
          <span>Paper ID: {research.data.id}</span>
          <span>Dibuat: {formatDate(research.data.createdAt)}</span>
          {research.data.documentKey && (
            <span>Dokumen Key: {research.data.documentKey}</span>
          )}
        </div>
      </div>
    </div>
  );
}
