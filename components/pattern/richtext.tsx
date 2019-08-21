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
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
                }
            `}</style>
        </div>

    )
}

export default Richtext