import styled from "styled-components"

export const ContactContainer = styled.section`
    background-color: ${(props) => props.theme.color.cultured};
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xxl};
`

export const Headline = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${(props) => props.theme.fontSize.s};
    margin-bottom: ${(props) => props.theme.spacing.m};
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
`

export const Message = styled.p<{status: string}>`
    width: fit-content;
    display: inline-block;
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-top: ${(props) => props.theme.spacing.xs};
    padding-bottom: ${(props) => props.theme.spacing.xs};
    margin-left: ${(props) => props.theme.spacing.xs};
    border-left: 2px solid ${props => props.status === "success" ? props.theme.color.bitterlemon : "red"}
`
