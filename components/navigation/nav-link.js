import { string } from "prop-types"

const NavLink = (props) => (
    <div className="nav-link">
        <a href={props.href}>{props.linkContent}</a>
        <style jsx>{`
            .nav-link {
                padding-left: 12px;
                padding-right: 12px;
            }
            .nav-link a {
                color: var(--primary);
            }

            .nav-link a:hover {
                color: var(--all-gray-40);
                transition: 0.2s;
            }

        `}</style>
    </div>

)

NavLink.propTypes = {
    href: string,
    linkContent: string
}

export default NavLink
