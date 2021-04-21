import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    projectColors: { 
        yellow: string
        green: string
        blue: string
        gray10: string
        gray20: string
        gray30: string
        gray40: string
        gray50: string
        gray60: string
        gray70: string
        gray80: string
        gray90: string
        background?: string
        onBackground?: string
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
        bold: string
    }
   }
}
