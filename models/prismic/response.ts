import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse"

export default class PrismicResponse {
    public data?: ApiSearchResponse
    public footer?: ApiSearchResponse
    public navigation?: ApiSearchResponse
    public error?: string
}