import Card from "./card"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"

interface IDetailsCard {
  title?: string
  content?: string
}

export interface IDetailsProps {
  cards: IDetailsCard[]
  backgroundColor?: string
}

const Details = (props: IDetailsProps) => {
  const cards = props.cards

  const details = cards.map((detail, index) => {
    return (
      <TCol size={1 / 4} collapse="md" key={index}>
        <Card title={detail.title} content={detail.content} />
      </TCol>
    )
  })

  return (
    <InfiniteCardsContainer>
      <TGrid halign="center">{details}</TGrid>
    </InfiniteCardsContainer>
  )
}

const InfiniteCardsContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.m};
`

export default Details
