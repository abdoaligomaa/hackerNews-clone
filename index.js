const { ApolloServer } = require('apollo-server');

// 1
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }
  type Link {
    id:ID!
    description:String!
    url:String!
  }
`
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},{
  id: 'link-1',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},{
  id: 'link-2',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},{
  id: 'link-3',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

// 2
const resolvers = {
  Query: {
    info: () => "hellow world",
    feed:()=>links
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );

