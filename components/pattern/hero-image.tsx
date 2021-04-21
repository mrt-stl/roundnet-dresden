import LazyLoad from "react-lazyload"
import { useInView } from "react-hook-inview"
import styled from "styled-components"
import Divider from "../elements/divider"
import { getGradientAnimation } from "../../utils/color-utils"

export interface IHeroImageProps {
  imgSrc: string
  imgAlt?: string
  title?: string
  link?: string
  linkContent?: string
  linkIsBlank?: boolean
}

const HeroImage = (props: IHeroImageProps) => {
  const { imgSrc, imgAlt, title, link, linkContent, linkIsBlank } = props

  const titleContainer = title ? <h1 style={{ color: "var(--white)", fontSize: "3em" }}>{title}</h1> : <></>

  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
    threshold: 0.2,
  })

  const animationClassName = isVisible ? "fadeInUp" : ""

  return (
    <HeroImageContainer>
      <HeroImageContentContainer ref={ref}>
        {isVisible ? (
          <div className={animationClassName}>
            <Divider marginLeft="calc(50% - 60px)" marginBottom="40px" color="white" />
            {titleContainer}
            {link ? (
              <div>
                {linkIsBlank ? (
                  <LinkContent href={link} target="_blank" rel="noopener">
                    {linkContent}
                  </LinkContent>
                ) : (
                  <a href={link} className="link-content">
                    {linkContent}
                  </a>
                )}
              </div>
            ) : (
              <p className="link-content">{linkContent}</p>
            )}
          </div>
        ) : (
          <div />
        )}
      </HeroImageContentContainer>
      <LazyLoad height={"90vh"} offset={200}>
        <HeroImageImg src={imgSrc} alt={imgAlt} />
      </LazyLoad>
    </HeroImageContainer>
  )
}

const HeroImageContainer = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;

  .lazyload-wrapper {
    height: 100%;
  }
`

const HeroImageContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: ${(props) => props.theme.secondaryFont.name};
  color: white;

  h1 {
    ${(props) =>
      props.theme.projectColors.gradient
        ? getGradientAnimation(props.theme.projectColors.green)
        : `color: ${props.theme.projectColors.green};`}
    font-weight: ${(props) => props.theme.fontWeight.light};
  }
`

const LinkContent = styled.a`
  color: #ffffff;
`

const HeroImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default HeroImage
