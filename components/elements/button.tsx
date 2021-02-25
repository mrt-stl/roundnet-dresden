import { media } from "../style/tukan"
import styled from "styled-components"

interface IButtonProps {
    href: string
    label: string
    color?: string
    bgColor?: string
}

const Button = (props: IButtonProps) => {
    const { href, label, color, bgColor } = props

    return (
        <StyledButton href={href} bgColor={bgColor} color={color}>
            {label}
        </StyledButton>
    )
}

const StyledButton = styled.a<{ bgColor?: string, color?: string }>`
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.projectColors.accent)};
    display: inline-block;
    padding-left: ${(props) => props.theme.spacing.s};
    padding-right: ${(props) => props.theme.spacing.s};
    padding-top: 20px;
    padding-bottom: 21px;
    color: ${(props) => props.color ? props.color : "#ffffff"};

    background-image: none;
    line-height: default;
    :hover {
        padding-left: ${(props) => props.theme.spacing.m};
        padding-right: ${(props) => props.theme.spacing.m};
        transition: all 0.1s ease-in-out;
        background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.color.primaryVariant)};
    }

    ${media.maxWidth("md")`

        background-position: center;
        transition: background 0.3s;

        :hover {
            padding-left: 36px;
            padding-right: 36px;
        }
    `};
`

export default Button
