const yargs = require('yargs')
const getNotes = require('./notes.js')
const log = console.log

yargs.command({
    command: 'add',
    describe: 'Adds a city',
    builder: {
        title: {
            describe: 'City name',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'City body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log('Adding city: ' + argv.title)
        log('Body value: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a city',
    handler: function() {
        log('Removing city: ' + yargs.argv.city)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists a city',
    handler: function() {
        log('Listing city: ' + yargs.argv.city)
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a city',
    handler: function() {
        log('Reading city: ' + yargs.argv.city)
    }
})

log(yargs.argv)