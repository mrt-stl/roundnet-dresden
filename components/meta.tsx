import Head from "next/head"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"
import { IMetaData } from "../models/config/meta-data"

interface IMetaProps {
    data: IMetaData
}

const Meta = (props: IMetaProps) => {
    const metaTitle = !isUndefinedOrNullOrEmpty(props.data.metaTitle)
        ? props.data.metaTitle
        : "TF Ventures"
    const metaDescription = !isUndefinedOrNullOrEmpty(props.data.metaDescription)
        ? props.data.metaDescription
        : "Wir sind ein Beratungsunternehmen mit spezieller Expertise im Bereich Private Equity und Real Estate. Im Rahmen von Beratungs- oder Transaktionsmandaten gehen wir zusammen mit Partnern äußerst selektiv auch eigene Beteiligungen ein."

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
