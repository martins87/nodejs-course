// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// generate new id
const id = new ObjectID()
console.log('id: ', id)
console.log('timestamp: ', id.getTimestamp())

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

    db.collection('users').insertOne({
        _id: new ObjectID(),
        name: 'Daniella',
        age: 30
    }, (err, result) => {
        if(err) {
            console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Edmundo',
    //         age: 66
    //     },
    //     {
    //         name: 'Rosalicy',
    //         age: 53
    //     }
    // ], (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    var tasks = [
        {
            description: 'Node.js course',
            completed: false
        }, {
            description: 'Angular course',
            completed: false
        }, {
            description: 'Java Spring Boot course',
            completed: false
        }
    ]

    // db.collection('tasks').insertMany(tasks, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })
})

// console.log('%c My friends', 'color: orange; font-weight: bold')