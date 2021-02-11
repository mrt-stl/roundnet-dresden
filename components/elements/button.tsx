import { media } from "../style/tukan"
import styled from "styled-components"

const StyledButton = styled.a<{ bgColor?: string, color?: string }>`
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.projectColors.accent)};
    display: inline-block;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 16px;
    color: ${(props) => props.color ? props.color : "#000000"};

    background-image: none;
    line-height: default;
    :hover {
        padding-left: 36px;
        padding-right: 36px;
        transition: all 0.4s ease-in-out;
    }

    ${media.maxWidth("md")`
        padding-left: 24px;
        padding-right: 24px;

        background-position: center;
        transition: background 0.3s;

        :hover {
            padding-left: 36px;
            padding-right: 36px;
        }
    `};
`

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

export default Button
