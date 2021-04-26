var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://ruhul:bj3fUNPIpzXYtUTk@cluster0.hcaap.mongodb.net?retryWrites=true&w=majority"
var config = { useUnifiedTopology: true }
MongoClient.connect(url, config, function (error, db) {
    if (error) {
        console.log("Connection Failed")
    } else {
        // console.log("Database Connected!")
        createAndDeleteCollection (db)
        // insertData (db)
        // updateData (db)
        // findData (db)
        // deleteData (db)
    }
})

function insertData (db) {
    var dbo = db.db('my_school')
    var myobj = [
        { name: "Ruhul1", role: 5, city: "Rajshahi", class: "Ten" },
        { name: "Amin1", role: 6, city: "Rajshahi", class: "Ten" },
        { name: "Rasel1", role: 7, city: "Dhaka", class: "Ten" },
        { name: "Redoan1", role: 8, city: "Dhaka", class: "Eleven" }
    ];
    dbo.collection('students').insertMany(myobj, function (error, res) {
        if (error) {
            console.log('Data not inserted')
        } else {
            console.log("Data inserted!");
            db.close();
        }
    })
}

function findData (db) {
    var dbo = db.db('my_school')
    // find one data
    // dbo.collection('students').findOne({ name: "Ruhul1" }, function (error, result) {
    //     if (error) {
    //         console.log('Data not found')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("data found")
    //     }
    // })

    // find all data
    // dbo.collection('students').find({}).toArray(function (error, result) {
    //     if (error) {
    //         console.log('Data not found')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("data found")
    //     }
    // })

    // find projection all data
    // var itemObj = { class: "Ten" }
    // var itemProjection = { projection: { name: 1, role: 1 } }
    // dbo.collection('students').find(itemObj, itemProjection).toArray(function (error, result) {
    //     if (error) {
    //         console.log('Data not found')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("data found")
    //     }
    // })

    // find limit data
    // dbo.collection('students').find().limit(4).toArray(function (error, result) {
    //     if (error) {
    //         console.log('Data not found')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("data found")
    //     }
    // })

    // find limit data
    var mysort = { name: 1 };
    dbo.collection('students').find().sort(mysort).toArray(function (error, result) {
        if (error) {
            console.log('Data not found')
        } else {
            console.log(result);
            db.close();
            console.log("data found")
        }
    })
}

function deleteData (db) {
    var dbo = db.db('my_school')
    var myData = { role: 2 }
    // delete one data
    // dbo.collection('students').deleteOne(myData, function (error, result) {
    //     if (error) {
    //         console.log('Data not deleted')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("data deleted successfully")
    //     }
    // })

    // delete all data
    dbo.collection('students').deleteMany({}, function (error, result) {
        if (error) {
            console.log('Data not deleted')
        } else {
            console.log(result);
            db.close();
            console.log("data deleted successfully")
        }
    })
}

function updateData (db) {
    var dbo = db.db('my_school')
    var myquery = { role: 6 };
    var newValue = { $set: { name: "Rakib", city: "Rangpur"} };
    // update one data
    dbo.collection('students').updateOne(myquery, newValue, function (error, result) {
        if (error) {
            console.log('Data not updated')
        } else {
            console.log(result);
            db.close();
            console.log("data updated successfully")
        }
    })

    // update all data
    // var myquery = { role: 6 };
    // var newValue = { $set: { name: "Rakib", city: "Rangpur"} };
    // // update one data
    // dbo.collection('students').updateMany(myquery, newValue, function (error, result) {
    //     if (error) {
    //         console.log('Data not updated')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("data updated successfully")
    //     }
    // })
}

function createAndDeleteCollection (db) {
    var dbo = db.db('my_school')

    // collection create
    // dbo.createCollection('subjects', function (error, result) {
    //     if (error) {
    //         console.log('Collection not created')
    //     } else {
    //         console.log(result);
    //         db.close();
    //         console.log("Collection created successfully")
    //     }
    // })

    // collection delete
    dbo.dropCollection('teachers', function (error, result) {
        if (error) {
            console.log('Collection not deleted')
        } else {
            console.log(result);
            db.close();
            console.log("Collection deleted successfully")
        }
    })
}

