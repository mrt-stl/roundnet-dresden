import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getByUid } from "../networking/prismic-api"
import PatternWrapper from "../components/pattern-wrapper"

const Index = (props) => (
    <div>
        <Meta />
        <Nav />
        <PatternWrapper
            body={props.body} />
    </div>
)

Index.getInitialProps = async ({ query }) => {
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN

    if (!query.id) {
        const docs = await getByUid("standard", "home")
        const body = docs.data.body

        return {
            body
        }
        
    } else {
        const docs = await getByUid(ACCESS_TOKEN, "standard", query.id)
        const body = docs.data.body

        return {
            body
        }
    }
}

export default Index