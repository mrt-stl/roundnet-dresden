import fs from "fs"
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import { prismicPageToComponentModels } from "../../../controller/prismic-controller"
import ActionModel from "../../../models/action-model"
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
test("actionModels are greater 0", () => {
    expect(actionModels.length).toBeGreaterThan(0)
})
