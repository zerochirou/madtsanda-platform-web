import type { MetadataRoute } from "next";
import { SCHOOL_DESCRIPTION, SCHOOL_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SCHOOL_NAME} - Madtsanda Platform`,
    short_name: "Madtsanda",
    description: SCHOOL_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#059669",
    lang: "id-ID",
    icons: [
      {
        src: "/icons/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
