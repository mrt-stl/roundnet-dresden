import Link from "next/link"
import Meta from "../components/meta"
import Nav from "../components/navigation/nav"

const Error = () => {

    const meta = {
        metaTitle: "Seite nicht verfügbar",
        metaDescription: "Seite nicht verfügbar",
    }
    
    return (
        <div >
            <Meta
                data={meta} />
            <Nav />

            <div className="hero-image-container">
                <img src="../static/img/error-bild.jpg" />
                <div className="hero-image-content-container text-center">
                    <h1>
                        Seite nicht verfügbar
                        </h1>
                    <Link href="/">
                        <a className="link-content">Zurück zur Startseite</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`    
                    .hero-image-container {
                        position: relative;
                        height: 100vh;
                        width: 100vw;
                    }
                    .hero-image-content-container {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%); 
                    }
                    a {
                        color: white;
	                    font-size: 1em;
	                    letter-spacing: 0.2px;
                        line-height: 1.5;
                        margin-bottom: 0.5em;
                        margin-top: 0.5em;
                        text-decoration: none;
                    }
                    h1 {
	                    font-size: 4em;
                        color: white;
                        letter-spacing: 0.1px;
                        line-height: 1.25;
                        font-weight: 400;
                        margin-bottom: 0.25em;
                        margin-top: 0.25em;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                `}</style>
        </div>
    )
}

export default Error