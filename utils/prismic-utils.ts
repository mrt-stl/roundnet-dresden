import PrismicDOM from "prismic-dom"
import { isNullOrUndefined } from "util"
import { getLanguageCode } from "./lang-utils"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { useEffect } from "react"

export const asHtml = (richtext: any): string | null => {
    if (!richtext) {
        return null
    }

    const parsedHtml = PrismicDOM.RichText.asHtml(richtext, linkResolver)
    const replacedHtml = parsedHtml.replace(/\[\[/g, "<").replace(/\]\]/g, " />")

    return replacedHtml
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

        case doc.type?.toLowerCase() === "standard" || doc.type?.toLowerCase() === "faqs":
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

export function useUpdatePreviewRef(preview, documentId) {
    const router = useRouter()
    useEffect((): any => {
        if (router.isPreview) {
            const rawPreviewCookie = Cookies.get("io.prismic.preview")
            if (rawPreviewCookie) {
                const previewCookieName = (process.env.NEXT_PUBLIC_PROJECT_NAME ? process.env.NEXT_PUBLIC_PROJECT_NAME : null) + ".prismic.io"
                const previewCookie = JSON.parse(rawPreviewCookie)
                const previewCookieObject = previewCookie[previewCookieName]
                const previewCookieRef = previewCookieObject && previewCookieObject.preview ? previewCookieObject.preview : null
                if (previewCookieRef && preview.activeRef !== previewCookieRef) {
                    return router.push(`/api/preview?token=${previewCookieRef}&documentId=${documentId}`)
                }
            } else {
                return router.push("/api/exit-preview")
            }
        }
        return undefined
    }, [documentId, preview, router])
}