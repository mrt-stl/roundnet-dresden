import Client from "shopify-buy"
import Project from "./project"

const project = Project.getInstance()

export const client = Client.buildClient({
    storefrontAccessToken: project.shopifyAccessToken,
    domain: project.shopifyStoreDomain
})