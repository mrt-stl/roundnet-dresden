import { media } from "../style/tukan"
import GoogleMapReact from "google-map-react"
import Marker from "../elements/marker"
import styled from "styled-components"

export interface ILocationProps {
    items: any
}

const Location = (props: ILocationProps) => {
    const items = props.items
    
    const locationCount = items.length
    const zoom = locationCount === 1 ? 15 : 9.5
    let sumLat: number = 0
    let sumLng: number = 0

    items.map((item) => {
    sumLat += item.location_coords.latitude
    sumLng += item.location_coords.longitude
})

    const lat = sumLat / locationCount
    const lng = sumLng / locationCount

    const center = {
        lat,
        lng,
    }
    
    return (
        <LocationContainer>
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBg2SZDYXK6Zv_UXZdVJJr5J8eRlSAVUKQ" }} defaultCenter={center} defaultZoom={zoom}>
                {items.map((item, index) => {
                    const lat = item.location_coords.latitude
                    const lng = item.location_coords.longitude

                    return <Marker lat={lat} lng={lng} key={index} />
                })}
            </GoogleMapReact>
        </LocationContainer>
  )
}

const LocationContainer = styled.div`
    height: 200px;
    width: 100%;

    ${media.maxWidth("md")`
        height: 240px;
    `}
`

export default Location
