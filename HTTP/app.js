const http = require('http');

let server = http.createServer(function (req, res) {
    // res.end("Server running on port 3000");
    if (req.url === '/') {
        res.end("Welcome Page")
    }
    else if (req.url === '/profile') {
        res.end("Profile Page")
    }
    else {
        res.end("Page not found (404)")
    }
})

server.listen(3000);