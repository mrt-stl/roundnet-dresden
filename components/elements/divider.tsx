import styled from "styled-components"

const Divider = styled.span<{width?: string, height?: string, marginTop?: string, marginBottom?: string}>`
    display: block;
    width: ${props => props.width ? props.width : "120px"};
    height: ${props => props.height ? props.height : "3px"};
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : "0"};
    margin-top: ${(props) => props.marginTop ? props.marginTop : "0"};
    margin-left: ${(props) => props.theme.spacing.small};
    background-color: ${(props) => props.theme.projectColors.accent};
`

export default Divider