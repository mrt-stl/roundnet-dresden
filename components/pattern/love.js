const Love = () => {
    const noBanner = process.env.HAS_BANNER && Number(process.env.HAS_BANNER) === 0

    if (noBanner) {
        return (
            <div />
        )
    }

    return (
        <div className="love-container">
            <a href="https://stadtteilliebe.de">
                <div className="love-content grid h-100">
                    <div className="col align-items-center h-100">
                        <div>Gemacht mit Stadtteilliebe</div>
                    </div>
                </div>
            </a>

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