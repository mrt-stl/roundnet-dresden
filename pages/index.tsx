import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import Footer from "../components/footer/footer"
import { getByUid } from "../networking/prismic-api"
import TukanContainer from "../components/tukan-container"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText, useUpdatePreviewRef } from "../utils/prismic-utils"
import EditButton from "../components/elements/edit-button"
import { cacheControlHeader, createEtag } from "../utils/cache-utils"
import Error from "./_error"
import { prismicPageToComponentModels } from "../controller/prismic-controller"
import Project from "../models/config/project"
import { Document } from "prismic-javascript/types/documents"
import TukanModel from "../models/tukan/tukan-model"
import { IMetaData } from "../models/config/meta-data"
import Banner from "../components/navigation/banner"

interface IIndexProps {
    docId?: string
    meta?: IMetaData
    doc?: Document
    footerData?: any
    error?: string
    navData: any
    preview?: any
}

const Index = (props: IIndexProps) => {
    const { docId, meta, doc, footerData, error, navData, preview } = props

    if (error) {
        return (<Error />)
    }

    useUpdatePreviewRef(preview, docId)

    const componentModels: TukanModel[] = prismicPageToComponentModels(doc)

    const project = Project.getInstance()

    const showCookieNotification = project.cookieLink !== null

    return (
        <div className="tukan">
                <Meta
                    data={meta} />

                    <Nav data={navData}/>

                    {meta.metaBanner ?
                        <Banner content={meta.metaBanner} /> :
                        <></>
                    }

                    <TukanContainer
                        tukanModels={componentModels} />

                    <Footer data={footerData}/>

                {showCookieNotification ?
                    <CookieNotification
                        link={project.cookieLink} /> :
                    <div />
                }

                <EditButton
                    docId={docId} />
        </div>
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
    const metaOgImg = docs.data.meta_og_img.url ? docs.data.meta_og_img.url : null
    const metaBanner = asText(docs.data.meta_banner)

    return {
        metaTitle,
        metaDescription,
        metaAuthor,
        metaOgImg,
        metaBanner
    }
}

export default Index