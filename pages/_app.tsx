import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/style/tukan"
import { theme } from "../components/style/tukan"
import { usePanelbear } from "@panelbear/panelbear-nextjs"

export default function App({ Component, pageProps }) {
    usePanelbear("JjsYCbNtceq")

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
