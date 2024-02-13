const mysql = require("mysql");
const connection = require("../data/db");

exports.deleteHistory = (req, res) => {
  const { id } = req.params;
  const  queryString = "DELETE FROM pdf_info WHERE id=?";

  connection.query(queryString, [id], (err, result) => {
    if (err) {
      console.error(
        "An error occurred while deleting the history from the database:",
        err
      );
      res.status(500).send("Error deleting history from the database");
    } else {
      console.log("History deleted from database");
      res.status(200).send("History deleted from database");
    }
  });
};
