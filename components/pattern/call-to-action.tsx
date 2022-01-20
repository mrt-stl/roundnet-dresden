import Link from "next/link"
import { media } from "../style/tukan"
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
            <TGrid>
                <TCol size={1 / 2}>
                    <h3>{ctaHeadline}</h3>
                </TCol>
                <TCol size={1 / 2}>
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
    padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.white};
    margin-right: ${(props) => props.theme.spacing.m};
`

const CtaContainer = styled.section`
    background-color: ${(props) => props.theme.color.cultured};
    padding-top: ${(props) => props.theme.spacing.l};
    padding-bottom: ${(props) => props.theme.spacing.l};

    @media only screen and (max-width: 786px) {
        text-align: center;
        h3 {
            margin-bottom: ${(props) => props.theme.spacing.m};
        }
        ${CtaLink} {
            margin-right: ${(props) => props.theme.spacing.m};
            margin-left: ${(props) => props.theme.spacing.m};
        }
    }
`

export default CallToAction
