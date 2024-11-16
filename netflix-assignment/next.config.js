/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      // 영화 카테고리 rewrite
      {
        source: '/movie/:category',
        destination: '/api/movie?category=:category', 
      },
      // TV 카테고리 rewrite
      {
        source: '/tv/:category',
        destination: '/api/tv?category=:category', // 수정된 부분
      },
      // 영화,상세정보 상세정보 rewrite
      {
        source: '/details/:type/:id',
        destination: '/api/details/:type/:id', // 수정된 부분
      },
      // 영화 검색 rewrite
      {
        source: '/search/movie',
        destination: '/api/search/movie', // 수정된 부분
      },
    ];
  },
};

module.exports = nextConfig
