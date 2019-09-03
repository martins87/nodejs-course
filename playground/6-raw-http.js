// https is a core module, so we don't need to install it
const https = require('https')
const url = 'https://api.darksky.net/forecast/97e191801c1744f5fa5a8d4ae6270703/-43.9451,-19.9227'

const request = https.request(url, (response) => {
    let data = ''
    
    // on is a function that allows us to register a handler
    // 'data' is an event
    // chunk is a part of the response (it's a buffer)
    response.on('data', (chunk) => {
        // here we convert the buffer to string
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (err) => {
    console.log('An error ocurred: ', err)
})

request.end()