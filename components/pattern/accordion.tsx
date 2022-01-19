import { TGrid, TCol } from "../style/sc-grid"
import { asHtml, asText } from "../../utils/prismic-utils"
import parse from "html-react-parser"
import styled, { keyframes } from "styled-components"
import Button from "../elements/button"
import {media} from "../style/tukan"
export interface IAccordionProps {
    headline: string
    showMoreBtn: boolean
    items: any
}

const Accordion = (props: IAccordionProps) => {
    const { headline, showMoreBtn, items } = props

    const handleClick = (e) => {
        if (e.target.parentNode.open || e.target.parentNode.parentNode.open) {
            return
        }
        const list: any = document.querySelectorAll("details")
        for (const item of list) {
            if (item.innerText !== e.target.innerText) {
                item.removeAttribute("open")
            }
        }
    }

    return (
        <>
            <AccordionContainer>
            <Anchor id={asText(headline).toLowerCase()} />
                <TGrid valign="top" halign="space-around">
                    <AccordionTitle size={1} collapse="md" talign="left">
                        {parse(asHtml(headline))}
                    </AccordionTitle>
                    <AccordionCol size={1} collapse="md">
                        {items.map((item, index) => {
                            return (
                                <details key={index} onClick={handleClick}>
                                    <summary> {parse(asHtml(item.accordion_summary))}</summary>
                                    {parse(asHtml(item.accordion_details))}
                                </details>
                            )
                        })}
                    </AccordionCol>
                    {showMoreBtn ? <TCol><Button href="/haeufige-fragen" label="Alle häufigen Fragen" invert/></TCol> : null}
                </TGrid>
            </AccordionContainer>
        </>
    )
}

const Anchor = styled.span`
    position: absolute;
    transform: translateY(-20vh);
`

const AccordionContainer = styled.div`
    margin-bottom: ${(props) => props.theme.spacing.xl};
`

const AccordionTitle = styled(TCol)`
    margin-top: ${(props) => props.theme.spacing.m};
`

const slideIn = keyframes`
    0% {opacity: 0; transform: translateY(-15px)}
  100% {opacity: 1; transform: translateY(0px)}
  `

const AccordionCol = styled(TCol)`
    h2,
    h3,
    h3,
    h4,
    h5,
    h6,
    p {
        display: inline-block;
        margin-top: ${(props) => props.theme.spacing.s};
        margin-bottom: ${(props) => props.theme.spacing.s};
    }

    summary {
        display: list-item;
        cursor: pointer;
        border-bottom: 1px solid ${(props) => props.theme.color.morningBlue};
        list-style: none;
    }

    summary:before {
        content: "×";
        display: inline-block;
        position: absolute;
        color: #cacaca;
        font-size: 2rem;
        line-height: 1rem;
        transform: rotate(-45deg);
        transform-origin: center;
        transition: 0.2s transform ease;
        top: 25px;
        left: unset;
        right: 40px;
    }

    summary:focus {
        outline: none;
    }

    details[open] > summary:before {
        transform: rotate(90deg);
        color: ${(props) => props.theme.color.bitterlemon} !important;
        transition: color ease 2s, transform ease 1s;
    }

    details:not([open]):hover > summary:before {
        transform: rotate(-45deg) scale(1.1);
        transition: transform ease 0.5s;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    details {
        position: relative;
        padding-right: 2em;
    }

    details > p {
        color: ${props => props.theme.color.blackCoral};
    }

    details[open] summary ~ * {
        animation: ${slideIn} 0.8s ease-in-out;
    }

    .block-img {
        overflow: auto;
        display: inline-block;
        width: 46%;
        height: auto;
        margin-right: 2%;
    }

    img {
        max-width: 100%;
        height: auto;
        margin-top: 10px;
    }

    ${media.maxWidth("md")`
    .block-img {
        width: 100%;
        margin-right: 0;
    }

    summary:before {
        right: 10px;
    }
    `}
`

export default Accordion
