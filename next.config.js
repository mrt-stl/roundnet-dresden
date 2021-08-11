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
        project_id: "dresdenhilfe",
        url: "dresdenhilfe.de",
        name: "dresdenhilfe",
        prismic_endpoint: "https://dresdenhilfe.cdn.prismic.io/api/v2",
        prismic_access_token: "MC5ZSG1EREJNQUFQa051S3Vz.77-9Q3diGCxv77-977-977-9A--_ve-_vXTvv71jM--_ve-_vVpN77-9XW7vv70lHSQRJ--_ve-_vQ",
        font: process.env.font,
        cookie: process.env.cookie,
        ga_id: process.env.ga_id,
        google_verification: process.env.google_verification,
        caching_duration: 0,
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
