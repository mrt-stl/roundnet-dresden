import { isColorLight } from "../../../utils/color-utils"

const darkGreen = "#132516"
test("darkGreen is dark", () => {
    expect(isColorLight(darkGreen)).toEqual(false)
})