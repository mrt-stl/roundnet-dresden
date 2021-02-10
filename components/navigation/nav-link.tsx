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
        <StyledNavLinks className="nav-link">
            <a href={href}>{content}</a>
        </StyledNavLinks>
    )
}

const StyledNavLinks = styled.div`
    padding-left: 12px;
    padding-right: 12px;

    text-transform: uppercase;

    a {
        color: ${(props) => props.theme.projectColors ? props.theme.projectColors.accent : ""};
        background-image: none;
    }
    a:hover {
        color: #abcdef;
        transition: 0.2s;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 12px;
    }
`

export default NavLink
