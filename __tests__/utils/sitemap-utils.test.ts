import { createSiteMap } from "../../utils/sitemap-utils"
import fs from "fs"

const pagesExampleFile = __dirname + "/pages-example.json"
const sitemapExampleFile = __dirname + "/sitemap-example.xml"

const pagesExample = fs.readFileSync(pagesExampleFile, "utf8")
const pagesJson = JSON.parse(pagesExample)

const sitemapExample = fs.readFileSync(sitemapExampleFile, "utf8")

test("should create sitemap", () => {
  expect(createSiteMap("https://standard.stl-dev.now.sh", pagesJson)).toBe(sitemapExample)
})
