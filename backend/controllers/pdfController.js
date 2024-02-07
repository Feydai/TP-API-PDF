const PDFDocument = require("pdfkit");
const fs = require("fs");
const { Buffer } = require("buffer");
const createPdfData = require("../data/pdfData");

const addText = (doc, text, fontSize, x, y) => {
  doc.fontSize(fontSize).text(text, x, y);
};

const addImage = (doc, imagePath) => {
  const imageData = imagePath.split(",")[1];
  const imageBuffer = Buffer.from(imageData, "base64");
  doc.image(imageBuffer, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
};

const header = (doc, text) => {
  doc.fontSize(20).text(text, {
    align: "center",
  });
};

exports.updatePDF = (req, res) => {
  try {
    const doc = new PDFDocument();
    const updateDataPdf = createPdfData(req, doc);

    doc.pipe(fs.createWriteStream("test.pdf"));
    // header(doc, text);
    addText(updateDataPdf.doc, updateDataPdf.text, 10, 500, 500);
    // addImage(doc, req.body.imagePath);
    // addText(doc, email);
    // addText(doc, phoneNumber);
    doc.end();
    res.status(200).send("PDF generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};
