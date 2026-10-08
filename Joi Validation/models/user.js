const mongoose = require("mongoose");
const Joi = require("joi");

mongoose.connect("mongodb://127.0.0.1:27017/testingdb");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: 100,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    password: {
        type: String,
        minlength: 6,
        required: true,
    },

    age: {
        type: Number,
        min: 18,
        max: 120,
        required: true,
    },

    contact: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[6-9]\d{9}$/,
    },
});

function validateModel(data) {
    let schema = Joi.object({
        name: Joi.string().min(3).max(30).trim().required(),
        email: Joi.string().email().max(100).lowercase().trim().required(),
        password: Joi.string().min(6).required(),
        age: Joi.number().min(18).max(120).required(),
        contact: Joi.string().pattern(/^[6-9]\d{9}$/).trim().required(),
    });
    return schema.validate(data);
}

let userModel = mongoose.model("user", userSchema);
module.exports = { userModel, validateModel };