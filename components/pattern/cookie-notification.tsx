import { Component } from "react"
import { getSettingsCookie, setSettingsCookie } from "../../utils/cookie-utils"

interface ICookieNotificationProps {
    link: string
}

class CookieNotification extends Component<ICookieNotificationProps, {}> {

    public state = {
        acceptedCookie: true
    }

    public componentDidMount() {
        const cookie = getSettingsCookie()

        // Has no cookie.
        if (cookie === null) {
            this.setState({ acceptedCookie: false })

        } else {
            const settings = JSON.parse(cookie)

            // Checks if user already accepted cookie.
            if (!settings.acceptedCookie) {
                this.setState({ acceptedCookie: false })
            }
        }
    }

    public render() {
        // If cookie is accepted don't display message
        if (this.state.acceptedCookie) {
            return (<div />)
        }

        return (
            <div className="cookie-container">
                <div className="align-items-center">
                    <div className="grid cookie-content-container">
                        <div className="col-6">
                            <div>
                                <p>
                                    Diese Website verwendet Cookies. Indem Du die Seite nutzt, stimmst Du der Cookie-Nutzung zu. <a href={this.props.link}>Mehr erfahren</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-2 end">
                            <div className="button" onClick={this.onAcceptCookie}>
                                Alles klar
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .cookie-container {
                        position: fixed;
                        bottom: 0;
                        z-index: 100;
                        width: 100%;
                        background-color: var(--dark);
                        color: var(--white);
                    }

                    a {
                        color: gray;
                    }

                    .cookie-content-container {
                        padding-top: 24px;
                        padding-bottom: 24px;
                        width: 100%;
                        position: relative;
                    }

                    .cookie-content-container p {
                        line-height: 1.5em;
                        color: var(--white);
                        margin-top: 0px;
                        margin-bottom: 0px;
                    }

                    .button {
                        background-color:  var(--white);
                        display: inline-block;
                        padding-top: 14px;
                        padding-bottom: 16px;
                        padding-left: 16px;
                        padding-right: 16px;
                        color: var(--dark);
                        cursor: pointer;
                    }

                    .button:hover {
                        background-color: var(--medium-grey);
                    }

                    .end {
                        display: flex;
                        justify-content: flex-end;
                    }

                    @media only screen and (max-width: 768px) {
                        .grid {
                            flex-direction: row;
                        }
                        .end {
                            display: flex;
                            justify-content: flex-start;
                        }
                    }
                `}</style>
            </div>
        )
    }

    /**
     * On click handling for accepting cookie.
     */
    private onAcceptCookie = () => {
        const settings = { acceptedCookie: true }
        const settingsString = JSON.stringify(settings)
        setSettingsCookie(settingsString, 30)

        this.setState({ acceptedCookie: true })
    }
}

export default CookieNotification