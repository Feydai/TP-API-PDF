const { addText, addImage, drawSquare } = require("./utilsPdf");
const { createCube, createCubeBig } = require("./createCube");
const { addContactInfo, addContactInfoAdress } = require("./utilsContact");

exports.imageProfile = (doc, imagePath) => {
  drawSquare(doc, 60, 0, 200, 150, "#f5f0ea");
  addImage(doc, imagePath, 80, 70, 80);
};

exports.headerProfile = (doc, text, firstName) => {
  const estimatedFirstNameWidth = firstName.length * 10;
  const extraSpace = 50;
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
    "./image/icons8-position-50.png",
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
    doc
      .font("Courier")
      .fontSize(16)
      .fillColor("black")
      .text(skill.description, 95, y + 30, { width: 140 });
  });
};

exports.addExperience = (doc, experiences) => {
  experiences.forEach((experience, index) => {
    const y = 160 + index * 80;
    drawSquare(doc, 280, y - 10, 325, 30, "#f5f0ea");
    createCube(doc, 290, y);
    addText(doc, experience.title, "Times-Roman", 25, 320, y - 5, "black");
    doc
      .font("Courier")
      .fontSize(16)
      .fillColor("black")
      .text(experience.test, 295, y + 40, { width: 300 });
  });
};
