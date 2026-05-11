"use client";

import dynamic from "next/dynamic";

export const Editor = dynamic(() => import("./block-editor"), { ssr: false });
export { EditorFrame } from "./frame";