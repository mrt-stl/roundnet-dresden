import PrismicDOM from "prismic-dom"
import { isNullOrUndefined } from "util"
import { getLanguageCode } from "./lang-utils"

export const asHtml = (richtext: any): string | null => {
    if (!richtext) {
        return null
    }

    return PrismicDOM.RichText.asHtml(richtext, linkResolver)
}

export const asText = (richtext: any): string => {
    if (!richtext) {
        return null
    }

    return PrismicDOM.RichText.asText(richtext)
}

export const linkResolver = (doc: any): string | null => {
    const docLang = doc.lang
    const langCode = getLanguageCode(docLang)

    let link = langCode === "de" ? "/" : `/${langCode}/`
    switch (true) {
        case doc.link_type === "Any":
            link = null
            break

        case doc.link_type === "Web":
            link = doc.url
            break

        case doc.type?.toLowerCase() === "standard":
            link += doc.uid
            break

        case !isNullOrUndefined(doc.type):
            link += doc.type + "/" + doc.uid
            break

        default:
            break
    }

    return link
}