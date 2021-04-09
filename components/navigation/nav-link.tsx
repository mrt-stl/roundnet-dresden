import { isLink } from "../../utils/link-utils"
import { media } from "../style/tukan"
import { tukanConfig } from "../style/tukan"
import styled from "styled-components"

interface INavLinkProps {
    href: string
    linkContent: string
    navColor?: boolean
}

const NavLink = (props: INavLinkProps) => {
    const { href, linkContent, navColor } = props

    const content = isLink(linkContent) ? (
        <div style={{ height: tukanConfig.navHeight, width: "auto" }}>
            <img src={linkContent} style={{ height: "100%" }} />
        </div>
    ) : (
        linkContent
    )

    return (
        <StyledNavLinks navColor={navColor}>
            <a href={href}>{content}</a>
        </StyledNavLinks>
    )
}

const StyledNavLinks = styled.div<{navColor:boolean}>`
    font-family: ${(props) => props.theme.primaryFont.name}, sans-serif;
    font-weight: ${(props) => props.theme.fontWeight.light};
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-right: ${(props) => props.theme.spacing.xs};
    text-transform: uppercase;

    a {
        color: ${(props) => props.navColor ? props.theme.projectColors.background : props.theme.projectColors.onBackground};
        background-image: none;
    }

    a:hover {
        color: ${(props) => props.theme.projectColors.primaryVariant};
        transition: 0.2s;
    }

    ${media.maxWidth("md")`
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 0;
        padding-right: 0;
        font-size: 16px;
        font-weight: light;
        a {
            color: ${(props) => props.theme.projectColors.onSecondary};
        }
    `};
`

export default NavLink
