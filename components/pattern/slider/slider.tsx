/* eslint-disable @next/next/no-img-element */
import { useRef } from "react"
import { SliderGrid, Indicator, IconArrow, SliderContainer, Wrapper, ProjectInfo } from "./styles"
import parse from "html-react-parser"

export interface ISliderProps {
    data: any
    project?: boolean
}

const Slider = (props: ISliderProps) => {
    const { data, project } = props

    const galleryRef = useRef<HTMLDivElement>(null)

    const SlideGallery = (left: boolean) => {
        if (!galleryRef?.current) return

        const scrollDist = galleryRef.current.scrollWidth / data.length

        galleryRef.current.scrollBy({
            left: left ? scrollDist : -scrollDist,
            behavior: "smooth",
        })
    }

    return (
        <>
            <SliderGrid>
                <Indicator project={project}>
                    <IconArrow onClick={() => SlideGallery(false)} left={1} />
                    <IconArrow onClick={() => SlideGallery(true)} />
                </Indicator>
                <SliderContainer ref={galleryRef}>
                    {data.map((slide, index) => (
                        <Wrapper key={index}>
                            {slide.link ? (
                                <>
                                    <a href={slide.link}>
                                        <img
                                            src={slide.imgUrl.replace("?auto=compress,format", "")}
                                            alt={slide.imgAlt}
                                        />
                                    </a>
                                    <ProjectInfo>{parse(slide.content)}</ProjectInfo>
                                </>
                            ) : (
                                <img
                                    src={slide.imgUrl.replace("?auto=compress,format", "")}
                                    alt={slide.imgAlt}
                                />
                            )}
                        </Wrapper>
                    ))}
                </SliderContainer>
            </SliderGrid>
        </>
    )
}

export default Slider
