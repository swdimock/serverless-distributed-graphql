// Dependencies
const serverless = require('serverless-http');
const app = require('express')();
// const aws = require('aws-sdk');

// GraphQL
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser-graphql');

// Defs
import typeDefs from './src/_types/index';
import rootValue from './src/_resolvers/index';

// AWS
// const lambda = new aws.Lambda({
//     region: 'us-west-2',
// });

// Request
app.use(bodyParser.graphql());
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(typeDefs),
    rootValue: rootValue,
    graphiql: true
}));

module.exports.handler = serverless(app);