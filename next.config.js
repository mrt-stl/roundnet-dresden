const { createSecureHeaders } = require("next-secure-headers")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    target: "serverless",
    webpack5: false,
    i18n: {
      // two digit locales are custom locales made in prismic. de-de has to remain because it's the default in prismic
      locales: ["de-de"],
      defaultLocale: "de-de",
    },
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
        google_verification: process.env.google_verification,
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
    async redirects() {
        return [
          {
            source: '/ansprechpartner',
            destination: '/kontakt',
            permanent: true,
          },
        ]
      },
      async rewrites() {
        return [
          {
            source: '/haeufige-fragen',
            destination: '/list/haeufige-fragen',
          }
        ]
      },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: createSecureHeaders({
                    contentSecurityPolicy: {
                        directives: {
                            defaultSrc: [
                                "'self'",
                                "'unsafe-eval'",
                                "'unsafe-inline'",
                                "https://api.rollbar.com/api/1/item/",
                                "https://maps.googleapis.com/",
                                "http://www.instagram.com/",
                                "https://www.googletagmanager.com/gtag/",
                                "https://static.cdn.prismic.io/",
                                "https://*.prismic.io/",
                                "https://prismic.io/prismic-toolbar/",
                                "https://html2canvas.hertzen.com/dist/"
                            ],
                            fontSrc: ["'self'", "https://fonts.googleapis.com/", "https://use.typekit.net/", "https://fonts.gstatic.com/"],
                            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com/"],
                            imgSrc: [
                                "'self'",
                                "https://s3.eu-central-1.amazonaws.com/",
                                "https://www.youtube.com/",
                                "https://images.prismic.io/",
                                "https://*.cdn.prismic.io/",
                                "https://maps.gstatic.com/",
                                "https://maps.googleapis.com/",
                                "data:"
                            ],
                            objectSrc: "'none'",
                            baseURI: "'self'",
                            formAction: "'self'",
                            frameAncestors: true,
                        },
                    },
                    frameGuard: "deny",
                    noopen: "noopen",
                    nosniff: "nosniff",
                    xssProtection: "sanitize",
                    forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true }],
                    referrerPolicy: "same-origin",
                }),
            },
        ]
    },
})
