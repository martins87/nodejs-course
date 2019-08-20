const yargs = require('yargs')
const getNotes = require('./notes.js')
const log = console.log

log(yargs.argv)

log('City: ' + yargs.argv.city)