import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import Project, { DarkModeType } from "../models/config/project"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"
import { IMetaData } from "../models/config/meta-data"

interface IMetaProps {
    data: IMetaData
}

const Meta = (props: IMetaProps) => {
    const project = Project.getInstance()

    // Icon urls
    const projectId = !isUndefinedOrNullOrEmpty(project.projectId) ? project.projectId : "kranich-stl"
    const iconCDN = "https://s3.eu-central-1.amazonaws.com/kranich/icons/" + projectId + "/"

    const metaTitle = !isUndefinedOrNullOrEmpty(props.data.metaTitle) ? props.data.metaTitle : project.metaTitle
    const metaDescription = !isUndefinedOrNullOrEmpty(props.data.metaDescription) ? props.data.metaDescription : project.metaDescription

    // Set colors
    const projectColors = project.colors
    let colors: any = defaultColors
    let darkModeColors: any = defaultDarkModeColors

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
    let fontUrl = "https://fonts.googleapis.com/css?family=Muli:400,700&display=swap"
    let fontName = "Muli"
    if (project.font) {
        fontUrl = project.font.url
        fontName = project.font.name
    }

    const gaID = project.googleAnalyticsID

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

                <meta name="theme-color" content={colors.primary} />

                <link href={fontUrl} rel="stylesheet" />
                <link rel="stylesheet" href="/static/css/normalize.css" />

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

                {gaID && gaID !== "" ?
                    <script src={"https://www.googletagmanager.com/gtag/js?id=" + gaID} async /> :
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

export default Meta