import styled from "styled-components"

const Divider = styled.span<{width?: string, height?: string, marginTop?: string, marginBottom?: string, marginLeft?: string, color?: string}>`
    display: block;
    width: ${props => props.width ? props.width : "120px"};
    height: ${props => props.height ? props.height : "2px"};
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : "0"};
    margin-top: ${(props) => props.marginTop ? props.marginTop : "0"};
    margin-left: ${(props) => props.marginLeft ? props.marginLeft : "0"};
    background-color: ${(props) => props.color ? props.color : props.theme.projectColors.secondary};
`

export default Divider