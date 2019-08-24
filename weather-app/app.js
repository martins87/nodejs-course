const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Frankfurt Am Main', (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})

forecast(-19.917299, -43.934559, (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})