import { object } from "prop-types"

const Richtext = (props) => {
    return (
        <div className="grid">
            <div className="col">
                {props.content}
            </div>


            <style jsx>{`
                
            `}</style>
        </div>
    )
}

Richtext.propTypes = {
    content: object
}

export default Richtext