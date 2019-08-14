import fs from "fs"
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import { prismicPageToComponentModels } from "../../../controller/prismic-controller"
import { TukanType } from "../../../models/tukan-types"

const pageExampleFile = __dirname + "/test-page.json"

const pageExample = fs.readFileSync(pageExampleFile, "utf8")
const pageJson: ApiSearchResponse = JSON.parse(pageExample)
test("pagesJson is not null", () => {
    expect(pageJson).not.toBeNull()
})

const body = pageJson.results[0].data.body
test("body is defined", () => {
    expect(body).not.toBeUndefined()
})

const componentModels = prismicPageToComponentModels(pageExample)
test("componentModels are greater 0", () => {
    expect(componentModels.length).toBeGreaterThan(0)
})

const actionModels = componentModels.filter(model => model.type === TukanType.Action)
test("page contains one or more action models", () => {
    expect(actionModels.length).toBeGreaterThan(0)
})

const atmoModels = componentModels.filter(model => model.type === TukanType.Atmospheric)
test("page contains one or more atmospheric models", () => {
    expect(atmoModels.length).toBeGreaterThan(0)
})

const contactModels = componentModels.filter(model => model.type === TukanType.Contact)
test("page contains one or more contact models", () => {
    expect(contactModels.length).toBeGreaterThan(0)
})