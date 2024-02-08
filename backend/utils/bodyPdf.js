const { addText, addImage, drawSquare } = require("./utilsPdf");

exports.imageProfile = (doc, imagePath) => {
  drawSquare(doc, 60, 0, 200, 150, "#f5f0ea");
  addImage(doc, imagePath, 80, 70, 80);
};

exports.headerProfile = (doc, text) => {
  drawSquare(doc, 0, 0, 2480, 30, "#809ba8");
  addText(doc, text, 20, 0, 0, "black");
};
