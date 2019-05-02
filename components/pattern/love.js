import Link from "next/link"

const Love = () => {

    return (
        <div className="love-container">
            <Link href="https://stadtteilliebe.de">
                <a>
                    <div className="love-content grid h-100">
                        <div className="col align-items-center h-100">
                            <div>Gemacht mit Stadtteilliebe</div>
                        </div>
                    </div>
                </a>
            </Link>

            <style jsx>{`
                .love-container {
                    position: relative;
                    bottom: 0;
                    height: 48px;
                    background-color: var(--secondary);
                }
                a {
                    color: var(--white);
                }
            `}</style>
        </div>
    )
}

export default Love