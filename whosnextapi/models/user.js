var Sequelize = require('sequelize');

class user {
    constructor(dbConnection){
        this.WhosNextUsers = dbConnection.define('WhosNextUsers', {
            Id: { type: Sequelize.INTEGER },
            Name: { type: Sequelize.STRING },
            Email: { type: Sequelize.STRING },
            PasswordHash: { type: Sequelize.STRING },
            BirthDate: { type: Sequelize.DATE },
            Gender: { type: Sequelize.INTEGER },
            UserId: { type: Sequelize.STRING }
        });
    }
}


module.exports = user;
