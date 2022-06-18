import {objectType,extendType} from "nexus"
// import { NexusGenObjects } from "../../nexus-typegen";
import {  NexusGenObjects} from "../../nexus-typegen";

export const link=objectType({
    name:"link",
    definition(t){
        t.nonNull.int('id'),
        t.nonNull.string('description'),
        t.nonNull.string('url')
    }
})
let links: NexusGenObjects["link"][]= [   // 1
    {
        id: 1,
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "GraphQL official website",
    },
];

export const LinkQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("all_links", {   // 3
            type: "link",
            resolve(parent, args, context, info) {    // 4
                return links;
            },
        });
    },
});