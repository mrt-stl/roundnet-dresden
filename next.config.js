const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  target: "serverless",
  env: {
    project_id: process.env.project_id,
    url: process.env.url,
    name: process.env.name,
    prismic_endpoint: process.env.prismic_endpoint,
    prismic_access_token: process.env.prismic_access_token,
    nav: process.env.nav,
    font: process.env.font,
    cookie: process.env.cookie,
    ga_id: process.env.ga_id,
    colors: process.env.colors,
    dark_mode: process.env.dark_mode,
    show_banner: process.env.show_banner,
    caching_duration: process.env.caching_duration,
    shopify_access_token: process.env.shopify_access_token,
    shopify_store_domain: process.env.shopify_store_domain,
    use_shop_view: process.env.use_shop_view,
    META_TITLE: process.env.META_TITLE,
    META_DESCRIPTION: process.env.META_DESCRIPTION,
  },
  webpack: config => {
    config.node = {
      fs: "empty"
    }
    return config
  }
})