import Card, { ICardProps } from "./card"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"

export interface IInfiniteCardProps {
  cards: ICardProps[]
}

const InfiniteCards = (props: IInfiniteCardProps) => {
  const cards = props.cards.map((card, index) => {
    const imgSrc = card.imgSrc
    const imgAlt = card.imgAlt
    const title = card.title
    const content = card.content
    const link = card.link
    const linkIsBlank = card.linkIsBlank

    return (
      <TCol size={1 / 2} collapse="md" key={index}>
        <Card imgSrc={imgSrc} imgAlt={imgAlt} title={title} content={content} link={link} linkIsBlank={linkIsBlank} />
      </TCol>
    )
  })

  return (
    <InfiniteCardsContainer>
      <TGrid halign="center">{cards}</TGrid>
    </InfiniteCardsContainer>
  )
}

const InfiniteCardsContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.l};
  margin-bottom: ${(props) => props.theme.spacing.l};
`

export default InfiniteCards
