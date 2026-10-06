const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    username: String,
    isMarried: Boolean,
    isAdmin : Boolean
})

module.exports = mongoose.model("user", userSchema)