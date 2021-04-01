import {TGrid} from "../style/sc-grid"
import InstagramCol from "../elements/instagramCol"
import { linkResolver } from "../../utils/prismic-utils"


export interface IInstagramProps {
    links: any
}

const Instagram = (props: IInstagramProps) => {
    const links = props.links

    return (
            <TGrid>
                {links.map((link, index) => {
                    return (
                        <InstagramCol key={index} link={linkResolver(link.instagram_link)}/>
                    )
                })}
            </TGrid>
        )
    }

export default Instagram