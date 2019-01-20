const baseManager = require('./baseManager');
const usersData = require('../dal/usersData');
const bcrypt = require('bcrypt');
const config = require('../config');

class authManager extends baseManager {
    constructor(dbConnection) {
        super(dbConnection);
        this.uData = new usersData(this.dbConnection); 
    }

    login(logInViewModel, response, callback) {
        let uData = this.uData;

        console.log(logInViewModel);
        
        uData.getUserByEmail(logInViewModel.Email.trim()).then(function(dbUser) {
            if(dbUser.length != 0 && bcrypt.compareSync(logInViewModel.Password, dbUser[0].PasswordHash)) {
                console.log('Password Passed!!!');
            } else {
                response.success = false;
                callback(response);
            }
        });
    }
}

module.exports = authManager;