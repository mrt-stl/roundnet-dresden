import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"

export interface ISelectionProps {
    cols: ISelectionCol[]
}

export interface ISelectionCol {
    ImgSrc?: string
    ImgAlt?: string
    content: string
    link?: string
}

const Selection = (props: ISelectionProps) => {

    const contentCols = props.cols.map((col, index) => {

        if (col.link) {
            return (
                <div className="col-4" key={index}>
                    <a href={col.link}>
                        <div className="height">
                            <TukanImage
                                src={col.ImgSrc}
                                alt={col.ImgAlt}
                                height="auto" />
                        </div>
                        <div>
                            {parse(col.content)}
                        </div>
                    </a>
                </div>
            )

        } else {
            return (
                <div className="col-4" key={index}>
                    <div className="height">
                        <TukanImage
                            src={col.ImgSrc}
                            alt={col.ImgAlt}
                            height="auto" />
                    </div>
                    <div>
                        {parse(col.content)}
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="selection-container">
            <div className="grid">
                {contentCols}
            </div>
        </div>
    )
}

export default Selection