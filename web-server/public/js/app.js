console.log('Loaded here')

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

// document.querySelector() returns the whole form
const weatherForm = document.querySelector('form')
const searchData = document.querySelector('input')

/** event listeners:
 *  - there are many:
 *      for hovering something (e.g. the header)
 *      for scrolling on a page
 *      for clicking a button
 *      for submitting a form
 *      ...
*/
// here 'submit' is the event we are listening
// e is the result event
weatherForm.addEventListener('submit', (e) => {
    // preventDefaut() prevents the default behaviour,
    // which is reload the page every time the form is submitted
    e.preventDefault()

    const location = searchData.value

    console.log('inputData: ', location)

})

