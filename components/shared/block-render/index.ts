"use client";

import dynamic from "next/dynamic";

export const BlockRenderDynamic = dynamic(() => import("./render"), {
    ssr: false,
});

export const BlockRenderDynamicNoType = dynamic(() => import("./render-no-type"), {
    ssr: false,
});
