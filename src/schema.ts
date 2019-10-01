import * as path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
console.log(__dirname);
const typesArray = fileLoader(path.join(__dirname, '**/**.graphql'));
const resolversArray = fileLoader(path.join(__dirname, '**/resolvers.js'));

console.log(mergeResolvers(resolversArray));
export const typeDefs = mergeTypes(typesArray);
export const rootValue = mergeResolvers(resolversArray);