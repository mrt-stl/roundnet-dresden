import breakpoints from "styled-components-breakpoints"
import { createGlobalStyle, DefaultTheme } from "styled-components"
import Project from "../../models/config/project"

const project = Project.getInstance()

export const tukanConfig = {
    navHeight: "48px"
}

export const GlobalStyles = createGlobalStyle`
html, body {
    font-family: ${({ theme }) => theme.primaryFont.name}, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.projectColors.background}
}
h1 {
    line-height: 1.5;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}

h2 {
	font-size: 2.25em;
    letter-spacing: 0;
    line-height: 1.25;
    font-weight: ${props => props.theme.fontWeight.medium};
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}

h3 {
	font-size: 2em;
    letter-spacing: 0.1px;
    line-height: 1.25;
    font-weight: ${props => props.theme.fontWeight.regular};
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}

h4 {
	font-size: 1.5em;
    letter-spacing: 0.1px;
    font-weight: ${props => props.theme.fontWeight.bold};
    line-height: 1.25em;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
}

h5 {
	font-size: 1.25em;
	font-weight: ${props => props.theme.fontWeight.regular};
	letter-spacing: 0.1px;
	line-height: 1.5em;
	margin-bottom: 0.8em;
	margin-top: 0.8em;
}

h6 {
    font-size: 1.25em;
	font-weight: ${props => props.theme.fontWeight.regular};
	letter-spacing: 0.1px;
	line-height: 1.5em;
	margin-bottom: 0em;
	margin-top: 0em;
}

p {
	font-size: 1em;
	letter-spacing: 0.2px;
    line-height: 1.5;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    font-weight: 400;
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.75em;
    }
}

ul {
    padding-right: 24px;
    padding-left: 40px !important;
    margin-left: 10px;
    line-height: 2;
    border-left: 1px solid black;
}

li {
    padding-left: 8px;
    list-style: square;
}

@media (max-width: 768px) {
    ul {
        font-size: 14px;
    }
}

a {
	text-decoration: none;
	font-weight: regular;
    line-height: 1.2;
    color: ${props => props.theme.projectColors.secondary};
}

h2 a:hover {
    background-size: 100% 2px;
}

hr {
	background-color: #000000;
	height: 4px;
	margin-bottom: 3em;
	margin-top: 3em;
	width: 90%;
	border: 0px;
	box-sizing: content-box;
}

pre {
    word-wrap: break-word;
    word-break: break-word;
    padding: 16px;
    margin: 1em 0;
    line-height: 1.65;
    border: 1px solid var(--all-gray-20);
    color: #bd10e0;
    background: #f8f8f8;
    overflow: auto;
    border-radius: 4px;
}

.code {
    font-family: monospace,monospace;
    color: #bd10e0
}

img {
	max-width: 100%;
	object-fit: cover;
}

iframe {
    max-width: 100%;
}

.center-align {
    display: block;
    text-align: center;
}
`

export const media = breakpoints({
    xxs: 0,
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  })

const light = {
    color: {
        primary: "#121212",
        primaryVariant: "#22a19a",
        secondary: "#303030",
        secondaryVariant: "",
        onBackground: "",
        accent: "#F83850",
        dark: "#121212",
        background: "#FFFFFF",
        font: "#080808",
        gradient: true,
        allGray10: "#F5F5F5",
        allGray20: "#ECEDEE",
        allGray30: "#C8CBCE",
        allGray40: "#7E8082",
        white: "#123456"
    }
  }

const dark = {
    color: {
        primary: "#f0f0f0",
        primaryVariant: "",
        secondary: "#d0d0d0",
        secondaryVariant: "",
        onBackground: "#dcdcdc",
        accent: "#F83850",
        background: "#202428",
        font: "#ffffff",
        gradient: true,
        allGray10: "#404040",
        allGray20: "#808080",
        allGray30: "#d0d0d0",
        allGray40: "#f0f0f0",
        white: "#123456"
    }
}

const defaultTheme = {
    projectColors: {
        primary: project.colors.primary,
        primaryVariant: project.colors.primaryVariant,
        onPrimary: project.colors.onPrimary,
        secondary: project.colors.secondary,
        secondaryVariant: project.colors.secondaryVariant,
        onSecondary: project.colors.onSecondary,
        background: project.colors.background,
        onBackground: project.colors.onBackground,
        surface: project.colors.surface,
        gradient: Boolean(project.colors.gradient.toString() === "true"),
        accent: project.colors.accent,
        white: "#123456"
    },

    primaryFont: {
        name: "Inter",
        url: "https://fonts.googleapis.com/css2?family=Inter&display=swap"
    },
    secondaryFont: {
        name: "Playfair Display",
        url: "https://fonts.googleapis.com/css2?family=Playfair&display=swap"
    },
    gridConfig: {
        gridWidth: "1024px",
        gridPadding: "20px",
        colPadding: "20px"
    },
    fontSize: {
        xxs: "0.75em",
        xs: "0.875em",
        s: "1em",
        m: "1.125em",
        l: "1.5em",
        xl: "1.75em",
        xxl: "2em",
        xxxl: "3em"
    },
    spacing: {
        none: "0em",
        xxs: "0.5em",
        xs: "1em",
        s: "2em",
        m: "3em",
        l: "4em",
        xl: "6em",
        xxl: "8em"
    },
    fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700"
    }
}

export const lightTheme: DefaultTheme = { ...defaultTheme, ...light }
export const darkTheme: DefaultTheme = { ...defaultTheme, ...dark }