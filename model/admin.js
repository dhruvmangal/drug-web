var connection = require('../db');
import mongoose from 'mongoose';

const { Schema } = mongoose;
const adminSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    status: Boolean,
    date: {type: Date, default: Date.now},

});


//const admin = mongoose.model('Admin', adminSchema);

module.export = adminSchema;