import parse from "html-react-parser"

export interface IFocusProps {
    content: string
}

const Focus = (props: IFocusProps) => {
    const content = props.content

    return (
        <div className="focus-container">
            <div className="grid">
                <div className="col">
                    {parse(content)}
                </div>
            </div>
        </div>
    )
}

export default Focus