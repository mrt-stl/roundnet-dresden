import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"

export interface IPreviewProps {
    title: string
    content: string
    imgSrc?: string
    imgAlt?: string
}

const Preview = (props: IPreviewProps) => {
    const title = props.title
    const content = props.content
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
        <div className="preview-container">
            <div className="grid">
                <div className="col-4">
                    <h2>{title}</h2>
                    {parse(content)}
                </div>
            </div>

            {imgSrc ?
                <div className="grid">
                    <div className="col">
                        <TukanImage
                            src={imgSrc}
                            alt={imgAlt}
                            height="512px" />
                    </div>
                </div> :
                <div />
            }

            <style jsx>{`
                img {
                    width: 100%;
                    height: 512px;
                    object-fit: cover;
                }
                .preview-container {
                    margin-top: var(--standard-spacing);
                    margin-bottom: var(--standard-spacing);
                    background-color: var(--all-gray-10);
                }
            `}</style>
        </div>

    )
}

export default Preview