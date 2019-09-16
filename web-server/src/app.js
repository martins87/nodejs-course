// path is a core module
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const app = express()
// port that will be set by heroku
const port = process.env.PORT || 3030

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// app.set allows to set a value for a given express setting
// here we are setting the hbs (handlebars) dinamic templates
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// app.use is a way to customize the server
/**
 * express.static() allows to serve static files
 * we need to specify the folder that will contain all the static files
 * in this case: /public
*/
app.use(express.static(publicDirectoryPath))  

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Index Page',
        name: 'Daniel Martins'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        content: 'The idiosyncrasy of this town is smoke. It rolls sullenly in slow folds from the great chimneys of the iron-foundries, and settles down in black, slimy pools on the muddy streets. Smoke on the wharves, smoke on the dingy boats, on the yellow river--clinging in a coating of greasy soot to the house-front, the two faded poplars, the faces of the passers-by.',
        name: 'Daniel Martins'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Daniel Martins'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404-help', {
        title: '404',
        errorMsg: 'Help article not found',
        name: 'Daniel Martins'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    // here we pass an empty object as default value for the parameter
    geocode(req.query.address, (err, {latitude, longitude, location} = {}) => {
        if(err) {
            return res.send({err})
        }

        forecast(latitude, longitude, (err, forecastData) => {
            if(err) {
                return res.send({err})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        query: req.query
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMsg: 'This is not the page you were looking for',
        name: 'Daniel Martins'
    })
})

app.listen(port, () => console.log('Server is up on port ' + port))
