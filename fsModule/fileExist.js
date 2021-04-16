var fs = require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url==="/") {

        fs.exists('demo.txt', function(result) {
            if (result) {
                res.end('File Exist')
            } else {
                res.end('File Not Exist')
            }
        })
    }
})
server.listen(4000)
console.log('server running')