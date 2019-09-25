import * as path from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join(__dirname, './src/**/type.graphql'));
const resolversArray = fileLoader(path.join(__dirname, './src/**/resolvers.*'));

const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);

export default makeExecutableSchema({ typeDefs, resolvers });