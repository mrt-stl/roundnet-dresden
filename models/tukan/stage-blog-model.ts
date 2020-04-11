import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IStageBlogProps } from "../../components/pattern/stage-blog"

export default class StageBlogModel extends TukanModel implements IStageBlogProps {

    public title: string
    public content: string
    public imgSrc?: string
    public imgAlt?: string

    constructor(title: string, content: string, imgSrc?: string, imgAlt?: string) {
        super(TukanType.StageBlog)

        this.title = title
        this.content = content
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
}