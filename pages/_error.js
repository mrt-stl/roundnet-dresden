import React from "react"
import Head from "next/head"
import Link from "next/link"

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        return (
            <div>
                <div >
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta charSet="utf-8" />
                        <link rel="stylesheet" href="/static/css/normalize.css" />
                        <link href="https://fonts.googleapis.com/css?family=Muli:400,700" rel="stylesheet" />

                        <title>Fehlerseite</title>

                        <meta name="author" content="Stadtteilliebe.de" />
                        <meta name="description" content="Fehlerseite" />
                    </Head>
                </div>

                <div className="gemacht-mit-stadtteilliebe">
                    <div className="hero-image-container">
                    <img src="../static/img/error-bild.jpg"/>
                        <div className="hero-image-content-container text-center">
                            <h1>
                                Seite nicht verfügbar
                            </h1>
                            <Link href="/">
                                <a className="link-content">Zurück zur Startseite</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .gemacht-mit-stadtteilliebe{
	                    font-family: "Muli", sans-serif;
                    }       
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
}

export default Error