import { create } from "react-test-renderer"
import CookieNotification from "../../../../components/pattern/cookie-notification"

const link = "/datenschutz"

describe("CookieNotification component", () => {
    const component = create(
        <CookieNotification
            link={link} />
    )

    const instance = component.root

    test("set right link", () => {
        const linkElements = instance.findAllByProps({ href: link })
        expect(linkElements.length).toBe(1)
    })
})