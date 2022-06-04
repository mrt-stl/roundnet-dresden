const { createSecureHeaders } = require("next-secure-headers")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    target: "serverless",
    i18n: {
        // two digit locales are custom locales made in prismic. de-de has to remain because it's the default in prismic
        locales: ["de-de"],
        defaultLocale: "de-de",
    },
    images: {
        domains: ["localhost", "images.prismic.io", "roundnet-dresden-ev.cdn.prismic.io"],
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        })
    
        return config
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
                                "https://static.cdn.prismic.io/",
                                "https://*.prismic.io/",
                                "https://prismic.io/prismic-toolbar/",
                            ],
                            scriptSrc: [
                                "'unsafe-eval'",
                                "'self'",
                                "https://hcaptcha.com",
                                "https://*.hcaptcha.com",
                            ],
                            frameSrc: ["https://hcaptcha.com", "https://*.hcaptcha.com"],
                            connectSrc: [
                                "'self'",
                                "https://hcaptcha.com",
                                "https://*.hcaptcha.com",
                                "ws:"
                            ],
                            fontSrc: ["'self'"],
                            styleSrc: [
                                "'self'",
                                "'unsafe-inline'",
                                "https://hcaptcha.com",
                                "https://*.hcaptcha.com",
                            ],
                            imgSrc: [
                                "'self'",
                                "https://images.prismic.io/",
                                "https://prismic-io.s3.amazonaws.com/",
                                "https://*.cdn.prismic.io/",
                                "data:",
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
                    forceHTTPSRedirect: [
                        true,
                        { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
                    ],
                    referrerPolicy: "same-origin",
                }),
            },
        ]
    },
})
