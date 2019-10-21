const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    fullname: {
        type: String,
        required: true
    }, 
  email: {
      type: String,
     required: true,
      unique: true,
      trim: true
  },
   address: {
       type: String,
       trim: true
   },
   phone: {
       type : Number,
       required: true,
       trim: true
   },
},
  {
      timestamps: true
});

const  Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;