import GoogleMapReact from "google-map-react"
import Marker from "../elements/marker"
import LazyLoad from "react-lazyload"

export interface ILocationProps {
    lat: number
    lng: number
}

const Location = (props: ILocationProps) => {
    const zoom = 15
    const lat = props.lat
    const lng = props.lng

    const center = {
        lat,
        lng
    }

    return (
        <LazyLoad
            height="512px"
            offset={300}>
            <div className="location-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBg2SZDYXK6Zv_UXZdVJJr5J8eRlSAVUKQ" }}
                    defaultCenter={center}
                    defaultZoom={zoom}>

                    <Marker
                        lat={lat}
                        lng={lng} />

                </GoogleMapReact>

                <style jsx>{`
                    .location-container {
                        height: 512px;
                        width: 100%;
                    }
                `}</style>
            </div>
        </LazyLoad>
    )
}

export default Location