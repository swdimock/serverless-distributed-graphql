// Dependencies
import * as serverless from 'serverless-http';
import * as express from 'express';
// import * as aws from 'aws-sdk';

// GraphQL
import { buildSchema } from 'graphql';
import * as graphqlHTTP from 'express-graphql';
import * as bodyParser from 'body-parser-graphql';

// Defs
import typeDefs from './src/_types/index';
import rootValue from './src/_resolvers/index';

// AWS
// const lambda = new aws.Lambda({
//     region: 'us-west-2',
// });

const schema = buildSchema(typeDefs);

const app = express();
app.use(bodyParser.graphql());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

module.exports.handler = serverless(app);