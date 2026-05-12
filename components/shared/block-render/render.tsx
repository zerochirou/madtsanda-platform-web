"use client";

import { Spinner } from "@/components/ui/spinner";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlockRender({
  md,
  name,
}: {
  md: string;
  name: string;
}) {
  // State akan otomatis reset jika komponen ini dipanggil dengan key berbeda
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < md.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent((prev) => prev + md[index]);
        setIndex((prev) => prev + 1);
      }, 0.000001);

      return () => clearTimeout(timeout);
    }
  }, [index, md]);

  return (
    <div className="prose dark:prose-invert max-w-none relative">
      {/* Render Markdown */}
      <Markdown remarkPlugins={[remarkGfm]}>
        {index < md.length ? `${displayedContent} ▎` : displayedContent}
      </Markdown>

      {index < md.length && (
        <div className="flex flex-row items-center gap-2 mt-4 not-prose">
          <Spinner className="w-4 h-4" />
          <span className="text-sm font-medium text-emerald-400">
            {name} sedang mengetik...
          </span>
        </div>
      )}
    </div>
  );
}
