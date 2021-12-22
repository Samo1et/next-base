import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'

const apolloServer = new ApolloServer({ 
    schema,
    debug: true,
    introspection: true,
})

const startServer = apolloServer.start();

export const config = {
    api: {
        bodyParser: false,
    },
}

export default (async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Origin',
      'https://studio.apollographql.com'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    if (req.method === 'OPTIONS') {
      res.end();
      return false;
    }

    await startServer;
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

