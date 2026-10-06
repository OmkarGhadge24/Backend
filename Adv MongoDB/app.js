const express = require('express');
const app = express();
const userModel = require('./models/user')
const userData = require('./utilities/data')

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Insert Many
app.get('/many', async (req, res) => {
    let users = await userModel.insertMany(userData);
    res.send(users)
})

// $eq (equal)
app.get('/equal', async (req, res) => {
    let users = await userModel.find({ age: { $eq: 23 } });
    res.send(users)
})

// $ne (not equal)
app.get('/noteq', async (req, res) => {
    let users = await userModel.find({ age: { $ne: 23 } });
    res.send(users)
})

// $lt (less than)
app.get('/less', async (req, res) => {
    let users = await userModel.find({ age: { $lt: 25 } });
    res.send(users)
})

// $lte (less than or equal)
app.get('/lesseq', async (req, res) => {
    let users = await userModel.find({ age: { $lte: 25 } });
    res.send(users)
})

// $gt (greater than)
app.get('/greater', async (req, res) => {
    let users = await userModel.find({ age: { $gt: 30 } });
    res.send(users)
})

// $gte (greater than or equal)
app.get('/greatereq', async (req, res) => {
    let users = await userModel.find({ age: { $gte: 30 } });
    res.send(users)
})

// $in (in)
app.get('/in', async (req, res) => {
    let users = await userModel.find({ age: { $in: [23, 25] } });
    res.send(users)
})

// $nin (not in)
app.get('/notin', async (req, res) => {
    let users = await userModel.find({ age: { $nin: [23, 25] } });
    res.send(users)
})

// $exists (exists)
app.get('/exists', async (req, res) => {
    let users = await userModel.find({ isAdmin: { $exists: true } });
    res.send(users)
})

// $type (type)
app.get('/type', async (req, res) => {
    let users = await userModel.find({ age: { $type: "number" } });
    res.send(users)
})

// $and (and operator)
app.get('/and', async (req, res) => {
    let users = await userModel.find({ $and: [{ isMarried: false }, { age: { $gte: 25 } }] })
    res.send(users)
})

// $or (or operator)
app.get('/or', async (req, res) => {
    let users = await userModel.find({ $or: [{ isMarried: false }, { age: { $gte: 30 } }] })
    res.send(users)
})

// $regex (regex operator)
app.get('/regex', async (req, res) => {
    let users = await userModel.find({ name: { $regex: /^a/i } })
    res.send(users)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});