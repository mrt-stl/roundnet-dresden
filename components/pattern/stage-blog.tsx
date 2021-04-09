import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"
import { TGrid, TCol } from "../style/sc-grid"

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
                <TGrid halign="center">
                    <TCol size={1}>
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
                                height="auto" />
                        </div>
                    </TCol>
                </TGrid>
            </div>
        )
    }

export default StageBlog