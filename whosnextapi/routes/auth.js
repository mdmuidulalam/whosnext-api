var express = require('express');
var router = express.Router();

var responseViewModel = require('../utilities/responseViewModel');
var base = require('./base');
var authManager = require('../manager/authManager')

/* login api */
router.post('/login', function(req, res) {
    let response = new responseViewModel();
    let logInViewModel = req.body;

    if (logInViewModel === null
        || logInViewModel.Email === null
        || logInViewModel.Password === null ) {
        response.success = false;
    }

    if (response.success) {
        let baseObj = new base();
        dbConnection = baseObj.dbConnection;

        let am = new authManager(dbConnection);
        
        console.log(am.login);

        am.login(logInViewModel, response, function(response) {
            res.send(response);
            dbConnection.close();
        });

    } else {
        res.send(response);        
    }
});

module.exports = router;