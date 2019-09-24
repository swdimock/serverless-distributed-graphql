const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Users {
        first_name: String
        last_name: String
        email: String
    }
    
    extend type Query {
        users: [Users]
    }
`);

module.exports = { schema };