const path = require("path");

exports.pdfDownload = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = path.join(__dirname, "../pdfs");
  const filePath = path.join(directoryPath, fileName);

  res.setHeader("Content-Disposition", "attachment");
  res.download(filePath, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

// app.get("/pdf-download/:name", (req, res) => {
//   const fileName = req.params.name;
//   const directoryPath = path.join(__dirname, "chemin/vers/vos/pdfs");
//   const filePath = path.join(directoryPath, fileName);

//   res.setHeader("Content-Disposition", "attachment");
//   res.download(filePath, (err) => {
//     if (err) {
//       res.status(500).send({
//         message: "Could not download the file. " + err,
//       });
//     }
//   });
// });
