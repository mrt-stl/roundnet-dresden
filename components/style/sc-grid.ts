import Grid from "styled-components-grid"
import styled from "styled-components"
import breakpoints from "styled-components-breakpoints"

export const TGrid = styled.div<{ valign?: string, halign?: string }>`
    display: flex;
    flex-wrap: wrap;
    max-width: ${(props) => props.theme.gridConfig.gridWidth};
    margin-right: 20px;
    margin-left: calc( 100% / 7.2 );
    ${(props) => props.halign && Tutils.halign[props.halign](`
    left`)};
    ${(props) => props.valign && Tutils.valign[props.valign]()};
`
export const TRow = styled.div`
    display: flex;
`

export const TCol = styled.div<{ collapse?: string, size?: number }>`
    flex-basis: ${(props) => Math.round((props.size ? props.size : 1) * 100 * 10000) / 10000}%;
    max-width: ${(props) => Math.round((props.size ? props.size : 1) * 100 * 10000) / 10000}%;
    ${(props) => props.collapse && Tutils.media[props.collapse](`
        flex-basis: 100%
        max-width: 100%`)};
    padding: 12px ${(props) => props.theme.gridConfig.gridPadding};
    min-height: 1px;
    box-sizing: border-box;
`

const Tutils  = {
    media: {
        sm: (styles) => `
        @media only screen and (max-width: 576px) {
            ${styles}
        }`,
        md: (styles) => `
        @media only screen and (max-width: 768px) {
            ${styles}
        }`,
        lg: (styles) => `
        @media only screen and (max-width: 992px) {
            ${styles}
        }`,
        xl: (styles) => `
        @media only screen and (max-width: 1200px) {
            ${styles}
        }`
    },
    halign: {
        "left": () => `
        justify-content: flex-start`,
        "right": () => `
        justify-content: flex-end`,
        "center": () => `
        justify-content: center`,
        "space-around": () => `
        justify-content: space-around`,
        "space-between": () => `
        justify-content: space-between`
    },
    valign: {
        top: () => `
        align-items: flex-start`,
        bottom: () => `
        align-items: flex-end`,
        center: () => `
        align-items: center`,
        stretch: () => `
        align-items: stretch`,
    }
}

export const gridConfig =  {
    gridWidth: "1024px",
    gridPadding: "12px",
    colPadding: "12px"
}

export const media = breakpoints({
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
})

export const TukanGrid = styled(Grid)`
    padding-left: ${(props) => props.theme.gridConfig.gridPadding};
    padding-right: ${(props) => props.theme.gridConfig.gridPadding};
    max-width: ${(props) => props.theme.gridConfig.gridWidth};
    margin-right: auto;
    margin-left: auto;
    `
export const TukanCol = styled(Grid.Unit)`
    padding: 12px ${(props) => props.theme.gridConfig.gridPadding};
    min-height: 1px;
`