import LazyLoad from "react-lazyload"

export interface IAtmosphericProps {
    imgSrc: string,
    imgAlt?: string
}

const AtmosphericImage = (props: IAtmosphericProps) => {
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
        <div className="atmo-image-container">
            <LazyLoad height={"60vh"} offset={200}>
                <img src={imgSrc} alt={imgAlt} />
            </LazyLoad>

            <style jsx>{`
                .atmo-image-container {
                    position: relative;
                    height: 60vh;
                    width: 100%;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </div>
    )
}

export default AtmosphericImage