import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/movieInfo/:movieId",
        destination: `https://api.themoviedb.org/3/movie/:movieId?api_key=${process.env.NETFLIX_API_KEY}`,
      },
    ];
  },
};

export default nextConfig;
