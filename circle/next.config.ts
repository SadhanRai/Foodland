import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.pfps.gg" },
      { protocol: "https", hostname: "assets.bonappetit.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.pngall.com" },
      { protocol: "https", hostname: "cdn3d.iconscout.com" },
      { protocol: "https", hostname: "iconscout.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
