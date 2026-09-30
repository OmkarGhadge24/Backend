const express = require('express')
const expressSession = require('express-session')
const flash = require("connect-flash")
const app = express()

// app.use(function (req, res, next) {
//     console.log('Middleware is running')
//     next()
// })

app.use(expressSession({
    secret: "991bba74ca3a03f1047651771f8126ed5ef8d23828e9f4a2d96fcb95f69fdfdf",
    resave: false,
    saveUninitialized: false
}))
app.use(flash())

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.get('/', function (req, res, next) {
    req.flash('error', 'Error occurred!')
    res.redirect('/error')
    next()
})

app.get('/error', (req, res) => {
    let message = req.flash('error')
    res.send(message)
})

app.get('/*splat', (req, res) => {
    res.send('Page not found')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})