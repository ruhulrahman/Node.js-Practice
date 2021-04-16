var fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url==="/") {

        let fileCreate = fs.writeFileSync('demoSync.txt', 'welcome to node fs write file')
        if (fileCreate) {
            res.writeHead(200, { 'Content-Type':'text/html' })
            res.write('file write failed')
            res.end()
        } else {
            res.writeHead(200, { 'Content-Type':'text/html' })
            res.write('file write success')
            res.end()
        }
    }
})
server.listen(4000)
console.log('server running')