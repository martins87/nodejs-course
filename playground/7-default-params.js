// here we set default values for the parameters
const greeter = (name = 'user', age = 20) => {
    console.log('Hello, ' + name + '!')
}

greeter('Daniel')
greeter()