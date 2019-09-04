const express = require('express')
const app = express()

var cities = [{
    city: 'Florianópolis',
    weather: 'Cold',
}, {
    city: 'Belo Horizonte',
    weather: 'Nice',
}]

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.get('/help', (req, res) => {
    res.send('Do you need help?')
})

app.get('/about', (req, res) => {
    // res.status(200).send({title: 'About page'})
    res.send('<h1>This is the About Page</h1>')
})

app.get('/weather', (req, res) => {
    // here we are sending a JSON object
    res.send(cities)
})

const port = 3030
app.listen(port, () => console.log('Server listening on port ' + port))
