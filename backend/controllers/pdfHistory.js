const mysql = require('mysql');
const connection = require("../data/db");

exports.historyPdf = (req, res) => {
  connection.query("SELECT * FROM pdf_info", (err, result) => {
    if (err) {
      console.error(
        "An error occurred while getting the PDF info from the database:",
        err
      );
      res.status(500).send("Error getting PDF info from the database");
    } else {
      console.log("PDF info retrieved from database");
      res.status(200).send(result);
    }
  });
};
