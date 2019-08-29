const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Belo Horizonte: -19.917299, -43.934559
geocode('Berlin', (err, data) => {
    if(err) {
        return console.log(err)
    }

    // callback chaining
    forecast(data.latitude, data.longitude, (err, forecastData) => {
        if(err) {
            console.log(err)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})

