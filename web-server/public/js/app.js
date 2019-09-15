// document.querySelector() returns the whole form
const weatherForm = document.querySelector('form')
const searchData = document.querySelector('input')

// # gets the id of the element
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

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

    messageOne.textContent = ''
    messageTwo.textContent = 'Loading...'

    const location = searchData.value
    const url = 'http://localhost:3030/weather?address=' + location

    fetch(url).then((res) => {
        res.json().then((data) => {

            // console.log(data)

            if(data.err) {
                messageTwo.textContent = 'Unable to find location. Try another search.'
            } else if(data.error) {
                messageTwo.textContent = data.error
            } else {
                console.log(data.location + ': ' + data.forecast)

                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.summary
            }
        })
    })

})
