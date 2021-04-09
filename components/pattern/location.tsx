import GoogleMapReact from "google-map-react"
import Marker from "../elements/marker"
import LazyLoad from "react-lazyload"

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
    <LazyLoad height="512px" offset={300}>
      <div className="location-container">
        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBg2SZDYXK6Zv_UXZdVJJr5J8eRlSAVUKQ" }} defaultCenter={center} defaultZoom={zoom}>
          {items.map((item, index) => {
            const lat = item.location_coords.latitude
            const lng = item.location_coords.longitude

            return <Marker lat={lat} lng={lng} key={index} />
          })}
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
