import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import { string, object } from "prop-types"
import { DarkModeType } from "../models/config/project"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"

const Meta = (props) => {
    const project = props.project

    // Icon urls
    const projectId = !isUndefinedOrNullOrEmpty(project.projectId) ? project.projectId : "kranich-stl"
    const iconCDN = "https://s3.eu-central-1.amazonaws.com/kranich/icons/" + projectId + "/"

    // Set colors
    const projectColors = project.colors
    let colors = defaultColors
    let darkModeColors

    switch (project.darkMode) {
        case DarkModeType.ON:
            colors = defaultDarkModeColors
            darkModeColors = defaultDarkModeColors
            break

        case DarkModeType.AUTO:
            colors.primary = projectColors.primary !== "" ? projectColors.primary : defaultColors.primary
            colors.secondary = projectColors.secondary !== "" ? projectColors.secondary : defaultColors.secondary
            colors.accent = projectColors.accent !== "" ? projectColors.accent : defaultColors.accent

            darkModeColors = defaultDarkModeColors
            break

        default:
            colors.primary = projectColors.primary !== "" ? projectColors.primary : defaultColors.primary
            colors.secondary = projectColors.secondary !== "" ? projectColors.secondary : defaultColors.secondary
            colors.accent = projectColors.accent !== "" ? projectColors.accent : defaultColors.accent

            darkModeColors = colors
            break
    }



    // Set font or go to default font
    let fontUrl, fontName
    if (project.font) {
        fontUrl = project.font.url
        fontName = project.font.name

    } else {
        fontUrl = "https://fonts.googleapis.com/css?family=Muli:400,700&display=swap"
        fontName = "Muli"
    }

    const gaID = project.googleAnalyticsID

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

                {gaID && gaID !== "" ?
                    <script src={"https://www.googletagmanager.com/gtag/js?id=" + gaID} async></script> :
                    <script />
                }

                {gaID && gaID !== "" ?
                    <script dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaID}');
                    `}} /> :
                    <script />
                }

                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.prismic = {
                        endpoint: "${project.prismicEndpoint}"
                    };`
                }} />

                <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js" async />

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