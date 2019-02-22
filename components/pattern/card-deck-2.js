import Card from "./card"
import { loremIpsum, loremIpsum50 } from "../example/example-text"


const CardDeck2 = (props) => {
    
    return (
        <div className="card-deck-2-container">
            <div className="grid">
                <div className="col-4">
                    <Card
                        img="https://www.marktforschung.de/fileadmin/user_upload/Redaktion/Diverses/buero-surfen-apinan-fotolia-600x400.jpg"
                        title={loremIpsum}
                        content={loremIpsum50} />
                </div>
                <div className="col-4">
                    <Card
                        title={loremIpsum}
                        content={loremIpsum50} />
                </div>
            </div>
        </div>

    )
}

export default CardDeck2