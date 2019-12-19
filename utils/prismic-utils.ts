import PrismicDOM from "prismic-dom"
import { isNullOrUndefined } from "util"

export const asHtml = (richtext: any): string | null => {
    if (!richtext) {
        return null
    }

    return PrismicDOM.RichText.asHtml(richtext, linkResolver)
}

export const asText = (richtext: any): string => {
    return PrismicDOM.RichText.asText(richtext)
}

export const linkResolver = (doc: any) => {
    let link = ""
    switch (true) {
        case doc.link_type === "Web":
            link = doc.url
            break

        case doc.type?.toLowerCase() === "standard":
            link = "/" + doc.uid
            break

        case !isNullOrUndefined(doc.type):
            link = "/" + doc.type + "/" + doc.uid
            break

        default:
            break
    }

    return link
}