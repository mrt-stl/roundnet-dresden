import { TGrid, TCol } from "../style/sc-grid"
import { asHtml, asText } from "../../utils/prismic-utils"
import parse from "html-react-parser"
import styled, { keyframes } from "styled-components"
export interface IStageProps {
    headline: string
    items: any
    ref?: any
}

const Accordion = (props: IStageProps) => {
    const { headline, items, ref } = props

    const handleClick = (e) => {
        if (e.target.parentNode.open || e.target.parentNode.parentNode.open) {
            return
        }
        let list: any = document.querySelectorAll("details")
        for (var item of list) {
            if (item.innerText !== e.target.innerText) {
                item.removeAttribute("open")
            }
        }
    }

    return (
        <>
            <Anchor id={asText(headline).toLowerCase()} ref={ref} />
            <AccordionContainer>
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
                </TGrid>
            </AccordionContainer>
        </>
    )
}

const Anchor = styled.span`
    position: absolute;
    transform: translateY(-30vh);
`

const AccordionContainer = styled.div``

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
        display: block;
        cursor: pointer;
        border-bottom: 1px solid ${(props) => props.theme.projectColors.grey20};
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
        top: 1.2rem;
        left: unset;
        right: 0.6rem;
    }

    summary:focus {
        outline: none;
    }

    details[open] > summary:before {
        transform: rotate(90deg);
        color: ${(props) => props.theme.projectColors.blue} !important;
        transition: color ease 2s, transform ease 1s;
    }

    details:not([open]):hover > summary:before {
        transform: rotate(-45deg) scale(1.1);
        transition: transform ease 0.5s;
    }

    details summary::marker {
        display: none;
    }

    details {
        position: relative;
        padding-right: 2em;
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

    @media only screen and (max-width: 768px) {
        .block-img {
            width: 100%;
            margin-right: 0;
        }
    }
`

export default Accordion
