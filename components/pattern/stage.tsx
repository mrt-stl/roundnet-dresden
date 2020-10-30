import parse from "html-react-parser"
import styled from "styled-components"
import { TukanGrid, TukanCol } from "../style/binary-grid"
import { breakpoint } from "styled-components-breakpoint"

export interface IStageProps {
    title: string
    content: string
}
const StageContainer = styled.div`
padding-top: 3em;
padding-bottom: 1em;

    ${breakpoint("md")`
    padding-top: var(--large-spacing);
    margin-bottom: var(--large-spacing);
    padding-bottom: 0;
  `};

`
const Stage = (props: IStageProps) => {

    const title = props.title
    const content = props.content

    return (
        <div>
            <StageContainer>
                <TukanGrid valign="center">
                    <TukanCol size={{md: 6 / 8}} >
                        <div>
                            <h1>{title}</h1>
                        </div>
                    </TukanCol>
                    <TukanCol>
                        <div>
                            {parse(content)}
                        </div>
                    </TukanCol>
                </TukanGrid>
            </StageContainer>
            <div className="stage-container">
                <div className="grid align-items-center">
                    <div className="col-6">
                        <div>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="col">
                        <div>
                            {parse(content)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default Stage