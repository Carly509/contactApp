const mongoose = require ("mongoose");
const passowrdHash = require ("password-hash");
const jwt = require ("jwt-simple");
const config = require ("../config/config");

var userSchema = mongoose.Schema({
username: {
    type: String,
    required: true
 },
 email: {
     type: String,
     unique: true,
     required: true
 },
 password: {
     type: String,
     required: true
 },
 created_at: { type: Date, default: Date.now }
})

userSchema.methods = {
    authenticate: function (password) {
        return passowrdHash.verify(password ,this.passowrd);
    },
    getToken: function () {
        return jwt.encode(this, config.secret);
    }
}

module.exports = mongoose.model('User', userSchema);