const fs = require('fs')

const log = console.log

// const book = {
//     title: 'The 4-Hour Work Week',
//     author: 'Tim Ferris'
// }

// // converts object into string
// const bookJSON = JSON.stringify(book)

// // converts string into object
// const bookObject = JSON.parse(bookJSON)

// log(bookJSON)
// log(bookObject.author)

// fs.writeFileSync('1-json.json', bookJSON)

// gets data buffer from file
const dataBuffer = fs.readFileSync('1-json.json')

// converted back into string
const dataJSON = dataBuffer.toString()

// string converted into object
const data = JSON.parse(dataJSON)

log(data)