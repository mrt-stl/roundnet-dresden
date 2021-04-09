import parse from "html-react-parser"
import {TGrid, TCol } from "../style/sc-grid"

export interface IHeadlineProps {
    content: string
}

const Headline = (props: IHeadlineProps) => (
    <div className="headline-container">
        <TGrid className="grid">
            <TCol size={1} collapse="md">
                {parse(props.content)}
            </TCol>
        </TGrid>
    </div>
)

export default Headline