import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { TGrid, TCol } from "../components/style/sc-grid"
import styled, { keyframes } from "styled-components"

const Error = (props) => {

    const meta = {
        metaTitle: "404",
        metaDescription: "Seite nicht verfügbar",
    }

    return (
        <div>
            <Meta data={meta} />
            <Nav data={props.navData} />

            <div className="tukan-container">
                <ErrorGrid halign="center" valign="bottom">
                    <AnimatedCol size={2 / 9} talign="center">
                        <StyledSvg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.41 283.41">
                            <path
                                className="cls-1"
                                d="M110.54,23.69a2.56,2.56,0,1,0-1.81-4.8h0c-2.16.6-4.38,1.36-6.71,2.1l-3.48,1.3c-1.19.44-2.39.89-3.57,1.43a126.89,126.89,0,0,0-14.73,7.34A136.88,136.88,0,0,0,65.59,41.14a127.11,127.11,0,0,0-25.42,27.3,141.56,141.56,0,0,0-9.36,15.88,137.16,137.16,0,0,0-6.66,16.12c-.48,1.31-.88,2.63-1.26,3.93s-.76,2.59-1.14,3.86c-.62,2.56-1.27,5-1.76,7.44-1,4.82-1.65,9.3-2.08,13.3-.17,2-.34,3.88-.49,5.62s-.11,3.54-.16,5.07c0,.77,0,1.5-.06,2.18v1.63c0,1,0,1.85,0,2.53v2.11a17.86,17.86,0,0,0,.27,2.89A16.53,16.53,0,0,0,50,145.09L49.64,143q-.18-1-.45-2.49c-.09-.49-.18-1-.28-1.56s-.14-.94-.21-1.45c-.15-1-.32-2.16-.51-3.39s-.25-2.81-.39-4.36c-.22-3.12-.34-6.67-.25-10.56,0-1.94.22-4,.33-6.07.12-1,.24-2.12.36-3.2s.23-2.19.44-3.3a110.63,110.63,0,0,1,3-13.94,120,120,0,0,1,5.39-14.51A124,124,0,0,1,64.87,64a126.32,126.32,0,0,1,9.91-13.09A124.91,124.91,0,0,1,86.26,39.56a118.21,118.21,0,0,1,12.25-9.08c1-.7,2-1.31,3.07-1.91l3-1.79c2-1.07,4-2.16,6-3.09"
                            />
                            <path
                                className="cls-2"
                                d="M262.57,173.24a2.58,2.58,0,0,1-5.09-.8h0c.17-2.13.17-4.36.27-6.64s0-4.66-.17-7.08a121.07,121.07,0,0,0-1.75-15,122.39,122.39,0,0,0-4-15.47,110.2,110.2,0,0,0-14.63-28.74,116.5,116.5,0,0,0-9.78-11.8c-.85-.89-1.74-1.73-2.59-2.58l-1.28-1.27-1.33-1.18-2.6-2.32L217,78.2l-1.29-1-1.32-1-2.57-1.87c-1.74-1.15-3.41-2.26-5.05-3.27s-3.22-1.93-4.77-2.72-3-1.58-4.41-2.22l-3.94-1.78-3.16-1.21-1.34-.52-1.47-.52-2.38-.82-2-.69A16.53,16.53,0,0,1,194.1,29.33a18.4,18.4,0,0,1,2.67,1.2l1.82,1,2.2,1.23,1.41.8,1.87,1.12c1.31.79,2.77,1.67,4.31,2.64s3,2,4.63,3.18,3.3,2.49,5.08,3.84,3.52,3,5.38,4.52,3.67,3.39,5.55,5.22L231.78,57l1.41,1.48L234.55,60l2.75,3.19L240,66.59l1.34,1.73,1.27,1.8c.84,1.21,1.72,2.4,2.55,3.65a138.52,138.52,0,0,1,9,16,137.18,137.18,0,0,1,6.71,17.43,133.26,133.26,0,0,1,4,18,123.39,123.39,0,0,1,.39,33.89c-.29,2.56-.78,5-1.15,7.41-.53,2.36-.94,4.65-1.51,6.81"
                            />
                            <path
                                className="cls-3"
                                d="M51.72,230A2.57,2.57,0,1,1,55,226h0c1.77,1.21,3.7,2.36,5.65,3.59l3.07,1.72c1,.59,2.09,1.18,3.19,1.7a120,120,0,0,0,14,6,126.84,126.84,0,0,0,15.55,4.23,125.73,125.73,0,0,0,16.3,2,124.38,124.38,0,0,0,16.2-.43,121.9,121.9,0,0,0,15.24-2.63,109.81,109.81,0,0,0,13.58-4.38c1.06-.38,2.08-.83,3.08-1.28l2.94-1.3c1.88-1,3.72-1.82,5.42-2.76,3.41-1.88,6.41-3.76,9-5.52l3.57-2.53,2.68-2.15,1.15-.9,1.21-1,1.92-1.65,1.61-1.37a16.53,16.53,0,0,1,21.46,25.16,19.91,19.91,0,0,1-2.36,1.68l-1.82,1.06-2.19,1.29-1.4.82-1.92,1.05-4.46,2.4-5.11,2.4c-3.68,1.64-7.88,3.33-12.54,4.89-2.33.79-4.8,1.47-7.32,2.21l-3.91,1c-1.32.32-2.65.64-4,.89a138,138,0,0,1-17.28,2.34,142,142,0,0,1-18.44-.11,141.06,141.06,0,0,1-18.6-2.81,139.25,139.25,0,0,1-17.77-5.44,138.79,138.79,0,0,1-16.09-7.6,128.34,128.34,0,0,1-13.75-9.05c-1.06-.75-2.05-1.56-3-2.37l-2.87-2.35c-1.81-1.65-3.58-3.18-5.19-4.75"
                            />
                        </StyledSvg>
                    </AnimatedCol>
                    <TCol size={1} talign="center">
                        <p>
                            <strong>404</strong> - Seite nicht gefunden
                        </p>
                    </TCol>
                    <TCol size={1} talign="center">
                        <a href="/" className="link-content">
                            Zurück zur Startseite
                        </a>
                    </TCol>
                </ErrorGrid>
            </div>
        </div>
    )
}

const ErrorGrid = styled(TGrid)`
    padding-top: ${(props) => props.theme.spacing.xl};
`

const scale = keyframes`
0% {transform: scale(1)};
5% {transform: scale(1)};
30% {transform: scale(0.4)};
70% {transform: scale(0.4)};
95% {transform: scale(1)};
100% {transform: scale(1)}
`

const rotation = keyframes`
0% {transform: rotate(0deg)};
40% {transform: rotate(-360deg)};
60% {transform: rotate(-360deg)};
95% {transform: rotate(-720deg)}
100% {transform: rotate(-720deg)}
`

const AnimatedCol = styled(TCol)`
    animation: ${scale} 8s infinite;
`

const StyledSvg = styled.svg`
    animation: ${rotation} 8s infinite;
    .cls-1 {
        fill: #67c4f0;
    }
    .cls-2 {
        fill: #71b63a;
    }
    .cls-3 {
        fill: #fcc200;
    }
`

export default Error
