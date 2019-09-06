// path is a core module
const path = require('path')
const express = require('express')
const app = express()

// app.set allows to set a value for a given express setting
// here we are setting the hbs (handlebars) dinamic templates
app.set('view engine', 'hbs')

// app.use is a way to customize the server
/**
 * express.static() allows to serve static files
 * we need to specify the folder that will contain all the static files
 * in this case: /public
*/
app.use(express.static(path.join(__dirname, '../public')))  

var cities = [{
    city: 'Florianópolis',
    weather: 'Cold',
}, {
    city: 'Belo Horizonte',
    weather: 'Nice',
}]

app.get('', (req, res) => {
    res.render('index', {
        name: 'Daniel Martins'
    })
})

app.get('/index', (req, res) => {
    // path here must be the absolute path
    res.sendFile('/home/martins/development/learning/node.js/nodejs-course/web-server/public/index.html')
})

app.get('/weather', (req, res) => {
    // here we are sending a JSON object
    res.send(cities)
})

const port = 3030
app.listen(port, () => console.log('Server listening on port ' + port))
