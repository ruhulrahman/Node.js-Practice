var fs = require('fs')
var http = require('http')
var server = http.createServer(function(req, res) {
    if (req.url == '/home') {
        let data = fs.readFileSync('home.html', 'utf8')
        res.end(data)
    } else if (req.url == '/about') {
        let data = fs.readFileSync('about.html', 'utf8')
        res.end(data)
    } else if (req.url == '/contact') {
        let data = fs.readFileSync('contact.html', 'utf8')
        res.end(data)
    } else if (req.url == '/terms') {
        let data = fs.readFileSync('terms.html', 'utf8')
        res.end(data)
    }
})
server.listen(4000)