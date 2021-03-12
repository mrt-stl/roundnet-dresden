import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/style/tukan"
import { finalTheme as theme } from "../components/meta"

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
