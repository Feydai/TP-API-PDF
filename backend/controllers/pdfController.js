const mysql = require('mysql');
const PDFDocument = require("pdfkit");
const fs = require("fs");
const createPdfData = require("../data/pdfData");
const {
  headerProfile,
  imageProfile,
  contactProfile,
  addSkills,
  addExperience,
} = require("../utils/bodyPdf");
const connection = require("../data/db");

exports.updatePDF = (req, res) => {
  try {    const doc = new PDFDocument();
    const updateDataPdf = createPdfData(req, doc);
    const pdfName = `CV-${Math.floor(Math.random() * 1000000)}.pdf`;
    const dirPath = '/home/leo/W2-HETIC/TD/API/TP-API-PDF/backend/pdfs';
    fs.mkdirSync(dirPath, { recursive: true });
    const pdfPath = `${dirPath}/${pdfName}`;
    const post = {pdf_name: pdfName, pdf_path: pdfPath};

    doc.pipe(fs.createWriteStream(pdfPath));
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
    addExperience(doc, updateDataPdf.experiences);
    doc.end();
    
    const query = connection.query('INSERT INTO pdf_info SET ?', post, (err, result) => {
      if (err) {
        console.error('An error occurred while saving the PDF info to the database:', err);
        res.status(500).send("Error saving PDF info to the database");
      } else {
        console.log('PDF info saved to database');
        res.status(200).send("PDF generated and info saved to database!");
      }
    });
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};
