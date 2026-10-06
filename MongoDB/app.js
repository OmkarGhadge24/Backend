const express = require('express')
const app = express()
const mongooseconnection = require('./config/mongoose')
const userModel = require('./models/user')

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Create 
app.get('/create', async (req, res) => {
    const createdUser = await userModel.create({
        username: "Yxv1111",
        name: "Yzzz",
        email: "yz@mail.com",
        password: "yxxx@1234"
    })
    res.send(createdUser);
})

// Read
// app.get('/read', async (req, res) => {
//     const User = await userModel.find()
//     res.send(User);
// })
app.get('/read', async (req, res) => {
    const User = await userModel.findOne({email : "abc@mail.com"})
    res.send(User);
})

// Update
app.get('/update', async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate({ name: "Yzzz" }, { name: "Yxv" }, { new: true })
    res.send(updatedUser);
})

// Delete
app.get('/delete', async (req, res) => {
    const deleted = await userModel.findOneAndDelete({ name: "Yxv" }, { new: true })
    res.send(deleted);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})