const { users } = require('./data');

class Users {

    static all() {
        return users;
    }

}

module.exports = { Users };