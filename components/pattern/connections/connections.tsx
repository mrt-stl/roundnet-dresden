import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { TGrid, TCol } from "../../style/sc-grid"
import parse from "html-react-parser"
import { ConnectionsContainer, Headline, ImageWrapper, Details, CardContainer } from "./styles"

export interface IConnectionsProps {
    connectionsHeadline: string
    connectionsContent: string
    connectionsCards: {
        status: string
        link: string
        linkTarget: string
        details: string
        img: string
    }[]
}

const Connections = (props: IConnectionsProps) => {
    const { connectionsHeadline, connectionsContent, connectionsCards } = props

    const [activeCard, setActiveCard] = useState(0)

    const handleClick = (e) => {
        const target = e.currentTarget
        setActiveCard(parseInt(target.dataset.index))
    }

    return (
        <>
            <ConnectionsContainer>
                <TGrid>
                    <TCol size={1}>
                        <Headline>{connectionsHeadline}</Headline>
                        <div>{parse(connectionsContent)}</div>
                    </TCol>

                    <CardContainer>
                        {connectionsCards.map((card, index) => (
                            <ImageWrapper
                                key={index}
                                data-index={index}
                                onClick={handleClick}
                                isActive={index === activeCard}
                            >
                                <span>
                                    <Image
                                        src={card.img}
                                        layout="fill"
                                        objectFit="contain"
                                        alt="Company Logo"
                                    />
                                </span>
                            </ImageWrapper>
                        ))}
                    </CardContainer>

                    {connectionsCards.map((card, index) => (
                        <Details size={1} key={index} isActive={index === activeCard}>
                            {parse(card.details)}
                            <Link href={card.link} passHref>
                                <a target={card.linkTarget}>{card.link}</a>
                            </Link>
                        </Details>
                    ))}
                </TGrid>
            </ConnectionsContainer>
        </>
    )
}

export default Connections
