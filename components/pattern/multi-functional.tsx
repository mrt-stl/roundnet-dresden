import parse from "html-react-parser"

export interface IMultiFunctionalProps {
    title?: string
    cols: IMultiFunctionalCol[]
}

export interface IMultiFunctionalCol {
    content: string
    link?: string
}

const MultiFunctional = (props: IMultiFunctionalProps) => {

    const contentCols = props.cols.map((col, index) => {
        if (col.link) {
            return (
                <div className="col" key={index}>
                    <a href={col.link}>
                        {parse(col.content)}
                    </a>
                </div>
            )

        } else {
            return (
                <div className="col" key={index}>
                    {parse(col.content)}
                </div>
            )
        }
    })

    return (
        <div className="multi-functional-container">
            {props.title ?
                <div className="grid">
                    <div className="col">
                        <h4>
                            {props.title}
                        </h4>
                    </div>
                </div> :
                <></>
            }

            <div className="grid">
                {contentCols}
            </div>
        </div>
    )
}

export default MultiFunctional