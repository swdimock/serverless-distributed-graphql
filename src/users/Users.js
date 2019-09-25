const { users } = require('./data');

class Users {

    static all() {
        console.log(users);
        return users;
    }

}

module.exports = { Users };