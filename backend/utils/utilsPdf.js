exports.addText = (doc, text, fontSize, x, y) => {
  doc.fontSize(fontSize).text(text, x, y);
};

exports.addImage = (doc, imagePath) => {
  if (typeof imagePath === "string") {
    const imageData = imagePath.split(",")[1];
    if (imageData) {
      const imageBuffer = Buffer.from(imageData, "base64");
      doc.image(imageBuffer, {
        fit: [250, 300],
        align: "center",
        valign: "center",
      });
    } else {
      console.error("Invalid image data");
    }
  } else {
    console.error("Invalid image path");
  }
};
