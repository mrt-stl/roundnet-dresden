import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"

export default class PrismicResponse {
    public data?: ApiSearchResponse
    public footer?: ApiSearchResponse
    public error?: string
}