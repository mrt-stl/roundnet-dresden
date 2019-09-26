export const isColorLight = (color: string) => {
    const c = color.substring(1)
    const rgb = parseInt(c, 16)
    // tslint:disable-next-line: no-bitwise
    const r = (rgb >> 16) & 0xff
    // tslint:disable-next-line: no-bitwise
    const g = (rgb >> 8) & 0xff
    // tslint:disable-next-line: no-bitwise
    const b = (rgb >> 0) & 0xff

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

    return luma < 40
}