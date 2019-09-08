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

// here we set a default value for the parameter
const transaction = (type, {label, stock} = {}) => {
    console.log(type, label, stock)
}

// output: order Red Notebook 201
transaction('order', product)

// output: order undefined undefined
transaction('order')
