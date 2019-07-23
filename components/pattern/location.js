import GoogleMapReact from "google-map-react"
import { object } from "prop-types"
import Marker from "../elements/marker"
import LazyLoad from "react-lazyload"

const Location = ({ data }) => {
    const zoom = 15
    const center = {
        lat: data.location_coords.latitude,
        lng: data.location_coords.longitude
    }

    return (
        <LazyLoad height={"512px"} offset={300}>
            <div className="location-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBg2SZDYXK6Zv_UXZdVJJr5J8eRlSAVUKQ" }}
                    defaultCenter={center}
                    defaultZoom={zoom}>
                    <Marker
                        lat={center.lat}
                        lng={center.lng} />
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

Location.propTypes = {
    data: object
}

export default Location