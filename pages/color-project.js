import Meta from "../components/meta"
import ExampleColContent from "../components/example/example-col-element"

const ColorProject = (props) => (
    <div>
        <Meta
            primary={props.primary}
            secondary={props.secondary}
            accent={props.accent} />
        <div>
            <div className="grid">
                <div className="col">
                    <h1>Binary Grid</h1>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <ExampleColContent
                        content="col-1" />
                </div>
            </div>

            <div className="grid">
                <div className="col-2 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-2" />
                </div>
            </div>

            <div className="grid">
                <div className="col-4 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-4" />
                </div>
            </div>

            <div className="grid">
                <div className="col-8 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-8" />
                </div>
            </div>

            <div className="grid">
                <div className="col-1 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-1" />
                </div>
                <div className="col-2 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-2" />
                </div>
                <div className="col-1 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-1" />
                </div>
                <div className="col justify-content-center align-items-center">
                    <ExampleColContent
                        content="col" />
                </div>
            </div>

            <div className="grid">
                <div className="col-4 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-4" />
                </div>
                <div className="col-4 justify-content-center align-items-center">
                    <ExampleColContent
                        content="col-4" />
                </div>
            </div>
        </div>


        <style jsx>{`
            .col, 
            .col-1,
            .col-2,
            .col-4,
            .col-8 {
                height: 128px;
            }
    `}</style>
    </div>
)

ColorProject.getInitialProps = async (context) => {

    return {
        primary: context.query.primary,
        secondary: context.query.secondary,
        accent: context.query.accent
    }
}

export default ColorProject