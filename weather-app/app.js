const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv.length === 3) {
    var location = process.argv[2]
} else {
    return console.error('No location provided')
}

// Belo Horizonte: -19.917299, -43.934559
geocode(location, (err, data) => {
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

