const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.generatePDF = (req, res) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.text("Hello, world!");
  doc.end();
  res.send("PDF generated!");
};

exports.updatePDF = (req, res) => {
  try {
    const doc = new PDFDocument();
    const text = req.body.text;
    const imagePath = req.body.imagePath;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    doc.pipe(fs.createWriteStream("test.pdf"));
    doc.text(text);
    doc.image(imagePath, {
      fit: [250, 300],
      align: "center",
      valign: "center",
    });
    doc.text(email);
    doc.text(phoneNumber);
    doc.end();
    res.status(200).send("PDF generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};
