var express = require('express');
var router = express.Router();
var isValidDate = require('is-valid-date');

var responseViewModel = require('../utilities/responseViewModel');
var base = require('./base');
var accountsManager = require('../manager/accountsManager')

/* signup api */
router.post('/signup', function(req, res) {
  let response = new responseViewModel();
  let signUpViewModel = req.body;

  if(signUpViewModel.Name === null
    || signUpViewModel.Name.trim().length === 0
    || signUpViewModel.Email === null
    || signUpViewModel.Password === null
    || signUpViewModel.Gender === 0
    || !isValidDate(signUpViewModel.BirthDate + '-' + signUpViewModel.BirthMonth + '-' + signUpViewModel.BirthYear)) {
    response.success = false;
  }

  if(response.success) {
    let baseObj = new base();
    dbConnection = baseObj.dbConnection;
        
    let am = new accountsManager(dbConnection);

    am.signup(signUpViewModel, response, function(response) {
      res.send(response);
      dbConnection.close();
    });
  } else {
    res.send(response);
  }
});

module.exports = router;
