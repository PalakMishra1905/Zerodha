const {Schema} = require('mongoose');

const UserSchema = new Schema ({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    verifyOtp : {type: String, default:''},
    verifyOtpExpiredAt : {type: Number, default: 0}, 
    isAccountVerified : {type: Boolean , default: false},
    resetOtp : {type: String, default:''},
    resetOtpExpiredAt : {type: Number, default: 0}
});

module.exports = {UserSchema};