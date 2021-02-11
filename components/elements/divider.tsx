import styled from "styled-components"

const Divider = styled.span<{width?: string, height?: string}>`
    display: block;
    width: ${props => props.width ? props.width : "120px"};
    height: ${props => props.height ? props.height : "3px"};
    margin-bottom: ${(props) => props.theme.spacing.medium};
    margin-left: ${(props) => props.theme.spacing.small};
    background-color: ${(props) => props.theme.projectColors.accent};
`

export default Divider