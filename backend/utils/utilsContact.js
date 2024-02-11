const {createCubeBig } = require("./createCube");
const { addText } = require("./utilsPdf");

exports.addContactInfo = (doc, iconPath, x, y, text) => {
  createCubeBig(doc, x, y);
  doc.image(iconPath, x + 3, y + 2, { width: 15, height: 15 });
  addText(doc, text, "Courier", 12, x + 30, y + 4, "black");
};

function getTextWidth(text, fontSize) {
  return text.length * fontSize * 0.5;
}

exports.addContactInfoAdress = (doc, iconPath, x, y, text1, text2, text3) => {
  createCubeBig(doc, x, y);
  doc.image(iconPath, x + 3, y + 2, { width: 15, height: 15 });

  let textWidth = getTextWidth(text1, 10);
  addText(doc, `${text1},`, "Courier", 12, x + 30, y + 6, "black");
  textWidth += getTextWidth(text2, 18);
  addText(doc, `${text2},`, "Courier", 12, x + 30 + textWidth, y + 6, "black");
  textWidth += getTextWidth(text3, 18);
  addText(doc, text3, "Courier", 12, 90, 350, "black");
}
