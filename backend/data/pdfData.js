module.exports = (req, doc) => {
  return {
    firstName: req.body.firstName,
    text: req.body.text,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
    imagePath: req.body.imagePath,
    skills: req.body.skills,
    experience: req.body.experience,
    doc: doc,
  };
};
