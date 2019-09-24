const {Users} = require('./Users');

const resolvers = {
    Query: {
        users: () => Users.all(),
    },
};

module.exports = { resolvers };