export const isColorLight = (color: string) => {
    const c = color.substring(1)
    const rgb = parseInt(c, 16)
    // tslint:disable-next-line: no-bitwise
    const r = (rgb >> 16) & 0xff
    // tslint:disable-next-line: no-bitwise
    const g = (rgb >> 8) & 0xff
    // tslint:disable-next-line: no-bitwise
    const b = (rgb >> 0) & 0xff

    const hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    )

    return hsp > 127.5
}