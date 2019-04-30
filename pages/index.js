import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getByUid } from "../networking/prismic-api"
import PatternWrapper from "../components/pattern-wrapper"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText } from "../utils/prismic-utils"

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

Index.getInitialProps = async ({ query }) => {
    var meta, body
    if (!query.id) {
        const docs = await getByUid("standard", "home")
        meta = createMeta(docs)
        body = docs.data.body

    } else {
        const docs = await getByUid("standard", query.id)
        meta = createMeta(docs)
        body = docs.data.body
        
    }

    return {
        meta,
        body
    }
}

export default Index