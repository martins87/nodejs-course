const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (err, client) => {

})

console.log('%c My friends', 'color: orange; font-weight: bold')