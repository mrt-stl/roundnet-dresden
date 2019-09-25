import TukanImage from "../elements/tukan-image"

export interface IAtmosphericProps {
    imgSrc: string,
    imgAlt?: string
}

const AtmosphericImage = (props: IAtmosphericProps) => {
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
        <div className="atmo-image-container">
            <TukanImage
                src={imgSrc}
                alt={imgAlt}
                height="100%" />

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