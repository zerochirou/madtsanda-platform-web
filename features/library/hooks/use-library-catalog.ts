"use client";

import { useState, useMemo } from "react";
import type { LibraryItem } from "@/types/dto/library";
import { libraryStats } from "@/components/data/library-data";

const colorKeys = ["emerald", "blue", "violet", "amber", "rose", "teal"];

export function useLibraryCatalog(books: LibraryItem[] = []) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(
      books.reduce((acc, book) => {
        acc.set(book.category, (acc.get(book.category) ?? 0) + 1);
        return acc;
      }, new Map<string, number>())
    ).map(([name, count], index) => ({
      name,
      count,
      color: colorKeys[index % colorKeys.length],
    }));
  }, [books]);

  const stats = useMemo(() => {
    return libraryStats.map((stat, index) =>
      index === 0
        ? { ...stat, value: books.length, suffix: "", label: "Koleksi Terdata" }
        : stat
    );
  }, [books.length]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        searchTerm === "" ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !selectedCategory || book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [books, searchTerm, selectedCategory]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    stats,
    filteredBooks,
    resetFilters,
    totalBooks: books.length,
    isEmptyCatalog: books.length === 0,
    hasNoResults: books.length > 0 && filteredBooks.length === 0,
  };
}
