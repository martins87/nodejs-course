const request = require('request')

// Weather API 1: darksky
const darkskyUrl ='https://api.darksky.net/forecast/97e191801c1744f5fa5a8d4ae6270703/-19.917299,-43.934559?units=si&lang=pt'

request({url: darkskyUrl, json: true}, (err, res) => {
    var temperature = res.body.currently.temperature
    var precipProbability = res.body.currently.precipProbability
    console.log(res.body.daily.data[0].summary + ' Temperatura agora: ' + temperature + ' oC. Há uma chance de ' + precipProbability + '% de chover hoje.')

})

// Weather API 2: mapbox
// mapbox token = pk.eyJ1IjoibWFydGluczg3IiwiYSI6ImNqem85djl0dTA1ZXozcG5vd2RxZ3JvMmsifQ.gtFEy9QK1ra8h3adKe42HA
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/belo&horizonte.json?access_token=pk.eyJ1IjoibWFydGluczg3IiwiYSI6ImNqem85djl0dTA1ZXozcG5vd2RxZ3JvMmsifQ.gtFEy9QK1ra8h3adKe42HA&limit=1'

request({url: mapboxUrl, json: true}, (err, res) => {
    var mostRelevantResult = res.body.features[0]

    var cityName = mostRelevantResult.place_name
    var latitude = mostRelevantResult.center[1]
    var longitude = mostRelevantResult.center[0]

    console.log(cityName)
    console.log(latitude)
    console.log(longitude)
})