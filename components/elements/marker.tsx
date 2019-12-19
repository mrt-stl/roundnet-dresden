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
                .marker-container {
                    position: absolute;
                    top: -28px;
                    left: -16px;
                    width: 32px;
                    height: 32px;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

export default Marker