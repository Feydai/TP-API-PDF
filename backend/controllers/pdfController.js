const PDFDocument = require("pdfkit");
const fs = require("fs");
const { Buffer } = require("buffer");
const createPdfData = require("../data/pdfData");
const {
  headerProfile,
  imageProfile,
  contactProfile,
  addSkills,
  addExperience,
} = require("../utils/bodyPdf");

exports.updatePDF = (req, res) => {
  try {
    const doc = new PDFDocument();
    const updateDataPdf = createPdfData(req, doc);

    doc.pipe(fs.createWriteStream("test.pdf"));
    headerProfile(doc, updateDataPdf.text, updateDataPdf.firstName);
    imageProfile(doc, updateDataPdf.imagePath);
    contactProfile(
      doc,
      updateDataPdf.phoneNumber,
      updateDataPdf.email,
      updateDataPdf.address,
      updateDataPdf.city,
      updateDataPdf.postalCode
    );
    addSkills(doc, updateDataPdf.skills);
    doc.end();
    res.status(200).send("PDF generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};
