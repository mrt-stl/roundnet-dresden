import Head from "next/head"
import { tukan } from "./style/tukan"
import { grid } from "./style/binary-grid"

const Meta = () => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="/static/css/normalize.css" />
            </Head>
            {grid}
            {tukan}
        </div>
    )
}

export default Meta