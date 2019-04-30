import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import { colors } from "./style/colors"
import { string, object } from "prop-types"

const Meta = (props) => {
    // Set colors
    const primary = props.primary ? "#" + props.primary : defaultColors.primary
    const secondary = props.secondary ? "#" + props.secondary : defaultColors.secondary
    const accent = props.accent ? "#" + props.accent : defaultColors.accent

    // Set font or go to default font
    var fontUrl, fontName
    if (process.env.FONT) {
        const fontJson = JSON.parse(process.env.FONT)
        fontUrl = fontJson.url
        fontName = fontJson.name

    } else {
        fontUrl = "https://fonts.googleapis.com/css?family=Roboto:400,700"
        fontName = "Roboto"
    }

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
            </Head>
            {grid}
            {colors(primary, secondary, accent)}
            {tukan(fontName)}
        </div>
    )
}

const defaultColors = {
    primary: "#000000",
    secondary: "#ff3c3c",
    accent: "#ff3c3c"
}

Meta.propTypes = {
    primary: string,
    secondary: string,
    accent: string,
    data: object
}

export default Meta