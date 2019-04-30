import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getByUid } from "../networking/prismic-api"
import PatternWrapper from "../components/pattern-wrapper"
import CookieNotification from "../components/pattern/cookie-notification"

const Index = (props) => {
    const cookieLink = process.env.COOKIE ? JSON.parse(process.env.COOKIE) : undefined

    return (
        <div className="gemacht-mit-stadtteilliebe">
            <Meta />
            <Nav />
            <PatternWrapper
                body={props.body} />
            {cookieLink ? 
                <CookieNotification /> : 
                <div />}
        </div>
    )
}

Index.getInitialProps = async ({ query }) => {
    if (!query.id) {
        const docs = await getByUid("standard", "home")
        const body = docs.data.body

        return {
            body
        }

    } else {
        const docs = await getByUid("standard", query.id)
        const body = docs.data.body

        return {
            body
        }
    }
}

export default Index