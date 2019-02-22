import Meta from "../components/meta"
import CardDeck2 from "../components/pattern/card-deck-2"

const Index = () => (
    <div>
        <Meta />
        <div>
            <div className="grid">
                <div className="col">
                    <h1>Example Project</h1>
                </div>
            </div>

            <CardDeck2 />
        </div>
    </div>
)

Index.getInitialProps = async () => {

    return {

    }
}

export default Index