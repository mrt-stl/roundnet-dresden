import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import { colors } from "./style/colors"
import { string } from "prop-types"

const Meta = (props) => {
    const primary = props.primary !== undefined ? "#" + props.primary : defaultColors.primary
    const secondary = props.secondary !== undefined ? "#" + props.secondary : defaultColors.secondary
    const accent = props.accent !== undefined ? "#" + props.accent : defaultColors.accent

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css?family=Gothic+A1:400,700" rel="stylesheet" />
                <link rel="stylesheet" href="/static/css/normalize.css" />
            </Head>
            {grid}
            {colors(primary, secondary, accent)}
            {tukan}
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
    accent: string
}

export default Meta