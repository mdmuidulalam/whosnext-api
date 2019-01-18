var Sequelize = require('sequelize');

class base {
    constructor(){
        this.dbConnection = new Sequelize('whosnextdb', 'sa', '12345', {
            dialect: 'mysql',
            host: "localhost",
            port: 3306,
        });
    }
}

module.exports = base;