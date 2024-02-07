const PDFDocument = require("pdfkit");
const fs = require("fs");
const { Buffer } = require("buffer");

exports.updatePDF = (req, res) => {
  try {
    const doc = new PDFDocument();
    const text = req.body.text;
    const imageData = req.body.imagePath.split(",")[1];
    const imageBuffer = Buffer.from(imageData, "base64");
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    doc.pipe(fs.createWriteStream("test.pdf"));
    doc.text(text);
    doc.image(imageBuffer, {
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
