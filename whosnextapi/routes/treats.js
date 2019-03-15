var express = require("express");
var router = express.Router();

var responseViewModel = require("../utilities/responseViewModel");
var base = require("./base");
var middlewares = require("../utilities/middlewares");
var treatsManager = require("../manager/treatsManager");

router.all("*", new middlewares().verifyJWT_MW);

/* addtreat api */
router.post("/addtreat", function(req, res) {
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

/* gettreatrequests api */
router.get("/gettreatrequests", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let tm = new treatsManager(baseObj.dbConnection);

  hardData = tm.getHardData();

  response = {
    success: true,
    entity: {
      pageNumber: "0",
      numberOfContentPerPage: "7",
      sortProperty: "CreateDate",
      orderByDescending: "true",
      searchText: "",
      totalCount: 5,
      contents: hardData
    },
    additionalInformation: 7
  };

  res.send(response);
});

/* confirmtreat api */
router.post("/confirmtreat", function(req, res) {
  let response = new responseViewModel();
  let treatId = req.body.treatId;

  response.success = true;
  res.send(response);
});

/* movetotrash api */
router.post("/movetotrash", function(req, res) {
  let response = new responseViewModel();
  let treatId = req.body.treatId;

  response.success = true;
  res.send(response);
});

/* gettreats api */
router.get("/gettreats", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let tm = new treatsManager(baseObj.dbConnection);

  hardData = tm.getHardData().map(t => {
    t.Confirmation = 1;
    return t;
  });

  response = {
    success: true,
    entity: {
      pageNumber: "0",
      numberOfContentPerPage: "7",
      sortProperty: "CreateDate",
      orderByDescending: "true",
      searchText: "",
      totalCount: 5,
      contents: hardData
    },
    additionalInformation: 7
  };

  res.send(response);
});

/* completetreat api */
router.post("/completetreat", function(req, res) {
  let response = new responseViewModel();
  let treatId = req.body.treatId;

  response.success = true;
  res.send(response);
});

/* gettreathistory api */
router.get("/gettreathistory", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let tm = new treatsManager(baseObj.dbConnection);

  hardData = tm.getHardData().map(t => {
    t.Confirmation = 2;
    return t;
  });

  response = {
    success: true,
    entity: {
      pageNumber: "0",
      numberOfContentPerPage: "7",
      sortProperty: "CreateDate",
      orderByDescending: "true",
      searchText: "",
      totalCount: 5,
      contents: hardData
    },
    additionalInformation: 7
  };

  res.send(response);
});

/* gettrash api */
router.get("/gettrash", function(req, res) {
  let response = new responseViewModel();
  let baseObj = new base();

  let tm = new treatsManager(baseObj.dbConnection);

  hardData = tm.getHardData().map(t => {
    t.Confirmation = -1;
    return t;
  });

  response = {
    success: true,
    entity: {
      pageNumber: "0",
      numberOfContentPerPage: "7",
      sortProperty: "CreateDate",
      orderByDescending: "true",
      searchText: "",
      totalCount: 5,
      contents: hardData
    },
    additionalInformation: 7
  };

  res.send(response);
});

module.exports = router;
