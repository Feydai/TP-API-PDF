const { addText, addImage } = require("./utilsPdf");

exports.imageProfile = (doc, imagePath) => {
   addImage(doc, imagePath, 500, 500);
};

exports.headerProfile = (doc, text) => {
   addText(doc, text, 20, 0, 0);
};



