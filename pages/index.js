import { loremIpsum, loremIpsum50 } from "../components/example/example-text"

import Meta from "../components/meta"
import CardDeck2 from "../components/pattern/card-deck-2"

const Index = (props) => (
    <div>
        <Meta />
        <div>
            <div className="grid">
                <div className="col">
                    <h1>Beispiel Projekt</h1>
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <h2>Karten Element</h2>
                </div>
            </div>
            <CardDeck2
                card1={props.card}
                card2={props.card} />
        </div>
    </div>
)

Index.getInitialProps = async () => {

    const card = {
        img: "https://www.marktforschung.de/fileadmin/user_upload/Redaktion/Diverses/buero-surfen-apinan-fotolia-600x400.jpg",
        imgDescription: loremIpsum,
        title: loremIpsum,
        content: loremIpsum50,
        link: "www.stadtteilliebe.de",
        linkContent: loremIpsum
    }

    return {
        card
    }
}

export default Index