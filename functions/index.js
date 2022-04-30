const functions = require("firebase-functions");
var admin = require("firebase-admin");
const { info } = require("firebase-functions/lib/logger");
admin.initializeApp(functions.config().firebase);
const cors = require("cors")({ origin: true });
let db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });
exports.getAttendance = functions.https.onRequest((request, response) => {
  // cors(request, response, () => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET");
  response.set("Access-Control-Allow-Headers", "Content-Type");
  response.set("Access-Control-Max-Age", "3600");
  let reqDate = request.query.date;
  let dock = [];
  console.info("------------------ Call recieved -------------------------- ");

  db.collection("attendance")
    .where("date", "==", reqDate)
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(val => {
        // console.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        let data = {
          userId: val.data()["barcode"],
          userType: val.data()["userType"],
          category: val.data()["category"],
          type: val.data()["type"],
          timestamp: parseInt(val.data()["timeStamp"].toMillis() / 1000)
        };
        // console.info(data);
        dock.push(data);
      });
      let responseToSend = { attendanceStagRecodes: dock };
      console.info("----------------- Responded---------------");
      response.send(responseToSend);
    })
    .catch(errors => {
      console.log(errors);
      response.send("error");
    });
  // });
});
