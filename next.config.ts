import type { NextConfig } from "next";

type TurbopackConfig = {
  turbopack?: {
    root?: string;
  };
};

const nextConfig: NextConfig & TurbopackConfig = {
  turbopack: {
    root: ".",
  },
};



export default nextConfig;
