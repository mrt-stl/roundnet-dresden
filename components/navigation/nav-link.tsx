import { isLink } from "../../utils/link-utils"
import { tukanConfig } from "../style/tukan"
import styled from "styled-components"

interface INavLinkProps {
    href: string
    linkContent: string
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
    font-weight: ${(props) => props.theme.fontWeight.regular},
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-right: ${(props) => props.theme.spacing.xs};
    text-transform: uppercase;
    letter-spacing: 0.16em;

    a {
        color: ${(props) => props.theme.projectColors ? props.theme.projectColors.accent : ""};
        background-image: none;
    }

    a:hover {
        color: ${(props) => props.theme.color.primaryVariant};
        transition: 0.2s;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 12px;
    }
`

export default NavLink
