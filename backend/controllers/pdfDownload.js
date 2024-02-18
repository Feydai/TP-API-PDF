const path = require("path");

exports.pdfDownload = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = process.env.PDF_DIRECTORY;
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