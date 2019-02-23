import { loremIpsum, loremIpsum20, loremIpsum50 } from "../components/example/example-text"
import Meta from "../components/meta"
import CardDeck2 from "../components/pattern/card-deck-2"
import Preview from "../components/pattern/preview"
import Nav from "../components/navigation/nav"
import Action from "../components/pattern/action"
import HeroText from "../components/pattern/hero-text"

const Index = (props) => (
    <div>
        <Meta />
        <Nav />
        <div className="page-container">
            <div className="grid">
                <div className="col">
                    <h1>Beispiel Projekt</h1>
                </div>
            </div>

            <HeroText
                content={<p>{loremIpsum50}</p>} />

            <CardDeck2
                card1={props.card}
                card2={props.card} />

            <Preview
                title="Preview"
                content={loremIpsum50}
                img="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80"
                imgDescription={loremIpsum} />

            <Action
                content={loremIpsum20}
                link="/"
                linkContent="Projekt anfragen" />
        </div>
    </div>
)

Index.getInitialProps = async () => {

    const card = {
        img: "https://www.marktforschung.de/fileadmin/user_upload/Redaktion/Diverses/buero-surfen-apinan-fotolia-600x400.jpg",
        imgDescription: loremIpsum,
        title: "Karten",
        content: loremIpsum50,
        link: "www.stadtteilliebe.de",
        linkContent: loremIpsum
    }

    return {
        card
    }
}

export default Index