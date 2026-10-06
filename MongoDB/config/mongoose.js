const mongoose = require('mongoose');
const debuglog = require('debug')("development:mongooseConfig");

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');

const db = mongoose.connection;

db.on('error', function (err) {
    debuglog('MongoDB connection error:', err);
});

db.once('open', function () {
    debuglog('Connected to Database');
});

module.exports = db;