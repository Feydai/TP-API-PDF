const express = require("express");
const cors = require("cors");
const pdfRoutes = require("./routes/pdf");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/pdf", pdfRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});