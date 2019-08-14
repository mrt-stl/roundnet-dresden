import PrismicDOM from "prismic-dom"

export const asHtml = (richtext) => {
    if (richtext === undefined) {
        return <div></div>

    } else {
        return PrismicDOM.RichText.asHtml(richtext, linkResolver)
    }
}

export const asText = (richtext) => {
    return PrismicDOM.RichText.asText(richtext)
}

export const linkResolver = (doc) => {
    if (doc.link_type === "Web") return doc.url
    if (doc.type === "blog") return "/blog/" + doc.uid
    if (doc.type === "project") return "/projekte/" + doc.uid
    if (doc.type === "standard") return "/" + doc.uid

    return null
}