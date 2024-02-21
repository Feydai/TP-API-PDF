const { drawSquare } = require("./utilsPdf");

exports.createCube = (doc, x, y) => {
  drawSquare(doc, x, y, 12, 12, "#809ba8");
};

exports.createCubeSeconde = (doc, x, y) => {
  drawSquare(doc, x, y, 12, 12, "#f5ae2a");
};

exports.createCubeBig = (doc, x, y) => {
  drawSquare(doc, x, y, 20, 20, "#809ba8");
};

exports.createCubeBigSeconde = (doc, x, y) => {
  drawSquare(doc, x, y, 20, 20, "#f5ae2a");
};
