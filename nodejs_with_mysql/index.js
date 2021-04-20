var mysql = require('mysql')
var DbConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsfirstdb'
}
var con = mysql.createConnection(DbConnectionConfig)
con.connect(function(error) {
    if (error) {
        console.log('Connection Failed')
    } else {
        console.log('Connection Success')
        // insertStudentData(con)
        // selectStudentData(con)
        // selectStudentDataByCondition(con)
        selectStudentDataOrderBy(con)
        // updateStudentData(con)
        // deleteStudentData(con)
    }
})

function deleteStudentData(con) {
    var sql = "DELETE FROM students WHERE id = 2"
    con.query(sql, function (error, result) {
        if (error) throw error
        console.log("Number of records deleted: " + result.affectedRows)
    })
}

function updateStudentData(con) {
    var sql = "UPDATE students SET class = 'Nine' WHERE id = 2"
    con.query(sql, function (error, result) {
        if (error) throw error
        console.log(result.affectedRows + " record(s) updated")
    })
}

function selectStudentData(con) {
    var sql = "SELECT * FROM students"
    con.query(sql, function (error, result, fields) {
        if (error) throw error
        console.log("table Data", result)
    })
}

function selectStudentDataOrderBy(con) {
    var sql = "SELECT * FROM students ORDER BY name DESC"
    con.query(sql, function (error, result, fields) {
        if (error) throw error
        console.log("table Data", result)
    })
}

function selectStudentDataByCondition(con) {
    var sql = "SELECT * FROM students WHERE id = 4"
    con.query(sql, function (error, result, fields) {
        if (error) throw error
        console.log("table Data", result)
    })
}

function insertStudentData(con) {
    var sql = "INSERT INTO students (name, role, class, phone, city) VALUES ('Masud', '05', 'Ten', '01638584635', 'Dhaka')"
    con.query(sql, function (error, result) {
        if (error) throw error
        console.log("1 record inserted")
    })
}