import { object } from "prop-types"

const HeroText = (props) => {
    return (
        <div id="hero-text" className="hero-container">
            <div className="grid justify-content-center">
                <div className="col-6">{props.content}</div>
            </div>

            <style jsx>{`
                .hero-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                }
            `}</style>
        </div>
    )
}

HeroText.propTypes = {
    content: object
}

export default HeroText