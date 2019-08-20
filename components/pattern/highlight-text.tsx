import parse from "html-react-parser"

interface IHighlightTextProps {
    content: string
}

const HighlightText = (props: IHighlightTextProps) => {
    const content = props.content

    return (
        <div className="highlight-container">
            <div className="grid justify-content-center">
                <div className="col-6">{parse(content)}</div>
            </div>

            <style jsx>{`
                .highlight-container {
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
                }
            `}</style>
        </div>
    )
}

export default HighlightText