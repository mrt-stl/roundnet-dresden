import TukanImage from "../elements/tukan-image"

export interface IPortfolioProps {
    title: string
    imgSrc01?: string
    imgAlt01?: string
    imgSrc02?: string
    imgAlt02?: string
    imgSrc03?: string
    imgAlt03?: string
    imgSrc04?: string
    imgAlt04?: string
    imgSrc05?: string
    imgAlt05?: string
    imgSrc06?: string
    imgAlt06?: string
    imgSrc07?: string
    imgAlt07?: string
    imgSrc08?: string
    imgAlt08?: string
}

const Portfolio = (props: IPortfolioProps) => {
    const title = props.title
    const imgSrc01 = props.imgSrc01
    const imgAlt01 = props.imgAlt01
    const imgSrc02 = props.imgSrc02
    const imgAlt02 = props.imgAlt02
    const imgSrc03 = props.imgSrc03
    const imgAlt03 = props.imgAlt03
    const imgSrc04 = props.imgSrc04
    const imgAlt04 = props.imgAlt04
    const imgSrc05 = props.imgSrc05
    const imgAlt05 = props.imgAlt05
    const imgSrc06 = props.imgSrc06
    const imgAlt06 = props.imgAlt06
    const imgSrc07 = props.imgSrc07
    const imgAlt07 = props.imgAlt07
    const imgSrc08 = props.imgSrc08
    const imgAlt08 = props.imgAlt08

    return (
            <div className="stage-blog-container">
                <div className="grid align-items-center">
                    <div className="col-8">
                        <div>
                            <h1>{title}</h1>
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc01}
                                alt={imgAlt01}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc02}
                                alt={imgAlt02}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc03}
                                alt={imgAlt03}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc04}
                                alt={imgAlt04}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc05}
                                alt={imgAlt05}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc06}
                                alt={imgAlt06}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc07}
                                alt={imgAlt07}
                                height="auto" />
                        </div>
                        <div className="col-2">
                            <TukanImage
                                src={imgSrc08}
                                alt={imgAlt08}
                                height="auto" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Portfolio