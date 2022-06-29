const { ApolloServer, gql } = require('apollo-server');
	
const typeDefs = gql`
 type Temperature {
    location: String
    temperature:Float
    recordedat: Int
  }
  type Query {
    allTemperatures: [Temperature]
  }
  type Mutation {
    addTemperature(location: String!, temperature: Float!): Boolean
  }
`;
	
const resolvers = {
  Query: {
    recentTemperatures: () => 'Resolved'
  },
  Mutation: {
    addTemperature: (parent, args, context) => {return true}
  }
};
	
const server = new ApolloServer({
  typeDefs,
  mocks:true
});
	
server.listen().then(({ url }) => {
  console.log(`GraphQL Server is ready at ${url}`)
});
	

