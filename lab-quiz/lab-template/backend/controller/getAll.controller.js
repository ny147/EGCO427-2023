const Contact = require("../model/contact.model");

// using promise when searching
module.exports = async (_, res) => {
  console.log('get data')
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (err) {
    console.log(`Error to find all Contact `);
    console.error(err);
  }
};
