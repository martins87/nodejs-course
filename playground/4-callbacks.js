const names = ['Daniel', 'Léa', 'Anna', 'Mariana', 'Isabel', 'Daniela', 'Amy']

const shortNames = names.filter((name) => {
    return name.length <= 4
})

shortNames.forEach((name) => {
    console.log(name)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        console.log('2 seconds are up')
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})