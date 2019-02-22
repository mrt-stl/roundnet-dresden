const express = require("express")
const next = require("next")

const compression = require("compression")
const helmet = require("helmet")
const LRUCache = require("lru-cache")

const PORT = 3000

const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 1 * 1
})

app.prepare()
    .then(() => {
        const server = express()

        // Add compression for assets
        server.use(compression())

        // Securing the app https://www.twilio.com/blog/2017/11/securing-your-express-app.html
        server.use(helmet())

        // important if behind a proxy to ensure client IP is passed to req.ip
        server.enable("trust proxy")

        server.get("*", (req, res) => {
            return handle(req, res)
        })

        // Set up server.
        server.listen(PORT, (err) => {
            if (err) throw err
        })
    })
    .catch(() => {
        process.exit(1)
    })

function getCacheKey(req) {
    return `${req.url}`
}

async function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)

    // If we have a page in the cache, let"s serve it
    if (ssrCache.has(key)) {
        res.setHeader("x-cache", "HIT")
        res.send(ssrCache.get(key))
        return
    }

    try {
        // If not let"s render the page into HTML
        const html = await app.renderToHTML(req, res, pagePath, queryParams)

        // Something is wrong with the request, let"s skip the cache
        if (res.statusCode !== 200) {
            res.send(html)
            return
        }

        // Let"s cache this page
        ssrCache.set(key, html)

        res.setHeader("x-cache", "MISS")
        res.send(html)

    } catch (err) {
        app.renderError(err, req, res, pagePath, queryParams)
    }
}