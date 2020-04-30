import parse from "html-react-parser"

export interface IStageProps {
    title: string
    content: string
}

const Stage = (props: IStageProps) => {
    const title = props.title
    const content = props.content

    return (
            <div className="stage-container">
                <div className="grid align-items-center">
                    <div className="col-6">
                        <div>
                            <h1>{title}</h1>
                        </div>
                        <div>
                            {parse(content)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Stage