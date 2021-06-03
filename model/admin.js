var mongoose = require('mongoose');
const { Schema } = mongoose;
const adminSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    status: Boolean,
    date: {type: Date, default: Date.now},

});


const Admin = mongoose.model('Admin', adminSchema, 'admin');
module.exports = Admin;