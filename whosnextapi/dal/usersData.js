var baseData = require('./baseData');
var userModel = require('../models/user');

class usersdata extends baseData {
    constructor(dbConnection) {
        super(dbConnection);
        this.users = new userModel(dbConnection).WhosNextUsers;
    }

    /* Inset Data in Users Table */

    /// Insert User
    insertUser(user) {
        let users = this.users;
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

    /* End Inset Data in Users Table */

    /* Get Data From User Table */

    /// Get user by email
    getUserByEmail(email) {
        let users = this.users;
        return new Promise(function(resolve, reject) {
            users.findAll({
                limit: 1,
                where: {
                    Email: email
                }
            }).then(function(dbUser){
                resolve(dbUser);
            });
        });
    }

    /* End Get Data From User Table */
}

module.exports = usersdata;