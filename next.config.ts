import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  allowedDevOrigins: ['dgger-182-253-244-5.run.pinggy-free.link'],
  experimental: {
    mdxRs: true,
    serverActions: {
      bodySizeLimit: "500mb",
    },
  },
};

export default nextConfig;
