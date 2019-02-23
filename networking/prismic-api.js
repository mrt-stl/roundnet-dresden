import Prismic from "prismic-javascript"

const apiEndpoint = "https://stadtteilliebe.cdn.prismic.io/api/v2"
const accessToken = "MC5YSEFXZHhJQUFDSUFXbVY0.ASIWY--_vVrvv73vv70s77-977-977-977-9X--_ve-_ve-_ve-_vWrvv73vv73vv70iVwBD77-977-9Q0Tvv70E"

export const getPages = async(type) => {
    const api = await Prismic.api(apiEndpoint, { accessToken })
    const res = await api.query(Prismic.Predicates.at("document.type", type))
    return res
}
