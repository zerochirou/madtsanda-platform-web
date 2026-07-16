import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Download } from "lucide-react";
import { ResearchItem } from "@/types/dto/research";
import { formatDateUTC } from "@/lib/date";

export default function ResearchCard({ research }: { research: ResearchItem }) {
  return (
    <Link href={`/research/${research.id}`} className="group block">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none rounded-3xl p-6 h-full flex flex-col hover:border-emerald-500/30 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-0.5">
        <div className="flex justify-between items-start mb-4">
          <Badge variant={research.status === "has_done" ? "default" : "secondary"}>
            {research.status === "has_done" ? "Published" : "Under Review"}
          </Badge>
          <Badge variant="outline" className="text-xs">{research.researchTag.category}</Badge>
        </div>

        <h3 className="font-semibold text-xl leading-tight line-clamp-2 text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-white transition">
          {research.title}
        </h3>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 line-clamp-3 flex-1">
          {research.abstrack}
        </p>

        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5" />
            {research.user.username}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatDateUTC(research.createdAt, "short")}
          </div>
        </div>

        {research.documentUrl && (
          <div className="mt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <Download className="w-4 h-4" /> Download Paper
          </div>
        )}
      </div>
    </Link>
  );
}