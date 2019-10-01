"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
var serverless = require("serverless-http");
var express = require("express");
// import * as aws from 'aws-sdk';
// GraphQL
var graphql_1 = require("graphql");
var graphqlHTTP = require("express-graphql");
var bodyParser = require("body-parser-graphql");
// Defs
var schema_1 = require("./src/schema");
// AWS
// const lambda = new aws.Lambda({
//     region: 'us-west-2',
//     endpoint: 'http://localhost:3001'
// });
var schema = graphql_1.buildSchema(schema_1.typeDefs);
var app = express();
app.use(bodyParser.graphql());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: schema_1.rootValue,
    graphiql: true,
}));
module.exports.handler = serverless(app);
