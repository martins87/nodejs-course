const yargs = require('yargs')
const notes = require('./notes.js')
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
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a city',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists a note',
    handler: function(argv) {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a city',
    handler: function(argv) {
        log('Reading city: ' + argv.city)
    }
})

log(yargs.argv)