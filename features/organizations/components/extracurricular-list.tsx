"use client";

import React, { useState, useMemo } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ExtracurricularDTO } from "@/types/dto/extracurricular";
import { FadeUp } from "@/components/animation/animations";

interface ExtracurricularListProps {
  data: ExtracurricularDTO[];
}

const CATEGORIES = [
  "Semua",
  "Keagamaan",
  "Akademik & Riset",
  "Olahraga",
  "Seni & Budaya",
  "Bela Diri & Keterampilan",
];

export function ExtracurricularList({ data }: ExtracurricularListProps) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [data, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white dark:bg-zinc-900/40 p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs backdrop-blur-md">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Cari ekstrakurikuler..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-zinc-100 dark:bg-zinc-800/50 border border-transparent focus:border-emerald-500/30 focus:bg-white dark:focus:bg-zinc-900 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-hidden transition-all duration-300"
          />
          <Icons.Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <Icons.X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Grid List */}
      {filteredData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, idx) => {
            const iconMap = Icons as unknown as Record<string, LucideIcon>;
            const IconComponent = iconMap[item.icon] || Icons.HelpCircle;

            return (
              <FadeUp key={item.name} delay={idx * 0.05}>
                <div className="group h-full flex flex-col p-6 bg-white dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl hover:border-emerald-500/20 dark:hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute -inset-px bg-linear-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Header/Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 dark:text-emerald-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-zinc-900/20 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
          <Icons.Inbox className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-300 mb-2">
            Ekstrakurikuler Tidak Ditemukan
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Tidak ada ekstrakurikuler yang cocok dengan pencarian atau kategori ini.
          </p>
        </div>
      )}
    </div>
  );
}
