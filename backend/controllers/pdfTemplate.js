const {
  headerProfile,
  imageProfile,
  contactProfile,
  addSkills,
  addExperience,
} = require("../utils/bodyPdf");

exports.template1 = (doc, data) => {
  headerProfile(doc, data.text, data.firstName);
  imageProfile(doc, data.imagePath);
  contactProfile(
    doc,
    data.phoneNumber,
    data.email,
    data.address,
    data.city,
    data.postalCode
  );
  addSkills(doc, data.skills);
  addExperience(doc, data.experiences);
};

exports.template2 = (doc, data) => {
  headerProfile(doc, data.text, data.firstName);
  addSkills(doc, data.skills);
  addExperience(doc, data.experiences);
};
