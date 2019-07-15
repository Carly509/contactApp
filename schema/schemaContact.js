const mongoose = require ("mongoose");

var contactSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
    }, 
    {created_at: {
        type: Date,
        default: Date.now
    }})


    module.exports = mongoose.model('Contact', contactSchema);