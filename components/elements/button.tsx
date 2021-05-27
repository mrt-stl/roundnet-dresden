import styled from "styled-components"

interface IButtonProps {
    href: string
    label: string
    invert?: boolean
    bgColor?: string
}

const Button = (props: IButtonProps) => {
    const { href, label, invert, bgColor } = props

    return (
        <StyledButton href={href} bgColor={bgColor} invert={invert}>
            {label}
        </StyledButton>
    )
}

const StyledButton = styled.a<{ bgColor?: string; invert?: boolean }>`
    display: inline-block;
    border-radius: 8px;
    height: fit-content;
    padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.s};
    background-color: ${(props) => (props.invert ? props.theme.projectColors.blue : "white")};
    color: ${(props) => (props.invert ? "white" : props.theme.projectColors.blue)};
    box-shadow: ${(props) => props.theme.shadow.standard};

    :hover {
        box-shadow: ${(props) => props.theme.shadow.onHover};
        transition: all 0.15s ease-in-out;
    }
`

export default Button
