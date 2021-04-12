var fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url==="/") {

        let fileRename = fs.renameSync('NewDemo.txt', 'NewDemoSync.txt')
        if (fileRename) {
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