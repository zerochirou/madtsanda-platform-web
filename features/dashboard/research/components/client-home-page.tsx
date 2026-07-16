'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ResearchPaginateDTO } from "@/types/dto/research";
import ResearchCard from "./card-premium";

export default function ResearchClient({ initialData }: { initialData: ResearchPaginateDTO }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<"all" | "pending" | "has_done">("all");

  const filtered = initialData.data
    .filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.abstrack.toLowerCase().includes(search.toLowerCase());
      const matchTag = !selectedTag || item.researchTag.id === selectedTag;
      const matchStatus = selectedStatus === "all" || item.status === selectedStatus;
      return matchSearch && matchTag && matchStatus;
    });

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search title or abstract..."
          className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-lg h-14 rounded-2xl shadow-sm dark:shadow-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="flex gap-2">
          {(["all", "has_done", "pending"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSelectedStatus(s)}
              className={`px-5 py-2 rounded-2xl border transition ${selectedStatus === s ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white shadow-md dark:shadow-none" : "border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-400 dark:hover:bg-zinc-900 shadow-sm dark:shadow-none"}`}
            >
              {s === "all" ? "All Status" : s === "has_done" ? "Published" : "Under Review"}
            </button>
          ))}
        </div>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Array.from(new Set(initialData.data.map(d => d.researchTag.category))).map((cat) => {
          const tag = initialData.data.find(d => d.researchTag.category === cat)?.researchTag;
          return (
            <Badge
              key={cat}
              variant={selectedTag === tag?.id ? "default" : "outline"}
              className="cursor-pointer px-4 py-1 text-sm"
              onClick={() => setSelectedTag(selectedTag === tag?.id ? null : tag?.id || null)}
            >
              {cat}
            </Badge>
          );
        })}
      </div>

      {/* Grid - Modern Repository Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((research) => (
            <ResearchCard key={research.id} research={research} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-zinc-400">No research found.</div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          Showing {filtered.length} of {initialData.metadata.total} papers
        </div>
      </div>
    </>
  );
}