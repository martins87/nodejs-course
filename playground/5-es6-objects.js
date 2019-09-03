// destructuring
const fullname = {
    vorName: 'Daniel',
    nachName: 'Martins'
}

// const {vorName, nachName} = fullname
const {vorName: firstName, nachName: lastName} = fullname

console.log(firstName)
console.log(lastName)

// another object to be destructured
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)
