var express = require('express');
var router = express.Router();
var isValidDate = require('is-valid-date');

var responseViewModel = require('../utilities/responseViewModel');
var base = require('./base');
var middlewares = require('../utilities/middlewares')

router.all('*', new middlewares().verifyJWT_MW);

/* gettreats api */
router.get('/gettreats', function(req, res) {
    res.send('treats authenticated!!');
});

router.post('/addtreat', function(req, res) {
    res.send('treats authenticated!!');
});

module.exports = router;
