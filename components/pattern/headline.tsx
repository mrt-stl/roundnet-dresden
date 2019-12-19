import parse from "html-react-parser"

export interface IHeadlineProps {
    content: string
}

const Headline = (props: IHeadlineProps) => (
    <div className="headline-container">
        <div className="grid">
            <div className="col">
                {parse(props.content)}
            </div>
        </div>
    </div>
)

export default Headline