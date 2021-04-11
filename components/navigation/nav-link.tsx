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
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: ${(props) => props.theme.fontWeight.light};
    text-transform: uppercase;
    letter-spacing: 2px;

    a {
        color: ${(props) => props.navColor ? props.theme.projectColors.background : props.theme.projectColors.onBackground};
        background-image: none;
        transition: all 0.15s ease-in-out;
    }

    a:hover {
        opacity: 0.6;
        transition: 0.2s;
        transition: all 0.15s ease-in-out;
    }

    :first-child {
        padding-left: 0px;
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
