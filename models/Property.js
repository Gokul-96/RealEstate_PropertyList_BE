const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {type:String, required:true},
    price:{type: Number, required: true },
    location: {type: String, required: true },
    images: [String],
    description:{type: String, required: true },
    contact:{type: String, required: true },
//  createdAt: {type: Date, default: Date.now }, 
//  updatedAt: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', propertySchema);