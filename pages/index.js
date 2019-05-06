import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getByUid } from "../networking/prismic-api"
import PatternWrapper from "../components/pattern-wrapper"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText } from "../utils/prismic-utils"
import Love from "../components/pattern/love"
import crypto from "crypto"

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

Index.getInitialProps = async ({ query, res }) => {
    const queryId = query.id ? query.id : "home"
    const docs = await getByUid("standard", queryId)
    const meta = createMeta(docs)
    const body = docs.data.body

    if (res) {
        const etag = createEtag(body)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate")
    }

    return {
        meta,
        body
    }
}

const createEtag = (str) => {
    return crypto.createHash("md5")
        .update(JSON.stringify(str))
        .digest("hex")
}

export default Index