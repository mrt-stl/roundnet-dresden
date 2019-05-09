import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getByUid } from "../networking/prismic-api"
import PatternWrapper from "../components/pattern-wrapper"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText } from "../utils/prismic-utils"
import Love from "../components/pattern/love"
import crypto from "crypto"
import parser from "accept-language-parser"

const Index = (props) => {
    const cookieLink = process.env.COOKIE ? JSON.parse(process.env.COOKIE) : undefined

    return (
        <div className="gemacht-mit-stadtteilliebe">
            <Meta
                data={props.meta} />
            <Nav />
            <PatternWrapper
                body={props.body} />
            {cookieLink ?
                <CookieNotification /> :
                <div />}
            <Love />
        </div>
    )
}

Index.getInitialProps = async ({ query, req, res }) => {
    const queryId = query.id ? query.id : "home"
    const docType = query.type ? query.type : "standard"

    const docs = await getByUid(docType, queryId)
    const docByLang = filterByLanguage(req, docs.results)

    const meta = createMeta(docByLang)
    const body = docByLang.data.body

    if (res) {
        const etag = createEtag(docs.results)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate")
    }

    return {
        meta,
        body
    }
}

// Filter docs by language
const filterByLanguage = (req, results) => {
    var langFilter = "de-de"

    // Languages that are available from prismic
    const docLangs = []
    for (const result of results) {
        docLangs.push(result.lang)
    }

    // Pick best language from browser settings
    if (req) {
        langFilter = parser.pick(docLangs, req.headers["accept-language"], { loose: true })
        langFilter = langFilter ? langFilter : "de-de"
    }

    // Filter result for best fitting lang
    var filteredResult = results.filter(result => result.lang === langFilter)
    filteredResult = filteredResult.length > 0 ? filteredResult[0] : results[0]
    return filteredResult
}

// Get meta data
const createMeta = (docs) => {
    const metaTitle = asText(docs.data.meta_title)
    const metaDescription = asText(docs.data.meta_description)
    const metaAuthor = asText(docs.data.meta_author)

    return {
        metaTitle,
        metaDescription,
        metaAuthor
    }
}

// Create etag from json
const createEtag = (json) => {
    return crypto.createHash("md5")
        .update(JSON.stringify(json))
        .digest("hex")
}

export default Index