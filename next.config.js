const { createSecureHeaders } = require("next-secure-headers")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    target: "serverless",
    i18n: {
        // two digit locales are custom locales made in prismic. de-de has to remain because it's the default in prismic
        locales: ["de-de", "en"],
        defaultLocale: "de-de",
    },
    images: {
        domains: ["localhost", "images.prismic.io", "tf-ventures.cdn.prismic.io"],
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
                                "https://js.hcaptcha.com/",
                                "https://newassets.hcaptcha.com/"
                            ],
                            fontSrc: ["'self'"],
                            styleSrc: ["'self'", "'unsafe-inline'"],
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
