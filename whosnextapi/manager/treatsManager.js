const baseManager = require('./baseManager');
const treatsData = require('../dal/treatsData');
const treatStage = require('../enum/treatStage');

class treatsManager extends baseManager {
    constructor() {
        super(dbConnection);
        this.tData = new treatsData(this.dbConnection); 
    }

    addTreat(treat, response, user) {
        treat['AskedBy'] = user.Id;
        treat['Confirmation'] = treatStage.Waiting;
        treat['CreateDate'] = new Date().getTime();
        if(treat['Heading'] == undefined || treat['Heading'] == null)
        {
            treat['Heading'] = "";
        }

        return this.tData.insertTreat(treat).then(() => {
            response.success = true;
        }).catch((err) => {
            response.success = false;
        });
    }
}

module.exports = treatsManager;