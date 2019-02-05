var express = require('express');
var router = express.Router();

var responseViewModel = require('../utilities/responseViewModel');
var base = require('./base');
var middlewares = require('../utilities/middlewares');
var treatsManager = require('../manager/treatsManager');

router.all('*', new middlewares().verifyJWT_MW);

/* addtreat api */
router.post('/addtreat', function(req, res) {
    let response = new responseViewModel();
    let baseObj = new base();
    let treat = req.body;

    dbConnection = baseObj.dbConnection;
      
    let tm = new treatsManager(dbConnection);

    tm.addTreat(treat, response, req.user).finally(() => {
        res.send(response);
        dbConnection.close();
    });
});

/* gettreats api */
router.get('/gettreats', function(req, res) {
    res.send('treats authenticated!!');
});



module.exports = router;
