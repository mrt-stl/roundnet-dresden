import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: { 
        primary: string
        secondary: string
        accent: string
        dark?: string
        background: string
        font: string
        allGray10: string
        allGray20: string
        allGray30: string
        allGray40: string
        white: string
    },
    projectColors: { 
        primary: string
        secondary: string
        accent: string
        background?: string
    },
    spacing: {
        small?: string
        standard?: string
        medium?: string
        large?: string
    },
    font: {
        name?: string
        url?: string
    },
    gridConfig: {
        gridWidth?: string
        gridPadding?: string
        colPadding?: string
    },
    spacing: {
        small: string
        standard: string
        medium: string
        large: string
    },

    patternSpacing: {
        small: string
        standard: string
        medium: string
        large: string
    },

    fontWeight: {
        regular: string
        medium: string
        bold: string
    }
   }
}
