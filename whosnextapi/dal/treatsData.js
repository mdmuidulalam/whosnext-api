var baseData = require("./baseData");
var treatModel = require("../models/treat");
var userModel = require("../models/user");

class treatsdata extends baseData {
  constructor(dbConnection) {
    super(dbConnection);
    this.treats = new treatModel(dbConnection).Treats;
    this.users = new userModel(dbConnection).WhosNextUsers;
  }

  /* Inset Data in Treats Table */

  /// Insert Treat
  insertTreat(treat) {
    return this.treats.create(treat);
  }

  /* End Inset Data in Treats Table */

  /* Get Data in Treats Table */

  /// Get Treats
  getTreats(query, orders, offset, limit) {
    return this.treats.findAll({
      offset: offset,
      limit: limit,
      where: query,
      order: orders,
      include: [
        { model: this.users, as: "AskedToUser" },
        { model: this.users, as: "AskedByUser" }
      ]
    });
  }

  /* End Get Data in Treats Table */

  /* Count Data in Treats Table */

  /// Count Treats
  countTreats(query) {
    return this.treats.count({ where: query });
  }

  /* End Count Data in Treats Table */
}

module.exports = treatsdata;
