import { notFound } from "next/navigation";
import { getResearchById } from "@/features/dashboard/research/service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, FileText, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { ResearchItem } from "@/types/dto/research";
import BlockRender from "@/components/shared/block-render/render";

interface ResearchDetailPageProps {
  params: Promise<{ id: string }>;
}

// Optional: Dynamic metadata
export async function generateMetadata({ params }: ResearchDetailPageProps) {
  const { id } = await params;
  const research = await getResearchById(id);

  return {
    title: research
      ? `${research.data.title} | Research Repository`
      : "Research Not Found",
    description: research?.abstrack?.slice(0, 160) || "Detail penelitian",
  };
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
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Back Button */}
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Repository
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant={
                research.data.status === "has_done" ? "default" : "secondary"
              }
              className="text-sm px-4 py-1"
            >
              {research.data.status === "has_done"
                ? "Published"
                : "Under Review"}
            </Badge>

            <Badge
              variant="outline"
              className="text-sm px-4 py-1 border-zinc-700"
            >
              {research.data.researchTag.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight">
            {research.data.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {/*<span>{research.data.user.username}</span>*/}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Published: {formatDate(research.data.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Updated: {formatDate(research.data.updatedAt)}</span>
            </div>
          </div>
        </div>

        {/* Abstract Section */}
        <div className=" border rounded-3xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Abstrak
          </h2>
          <div className="prose  max-w-none text leading-relaxed">
            <BlockRender name="" md={research.data.abstrack} />
          </div>
        </div>

        {/* Document Section */}
        {research.data.documentUrl && (
          <div className=" rounded-3xl p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Dokumen Penelitian</h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-zinc-400">File tersedia untuk diunduh</p>
                <p className="text-sm text-zinc-500 mt-1">
                  Format: PDF / DOC / DOCX • Maksimal 50MB
                </p>
              </div>

              <a
                href={research.data.documentUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Paper
                </Button>
              </a>
            </div>
          </div>
        )}

        {/* Metadata Footer */}
        <div className="text-xs text-zinc-500 flex flex-wrap gap-x-6">
          <span>ID: {research.data.id}</span>
          <span>Created: {formatDate(research.data.createdAt)}</span>
          {research.data.documentKey && (
            <span>Key: {research.data.documentKey}</span>
          )}
        </div>
      </div>
    </div>
  );
}
