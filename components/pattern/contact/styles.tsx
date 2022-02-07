import styled, { keyframes } from "styled-components"
import { media } from "../../style/tukan"

export const ContactContainer = styled.section`
    background-color: ${(props) => props.theme.color.cultured};
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xxl};

    a {
        transition: color 0.2s linear;
        text-decoration: underline;
    }

    a:hover {
        transition: color 0.1s linear;
        color: ${(props) => props.theme.color.bitterlemon};
    }
`

export const Headline = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${(props) => props.theme.fontSize.s};
    margin-bottom: ${(props) => props.theme.spacing.s};
`

export const Input = styled.input`
    width: 100%;
    border: none;
    appearance: none;
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.blackCoral};
    padding: ${(props) => props.theme.spacing.xs};
`

export const Checkbox = styled.input`
    width: fit-content;
    margin-right: ${(props) => props.theme.spacing.s};
`

export const TextArea = styled.textarea`
    width: 100%;
    border: none;
    appearance: none;
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.blackCoral};
    padding: ${(props) => props.theme.spacing.xs};
    min-height: 200px;
`

export const SubmitButton = styled.button`
    padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.blackCoral};
    color: ${(props) => props.theme.color.white};
    margin-right: ${(props) => props.theme.spacing.m};
    border: 0px;
    cursor: pointer;
    transition: all 0.2s linear;

    :hover {
        transition: all 0.1s linear;
        background-color: ${(props) => props.theme.color.bitterlemon};
    }
`

const fadeIn = keyframes`
    from {transform: translateX(-30px);
        opacity: 0;}
    to: {transform: translateX(0);
        opacity:1;}`

export const Message = styled.p<{ status: string }>`
    width: fit-content;
    display: inline-block;
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-top: ${(props) => props.theme.spacing.xs};
    padding-bottom: ${(props) => props.theme.spacing.xs};
    margin-left: ${(props) => props.theme.spacing.xs};
    animation: ${fadeIn} .3s;
    border-left: 2px solid
        ${(props) => (props.status === "success" ? props.theme.color.bitterlemon : "red")};

    ${media.maxWidth("lg")`
        margin-top: ${(props) => props.theme.spacing.s};
        margin-left: 0;
    `}
`

export const Tooltip = styled.span`
    visibility: hidden;
    width: 300px;
    position: absolute;
    top: -8px;
    right: 24px;
    font-size: ${(props) => props.theme.fontSize.s};
    transform: translateX(20px);
    transition: all 0.3s linear;

    ${media.maxWidth("lg")`
        transform: translateX(-20px);
        transition: all 0s linear;
    `}
`

export const TooltipWrapper = styled.div`
    position: relative;
    cursor: help;
    width: 24px;
    height: 24px;
    margin-left: auto;

    ${media.maxWidth("lg")`
        margin-left: 0;
        margin-right: auto;
    `}

    :hover {
        ${Tooltip} {
            visibility: visible;
            transform: translateX(0);
            transition: all 0.3s linear;

            ${media.maxWidth("lg")`
                transition: all 0s linear;
                transform: translateX(calc(100% + 24px));
                padding-left: 15px;
            `}
        }
    }
`
