exports.addText = (doc, text, font, fontSize, x, y, color) => {
  doc.font(font).fontSize(fontSize).text(text, x, y).fill(color);
};

exports.addImage = (doc, imagePath, x, y, radius) => {
  if (typeof imagePath === "string") {
    const imageData = imagePath.split(",")[1];
    if (imageData) {
      const imageBuffer = Buffer.from(imageData, "base64");

      doc
        .save()
        .circle(x + radius, y + radius, radius)
        .clip()
        .image(imageBuffer, x, y, {
          fit: [2 * radius, 2 * radius],
          align: "center",
          valign: "center",
        })
        .restore();
    } else {
      console.error("Invalid image data");
    }
  } else {
    console.error("Invalid image path");
  }
};

exports.drawSquare = (doc, x, y, weght, height, color) => {
  doc.save().rect(x, y, weght, height).fill(color).restore();
};
