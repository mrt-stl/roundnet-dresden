import Link from "next/link"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"

export interface ICallToActionProps {
    ctaHeadline: string
    btns: { label: string; link: string; target: string }[]
}

const CallToAction = (props: ICallToActionProps) => {
    const { ctaHeadline, btns } = props

    return (
        <CtaContainer>
            <TGrid halign="center">
                <TCol size={1 / 2} style={{display: "flex", alignItems: "center"}}>
                    <h3>{ctaHeadline}</h3>
                </TCol>
                <TCol size={1 / 2} collapse="xl" talign="center">
                    {btns.map((btn, index) => (
                        <Link href={btn.link} passHref key={index}>
                            <CtaLink target={btn.target}>{btn.label}</CtaLink>
                        </Link>
                    ))}
                </TCol>
            </TGrid>
        </CtaContainer>
    )
}

const CtaLink = styled.a`
    display: inline-block;
    width: fit-content;
    padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.white};
    margin-right: ${(props) => props.theme.spacing.m};
    transition: all 0.2s linear;

    :hover {
        transition: all 0.1s linear;
        background-color: ${(props) => props.theme.color.blackCoral};
        color: ${(props) => props.theme.color.white};
    }
`

const CtaContainer = styled.section`
    background-color: ${(props) => props.theme.color.cultured};
    padding-top: ${(props) => props.theme.spacing.l};
    padding-bottom: ${(props) => props.theme.spacing.l};

    @media only screen and (max-width: 786px) {
        text-align: center;
        ${CtaLink} {
            margin-top: ${(props) => props.theme.spacing.xs};
            margin-bottom: ${(props) => props.theme.spacing.xs};
            margin-right: ${(props) => props.theme.spacing.m};
            margin-left: ${(props) => props.theme.spacing.m};
        }
    }
`

export default CallToAction
