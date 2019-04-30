/* eslint-env jest */

import { shallow } from "enzyme"

import Index from "../pages/index.js"

describe("Index", () => {
    var wrapper

    beforeEach(async () => {
        const query = {
            query: {
                id: "home"
            }
        }
        const props = await Index.getInitialProps(query)
        wrapper = shallow(<Index {...props} />)
    })

    it("Main structure test", () => {
        expect(wrapper.find("div").text()).toBe("<Meta /><Nav /><PatternWrapper />")
    })
})