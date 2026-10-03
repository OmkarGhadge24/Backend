const express = require('express')
const app = express()
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const morgan = require('morgan')

// app.use(cors())
// app.use(cookieParser())
// app.use(morgan("dev"))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/contact', function (req, res) {
    res.render('Form')
})

// GET form
// app.get('/contact', function (req, res) {
//     console.log(req.query);
// })

// POST form
app.post('/contact', function (req, res) {
    console.log(req.body);
    res.render('Form')
})

// app.get('/cookie', function (req, res) {
//     res.cookie('test', 'my cookie')
//     res.send('Cookie set')
// })

// app.get('/check', function (req, res) {
//     let testCookie = req.cookies.test
//     res.send('Cookie checked: ' + testCookie)
// })

app.get('/*splat', (req, res) => {
    res.send('Page not found')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})