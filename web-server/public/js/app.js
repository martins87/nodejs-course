console.log('Loaded here')

// fetch('https://puzzle.mead.io/puzzle').then((res) => {
//     res.json().then((data) => {
//         console.log(data)
//     })
// })

const city = 'Berlin'
const url = 'http://localhost:3030/weather?address=' + city

fetch(url).then((res) => {
    res.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.address)
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})