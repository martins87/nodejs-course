const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + longitude + ',' + latitude + '.json?access_token=pk.eyJ1IjoibWFydGluczg3IiwiYSI6ImNqem85djl0dTA1ZXozcG5vd2RxZ3JvMmsifQ.gtFEy9QK1ra8h3adKe42HA'

    // request({url: url, json: true}, (err, res) => {
    //     if(err) {
    //         callback('Unable to connect to mapbox weather service', undefined)
    //     } else if(res.body.message) {
    //         callback(chalk.red.inverse('Mapbox') + ' Error: Wrong URL', undefined)
    //     } else if(res.body.features.length === 0) {
    //         callback(chalk.red.inverse('Mapbox') + ' Error: No matching results', undefined)
    //     } else {
    //         callback(undefined, {
    //             location: res.body.features[0].place_name
    //         })
    //     }
    // })

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