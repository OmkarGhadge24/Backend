const express = require('express')
const app = express()

var data = [1,2,3]

app.get('/', function (req, res, next) {
    try {
        res.send("Welcome Page")
    } catch (error) {
        next(error)
    }
})

// app.get('/check', function (req, res) {
//     res.send('Working')
// })

app.get('/data', function (req, res) {
    res.send(data)
})

// Error handling
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})