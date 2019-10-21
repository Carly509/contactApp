let Contact = require('../models/contact_model');

//display all contacts
exports.contact_list =  function(req, res) {
    Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).jsom('Error: ' + err));
};

//display single contact
exports.contact_details = function (req, res) {
    Contact.findById(req.params.id)
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
};

//create contact
exports.contact_create = function (req, res) {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phone= req.body.phone;
    const address = req.body.address;
  
    const newContact = new Contact({
      fullname,
      email,
      phone,
      address,
    });
  
    
    // Contact.findOne({email //si attribut a diferan de nom an fow metel})
    // .then(contact => {
    //     if(contact) return res.status(400).json({ msg: "Contact already exists"});
    // })
    newContact.save()
    .then(() => res.json('Contact added!'))
  .catch(err => res.status(400).json('Error: ' + err));
};

//update contact
exports.contact_update = function (req, res) {
    Contact.findById(req.params.id)
    .then(contact => {
        contact = req.body.params;
        contact.save()
        .then(() => res.json('Contact added!'))
  .catch(err => res.status(400).json('Error: ' + err));
    })
};

// delete contact 
exports.contact_delete = function (req, res ) {
    Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json('Contact deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};