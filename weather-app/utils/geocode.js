const request = require('request')
const chalk = require('chalk')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFydGluczg3IiwiYSI6ImNqem85djl0dTA1ZXozcG5vd2RxZ3JvMmsifQ.gtFEy9QK1ra8h3adKe42HA&limit=1'

    request({url: url, json: true}, (err, res) => {
        if(err) {
            callback('Unable to connect to mapbox weather service', undefined)
        } else if(res.body.message) {
            callback(chalk.red.inverse('\nMapbox') + ' Error: Wrong URL', undefined)
        } else if(res.body.features.length === 0) {
            callback(chalk.red.inverse('\nMapbox') + ' Error: No matching results', undefined)
        } else {
            callback(undefined, {
                location: res.body.features[0].place_name,
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode