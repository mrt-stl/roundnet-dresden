const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  target: "serverless",
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    URL: process.env.URL,
    NAME: process.env.NAME,
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    NAV: process.env.NAV,
    FONT: process.env.FONT,
    COOKIE: process.env.COOKIE,
    GA: process.env.GA,
    COLORS: process.env.COLORS,
    DARK_MODE: process.env.DARK_MODE,
    HAS_BANNER: process.env.HAS_BANNER,
    CACHING_TIME: process.env.CACHING_TIME
  },
  webpack: config => {
    config.node = {
      fs: "empty"
    }
    return config
  }
})