import parse from "html-react-parser"

export interface IRichtextProps {
    content: string
}

const Richtext = (props: IRichtextProps) => {
    const content = props.content

    return (
        <div className="richtext-container">
            <div className="grid">
                <div className="col">
                    {parse(content)}
                </div>

            </div>
            <style jsx>{`
                .richtext-container {
                    margin-top: var(--standard-spacing);
                    margin-bottom: var(--standard-spacing);
                }
            `}</style>
        </div>

    )
}

export default Richtext