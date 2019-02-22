import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"
import { colors } from "./style/colors"
import { string } from "prop-types"

const Meta = (props) => {
    const primary = props.primary !== undefined ? "#" + props.primary : "#1e323c"
    const secondary = props.secondary !== undefined ? "#" + props.secondary : "#30a5ce"
    const accent = props.accent !== undefined ? "#" + props.accent : "#d3b982"

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="/static/css/normalize.css" />
            </Head>
            {grid}
            {colors(primary, secondary, accent)}
            {tukan}
        </div>
    )
}

Meta.propTypes = {
    primary: string,
    secondary: string,
    accent: string
}

export default Meta