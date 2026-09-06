"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface EditorBlockProps {
  onChange: (markdown: string) => void;
  initialContent?: string;
}

export default function EditorBlock({
  onChange,
  initialContent,
}: EditorBlockProps) {
  const [initialBlocks, setInitialBlocks] = useState<PartialBlock[] | null>(null);
  const [loading, setLoading] = useState(Boolean(initialContent));

  useEffect(() => {
    let isMounted = true;

    async function convertMarkdown() {
      if (!initialContent) {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        const tempEditor = BlockNoteEditor.create();
        const blocks = await tempEditor.tryParseMarkdownToBlocks(initialContent);
        if (isMounted) {
          setInitialBlocks(blocks);
        }
      } catch (err) {
        console.warn("Failed to parse initial markdown into blocks:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    convertMarkdown();

    return () => {
      isMounted = false;
    };
  }, [initialContent]);

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

function EditorInstance({ 
  initialBlocks, 
  onChange 
}: { 
  initialBlocks?: PartialBlock[], 
  onChange: (markdown: string) => void 
}) {
  const { theme } = useTheme();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const editor = useCreateBlockNote({
    initialContent: initialBlocks,
  });

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const themeMapping = {
    system: "dark",
    light: "light",
    dark: "dark",
  } as const;

  const selectedTheme = theme && theme in themeMapping 
    ? themeMapping[theme as keyof typeof themeMapping] 
    : "light";

  return (
    <div className="min-h-[150px]">
      <BlockNoteView
        editor={editor}
        theme={selectedTheme}
        onChange={() => {
          if (debounceRef.current) {
            clearTimeout(debounceRef.current);
          }
          debounceRef.current = setTimeout(async () => {
            const markdown = await editor.blocksToMarkdownLossy(editor.document);
            onChange(markdown);
          }, 300);
        }}
      />
    </div>
  );
}
