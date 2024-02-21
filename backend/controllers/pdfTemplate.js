const {
  headerProfile,
  imageProfile,
  contactProfile,
  addSkills,
  addExperience,
  headerProfileSeconde,
  addSkillsSeconde,
  addExperienceSeconde,
  contactProfileSeconde,
  imageProfileSeconde
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
  headerProfileSeconde(doc, data.text, data.firstName);
  imageProfileSeconde(doc, data.imagePath);
  contactProfileSeconde(
    doc,
    data.phoneNumber,
    data.email,
    data.address,
    data.city,
    data.postalCode
  );
  addSkillsSeconde(doc, data.skills);
  addExperienceSeconde(doc, data.experiences);
};
