interface IMarkerProps {
    lat: number
    lng: number
}

// tslint:disable-next-line: variable-name
const Marker = (_props: IMarkerProps) => {

    return (
        <div className="marker-container">
            <img src="/static/icon/marker.svg" />
            <style jsx>{`
                .img {
                    width: 64px;
                    height: 64px;
                }
            `}</style>
        </div>
    )
}

export default Marker