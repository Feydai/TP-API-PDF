const path = require("path");

exports.pdfDownload = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = path.join(__dirname, "../pdfs");
  const filePath = path.join(directoryPath, fileName);

  res.download(filePath, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    } else {
      console.log("File downloaded successfully");
    }
  });
};
