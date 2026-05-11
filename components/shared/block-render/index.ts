"use client";

import dynamic from "next/dynamic";

export const BlockRenderDynamic = dynamic(() => import("./render"), {
    ssr: false,
});
