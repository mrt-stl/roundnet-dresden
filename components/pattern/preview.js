import { string } from "prop-types"

const Preview = (props) => {
    return (
        <div id="preview" className="preview-container">
            <div className="grid">
                <div className="col-4">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <img src={props.img} alt={props.imgDescription}></img>
                </div>
            </div>

            <style jsx>{`
            img {
                width: 100%;
                height: auto;
            }
            .preview-container {
                padding-top: 5em;
                padding-bottom: 5em;
                background-color: #f7f7f7;
            }

            `}</style>
        </div>

    )
}

Preview.propTypes = {
    title: string,
    content: string,
    img: string,
    imgDescription: string
}

export default Preview