import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    projectColors: { 
        primary: string
        primaryVariant?: string
        onPrimary?: string
        secondary: string
        secondaryVariant?: string
        onSecondary?: string
        surface?: string
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
        medium: string
        semiBold: string
        bold: string
    }
   }
}
