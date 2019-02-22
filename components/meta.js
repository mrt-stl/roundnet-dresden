import Head from 'next/head'
import { style } from './style'

const Meta = () => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="/static/css/normalize.css" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
            </Head>
            {style}
        </div>
    )
}

export default Meta