const PDFDocument = require("pdfkit");
const fs = require("fs");
const { Buffer } = require("buffer");
const createPdfData = require("../data/pdfData");
const { headerProfile, imageProfile } = require("../utils/bodyPdf");

exports.updatePDF = (req, res) => {
  try {
    const doc = new PDFDocument();
    const updateDataPdf = createPdfData(req, doc);

    doc.pipe(fs.createWriteStream("test.pdf"));
    // header(doc, text);
    // addText(updateDataPdf.doc, updateDataPdf.text, 10, 500, 500);
    // addImage(updateDataPdf.doc, req.body.imagePath, 500, 500);
    headerProfile(doc, updateDataPdf.text);
    imageProfile(doc, updateDataPdf.imagePath);
    // addText(doc, email);
    // addText(doc, phoneNumber);
    doc.end();
    res.status(200).send("PDF generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};
