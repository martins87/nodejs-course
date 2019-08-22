const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function(title) {
    console.log('Removing note: ' + title)

    const notes = loadNotes()

    var newNotes = notes.filter(function(note) {
        return note.title !== title
    })

    if(notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const saveNotes = function(notes) {
    var dataToAppend = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataToAppend)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')

        // converts bytes to string
        const dataString = dataBuffer.toString()

        console.log('Notes:', JSON.parse(dataString))

        // converts string to object
        return JSON.parse(dataString)
    } catch(err) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}