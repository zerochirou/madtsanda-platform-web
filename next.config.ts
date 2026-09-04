import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */

    allowedDevOrigins: ["ogxhf-182-253-244-5.run.pinggy-free.link"],
    experimental: {
        mdxRs: true,
        serverActions: {
            bodySizeLimit: "500mb",
        },
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
