import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: { 
        blackCoral: string
        platinum: string
        cultured: string
        morningBlue: string
        bitterlemon: string
        white: string
    },
    spacing: {
        xs: string
        s: string
        m: string
        l: string
        xl: string
        xxl: string
    },
    fontSize: {
        s?: string
        m?: string
        l?: string
        xl?: string
        xxl?: string
    },
    fontWeight: {
        light: string
        regular: string
        bold: string
    },
    lineHeight: {
        s: string
        m: string
        l: string
    }
   }
}
