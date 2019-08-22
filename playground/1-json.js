const fs = require('fs')

const log = console.log

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
var book = JSON.parse(dataString)

// original data: {"title":"The 4-Hour Work Week","author":"Tim Ferris"}
log('Before changes:\n', book)

book.title = 'Sell Or Be Sold'
book.author = 'Grant Cardone'

log('After changes:\n', book)

var dataToWrite = JSON.stringify(book)

// fs.appendFileSync('1-json.json', dataToWrite)
fs.writeFileSync('1-json.json', dataToWrite)