module.exports = (req, doc) => {
    return {
        text: req.body.text,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        doc: doc,
    };
};
