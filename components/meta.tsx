import Head from "next/head"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"
import { IMetaData } from "../models/config/meta-data"

interface IMetaProps {
    data: IMetaData
}

const Meta = (props: IMetaProps) => {
    const metaTitle = !isUndefinedOrNullOrEmpty(props.data.metaTitle)
        ? props.data.metaTitle
        : "1. Roundnet Club Dresden e.V."
    const metaDescription = !isUndefinedOrNullOrEmpty(props.data.metaDescription)
        ? props.data.metaDescription
        : "Wir spielen Roundnet in Dresden. Lass uns gemeinsam spielen, trainieren und Spaß haben!"

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <title>{metaTitle}</title>
                
                <link rel="icon" href="/favicon.ico" sizes="any"></link>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <meta name="author" content={props.data.metaAuthor} />
                <meta name="description" content={metaDescription} />

                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={props.data.metaOgImg} />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="theme-color" content="light" />
            </Head>
        </div>
    )
}

export default Meta
