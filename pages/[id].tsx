import { getByUid } from "../networking/prismic-api"
import { asText } from "../utils/prismic-utils"
import { cacheControlHeader, createEtag } from "../utils/cache-utils"
import Error from "./_error"
import { Document } from "prismic-javascript/types/documents"
import { IMetaData } from "../models/config/meta-data"
import Index from "./index"

interface IIndexProps {
    docId?: string
    meta?: IMetaData
    doc?: Document
    footerData?: any
    error?: string
    navData: any
    preview?: any
}

const Page = (props: IIndexProps) => {
    const { docId, meta, doc, footerData, error, navData, preview } = props

    if (error) {
        return (<Error navData={navData} />)
    }

    return (
        <Index docId={docId} meta={meta} doc={doc} footerData={footerData} navData={navData} preview={preview}/>
    )
}

export async function getServerSideProps({ query, res,locale, locales, previewData = { ref: "" } }) {
    const queryId = query.id ? query.id : "home"
    const docType = query.type ? query.type : "standard"
    const lang = locales.indexOf(locale) ? locale : "de-de"
    const ref = previewData.ref

    const prismicRes = await getByUid(docType, queryId, ref, lang)
    const doc = prismicRes.data ? prismicRes.data : null
    const navData = prismicRes.navigation ? prismicRes.navigation : null
    const footerData = prismicRes.footer ? prismicRes.footer : null
    
    if (prismicRes.error || !doc) {
        return {
            props: {
                error: "Page not found",
            },
        }
    }

    if (res) {
        const etag = createEtag(doc)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", cacheControlHeader())
    }

    const docId = doc?.id

    const meta = createMeta(doc)

    return {
        props: {
            docId,
            meta,
            doc,
            navData,
            footerData,
            preview: {
                activeRef: ref
            }
        },
    }
}

// Get meta data
const createMeta = (docs: Document): IMetaData => {
    const metaTitle = asText(docs.data.meta_title)
    const metaDescription = asText(docs.data.meta_description)
    const metaAuthor = asText(docs.data.meta_author)
    const metaOgImg = docs.data.meta_og_img.url ? docs.data.meta_og_img.url : docs.data.meta_og_img
    const metaBanner = asText(docs.data.meta_banner)

    return {
        metaTitle,
        metaDescription,
        metaAuthor,
        metaOgImg,
        metaBanner
    }
}

export default Page