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
var index_1 = require("./src/_types/index");
var index_2 = require("./src/_resolvers/index");
// AWS
// const lambda = new aws.Lambda({
//     region: 'us-west-2',
// });
var schema = graphql_1.buildSchema(index_1.default);
var app = express();
app.use(bodyParser.graphql());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: index_2.default,
    graphiql: true,
}));
module.exports.handler = serverless(app);
