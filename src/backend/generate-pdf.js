const express = require("express");
const cors = require("cors");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/pdf", (req, res) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.text("Hello, world!");
  doc.end();
  res.send("PDF generated!");
});

app.put("/pdf", (req, res) => {
  try {
    const doc = new PDFDocument();
    const value = req.body.text;
    doc.pipe(fs.createWriteStream("test.pdf"));
    doc.text(value);
    doc.end();
    res.status(200).send("PDF generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
