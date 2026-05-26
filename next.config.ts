import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  allowedDevOrigins: ['127.0.2.2', "htkrq-103-182-229-153.run.pinggy-free.link"],
  experimental: {
    mdxRs: true,
    serverActions: {
      bodySizeLimit: "500mb",
    },
  },
};

export default nextConfig;
