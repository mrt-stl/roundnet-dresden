import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import { TGrid, TCol } from "../components/style/sc-grid"
import styled, { keyframes } from "styled-components"
import Link from "next/link"

const Error = (props) => {

    const meta = {
        metaTitle: "404 - Page not found",
        metaDescription: "Seite nicht verfügbar",
    }

    return (
        <div>
            <Meta data={meta} />
            <Nav data={props.navData} />

            <div>

                <ErrorGrid>
                    
                    <TCol size={1} talign="center">

                        <Button>
                        
                        <Link href="/" passHref>
                        <a className="link-content">
                            Zurück zur Startseite
                        </a>
                        </Link>
                        </Button>
                    </TCol>
                </ErrorGrid>
            </div>
        </div>
    )
}

const ErrorGrid = styled(TGrid)`
    display: flex;
    align-items: center;
    height: 100vh;
    max-width: 100vw;
    background-color: ${(props) => props.theme.color.blackCoral};
    j
`

const Button = styled.div`
    display: inline-block;
    padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.white};
    margin-right: ${(props) => props.theme.spacing.m};
    border: 0px;
    cursor: pointer;
    transition: all 0.2s linear;

:hover {
    transition: all 0.1s linear;
    background-color: ${(props) => props.theme.color.bitterlemon};
}`

export default Error
