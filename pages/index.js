import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { getPages } from "../networking/prismic-api"
import PatternWrapper from "../components/pattern-wrapper"

const Index = (props) => (
    <div>
        <Meta />
        <Nav />
        <PatternWrapper
            body={props.body} />
    </div>
)

Index.getInitialProps = async () => {
    const docs = await getPages("standard")
    const pageData = docs.results[0].data
    
    return {
        body: pageData.body
    }
}

export default Index