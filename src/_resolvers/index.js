"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
var resolversArray = merge_graphql_schemas_1.fileLoader(path.join("./src/**/resolvers.*"));
exports.default = merge_graphql_schemas_1.mergeResolvers(resolversArray);
