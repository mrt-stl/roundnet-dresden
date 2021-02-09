import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { asHtml } from "../../utils/prismic-utils"

// this is a little helper to debounce the browser resizing and to optimize performance, if you have a collection of utils somewhere, pass it there
const debounceLeading = (fn, ms) => {
    let timer
    return (_) => {
        clearTimeout(timer)
        timer = setTimeout((_) => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    }
}

export interface ISliderProps {
    autoPlay: number
    randomStart: boolean
    data: any
    fullsize: boolean
    transitionDuration: number
}

// main Slideshow component, this is where the magiv happens
const Slider = (props: ISliderProps) => {
    const { data, transitionDuration, autoPlay, fullsize, randomStart } = props

    // randomize the first shown slide to setup initial state
    const randomize = Math.floor(Math.random() * data.length)

    const randomFirstSlide = data[randomize]
    const randomSecondSlide = data[randomize === data.length - 1 ? 0 : randomize + 1]
    const randomLastSlide = data[randomize === 0 ? data.length - 1 : randomize - 1]

    // those are needed to build the new _slices array based on the activeSlide state
    const firstSlide = data[0]
    const secondSlide = data[1]
    const lastSlide = data[data.length - 1]

    const [state, setState] = useState({
        autoplay: true,
        width: 0,
        activeSlide: randomStart ? randomize : 0,
        translate: 0,
        transition: transitionDuration ? transitionDuration : 0.45,
        _slides: randomStart ? [randomLastSlide, randomFirstSlide, randomSecondSlide] : [lastSlide, firstSlide, secondSlide],
        debounce: false,
    })

    const [debounce, setDebounce] = useState(false)

    const { autoplay, width, activeSlide, translate, _slides, transition } = state

    const autoPlayRef: any = useRef()
    const transitionRef: any = useRef()
    const transitionTimeRef: any = useRef()

    // smoothTransition handles the effect from last to first slide (continuously sliding)
    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        transitionTimeRef.current = transition
    })

    useEffect(() => {
        const smooth = () => {
            transitionRef.current()
        }

        // handle resizing of the browser when slider is already loaded
        function handleResize() {
            setState({
                ...state,
                translate: fullsize ? window.innerWidth : window.innerWidth < 1000 ? window.innerWidth : 1000,
                transition: 0,
                width: fullsize ? window.innerWidth : window.innerWidth < 1000 ? window.innerWidth : 1000,
            })
        }

        // debounce the resizing to avoid performance issues due to massiv re-rendering
        const debouncedHandleResize = debounceLeading(handleResize, 500)

        // set initial state when on the client pc the window object is used
        handleResize()

        const transitionEnd: any = window.addEventListener("transitionend", smooth)
        window.addEventListener("resize", debouncedHandleResize)

        return () => {
            window.removeEventListener("transitionend", transitionEnd)
            window.removeEventListener("resize", debouncedHandleResize)
        }
    }, [])

    // listen to the transition state and reset it when smoothTransition set it to 0
    useEffect(() => {
        if (transition === 0) {
            setState({
                ...state,
                transition: transitionDuration ? transitionDuration : 0.45,
            })
        }
    }, [transition])

    // listen to the autoplay state to set and clear interval on mouse enter and mouse leave
    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const interval = setInterval(play, autoplay ? autoPlay * 1000 : autoPlay * 90000)

        return () => {
            clearInterval(interval)
        }
    }, [autoplay])

    useEffect(() => {
        if (debounce) {
            setTimeout(() => {
                setDebounce(false)
            }, transitionTimeRef.current * 1000 + 100)
        }
    }, [debounce])

    // set new _slides array after every transition to always show the one in the middle
    const smoothTransition = () => {
        let _slides = []

        // We're at the last slide.
        if (activeSlide === data.length - 1) {
            _slides = [data[data.length - 2], lastSlide, firstSlide]
        }
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeSlide === 0) {
            _slides = [lastSlide, firstSlide, secondSlide]
        }
        // Create an array of the previous last slide, and the next two slides that follow it.
        else {
            _slides = data.slice(activeSlide - 1, activeSlide + 2)
        }

        // transition has to be set to 0 to avoid unwanted side effect, alsways translate to the slide in the middle
        setState({
            ...state,
            _slides,
            transition: 0,
            translate: fullsize ? window.innerWidth : window.innerWidth < 1000 ? window.innerWidth : 1000,
        })
    }

    const nextSlide = () => {
        if (!debounce) {
            return (
                setState({
                    ...state,
                    translate: translate + (fullsize ? window.innerWidth : window.innerWidth < 1000 ? window.innerWidth : 1000),
                    activeSlide: activeSlide === data.length - 1 ? 0 : activeSlide + 1,
                }),
                setDebounce(true)
            )
        }
    }

    const prevSlide = () => {
        if (!debounce) {
            return (
                setState({
                    ...state,
                    translate: 0,
                    activeSlide: activeSlide === 0 ? data.length - 1 : activeSlide - 1,
                }),
                setDebounce(true)
            )
        }
    }

    let touchStartingPoint = 0
    const handleTouchMove = (e) => {
        const touchEndingPoint = e.changedTouches[0].clientX
        const distance = touchEndingPoint - touchStartingPoint

        if (distance > 100) {
            return prevSlide()
        }

        if (distance < -100) {
            return nextSlide()
        }

        e.preventDefault()
    }

    // handle the dot clicks and prevent transition effect or set new _slides array
    const handleDotClick = (i) => {
        if (!debounce) {
            // check if clicked dot is next to active one to prevent transition effect
            if (activeSlide + 1 === i || (activeSlide === data.length - 1 && i === 0)) {
                return nextSlide()
            }
            // check if clicked dot is prev to active one to prevent transition effect
            if (activeSlide - 1 === i || (activeSlide === 0 && i === data.length - 1)) {
                return prevSlide()
            } else if (i > activeSlide) {
                const firstSlide = data[activeSlide]
                const secondSlide = data[i]
                const lastSlide = data[i === 0 ? data.length - 1 : i - 1]
                setState({
                    ...state,
                    activeSlide: i,
                    translate: translate + (fullsize ? window.innerWidth : window.innerWidth < 1000 ? window.innerWidth : 1000),
                    _slides: [lastSlide, firstSlide, secondSlide],
                })
                setDebounce(true)
            } else if (i < activeSlide) {
                const firstSlide = data[activeSlide]
                const secondSlide = data[i]
                const lastSlide = data[i]
                setState({
                    ...state,
                    activeSlide: i,
                    translate: 0,
                    _slides: [lastSlide, firstSlide, secondSlide],
                })
                setDebounce(true)
            } else {
                const firstSlide = data[i]
                const secondSlide = data[i === data.length - 1 ? 0 : i + 1]
                const lastSlide = data[i === 0 ? data.length - 1 : i - 1]
                setState({
                    ...state,
                    activeSlide: i,
                    _slides: [lastSlide, firstSlide, secondSlide],
                })
                setDebounce(true)
            }
        }
    }

    return (
        <StyledSlider
            fullsize={fullsize}
            translate={translate}
            transition={transition}
            width={width}
            slides={_slides}
            className="slider"
            onMouseEnter={() =>
                setState({
                    ...state,
                    autoplay: false,
                })
            }
            onMouseLeave={() =>
                setState({
                    ...state,
                    autoplay: true,
                })
            }
        >
            <div
                className="slider-content"
                onTouchStart={(e) => {
                    touchStartingPoint = e.changedTouches[0].clientX
                }}
                onTouchEnd={handleTouchMove}
            >
                {_slides.map((_slide, index) => {
                    return <Slide key={index} data={_slide} fullsize={fullsize} />
                })}
            </div>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            <Dots slides={data} activeIndex={activeSlide} handleDotClick={handleDotClick} fullsize={fullsize} />
        </StyledSlider>
    )
}

const StyledSlider = styled.div<{ fullsize: any; translate: any; transition: any; width: any; slides: any }>`
${(props) =>
    props.fullsize
        ? `
    height: 90vh;`
        : `
    max-width: 1000px;
    height: calc(720px + 200px);
    width: 100%;
    margin-bottom: var(--standard-spacing)`}

    box-sizing: border-box;
    position: relative;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    z-index: 10;

@media only screen and (max-width: 768px) {
        width: 100%;
        height: 600px;
}

        .slider-content {
            transform: translateX(-${(props) => props.translate}px);
            transition: transform ease-in-out ${(props) => props.transition}s;
            height: 100%;
            width: calc(${(props) => props.width}px * ${(props) => props.slides.length});
            display: flex;
        }
`

// component for a single slide
const Slide = (props) => {
    const { data, fullsize } = props
    const title = asHtml(data.slide_title)
    const content = asHtml(data.slide_content)
    return (
        <>
            <StyledSlide fullsize={fullsize} className="slide">
                <img src={data.slide_image.url} alt={data.slide_image.alt} />
                <div className="slide-content">
                    {data.slide_btn_label ? (
                        <>
                            {data.slide_title ? parse(title) : ""}
                            {data.slide_content ? parse(content) : ""}
                            <a className="btn-large" href={data.slide_btn_link}>
                                {parse(data.slide_btn_label)}
                            </a>
                        </>
                    ) : (
                        <>
                            <a className="link-container" href={data.link} />
                            <h2>{data.sliderTitle}</h2>
                            <p>{data.sliderContent}</p>
                        </>
                    )}
                </div>
            </StyledSlide>
        </>
    )
}

const StyledSlide = styled.div<{ fullsize: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 100%;
    flex-basis: 100%;

    img {
        position: absolute;
        z-index: -1;
        height: ${(props) => (props.fullsize ? "auto" : "720px")};
        max-width: 33.333333%;
        flex-basis: 33.333333%;
        object-fit: cover;
    }
    .slide-content {
        display: block;
        width: 55%;
    }

    .slide-content h2,
    .slide-content p {
        color: white;
    }

    .slide-content p {
        font-size: 1.5em;
        opacity: 0.9;
        margin-bottom: 2em;
    }

    a.btn-large {
        background: var(--white);
        border: 0px;
        color: var(--midnight-blue);
        padding: 0.8em 2em;
    }

    .link-container {
        display: block;
        height: 50vh;
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        justify-content: center;
        img {
            position: absolute;
            z-index: -1;
            height: auto;
        }
        .slide-content {
            text-align: center;
            margin-left: 0;
            width: 90%;
        }

        .link-container {
            width: 60%;
            margin-left: auto;
            margin-right: auto;
        }

        .slide-content p {
            font-size: 1em;
            max-width: 60%;
            margin-left: auto;
            margin-right: auto;
        }

        h2 {
            font-size: 1.4em;
        }
    }
`

// arrows to get to next/previous slide
const Arrow = ({ direction, handleClick }) => {
    return (
        <StyledArrow direction={direction} className="arrow" onClick={handleClick}>
            {direction === "left" ? (
                <svg
                    width="21px"
                    height="33px"
                    viewBox="0 0 14 22"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <title>image-slider-right-arrow</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g
                            id="slider-right-arrow"
                            transform="translate(12.000000, 11.000000) scale(-1, 1) translate(-12.000000, -11.000000) translate(2.000000, 1.000000)"
                            stroke-width="3"
                            stroke="var(--dark)"
                        >
                            <polyline
                                id="Rectangle-6"
                                transform="translate(9.936292, 9.936291) rotate(45.000000) translate(-9.936292, -9.936291) "
                                points="3.3918746 3.39187389 16.4807094 3.39187389 16.4807094 16.4807087"
                            />
                        </g>
                    </g>
                </svg>
            ) : (
                <svg
                    width="21px"
                    height="33px"
                    viewBox="0 0 14 22"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <title>image-slider-right-arrow</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="slider-right-arrow" transform="translate(-8.000000, 1.000000)" stroke-width="3" stroke="var(--dark)">
                            <polyline
                                id="Rectangle-6"
                                transform="translate(9.936292, 9.936291) rotate(45.000000) translate(-9.936292, -9.936291) "
                                points="3.3918746 3.39187389 16.4807094 3.39187389 16.4807094 16.4807087"
                            />
                        </g>
                    </g>
                </svg>
            )}
        </StyledArrow>
    )
}

const StyledArrow = styled.div<{ direction: string }>`
    display: flex;
    position: absolute;
    top: 0;
    ${(props) => (props.direction === "right" ? `right: 0` : `left: 0`)};
    ${(props) => (props.direction === "right" ? `padding-right: 25px` : `padding-left: 25px`)};
    height: 100%;
    width: 70px;
    font-size: 50px;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    align-items: center;
    opacity: 0.2;

    :hover {
        opacity: 0.8;
    }
`

// return dot for every slide
const Dots = ({ slides, activeIndex, handleDotClick, fullsize }) => {
    return (
        <>
            <StyledDots fullsize={fullsize} className="dots">
                {slides.map((slide, i) => (
                    <Dot
                        key={i}
                        active={activeIndex === i}
                        tooltip={slide.title}
                        handleDotClick={handleDotClick}
                        dotIndex={i}
                        narrow={slides.length >= 10}
                    />
                ))}
            </StyledDots>
        </>
    )
}

const StyledDots = styled.div<{ fullsize: boolean }>`
    position: absolute;
    bottom: ${(props) => (props.fullsize ? "30px" : "100px")};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        bottom: 30px;
    }
`

// dot which is not a dot anymore and tooltip which is actually a :hover effect
const Dot = ({ active, tooltip, handleDotClick, dotIndex, narrow }) => {
    return (
        <>
            <StyledDot narrow={narrow} active={active} className="wrapper" onClick={() => handleDotClick(dotIndex)}>
                <span className="dot">
                    <span className="tooltip">{tooltip}</span>
                </span>
            </StyledDot>
        </>
    )
}

const StyledDot = styled.div<{ narrow: boolean; active: boolean }>`
    padding: 20px 0;
    cursor: pointer;

    .dot {
        position: relative;
        display: inline-block;
        height: 0;
        width: 0;
        padding: ${(props) => (props.narrow ? 5 : 2)}px ${(props) => (props.narrow ? 5 : 20)}px;
        margin-right: 13px;
        background: white;
        background-color: rgba(162, 162, 162, ${(props) => (props.active ? 1 : 0.4)});
    }
    .tooltip {
        position: absolute;
        bottom: 25px;
        right: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        text-shadow: 2px 2px 4px var(--accent);
        color: rgba(255, 255, 255, ${(props) => (props.active ? 1 : 0.9)});
    }
    .wrapper:hover .tooltip {
        opacity: 1;
    }
`

export default Slider
