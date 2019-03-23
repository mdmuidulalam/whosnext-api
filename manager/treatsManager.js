const baseManager = require("./baseManager");
const treatsData = require("../dal/treatsData");
const treatStage = require("../enum/treatStage");
const paging = require("../utilities/paging");

class treatsManager extends baseManager {
  constructor(dbConnection) {
    super(dbConnection);
    this.tData = new treatsData(this.dbConnection);
  }

  addTreat(treat, response, user) {
    treat["AskedBy"] = user.Id;
    treat["Confirmation"] = treatStage.Waiting;
    treat["CreateDate"] = new Date().getTime();
    if (treat["Heading"] == undefined || treat["Heading"] == null) {
      treat["Heading"] = "";
    }

    return this.tData
      .insertTreat(treat)
      .then(() => {
        response.success = true;
      })
      .catch(err => {
        response.success = false;
      });
  }

  getTreatRequests(query, response, user) {
    let dbquery = {
      $or: [
        {
          AskedTo: {
            $eq: user.Id
          }
        },
        {
          AskedBy: {
            $eq: user.Id
          }
        }
      ],
      Confirmation: {
        $eq: treatStage.Waiting
      }
    };

    return paging(this.tData, ["getTreats", "countTreats"], query, dbquery)
      .then(page => {
        page.contents.map(item => {
          item["AskedToName"] = item.AskedToUser.Name;
          item["AskedByName"] = item.AskedByUser.Name;

          delete item.AskedByUser;
          delete item.AskedToUser;

          return item;
        });
        response["entity"] = page;
        response["additionalInformation"] = user.Id;
        response.success = true;
      })
      .catch(error => {
        response.errorDescriptions.push(error);
        response.success = false;
      });
  }

  getHardData() {
    return [
      {
        id: 1,
        Id: 1,
        AskedTo: 7,
        AskedBy: 8,
        Deadline: new Date("2019-03-16T17:59:59.000Z"),
        Reason: "BirthDay",
        Heading: "Yas",
        Confirmation: 0,
        CreateDate: new Date("2019-03-13T13:05:56.000Z"),
        ConfirmationDate: null,
        CompleteDate: new Date("2019-03-23T13:05:56.000Z"),
        createdAt: new Date("2019-03-13T13:05:56.000Z"),
        updatedAt: new Date("2019-03-13T13:05:56.000Z"),
        AskedByName: "Nazim Gazi",
        AskedToName: "Md Muidul Alam"
      },
      {
        id: 2,
        Id: 2,
        AskedTo: 8,
        AskedBy: 7,
        Deadline: new Date("2019-03-26T17:59:59.000Z"),
        Reason: "Anniversary",
        Heading: "Sometings On",
        Confirmation: 0,
        CreateDate: new Date("2019-03-26T13:05:56.000Z"),
        ConfirmationDate: null,
        CompleteDate: new Date("2019-03-23T13:05:56.000Z"),
        createdAt: new Date("2019-03-263T13:05:56.000Z"),
        updatedAt: new Date("2019-03-26T13:05:56.000Z"),
        AskedByName: "Md Muidul Alam",
        AskedToName: "Nazim Gazi"
      },
      {
        id: 3,
        Id: 3,
        AskedTo: 7,
        AskedBy: 8,
        Deadline: new Date("2019-03-17T17:59:59.000Z"),
        Reason: "Anniversary",
        Heading: "Coming",
        Confirmation: 0,
        CreateDate: new Date("2019-03-17T13:05:56.000Z"),
        ConfirmationDate: null,
        CompleteDate: new Date("2019-03-23T13:05:56.000Z"),
        createdAt: new Date("2019-03-17T13:05:56.000Z"),
        updatedAt: new Date("2019-03-17T13:05:56.000Z"),
        AskedByName: "Mahir Kabir",
        AskedToName: "Md Muidul Alam"
      },
      {
        id: 4,
        Id: 4,
        AskedTo: 8,
        AskedBy: 7,
        Deadline: new Date("2019-03-21T17:59:59.000Z"),
        Reason: "BirthDay",
        Heading: "On",
        Confirmation: 0,
        CreateDate: new Date("2019-03-21T13:05:56.000Z"),
        ConfirmationDate: null,
        CompleteDate: new Date("2019-03-23T13:05:56.000Z"),
        createdAt: new Date("2019-03-21T13:05:56.000Z"),
        updatedAt: new Date("2019-03-21T13:05:56.000Z"),
        AskedByName: "Md Muidul Alam",
        AskedToName: "Abdur Rahim"
      },
      {
        id: 5,
        Id: 5,
        AskedTo: 7,
        AskedBy: 8,
        Deadline: new Date("2019-03-23T17:59:59.000Z"),
        Reason: "Anniversary",
        Heading: "Coming",
        Confirmation: 0,
        CreateDate: new Date("2019-03-23T13:05:56.000Z"),
        ConfirmationDate: null,
        CompleteDate: new Date("2019-03-23T13:05:56.000Z"),
        createdAt: new Date("2019-03-23T13:05:56.000Z"),
        updatedAt: new Date("2019-03-23T13:05:56.000Z"),
        AskedByName: "Abdur Rahim",
        AskedToName: "Md Muidul Alam"
      }
    ];
  }
}

module.exports = treatsManager;
