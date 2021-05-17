import { isLink } from "../../utils/link-utils"
import { media } from "../style/tukan"
import { tukanConfig } from "../style/tukan"
import styled from "styled-components"

interface INavLinkProps {
    href: string
    linkContent: string
    navColor?: string
}

const NavLink = (props: INavLinkProps) => {
    const { href, linkContent } = props

    const content = isLink(linkContent) ? (
        <div style={{ height: tukanConfig.navHeight, width: "auto" }}>
            <img src={linkContent} style={{ height: "100%" }} />
        </div>
    ) : (
        linkContent
    )

    return (
        <StyledNavLinks>
            <a href={href}>{content}</a>
        </StyledNavLinks>
    )
}

const StyledNavLinks = styled.div`
    font-family: ${(props) => props.theme.primaryFont.name}, sans-serif;
    padding-left: ${(props) => props.theme.spacing.s};
    padding-right: ${(props) => props.theme.spacing.s};
    font-size: ${(props) => props.theme.fontSize.s};

    a {
        color: ${(props) =>  props.theme.projectColors.onBackground};
        background-image: none;
        transition: all 0.25s ease-in-out;
    }

    a:hover {
        color: ${(props) =>  props.theme.projectColors.blue};
        transition: all 0.25s ease-in-out;
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
            color: ${(props) => props.theme.projectColors[props.navColor]};
        }
    `};
`

export default NavLink
