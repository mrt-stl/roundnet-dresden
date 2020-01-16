import { isLink } from "../../utils/link-utils"
import { tukanConfig } from "../style/tukan"

interface INavLinkProps {
    href: string,
    linkContent: string
}

const NavLink = (props: INavLinkProps) => {
    const { href, linkContent } = props

    const content = isLink(linkContent) ?
        <div style={{ height: tukanConfig.navHeight, width: "auto" }}>
            <img src={linkContent} style={{ height: "100%" }} />
        </div> :
        linkContent

    return (
        <div className="nav-link">
            <a href={href}>{content}</a>

            <style jsx>{`
                .nav-link {
                    padding-left: 12px;
                    padding-right: 12px;
                }
                .nav-link a {
                    color: var(--primary);
                    background-image: none;
                }

                .nav-link a:hover {
                    color: var(--all-gray-40);
                    transition: 0.2s;
                }
            `}</style>
        </div>
    )
}

export default NavLink
