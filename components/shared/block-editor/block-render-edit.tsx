"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface EditorBlockProps {
  onChange: (markdown: string) => void;
  initialContent?: string;
}

export default function EditorBlock({
  onChange,
  initialContent,
}: EditorBlockProps) {
  const [initialBlocks, setInitialBlocks] = useState<PartialBlock[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function convertMarkdown() {
      if (initialContent) {
        // Gunakan editor instance sementara hanya untuk parsing
        const editor = BlockNoteEditor.create();
        const blocks = await editor.tryParseMarkdownToBlocks(initialContent);
        setInitialBlocks(blocks);
      }
      setLoading(false);
    }
    convertMarkdown();
  }, [initialContent]);

  // Jangan render editor utama sampai blocks siap
  if (loading) {
    return <div className="h-[150px] w-full bg-muted animate-pulse rounded-md" />;
  }

  return (
    <EditorInstance 
      initialBlocks={initialBlocks ?? undefined} 
      onChange={onChange} 
    />
  );
}

// Komponen terpisah untuk menangani Hook dengan benar
function EditorInstance({ 
  initialBlocks, 
  onChange 
}: { 
  initialBlocks?: PartialBlock[], 
  onChange: (markdown: string) => void 
}) {
  const { theme } = useTheme();
  
  // Hook dipanggil di level teratas komponen ini
  const editor = useCreateBlockNote({
    initialContent: initialBlocks,
  });

  const themeMapping = {
    "system": "dark",
    "light": "light",
    "dark": "dark",
  };

  return (
    <div className="min-h-[150px]">
      <BlockNoteView
        editor={editor}
        theme={themeMapping[theme]}
        onChange={() => {
          async function save() {
            const markdown = editor.blocksToMarkdownLossy(editor.document);
            onChange(markdown);
          }
          save();
        }}
      />
    </div>
  );
}