import { string } from "prop-types"

const NavLink = (props) => (
    <div className="nav-link">
        <a href={props.href}>{props.linkContent}</a>
        <style jsx>{`
            .nav-link {
                padding-left: 8px;
                padding-right: 8px;
            }
            .nav-link a {
                color: var(--primary);
            }
        `}</style>
    </div>

)

NavLink.propTypes = {
    href: string,
    linkContent: string
}

export default NavLink
