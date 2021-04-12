var fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url==="/") {

        let fileDelete = fs.unlinkSync('demoSync.txt')
        if (fileDelete) {
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