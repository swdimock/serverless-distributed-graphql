const { Users } = require('./Users');
const { data } = require('./data');
const { resolvers } = require('./resolvers');
const { typeDef } = require('./typeDef');

module.exports = {
    Users,
    data,
    resolvers,
    typeDef
};