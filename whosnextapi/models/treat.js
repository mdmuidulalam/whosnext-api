var Sequelize = require('sequelize');
var userModel = require('./user');

class treat {
    constructor(dbConnection) {
        let users = new userModel(dbConnection).WhosNextUsers;

        this.Treats = dbConnection.define('Treats', {
            Id: { type: Sequelize.INTEGER },
            AskedTo: { type: Sequelize.INTEGER },
            AskedBy: { type: Sequelize.INTEGER },
            Deadline: { type: Sequelize.DATE },
            Reason: { type: Sequelize.STRING },
            Heading: { type: Sequelize.STRING },
            Confirmation: { type: Sequelize.INTEGER },
            CreateDate: { type: Sequelize.DATE },
            ConfirmationDate: { type: Sequelize.DATE },
            CompleteDate: { type: Sequelize.DATE }
        });

        this.Treats.belongsTo(users, { as: 'AskedToUser',foreignKey: 'AskedTo'});
        this.Treats.belongsTo(users, { as: 'AskedByUser',foreignKey: 'AskedBy'});
    }
}

module.exports = treat;