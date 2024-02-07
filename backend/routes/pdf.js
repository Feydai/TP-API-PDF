const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/pdfController");

router.put("/", pdfController.updatePDF);

module.exports = router;