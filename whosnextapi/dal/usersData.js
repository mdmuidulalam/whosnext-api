var baseData = require('./baseData');
var userModel = require('../models/user');

class usersdata extends baseData {
    constructor(dbConnection) {
        super(dbConnection);
        this.users = new userModel(dbConnection).WhosNextUsers;
    }

    insertUser(user) {
        var users = this.users;
        return new Promise(function(resolve, reject) {
            users.create({
                Name: user.name,
                Email: user.email,
                PasswordHash: user.passwordHash,
                BirthDate: user.birthDate,
                Gender: user.gender,
                UserId: user.userId
            }).then(function(){
                resolve();
            });
        });
    }
}

module.exports = usersdata;