import { shallow } from "enzyme"

import Index from "../../pages/index"

describe("Index", () => {
    let wrapper

    beforeEach(async () => {
        const query = {
            query: {
                id: "home"
            },
            res: null
        }
        const props = await Index.getInitialProps(query)
        wrapper = shallow(<Index {...props} />)
    })

    it("Main structure test", () => {
        expect(wrapper.find(".gemacht-mit-stadtteilliebe").text()).not.toBeNull()
    })
})