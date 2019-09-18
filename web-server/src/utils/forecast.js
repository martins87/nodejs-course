const request = require('request')
const chalk = require('chalk')

/**
 * add new data to forecast (e.g. temperature high and low for the day)
 */

//  password: name123
const forecast = (latitude, longitude, callback) => {
    const url2 = 'https://api.darksky.net/forecast/97e191801c1744f5fa5a8d4ae6270703/' + latitude + ',' + longitude + ''

    request({url: url2, json: true}, (err, { body }) => {
        if(err) {
            callback(chalk.red.inverse('Darksky') + ' Unable to connect to darksky weather service', undefined)
        } else if(body.error) {
            callback(chalk.red.inverse('Darksky') + ' Unable to find location', undefined)
        } else {
            var forecastData = body.daily.data[0].summary
            forecastData += ' It is currently ' + body.currently.temperature + '°F (' + getCelsiusTemperature(body.currently.temperature) + '°C) out. '
            forecastData += 'The high today is ' + body.daily.data[0].temperatureHigh + '°F (' + getCelsiusTemperature(body.daily.data[0].temperatureHigh) + '°C) '
            forecastData += 'and the low is ' + body.daily.data[0].temperatureLow + '°F (' + getCelsiusTemperature(body.daily.data[0].temperatureLow) + '°C).'
            forecastData += 'There is a ' + body.currently.precipProbability + '% chance of rain.'
            callback(undefined, {
                summary: forecastData
            })
        }
    })
}

function getCelsiusTemperature(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(2)
}

module.exports = forecast