import { string } from "prop-types"

const Headline = (props) => {
    return (
        <div className="headline-container">
            <div className="grid">
                <div className="col">
                    <h1>{props.title}</h1>
                </div>

            </div>

            <style jsx>{`
                .headline-container {
                    padding-top: 5em;
                }
            `}</style>
        </div>
    )
}

Headline.propTypes = {
    title: string
}

export default Headline