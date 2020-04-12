import LazyLoad from "react-lazyload"

export interface IAtmosphericProps {
    imgSrc: string,
    imgAlt?: string
}

const AtmosphericImage = (props: IAtmosphericProps) => {
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
        <LazyLoad
            height="60vh"
            offset={50}>
            <div className="atmo-image-container">
                <img src={imgSrc} alt={imgAlt} height="100%" />

                <style jsx>{`
                    .atmo-image-container {
                        position: relative;
                        height: 560px;
                        width: 100%;
                        overflow: hidden;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        vertical-align: top;
                    }
                    @media (max-width: 768px) {
                        .atmo-image-container {
                        height: 340px;
                    }
                `}</style>
            </div>
        </LazyLoad>
    )
}

export default AtmosphericImage