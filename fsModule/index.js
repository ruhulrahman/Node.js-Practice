var fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url==="/") {
        //Asyncrhonus data reader
        // fs.readFile('home.html', function (error, data) {
        //     res.writeHead(200, { 'Content-Type':'text/html' })
        //     res.write(data)
        //     res.end()
        // })

        let data = fs.readFileSync('home.html')
        res.writeHead(200, { 'Content-Type':'text/html' })
        res.write(data)
        res.end()
    }
})
server.listen(3000)
console.log('server running')