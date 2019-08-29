const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Frankfurt Am Main', (err, data) => {
    console.log('Error', err)
    console.log('Data', data)

    // callback chaining
    forecast(data.latitude, data.longitude, (err, data) => {
        console.log('Error', err)
        console.log('Data', data)
    })
})

// Belo Horizonte: -19.917299, -43.934559
