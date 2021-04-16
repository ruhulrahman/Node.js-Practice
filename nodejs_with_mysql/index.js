var mysql = require('mysql')
var DbConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: ''
}
var con = mysql.createConnection(DbConnectionConfig)
con.connect(function(error) {
    if (error) {
        console.log('Connection Failed')
    } else {
        console.log('Connection Success')
    }
})