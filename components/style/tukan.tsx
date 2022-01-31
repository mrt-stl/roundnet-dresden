import breakpoints from "styled-components-breakpoints"
import { createGlobalStyle, DefaultTheme } from "styled-components"

export const tukanConfig = {
    navHeight: "48px"
}

export const GlobalStyles = createGlobalStyle`
/* FONTS */
@font-face {
    font-family: "Open Sans";
    src: url("/font/OpenSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/font/OpenSans-Light.ttf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/font/OpenSans-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

/* CSS Reset from https://www.joshwcomeau.com/css/custom-css-reset/ */
/* START */
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
/* END */

/* CUSTOM STYLES */
* {
  font-family: "Open Sans", sans-serif
}

h1, h2, h3, h4, h5, h6 {
  color: ${(props) => props.theme.color.blackCoral};
  font-weight: 400;
}

h3 {
  font-size: ${props => props.theme.fontSize.xl}
}

p, a {
  color: ${(props) => props.theme.color.blackCoral};
}

a {
  text-decoration: none;
}
`

export const media = breakpoints({
    xxs: 0,
    xs: 320,
    sm: 576,
    md: 768,
    lg: 930,
    xl: 1010,
  })

export const theme: DefaultTheme = {
    color: {
        blackCoral: "#4B555D",
        platinum: "#EBEBEB",
        cultured: "#F7F7F8",
        morningBlue: "#83A0A0",
        bitterlemon: "#C1D72E",
        white: "#ffffff"
    },
    fontSize: {
        s: "0.875rem",
        m: "1rem",
        l: "1.125rem", // chrome default h3 font size
        xl: "1.75rem", // h3 global
        xxl: "2rem",
    },
    spacing: {
        xs: "10px",
        s: "20px",
        m: "40px",
        l: "60px",
        xl: "80px",
        xxl: "120px",
    },
    lineHeight: {
        s: "1.25",
        m: "1.5",
        l: "1.75",
    },
    fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
    },
}