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
        remotePatterns: [
            {
                protocol: "http",
                hostname: "187.77.121.243",
                port: "9001",
                pathname: "/madtsanda-platform-storage/**",
            },
        ],
    },
};

export default nextConfig;
