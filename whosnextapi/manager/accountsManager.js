const baseManager = require('./baseManager');
const usersData = require('../dal/usersData');
const bcrypt = require('bcrypt');
const config = require('../config');

class accountsManager extends baseManager {
    constructor(dbConnection) {
        super(dbConnection);
        this.uData = new usersData(this.dbConnection); 
    }

    signup(signUpViewModel, response) {
        let uData = this.uData;

        return uData.getUserByEmail(signUpViewModel.Email).then((dbUser) => {
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

                return user;
            }
            else 
            {
                throw 'DuplicateEmail';
            }
        }).then((user) => {
            return uData.insertUser(user).then(() => {
                response.success = true;
            });
        }).catch((error) => {
            response.success = false;
            response.errorDescriptions.push(error);
        });
    }

    getAllFrinedsBySearchText(searchText, response) {
        let uData = this.uData;

        return uData.getUserBySearchName(searchText.toLowerCase()).then((dbUsers) => {
            response.success = true;
            response.entity = {};
            response.entity = dbUsers;
        }).catch((error) => {
            response.success = false;
            response.errorDescriptions.push(error);
        });
    }
}   

module.exports = accountsManager;