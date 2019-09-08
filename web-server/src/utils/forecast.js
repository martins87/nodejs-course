const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url2 = 'https://api.darksky.net/forecast/97e191801c1744f5fa5a8d4ae6270703/' + longitude + ',' + latitude + ''

    request({url: url2, json: true}, (err, { body }) => {
        if(err) {
            callback(chalk.red.inverse('Darksky') + ' Unable to connect to darksky weather service', undefined)
        } else if(body.error) {
            callback(chalk.red.inverse('Darksky') + ' Unable to find location', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary
            })
        }
    })
}

module.exports = forecast