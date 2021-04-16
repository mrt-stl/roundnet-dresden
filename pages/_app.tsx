import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/style/tukan"
import { theme } from "../components/style/tukan"

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
            <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
