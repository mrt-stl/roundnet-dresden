import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IConnectionsProps } from "../../components/pattern/connections/connections"

export default class ConnectionsModel extends TukanModel implements IConnectionsProps {

    public connectionsHeadline: string
    public connectionsContent: string
    public connectionsCards: {status: string, link: string, linkTarget: string, details: string, img: string}[]

    constructor(connectionsHeadline: string, connectionsContent: string, connectionsCards: {status: string, link: string, linkTarget: string, details: string, img: string}[]) {
        super(TukanType.Accordion)

        this.connectionsHeadline = connectionsHeadline
        this.connectionsContent = connectionsContent
        this.connectionsCards = connectionsCards
    }
}