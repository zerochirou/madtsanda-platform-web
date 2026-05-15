"use client";

import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("./block-editor"), { ssr: false });
export const EditorEdit = dynamic(() => import("./block-render-edit"), {
  ssr: false,
});
export { EditorFrame } from "./frame";
