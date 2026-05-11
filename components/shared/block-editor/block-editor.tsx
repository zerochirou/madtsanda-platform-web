"use client";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { useTheme } from "next-themes";

interface EditorBlockProps {
    onChange: (markdown: string) => void;
}

export default function EditorBlock({ onChange }: EditorBlockProps) {
    const editor = useCreateBlockNote();
    const { theme } = useTheme();
    return (
        <div>
            <BlockNoteView
                about="Masukan teks atau ketikan '/' untuk menu perintah"
                editor={editor}
                theme={theme !== "light" ? "dark" : "light"}
                onChange={async () => {
                    const markdownString = editor.blocksToMarkdownLossy(
                        editor.document,
                    );
                    onChange(markdownString);
                }}
            />
        </div>
    );
}