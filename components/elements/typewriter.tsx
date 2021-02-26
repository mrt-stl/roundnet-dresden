import styled from "styled-components"
import { useEffect, useRef } from "react"

interface ITypewriterProps {
    strArr?: string[]
    period?: number
}

const Typewriter = (props: ITypewriterProps) => {
    const { strArr, period } = props
    const typewriter = useRef()

    const toRotate = strArr
    let loopNum = 0
    const periodFormatted = period || 2000
    let txt = ""
    let isDeleting = false

    useEffect(() => {
        const el = typewriter.current
        const tick = () => {
            const i = loopNum % toRotate.length
            const fullTxt = toRotate[i]

            if (isDeleting) {
                txt = fullTxt.substring(0, txt.length - 1)
            } else {
                txt = fullTxt.substring(0, txt.length + 1)
            }

            el.innerHTML = `<span class="wrap">${txt}</span>`

            let delta = 200 - Math.random() * 100

            if (isDeleting) {
                delta /= 2
            }

            if (!isDeleting && txt === fullTxt) {
                delta = periodFormatted
                isDeleting = true
            } else if (isDeleting && txt === "") {
                isDeleting = false
                loopNum++
                delta = 500
            }

            setTimeout(() => {
                tick()
            }, delta)
        }

        tick()
    }, [])

    return (
        <STLBanner href="https://www.stadtteilliebe.de" ref={typewriter}>
            <span className="wrap" />
        </STLBanner>
    )
}

const STLBanner = styled.a`
    color: ${(props) => props.theme.projectColors.accent};
    margin: 0 auto;
    padding-right: 0.1em;
    border-right: 0.08em solid ${(props) => props.theme.projectColors.accent};
`

export default Typewriter
