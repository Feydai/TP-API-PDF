const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/pdfController");
const pdfHistory = require("../controllers/pdfHistory");
const pdfDeleteHistory = require("../controllers/pdfDeleteHistory");
const pdfDownload = require("../controllers/pdfDownload");

router.put("/", pdfController.updatePDF);
router.get('/pdf-history', pdfHistory.historyPdf);
router.delete('/pdf-delete/:id', pdfDeleteHistory.deleteHistory);
router.get('/pdf-download/:name', pdfDownload.pdfDownload);

module.exports = router;