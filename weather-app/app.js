const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('index', {
        forecastData: ''
    })
})

// Belo Horizonte: -19.917299, -43.934559
app.post('/', (req, res) => {
    var location = req.body._location

    geocode(location, (err, {latitude, longitude, location}) => {
        if(err) {
            return console.log(err)
        }
    
        // callback chaining
        forecast(latitude, longitude, (err, forecastData) => {
            if(err) {
                console.log(err)
            }

            console.log(location)
            console.log(forecastData.summary)

            var fullData = '' + location + ' [' + latitude + ', ' + longitude + '] : ' + forecastData.summary

            res.render('index', {
                forecastData: fullData
            })
        })
    })

    // res.render('index', {
    //     forecastData: forecastData
    // })
})

const port = 3000
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})