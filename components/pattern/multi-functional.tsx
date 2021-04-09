import parse from "html-react-parser"
import { TGrid, TCol } from "../style/sc-grid"

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
                <TCol size={1} collapse="md" key={index}>
                    <a href={col.link}>
                        {parse(col.content)}
                    </a>
                </TCol>
            )

        } else {
            return (
                <TCol size={1} collapse="md" key={index}>
                    {parse(col.content)}
                </TCol>
            )
        }
    })

    return (
        <div className="multi-functional-container">
            {props.title ?
                <TGrid>
                    <TCol size={3 / 4}>
                        {parse(props.title)}
                    </TCol>
                </TGrid> :
                <></>
            }

            <TGrid>
                {contentCols}
            </TGrid>
        </div>
    )
}

export default MultiFunctional