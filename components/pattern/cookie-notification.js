import { Component } from "react"
import CookieUtils from "../../utils/cookie-utils"
import { string } from "prop-types"

class CookieNotification extends Component {

    constructor(props) {
        super(props)

        this.state = {
            acceptedCookie: true
        }
    }

    componentDidMount() {
        const cookie = CookieUtils.getSettingsCookie()

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

    /**
     * On click handling for accepting cookie.
     */
    onAcceptCookie = () => {
        const settings = { acceptedCookie: true }
        const settingsString = JSON.stringify(settings)
        CookieUtils.setSettingsCookie(settingsString, 30)

        this.setState({ acceptedCookie: true })
    }

    render() {
        // If cookie is accepted don't display message
        if (this.state.acceptedCookie) {
            return (<div />)
        }

        return (
            <div className="cookie-container">
                <div className="grid align-items-center h-100">
                    <div className="cookie-content-container">
                        <div className="text-left">
                            Diese Webseite verwendet Cookies. <a href={this.props.link}>Hier</a> erfährst du mehr
                        </div>
                        <div className="text-right" onClick={this.onAcceptCookie}>
                            Alles klar
                        </div>
                    </div>
                </div>


                <style jsx>{`
                    .cookie-container {
                        position: fixed;
                        bottom: 0;
                        z-index: 100;
                        width: 100%;
                        height: 48px;
                        background-color: var(--primary);
                        color: var(--white);
                    }

                    a {
                        color: var(--white);
                        text-decoration: underline;
                    }
    
                    .cookie-content-container {
                        padding-left: 8px;
                        padding-right: 8px;
                        width: 100%;
                        position: relative;
                    }
                    
                    .text-left {
                        display: inline;
                    }
    
                    .text-right {
                        display: inline;
                        position: absolute;
                        right: 8px;
                        cursor: pointer;
                        text-decoration: underline;
                    }
    
                    @media only screen and (max-width: 768px) {
                        .grid {
                            flex-direction: row;
                        }
                        .cookie-content-container {
                            padding-left: 24px;
                            padding-right: 24px;
                        } 
                        .text-right {
                            position: static;
                            margin-left: 5px;
                        }
                    }
                    
                `}</style>
            </div>
        )
    }
}

CookieNotification.propTypes = {
    link: string
}

export default CookieNotification