import { object } from "prop-types"

const SubText = (props) => {
    return (
        <div className="sub-container">
            <div className="grid">
                <div className="col">
                    {props.content}
                </div>
            </div>

            <style jsx>{`
                .sub-container {
                    font-size: 1.25em;
                }
            `}</style>
        </div>
    )
}

SubText.propTypes = {
    content: object
}

export default SubText