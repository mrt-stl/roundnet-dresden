import { isUndefinedOrNullOrEmpty } from "../../../utils/object-utils"

const undefObj = undefined
test("undefObj is undefined", () => {
    expect(isUndefinedOrNullOrEmpty(undefObj)).toEqual(true)
})

const nullObj = null
test("nullObj is undefined", () => {
    expect(isUndefinedOrNullOrEmpty(nullObj)).toEqual(true)
})

const emptyObj = ""
test("emptyObj is undefined", () => {
    expect(isUndefinedOrNullOrEmpty(emptyObj)).toEqual(true)
})

const normalStr = "test"
test("normalStr is defined", () => {
    expect(isUndefinedOrNullOrEmpty(normalStr)).toEqual(false)
})

const zero = 0
test("zero is defined", () => {
    expect(isUndefinedOrNullOrEmpty(zero)).toEqual(false)
})

const falseObj = false
test("falseObj is defined", () => {
    expect(isUndefinedOrNullOrEmpty(falseObj)).toEqual(false)
})

const emptyArray = []
test("emptyArray is defined", () => {
    expect(isUndefinedOrNullOrEmpty(emptyArray)).toEqual(false)
})