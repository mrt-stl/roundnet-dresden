import Link from "next/link"

const Love = () => {

    return (
        <div className="love-container">
            <Link href="https://stadtteilliebe.de">
                <a>
                    <div className="love-content grid align-items-center">
                        <p>Gemacht mit Stadtteilliebe</p>
                    </div>
                </a>
            </Link>

            <style jsx>{`
                .love-container {
                    height: 48px;
                    background-color: var(--secondary);
                }
                .love-content {
                    height: 100%;
                }
                a {
                    color: var(--white);
                }
            `}</style>
        </div>
    )
}

export default Love