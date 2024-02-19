const mysql = require("mysql");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const createPdfData = require("../data/pdfData");
const templates = require("../controllers/pdfTemplate");
let connection = require("../data/db");

exports.updatePDF = (req, res) => {
  try {
    const doc = new PDFDocument();
    const updateDataPdf = createPdfData(req, doc);
    const pdfName = `CV-${Math.floor(Math.random() * 1000000)}.pdf`;
    const dirPath = process.env.PDF_DIRECTORY;
    fs.mkdirSync(dirPath, { recursive: true });
    const pdfPath = `${dirPath}/${pdfName}`;
    const post = { pdf_name: pdfName, pdf_path: pdfPath };
    doc.pipe(fs.createWriteStream(pdfPath));

    const templateName = req.body.template || "template1";
    const template = templates[templateName];
    if (!template) {
      res.status(400).send("Invalid template name");
      return;
    }
    template(doc, updateDataPdf);
    doc.end();

    const query = connection.query(
      "INSERT INTO pdf_info SET ?",
      post,
      (err, result) => {
        if (err) {
          console.error(
            "An error occurred while saving the PDF info to the database:",
            err
          );
          res.status(500).send("Error saving PDF info to the database");
        } else {
          console.log("PDF info saved to database");
          res.status(200).json(post);
        }
      }
    );
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};