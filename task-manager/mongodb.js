const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// http://mongodb.github.io/node-mongodb-native/3.2/api/
MongoClient.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log('There was an error connecting to the database')
    }
    
    console.log('We are connected to the database')

    // reference to the database
    const db = client.db(databaseName)

    // reference to a collection
    // db.collection(<collection-name>)

    db.collection('users').insertOne({
        name: 'Léa',
        age: 24 
    }, (err, result) => {
        if(err) {
            console.log('Unable to insert user')
        }

        console.log(result.ops)
    })
})

// console.log('%c My friends', 'color: orange; font-weight: bold')