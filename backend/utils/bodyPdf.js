const { addText, addImage, drawSquare } = require("./utilsPdf");
const { createCube, createCubeBig } = require("./createCube");

function addContactInfo(doc, iconPath, x, y, text) {
  createCubeBig(doc, x, y);
  doc.image(iconPath, x + 3, y + 2, { width: 15, height: 15 });
  addText(doc, text, "Courier", 12, x + 30, y + 4, "black");
}

function getTextWidth(text, fontSize) {
  return text.length * fontSize * 0.5;
}

function splitTextIntoLines(text, maxLength) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    if ((line + word).length <= maxLength) {
      line += ` ${word}`;
    } else {
      lines.push(line);
      line = word;
    }
  });

  lines.push(line);
  return lines;
}

function addContactInfoAdress(doc, iconPath, x, y, text1, text2, text3) {
  createCubeBig(doc, x, y);
  doc.image(iconPath, x + 3, y + 2, { width: 15, height: 15 });

  let textWidth = getTextWidth(text1, 10);
  addText(doc, `${text1},`, "Courier", 12, x + 30, y + 6, "black");

  textWidth += getTextWidth(text2, 18);
  addText(doc, `${text2},`, "Courier", 12, x + 30 + textWidth, y + 6, "black"); // Adjust x by text width

  textWidth += getTextWidth(text3, 18);
  addText(doc, `${text3}`, "Courier", 12, x + 30 + textWidth, y + 6, "black"); // Adjust x by text width
}

exports.imageProfile = (doc, imagePath) => {
  drawSquare(doc, 60, 0, 200, 150, "#f5f0ea");
  addImage(doc, imagePath, 80, 70, 80);
};

exports.headerProfile = (doc, text, firstName) => {
  const estimatedFirstNameWidth = firstName.length * 10; // Estimate width based on character count
  const extraSpace = 50; // Add extra space
  drawSquare(doc, 0, 0, 2480, 30, "#809ba8");
  addText(doc, firstName, "Times-Roman", 30, 289, 80, "black");
  addText(
    doc,
    text,
    "Helvetica-Bold",
    30,
    289 + estimatedFirstNameWidth + extraSpace,
    80,
    "black"
  );
  drawSquare(doc, 289, 135, 310, 2, "black");
};

exports.contactProfile = (
  doc,
  phoneNumber,
  mail,
  address,
  city,
  postalCode
) => {
  createCube(doc, 65, 250);
  addText(doc, "CONTACT", "Courier", 20, 90, 250, "black");
  createCubeBig(doc, 61, 280);
  doc.image("./image/icons8-téléphone-60.png", 64, 282, {
    width: 15,
    height: 15,
  });
  addContactInfo(doc, "./image/icons8-téléphone-60.png", 61, 280, phoneNumber);
  addContactInfo(doc, "./image/icons8-courrier-50.png", 61, 305, mail);
  addContactInfoAdress(
    doc,
    "./image/icons8-courrier-50.png",
    61,
    330,
    address,
    city,
    postalCode
  );
};

exports.addSkills = (doc, skills) => {
  drawSquare(doc, 0, 762, 2480, 30, "#809ba8");
  drawSquare(doc, 60, 390, 200, 550, "#f5f0ea");
  skills.forEach((skill, index) => {
    const y = 420 + index * 60;
    createCube(doc, 70, y);
    doc.font("Courier").fontSize(20).fillColor("black").text(skill.name, 95, y);

    // Add description with automatic line breaks
    doc.font("Courier").fontSize(16).fillColor("black").text(skill.description, 95, y + 30, { width: 140 });
  });
};

exports.addExperience = (doc,Experience) => {
  drawSquare(doc, 0, 762, 2480, 30, "#809ba8");
  drawSquare(doc, 60, 390, 200, 550, "#f5f0ea");
  Experience.forEach((experience, index) => {
    const y = 420 + index * 60;
    createCube(doc, 70, y);
    doc.font("Courier").fontSize(20).fillColor("black").text(experience.name, 95, y);

    // Add description with automatic line breaks
    doc.font("Courier").fontSize(16).fillColor("black").text(experience.description, 95, y + 30, { width: 140 });
  });
}