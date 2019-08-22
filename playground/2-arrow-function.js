// !!! arrow functions don't bind their own this value

const event = {
    name: 'Birthday Party',
    guestList: ['Daniel', 'Léa', 'Vitor', 'Renata', 'Duílio'],
    printGuestList: function() {
        console.log('Guest list for ' +  this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.guestList[0] + '\'s ' + this.name)
        })
    }
}

event.printGuestList()

// const square = function(x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x
