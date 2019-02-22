import Link from "next/link"


const Nav = () => (
    <div className="nav">
        <div className="nav-content">
            <div className="nav-element">
                <Link href="/">
                    <a>
                        <p>Home</p>
                    </a>
                </Link>
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
                background: #ffffff;
            }
            
            .nav-content {
                margin-left: 5%;
                margin-right: 5%;
            }
            
            .nav-element {
                padding-right: 20px;
            }
            
            @media (max-width: 768px) {
                .nav {
                    overflow: hidden;
                    background: #ffffff;
                }
                .nav-content {
                    margin-left: 20px;
                    margin-right: 20px;
                }
            }
            `}</style>

    </div>
)


export default Nav
