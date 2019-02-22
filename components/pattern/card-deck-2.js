import Card from "./card"
import { loremIpsum, loremIpsum50 } from "../example/example-text"


const CardDeck2 = () => {
    
    return (
        <div className="card-deck-2-container">
            <div className="grid">
                <div className="col-4">
                    <Card
                        img="https://www.marktforschung.de/fileadmin/user_upload/Redaktion/Diverses/buero-surfen-apinan-fotolia-600x400.jpg"
                        imgDescription={loremIpsum}
                        title={loremIpsum}
                        content={loremIpsum50}
                        link="www.stadtteilliebe.de"
                        linkContent={loremIpsum} />
                </div>
                <div className="col-4">
                    <Card
                        img="https://www.marktforschung.de/fileadmin/user_upload/Redaktion/Diverses/buero-surfen-apinan-fotolia-600x400.jpg"
                        imgDescription={loremIpsum}
                        title={loremIpsum}
                        content={loremIpsum50}
                        link="www.stadtteilliebe.de"
                        linkContent={loremIpsum} />
                </div>
            </div>
        </div>

    )
}

export default CardDeck2