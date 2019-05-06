import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import { string, object } from "prop-types"

const Meta = (props) => {
    // Icon urls
    const iconCDN = "https://s3.eu-central-1.amazonaws.com/kranich/icons/kranich-stl/"

    // Set colors
    const definedColors = process.env.COLORS ? JSON.parse(process.env.COLORS) : process.env.COLORS
    const primary = definedColors ? definedColors.primary : defaultColors.primary
    const secondary = definedColors ? definedColors.secondary : defaultColors.secondary
    const accent = definedColors ? definedColors.accent : defaultColors.accent

    // Set font or go to default font
    var fontUrl, fontName
    if (process.env.FONT) {
        const fontJson = JSON.parse(process.env.FONT)
        fontUrl = fontJson.url
        fontName = fontJson.name

    } else {
        fontUrl = "https://fonts.googleapis.com/css?family=Muli:400,700"
        fontName = "Muli"
    }

    // Google Analytics ID
    const gaId = process.env.GA

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link href={fontUrl} rel="stylesheet" />
                <link rel="stylesheet" href="/static/css/normalize.css" />

                <title>{props.data.metaTitle}</title>

                <meta name="author" content={props.data.metaAuthor}></meta>
                <meta name="description" content={props.data.metaDescription}></meta>

                <link rel="apple-touch-icon" sizes="57x57" href={iconCDN + "apple-icon-57x57.png"}></link>
                <link rel="apple-touch-icon" sizes="60x60" href={iconCDN + "apple-icon-60x60.png"}></link>
                <link rel="apple-touch-icon" sizes="72x72" href={iconCDN + "apple-icon-72x72.png"}></link>
                <link rel="apple-touch-icon" sizes="76x76" href={iconCDN + "apple-icon-76x76.png"}></link>
                <link rel="apple-touch-icon" sizes="114x114" href={iconCDN + "apple-icon-114x114.png"}></link>
                <link rel="apple-touch-icon" sizes="120x120" href={iconCDN + "apple-icon-120x120.png"}></link>
                <link rel="apple-touch-icon" sizes="144x144" href={iconCDN + "apple-icon-144x144.png"}></link>
                <link rel="apple-touch-icon" sizes="152x152" href={iconCDN + "apple-icon-152x152.png"}></link>
                <link rel="apple-touch-icon" sizes="180x180" href={iconCDN + "apple-icon-180x180.png"}></link>
                <link rel="icon" type="image/png" sizes="192x192" href={iconCDN + "android-icon-192x192.png"}></link>
                <link rel="icon" type="image/png" sizes="32x32" href={iconCDN + "favicon-32x32.png"}></link>
                <link rel="icon" type="image/png" sizes="96x96" href={iconCDN + "favicon-96x96.png"}></link>
                <link rel="icon" type="image/png" sizes="16x16" href={iconCDN + "favicon-16x16.png"}></link>

                {
                    gaId ?
                        <script src={"https://www.googletagmanager.com/gtag/js?id=" + gaId} async></script> :
                        <script />
                }

                {gaId ?
                    <script dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');
                    `}} /> :
                    <script />}



            </Head>
            {grid}
            {tukan(fontName, primary, secondary, accent)}
        </div>
    )
}

const defaultColors = {
    primary: "#3C4044",
    secondary: "#3C4B5A",
    accent: "#FF5050"
}

Meta.propTypes = {
    primary: string,
    secondary: string,
    accent: string,
    data: object
}

export default Meta