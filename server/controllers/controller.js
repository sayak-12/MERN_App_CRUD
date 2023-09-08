// Import Model
const Contact = require("../models/contact");

// Add a contact to the database
const add_contact = (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  contact
    .save()
    .then((result) =>
      res.json({
        msg: "Contact successfully created!",
        content: result,
      })
    )
    .catch((err) =>
      res.json({
        msg: "Couldn't create contact :/",
        error: err,
      })
    );
};

// Get all contacts from the database
const get_all_contacts = (req, res) => {
  Contact.find()
    .sort({ name: 1 })
    .then((result) => {
      if (result.length > 0) {
        res.json({
          msg: "All contacts fetched successfully!",
          content: result,
        });
      } else {
        res.json({
          msg: "No contacts to show!",
          content: result,
        });
      }
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't fetch contacts :/",
        error: err,
      })
    );
};

// Get details of a single contact
const get_one_contact = (req, res) => {
  const contactId = req.params.id;
  Contact.findById(contactId)
    .then((result) => {
      if (result != null) {
        res.json({
          msg: "Contact fetched successfully!",
          content: result,
        });
      } else {
        res.json({
          msg: "This contact does not exist!",
        });
      }
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't fetch contact details :/",
        error: err,
      })
    );
};

// Update a contact in the database
const update_contact = (req, res) => {
  const contactId = req.params.id;
  Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    .then((result) => {
      if (result != null) {
        res.json({
          msg: "Contact updated successfully!",
          content: result,
        });
      } else {
        res.json({
          msg: "This contact does not exist!",
        });
      }
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't update contact :/",
        error: err,
      })
    );
};

// Delete a contact from the database
const delete_contact = (req, res) => {
  const contactId = req.params.id;
  Contact.findByIdAndDelete(contactId)
    .then((result) => {
      if (result != null) {
        res.json({
          msg: "Contact deleted successfully",
        });
      } else {
        res.json({
          msg: "Contact not found!",
        });
      }
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't delete contact :/",
        error: err,
      })
    );
};

// Export Controllers
module.exports = {
  add_contact,
  get_all_contacts,
  get_one_contact,
  update_contact,
  delete_contact,
};
