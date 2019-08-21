import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getByUid } from "../networking/prismic-api"
import TukanContainer from "../components/tukan-container"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText } from "../utils/prismic-utils"
import Love from "../components/pattern/love"
import EditButton from "../components/pattern/edit-button"
import crypto from "crypto"
import { cacheControlHeader } from "../utils/cache-utils"
import Error from "./_error"
import { prismicPageToComponentModels } from "../controller/prismic-controller"

const Index = ({ error, docId, meta, componentModels }) => {
    if (error) {
        return (<Error />)
    }

    const cookieLink = process.env.COOKIE && process.env.COOKIE !== "" ? process.env.COOKIE : null

    return (
        <div className="gemacht-mit-stadtteilliebe">
            <Meta
                data={meta} />

            <Nav />
            <TukanContainer
                tukanModels={componentModels} />

            {cookieLink !== null ?
                <CookieNotification
                    link={cookieLink.link} /> :
                <div />}
            <EditButton
                docId={docId} />
            <Love />
        </div>
    )
}

Index.getInitialProps = async ({ query, res }) => {
    const queryId = query.id ? query.id : "home"
    const docType = query.type ? query.type : "standard"

    const docs = await getByUid(docType, queryId)
    if (docs.error) {
        return {
            error: docs.error
        }
    }

    const results = docs.results
    if (res) {
        const etag = createEtag(docs.results)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", cacheControlHeader())
    }

    const docByLang = results[0]
    const docId = docByLang.id
    const meta = createMeta(docByLang)

    const componentModels = prismicPageToComponentModels(docs)

    return {
        docId,
        meta,
        componentModels
    }
}

// Filter docs by language
/*
const filterByLanguage = (langFilter, results) => {
    const docLangs = []
    for (const result of results) {
        docLangs.push(result.lang)
    }

    langFilter = parser.pick(docLangs, langFilter, { loose: true })
    langFilter = langFilter ? langFilter : "de-de"

    // Filter result for best fitting lang
    let filteredResult = results.filter(result => result.lang === langFilter)
    filteredResult = filteredResult.length > 0 ? filteredResult[0] : results[0]
    return filteredResult
}
*/

// Get meta data
const createMeta = (docs) => {
    const metaTitle = asText(docs.data.meta_title)
    const metaDescription = asText(docs.data.meta_description)
    const metaAuthor = asText(docs.data.meta_author)
    const metaOgImg = docs.data.meta_og_img ? docs.data.meta_og_img.url : docs.data.meta_og_img

    return {
        metaTitle,
        metaDescription,
        metaAuthor,
        metaOgImg
    }
}

// Create etag from json
const createEtag = (json) => {
    return crypto.createHash("md5")
        .update(JSON.stringify(json))
        .digest("hex")
}

export default Index