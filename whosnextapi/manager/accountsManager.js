const baseManager = require('./baseManager');
const usersData = require('../dal/usersData');
const bcrypt = require('bcrypt');
const config = require('../config');

class accountsManager extends baseManager {
    constructor(dbConnection) {
        super(dbConnection);
        this.uData = new usersData(this.dbConnection); 
    }

    signup(signUpViewModel, response, callback) {
        let uData = this.uData;

        uData.getUserByEmail(signUpViewModel.Email).then(function(dbUser) {
            if(dbUser.length == 0)
            {
                var user = {
                    name : signUpViewModel.Name,
                    email : signUpViewModel.Email,
                    birthDate : new Date(signUpViewModel.BirthYear + '-' + signUpViewModel.BirthMonth + '-' + signUpViewModel.BirthDate + ' 00:00:00 GMT'),
                    gender: signUpViewModel.Gender,
                    passwordHash: bcrypt.hashSync(signUpViewModel.Password, config.password.salt),
                    userId: signUpViewModel.Email.replace("@", ".").toLowerCase()
                };
                
                uData.insertUser(user).then(function(result) {
                    callback(response);            
                });
            }
            else 
            {
                response.success = false;
                response.errorDescriptions.push('DuplicateEmail');
                callback(response);
            }            
        });
    }
}   

module.exports = accountsManager;