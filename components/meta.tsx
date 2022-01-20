import Head from "next/head"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"
import { IMetaData } from "../models/config/meta-data"

interface IMetaProps {
    data: IMetaData
}

const Meta = (props: IMetaProps) => {
    // Icon urls
    const metaTitle = !isUndefinedOrNullOrEmpty(props.data.metaTitle)
        ? props.data.metaTitle
        : process.env.PROJECT_NAME
    const metaDescription = !isUndefinedOrNullOrEmpty(props.data.metaDescription)
        ? props.data.metaDescription
        : "Ihr Pflegedienst im Dresdner Zentrum"

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>{metaTitle ?? ""}</title>

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
