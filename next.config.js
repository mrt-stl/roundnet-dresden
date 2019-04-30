module.exports = {
  poweredByHeader: false,
  target: "serverless",
  env: {
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    NAV: process.env.NAV,
    FONT: process.env.FONT,
    COOKIE: process.env.COOKIE
  },
  webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
          fs: "empty"
      }
      return config
  }
}