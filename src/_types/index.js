import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const typeDefArray = fileLoader(path.join(__dirname, "./src/**/typeDef.*"));
export default mergeResolvers(typeDefArray);