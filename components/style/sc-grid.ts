import styled from "styled-components"

export const TGrid = styled.div<{ valign?: string, halign?: string }>`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    ${(props) => props.halign && Tutils.halign[props.halign](`
    left`)};
    ${(props) => props.valign && Tutils.valign[props.valign]()};
`
export const TRow = styled.div`
    display: flex;
`

export const TCol = styled.div<{ collapse?: string, size?: number, talign?: string, salign?: string }>`
    flex-basis: ${(props) => props.size ? Math.round((props.size) * 100 * 10000) / 10000 + "%" : "0"};
    max-width: ${(props) => props.size ? Math.round((props.size) * 100 * 10000) / 10000 + "%" : "100%"};
    flex-grow: 1;
    ${(props) => props.collapse ? Tutils.media[props.collapse](`
        flex-basis: 100%;
        max-width: 100%`) : Tutils.media["md"](`
        flex-basis: 100%;
        max-width: 100%`)};
    padding: 12px ${(props) => props.theme.spacing.m};
    min-height: 1px;
    box-sizing: border-box;
    text-align: ${(props) => props.talign ? props.talign : null };
    align-self: ${(props) => props.salign ? props.salign : null };
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
        @media only screen and (max-width: 930px) {
            ${styles}
        }`,
        xl: (styles) => `
        @media only screen and (max-width: 1010px) {
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