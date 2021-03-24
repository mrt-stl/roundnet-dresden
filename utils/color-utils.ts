export const isColorLight = (color: string) => {
    const c = color.substring(1)
    const rgb = parseInt(c, 16)
    // tslint:disable-next-line: no-bitwise
    const r = (rgb >> 16) & 0xff
    // tslint:disable-next-line: no-bitwise
    const g = (rgb >> 8) & 0xff
    // tslint:disable-next-line: no-bitwise
    const b = (rgb >> 0) & 0xff

    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

    return hsp > 127.5
}

export const hexToRgb = (color: string) => {
    // if (color.length !== 6 || color[0] !== "#") {
    //     throw new Error("Something is wrong with this color string")
    // }
    const hexWithoutHash = color.substring(1)
    const splitHex = hexWithoutHash.match(/.{1,2}/g)
    const RgbArr = [parseInt(splitHex[0], 16), parseInt(splitHex[1], 16), parseInt(splitHex[2], 16)]

    return RgbArr
}

export const getGradient = (color: string) => {
    const RgbArr = hexToRgb(color)
    const gradientStr = `linear-gradient(45deg, 
                            rgba(${RgbArr[0]}, ${RgbArr[1]}, ${RgbArr[2]}, 1) 5%,
                            rgba(${RgbArr[0]}, ${RgbArr[1]}, ${RgbArr[2]}, 0.6) 30%,
                            rgba(${RgbArr[0]}, ${RgbArr[1]}, ${RgbArr[2]}, 0.2) 60%,
                            rgba(${RgbArr[0]}, ${RgbArr[1]}, ${RgbArr[2]}, 0.6) 70%,
                            rgba(${RgbArr[0]}, ${RgbArr[1]}, ${RgbArr[2]}, 1) 95%
                            )`

    return gradientStr
}
