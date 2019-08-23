const geocode = require('./utils/geocode.js')

geocode('Belo Horizonte', (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})
