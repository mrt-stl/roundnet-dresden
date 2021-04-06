import parse from "html-react-parser"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"

export interface IHighlightTextProps {
  content: string
}

const HighlightText = (props: IHighlightTextProps) => {
  const content = props.content

  return (
    <HighlightContainer>
      <TGrid halign="center">
        <TCol size={3 / 4} collapse="md">
          {parse(content)}
        </TCol>
      </TGrid>
    </HighlightContainer>
  )
}

const HighlightContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.l};
  margin-bottom: ${(props) => props.theme.spacing.l};

  .center-align {
    display: block;
    text-align: center;
  }
`

export default HighlightText
