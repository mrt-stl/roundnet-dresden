import Head from "next/head"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"
import { IMetaData } from "../models/config/meta-data"

interface IMetaProps {
  data: IMetaData
}

const Meta = (props: IMetaProps) => {
  // Icon urls
  const iconCDN = "https://s3.eu-central-1.amazonaws.com/tukan-frontend/dresdenhilfe/favicon/"

  const metaTitle = !isUndefinedOrNullOrEmpty(props.data.metaTitle) ? props.data.metaTitle : "Dresdenhilfe"
  const metaDescription = !isUndefinedOrNullOrEmpty(props.data.metaDescription) ? props.data.metaDescription : "Ihr Pflegedienst im Dresdner Zentrum"

  // Set font or go to default font
  const fontUrl = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"

  const gaID = "googleAnalyticsID"
  const gsv = "googleSiteVerification"
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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={fontUrl} rel="stylesheet" />

        <link rel="stylesheet" href="/public/css/normalize.css" />

        <link rel="apple-touch-icon" sizes="57x57" href={iconCDN + "apple-icon-57x57.png"} />
        <link rel="apple-touch-icon" sizes="60x60" href={iconCDN + "apple-icon-60x60.png"} />
        <link rel="apple-touch-icon" sizes="72x72" href={iconCDN + "apple-icon-72x72.png"} />
        <link rel="apple-touch-icon" sizes="76x76" href={iconCDN + "apple-icon-76x76.png"} />
        <link rel="apple-touch-icon" sizes="114x114" href={iconCDN + "apple-icon-114x114.png"} />
        <link rel="apple-touch-icon" sizes="120x120" href={iconCDN + "apple-icon-120x120.png"} />
        <link rel="apple-touch-icon" sizes="144x144" href={iconCDN + "apple-icon-144x144.png"} />
        <link rel="apple-touch-icon" sizes="152x152" href={iconCDN + "apple-icon-152x152.png"} />
        <link rel="apple-touch-icon" sizes="180x180" href={iconCDN + "apple-icon-180x180.png"} />
        <link rel="icon" type="image/png" sizes="192x192" href={iconCDN + "android-icon-192x192.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={iconCDN + "favicon-32x32.png"} />
        <link rel="icon" type="image/png" sizes="96x96" href={iconCDN + "favicon-96x96.png"} />
        <link rel="icon" type="image/png" sizes="16x16" href={iconCDN + "favicon-16x16.png"} />

        <script src={"https://www.googletagmanager.com/gtag/js?id=" + gaID} async />
        <meta name="google-site-verification" content={gsv} />
      </Head>
    </div>
  )
}

export default Meta
