import { TGrid, TCol } from "../style/sc-grid"
import parse from "html-react-parser"
import styled from "styled-components"
import { media } from "../style/tukan"

export interface IListProps {
    listHeadline: string
    content: { content }[]
}

const List = ({ listHeadline, content }: IListProps) => {
    return (
        <ListContainer>
            <TGrid>
                <TCol>
                    <Headline>{listHeadline}</Headline>
                    {content.map((el, index) => (
                        <ListItem key={index}>{parse(el.content)}</ListItem>
                    ))}
                </TCol>
            </TGrid>
        </ListContainer>
    )
}

const ListContainer = styled.section`
    background-color: ${(props) => props.theme.color.blackCoral};
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    p {
        color: ${(props) => props.theme.color.white};
    }

    ${media.maxWidth("lg")`
        padding-top: ${(props) => props.theme.spacing.m};
        padding-bottom: ${(props) => props.theme.spacing.m};
    `}
`

const Headline = styled.p<{ accent?: boolean }>`
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: ${(props) => props.theme.spacing.m};
`

const ListItem = styled.div`
    p {
        border-left: 2px solid ${(props) => props.theme.color.bitterlemon};
        margin-top: ${(props) => props.theme.spacing.s};
        padding-left: ${(props) => props.theme.spacing.s};
    }
`

export default List
