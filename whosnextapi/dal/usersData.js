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
        return users.create({
                Name: user.name,
                Email: user.email,
                PasswordHash: user.passwordHash,
                BirthDate: user.birthDate,
                Gender: user.gender,
                UserId: user.userId
            });
    }

    /* End Inset Data in Users Table */

    /* Get Data From User Table */

    /// Get user by email
    getUserByEmail(email) {
        return this.users.findAll({
                limit: 1,
                where: {
                    Email: {
                        $eq: email
                    }
                }
            });
    }

    /// Get friends search by name
    getUserBySearchName(searchText) {
        let users = this.users;
        return new Promise((resolve, reject) => {
            users.findAll({
                where: {
                    Name: { $like: '%' + searchText + '%' }
                }
            });
        });
    }

    /* End Get Data From User Table */
}

module.exports = usersdata;