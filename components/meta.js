import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import { string, object } from "prop-types"

const Meta = (props) => {
    // Icon urls
    const projectName = process.env.NAME ? process.env.NAME : "kranich-stl"
    const iconCDN = "https://s3.eu-central-1.amazonaws.com/kranich/icons/" + projectName + "/"

    // Set colors
    const definedColors = process.env.COLORS ? JSON.parse(process.env.COLORS) : process.env.COLORS

    const darkMode = process.env.DARK_MODE ? process.env.DARK_MODE : "off"

    var colors, darkModeColors
    switch (darkMode) {
        case "on":
            colors = defaultDarkModeColors
            darkModeColors = defaultDarkModeColors
            break
        
        case "auto":
            colors = defaultColors
            if (definedColors) {
                colors.primary = definedColors.primary
                colors.secondary = definedColors.secondary
                colors.accent = definedColors.accent
            }
            darkModeColors = defaultDarkModeColors
            break
    
        default:
            colors = defaultColors
            if (definedColors) {
                colors.primary = definedColors.primary
                colors.secondary = definedColors.secondary
                colors.accent = definedColors.accent
            }
            darkModeColors = colors
            break
    }
    
    

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

                <meta property="og:title" content={props.data.metaTitle}></meta>
                <meta property="og:description" content={props.data.metaDescription}></meta>
                <meta property="og:image" content={props.data.metaOgImg}></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>

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
            {tukan(fontName, colors, darkModeColors)}
        </div>
    )
}

// Default colors
const defaultColors = {
    primary: "#121212",
    secondary: "#303030",
    accent: "#F83850",
    dark: "#121212",
    background: "#FFFFFF",
    font: "#121212",
    allGray10: "#F5F5F5",
    allGray20: "#ECEDEE",
    allGray30: "#C8CBCE",
    allGray40: "#7E8082"
}

// Colors for dark mode
const defaultDarkModeColors = {
    primary: "#f0f0f0",
    secondary: "#d0d0d0",
    background: "#202428",
	font: "#ffffff",
    allGray10: "#404040",
    allGray20: "#808080",
    allGray30: "#d0d0d0",
    allGray40: "#f0f0f0"
}

Meta.propTypes = {
    primary: string,
    secondary: string,
    accent: string,
    data: object
}

export default Meta