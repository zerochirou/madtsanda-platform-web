"use client";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  Input,
} from "@/components/ui";
import { formatReadableDate } from "@/lib/date";
import {
  ResearchPaginateDTO,
  ResearchTagResponseDTO,
} from "@/types/dto/research";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ClientResearchList({
  research,
  tags,
}: {
  research: ResearchPaginateDTO;
  tags: ResearchTagResponseDTO | null;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredResearch = research.data.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.abstrack &&
        item.abstrack.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.user?.username &&
        item.user.username.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.researchTag.category);

    return matchesSearch && matchesCategory;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
  };

  return (
    <>
      {/* Search + Filter Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight">
            Research Library
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Koleksi karya pilihan mutakhir
          </p>
        </div>

        {/* Search Input (Glassmorphism) */}
        <div className="relative w-full max-w-md">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input
            placeholder="Search titles, authors, keywords..."
            className="h-12 pl-11 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-white/30 dark:border-white/10 focus-visible:ring-2 focus-visible:ring-emerald-500 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {/*<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Filter className="h-4 w-4" /> FILTER BY CATEGORY
          </div>*/}
          {selectedCategories.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-7 px-3 text-xs text-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10"
            >
              Clear all
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags?.data.map((tag) => {
            const isActive = selectedCategories.includes(tag.category);
            return (
              <button
                key={tag.id}
                onClick={() => toggleCategory(tag.category)}
                className={`
                  px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                  ${
                    isActive
                      ? "bg-emerald-500 text-black border-emerald-500 shadow-md shadow-emerald-500/30"
                      : "bg-white/60 dark:bg-white/5 border-white/30 hover:border-emerald-500/60 hover:bg-white/80 dark:hover:bg-white/10"
                  }
                `}
              >
                {tag.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <div className="text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredResearch.length}
          </span>{" "}
          {/*of {research.} papers*/}
        </div>
        {filteredResearch.length !== research.data.length && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-xs"
          >
            Reset view
          </Button>
        )}
      </div>

      {/* Research Cards Grid (Glassmorphism + Responsive) */}
      {filteredResearch.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filteredResearch.map((item) => (
            <Card
              key={item.id}
              className="group pb-1 overflow-hidden border border-white/20 dark:border-white/10 bg-white/70 dark:bg-zinc-950/60 backdrop-blur-2xl shadow-md hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="flex-1 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-emerald-500 text-black border-none font-medium px-3 py-0.5">
                    {item.researchTag.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-white/30">
                    {formatReadableDate(item.createdAt)}
                  </Badge>
                  <Badge
                    variant={
                      item.status === "has_done" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {item.status === "has_done" ? "Published" : "Under Review"}
                  </Badge>
                </div>

                <CardTitle className="text-[17px] leading-snug line-clamp-3 group-hover:text-emerald-400 transition-colors pr-2">
                  {item.title}
                </CardTitle>

                <div className="mt-auto pt-5 flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-emerald-500/10 flex items-center justify-center text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                      {item.user?.username?.[0]?.toUpperCase() || "R"}
                    </div>
                    <span className="font-medium text-foreground/90">
                      {item.user?.username || "Research Team"}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <div className="px-6 pb-6 pt-6 border-t border-white/10 dark:border-white/10 flex items-center justify-between">
                <div className="text-[10px] text-muted-foreground font-mono tracking-widest">
                  {item.publishedDate
                    ? formatReadableDate(item.publishedDate)
                    : "—"}
                </div>

                <Link href={`/research/${item.id}`}>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="h-8 px-5 text-xs font-medium group-hover:bg-emerald-500 group-hover:text-black transition-all active:scale-[0.985]"
                  >
                    Baca lebih lanjut
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 dark:bg-white/5">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-3xl font-semibold tracking-tight mb-3">
            No matches found
          </h3>
          <p className="max-w-md text-muted-foreground mb-8">
            We couldn’t find any research matching your current filters. Try
            broadening your search or clearing the category selection.
          </p>
          <Button
            onClick={clearFilters}
            variant="outline"
            className="border-emerald-500/50 hover:bg-emerald-500/10"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </>
  );
}
