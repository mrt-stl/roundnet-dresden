import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    projectColors: { 
        yellow: string
        green: string
        blue: string
        darkGray: string
        mediumGray: string
        lightGray: string
        lighterGray: string
        background?: string
        onBackground?: string
        white: string
        gradient?: boolean
    },
    primaryFont: {
        name?: string
        url?: string
    },
    secondaryFont: {
        name?: string
        url?: string
    },
    shadow: {
        standard: string
        onHover: string
    },
    gridConfig: {
        gridWidth?: string
        gridPadding?: string
        colPadding?: string
    },
    spacing: {
        none: string
        xxs: string
        xs: string
        s: string
        m: string
        l: string
        xl: string
        xxl: string
    },
    fontSize: {
        xxs?: string
        xs?: string
        s?: string
        m?: string
        l?: string
        xl?: string
        xxl?: string
        xxxl?: string
    },
    fontWeight: {
        light: string
        regular: string
        semibold: string
        bold: string
    }
   }
}
