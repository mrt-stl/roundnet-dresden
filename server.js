const express = require("express")
const next = require("next")

const PORT = 3000

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get("/:id", (req, res) => {
            const actualPage = "/index"
            const queryParams = { id: req.params.id }

            app.render(req, res, actualPage, queryParams)
        })

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
