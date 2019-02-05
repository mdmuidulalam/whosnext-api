var Sequelize = require('sequelize');

class treat {
    constructor(dbConnection) {
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
    }
}

module.exports = treat;