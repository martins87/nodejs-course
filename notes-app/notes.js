const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
    console.log('Removing note: ' + title)

    const notes = loadNotes()

    var newNotes = notes.filter((note) => note.title !== title)

    if(notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.green.inverse('Your notes'))

    notes.forEach((note) => {
        console.log('Title: ' + note.title)
    })
}

const saveNotes = (notes) => {
    var dataToAppend = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataToAppend)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes
}