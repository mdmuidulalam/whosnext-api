const baseManager = require("./baseManager");
const usersData = require("../dal/usersData");
const bcrypt = require("bcrypt");
const config = require("../config");
const jwt = require("../utilities/auth");

class authManager extends baseManager {
  constructor(dbConnection) {
    super(dbConnection);
    this.uData = new usersData(this.dbConnection);
  }

  /* login api manager */
  login(logInViewModel, response) {
    let uData = this.uData;

    return uData
      .getUserByEmail(logInViewModel.Email.trim())
      .then(dbUser => {
        if (
          dbUser.length != 0 &&
          bcrypt.compareSync(logInViewModel.Password, dbUser[0].PasswordHash)
        ) {
          let auth = new jwt();
          response.success = true;
          response.entity = {};
          response.entity.token = auth.createJWToken({
            Id: dbUser[0].Id,
            Email: dbUser[0].Email,
            UserId: dbUser[0].UserId
          });
        } else {
          throw "Wrong email or password";
        }
      })
      .catch(error => {
        response.success = false;
        response.errorDescriptions.push(error);
      });
  }
}

module.exports = authManager;
