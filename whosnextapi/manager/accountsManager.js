var baseManager = require('./baseManager');
var usersData = require('../dal/usersData');

class accountsManager extends baseManager {
    constructor(dbConnection) {
        super(dbConnection);
    }

    signup(signUpViewModel, response, callback) {
        let uData = new usersData(this.dbConnection);
        
        var user = {
            name : signUpViewModel.Name,
            email : signUpViewModel.Email,
            birthDate : new Date(signUpViewModel.BirthDate, signUpViewModel.BirthMonth, signUpViewModel.BirthDate),
            gender: signUpViewModel.Gender,
            passwordHash: 'hash',
            userId: 'first'
        };

        uData.insertUser(user).then(function(result) {
            callback();            
        });
    }
}   

module.exports = accountsManager;