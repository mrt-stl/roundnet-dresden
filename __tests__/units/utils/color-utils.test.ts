import { isColorLight } from "../../../utils/color-utils"

const darkGreen = "#132516"
test("darkGreen is dark", () => {
    expect(isColorLight(darkGreen)).toEqual(false)
})

const anotherDarkGreen = "#3c646e"
test("anotherDarkGreen is dark", () => {
    expect(isColorLight(anotherDarkGreen)).toEqual(false)
})

const lightGreen = "#658e82"
test("lightGreen is light", () => {
    expect(isColorLight(lightGreen)).toEqual(true)
})