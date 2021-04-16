var fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url==="/") {
        fs.writeFile('demo.txt', 'welcome to node fs write file demoSync', function(error) {
            if (error) {
                res.writeHead(200, { 'Content-Type':'text/html' })
                res.write('file write failed')
                res.end()
            } else {
                res.writeHead(200, { 'Content-Type':'text/html' })
                res.write('file write success')
                res.end()
            }
        })
    }
})
server.listen(3000)
console.log('server running')