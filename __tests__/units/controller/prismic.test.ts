import fs from "fs"
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import { prismicPageToComponentModels } from "../../../controller/prismic-controller"
import { TukanType } from "../../../models/tukan/tukan-types"
import DetailsModel from "../../../models/tukan/details-model"
import InfiniteCardsModel from "../../../models/tukan/infinite-cards-model"

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

const componentModels = prismicPageToComponentModels(pageJson)
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

const detailsModels = componentModels.filter(model => model.type === TukanType.Details)
test("page contains one or more details models", () => {
    expect(detailsModels.length).toBeGreaterThan(0)
})

const detailsModel = detailsModels[0] as DetailsModel
test("details model has two cards", () => {
    expect(detailsModel.cards.length).toBe(2)
})

const focusModels = componentModels.filter(model => model.type === TukanType.Focus)
test("page contains one or more focus models", () => {
    expect(focusModels.length).toBeGreaterThan(0)
})

const heroImageModels = componentModels.filter(model => model.type === TukanType.HeroImage)
test("page contains one or more hero image models", () => {
    expect(heroImageModels.length).toBeGreaterThan(0)
})

const iatModels = componentModels.filter(model => model.type === TukanType.ImageAndText)
test("page contains one or more image and text models", () => {
    expect(iatModels.length).toBeGreaterThan(0)
})

const icModels = componentModels.filter(model => model.type === TukanType.InfiniteCards)
test("page contains one or more infinite card models", () => {
    expect(icModels.length).toBeGreaterThan(0)
})

const icModel = icModels[0] as InfiniteCardsModel
test("infinite cards model has three cards", () => {
    expect(icModel.cards.length).toBe(3)
})

const icModelCard = icModel.cards[0]
test("first card model has title", () => {
    expect(icModelCard.title).not.toBeNull()
})

test("first card model has content", () => {
    expect(icModelCard.content).not.toBeNull()
})

const locationModels = componentModels.filter(model => model.type === TukanType.Location)
test("page contains one or more location models", () => {
    expect(locationModels.length).toBeGreaterThan(0)
})

const previewModels = componentModels.filter(model => model.type === TukanType.Preview)
test("page contains one or more preview models", () => {
    expect(previewModels.length).toBeGreaterThan(0)
})

const richtextModels = componentModels.filter(model => model.type === TukanType.Richtext)
test("page contains one or more richtext models", () => {
    expect(richtextModels.length).toBeGreaterThan(0)
})

const highlightModels = componentModels.filter(model => model.type === TukanType.HighlightText)
test("page contains one or more highlight models", () => {
    expect(highlightModels.length).toBeGreaterThan(0)
})