import NavLink from "./nav-link"

const Nav = () => (
    <div className="nav">
        <div className="grid h-100">
            <div className="col-1 align-items-center">
                <NavLink
                    href="/"
                    linkContent="Startseite" />
            </div>
            <div className="col-1 align-items-center">
                <NavLink
                    href="/"
                    linkContent="Kontakt" />
            </div>
            <div className="col-1 align-items-center">
                <NavLink
                    href="/"
                    linkContent="Impressum" />
            </div>
        </div>

        <style jsx>{`
            .nav {
                z-index: 100;
                overflow: hidden;
                position: fixed;
                top: 0;
                width: 100%;
                height: 50px;
                background-color: var(--white);
            }

            .nav-link {
                color: var(--primary);
            }
            `}</style>

    </div>
)


export default Nav
