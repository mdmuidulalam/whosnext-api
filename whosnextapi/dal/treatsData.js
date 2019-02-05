var baseData = require('./baseData');
var treatModel = require('../models/treat');

class treatsdata extends baseData {
    constructor(dbConnection) {
        super(dbConnection);
        this.treats = new treatModel(dbConnection).Treats;
    }

    /* Inset Data in Treats Table */

    /// Insert Treat
    insertTreat(treat) {
        return this.treats.create(treat);
    }

    /* End Inset Data in Treats Table */
}

module.exports = treatsdata;