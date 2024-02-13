const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/pdfController");
const pdfHistory = require("../controllers/pdfHistory");
const pdfDeleteHistory = require("../controllers/pdfDeleteHistory");

router.put("/", pdfController.updatePDF);
router.get('/pdf-history', pdfHistory.historyPdf);
router.delete('/pdf-delete/:id', pdfDeleteHistory.deleteHistory);

module.exports = router;