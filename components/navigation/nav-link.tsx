interface INavLinkProps {
    href: string,
    linkContent: string
}

const NavLink = (props: INavLinkProps) => (
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

export default NavLink
