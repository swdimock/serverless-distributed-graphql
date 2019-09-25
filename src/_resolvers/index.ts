import * as path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join("./src/**/resolvers.*"));
export default mergeResolvers(resolversArray);