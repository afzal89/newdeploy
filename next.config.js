module.exports = {
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
    User_id: process.env.User_id,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/search/search-keyword": {
        page: "/search",
        query: { search: "search-keyword" },
      },
      "/hashtagsearch/search-keyword": {
        page: "/hashtagsearch",
        query: { search: "search-keyword" },
      },
      "/hashtag/search-keyword": {
        page: "/hashtag",
        query: { hashtag: "search-keyword" },
      },
      "/profile/profile-id": {
        page: "/profile",
        query: { profile: "profile-id" },
      },

      //   "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
      //   "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
      //   "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } },
    };
  },
  // trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
