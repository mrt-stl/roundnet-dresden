import styled, { keyframes } from "styled-components"

interface IMarkerProps {
    lat: number
    lng: number
}

// tslint:disable-next-line: variable-name
const Marker = (_props: IMarkerProps) => {

    return (
        <MarkerContainer>
            <div className="shadow" />
            <img src="/static/icon/marker.svg" />
        </MarkerContainer>
    )
}

const pulse = keyframes`
    0% {
        transform: scale(1);
        background-color: rgba(0, 0, 0, 0.4);
    }

    40% {
        transform: scale(0.7);
        background-color: rgba(0, 0, 0, 0.2);
    }

    100% {
        transform: scale(1);
        background-color: rgba(0, 0, 0, 0.4);
    }
`

const jump = keyframes`
    0% {
        top: -40px;
    }

    40% {
        top: -52px;
    }

    100% {
        top: -40px;
    }
`

const MarkerContainer = styled.div`
    .shadow {
        animation: ${pulse} 3s infinite;
        border-radius: 50%;
        width: 24px;
        height: 12px;
    }

    img {
        animation: ${jump} 3s infinite;
        width: auto;
        height: 48px;

        position: absolute;
        left: -12px;
    }
`

export default Marker