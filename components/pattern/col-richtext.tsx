import parse from "html-react-parser"

export interface IColRichtextProps {
    cols: string[]
}

const ColRichtext = (props: IColRichtextProps) => {
    return (
        <div className="col-richtext-container">
            <div className="grid">
                {props.cols.map((col, index) => {
                    return (
                        <div className="col" key={index}>
                            {parse(col)}
                        </div>
                    )
                })}
            </div>

            <style jsx>{`
                .col-richtext-container {
                    margin-top: var(--large-spacing);
                    margin-bottom: var(--large-spacing);
                }
            `}</style>
        </div>
    )
}

export default ColRichtext