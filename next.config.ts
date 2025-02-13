import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
