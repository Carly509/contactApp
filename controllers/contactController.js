const Contact = require('../schema/schemaContact');

//const Contact = Mongoose.model('Contact');
    

module.exports = (app) => {
    app.route('/contact')
    .get((req, res) => {
        Contact.find({}, (err, contact) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(contact);  
                });
            })

    // .get((req, res, next ) => {
    //     //middleware
    //     console.log("Request from: ${req.originalUrl}");
    //     console.log('Request type: ${req.method}');
    //     next();
    // },(req, res) => {
    //     Contact.find({}, (err, contact) => {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.json(contact);  
    //     });
    // })
    
     //POST endpoint
    .post((req, res) => {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    });
   

    app.route('/contact/:contactId')
    // get specific contact
    .get((req, res) => {
        Contact.findbyId(req.params.contactId, (err,contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);  
    });
    })
     
     //put request
    .put((req, res ) => {
        Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, {new: true},(err,contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);  
        });
    })
    

     //delete request
    .delete((req, res) => {
        Contact.deleteOne({ _id: req.params.contactId}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json( {message: "Contact Deleted"});  
        });
    });
    
}

