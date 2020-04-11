import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"

export interface IStageBlogProps {
    title: string
    content: string
    imgSrc?: string
    imgAlt?: string
}

const StageBlog = (props: IStageBlogProps) => {
    const title = props.title
    const content = props.content
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
            <div className="stage-blog-container">
                <div className="grid align-items-center">
                    <div className="col-8">
                        <div>
                            <h1>{title}</h1>
                        </div>
                        <div className="stage-blog-sub-title">
                            {parse(content)}
                        </div>
                        <div>
                            <TukanImage
                                src={imgSrc}
                                alt={imgAlt}
                                height="544px" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default StageBlog