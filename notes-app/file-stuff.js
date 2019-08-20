const fs = require('fs')

var cities = ['Belo Horizonte', 'Florianópolis', 'Berlin']
var fileName = 'notes.txt'

try {
    for(let i = 1; i < cities.length; i++) {
        fs.appendFileSync(fileName, ', ' + String(cities[i]))
    }
    console.log('Data was appended to file')
} catch(err) {
    console.error('Deu ruim', err)
}