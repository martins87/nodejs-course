const validator = require('validator')
const chalk = require('chalk')

const log = console.log

var email = 'contact@operationblockchain.org'
if(validator.isEmail(email)) {
    log(chalk.white.bgGreen('String is a valid email'))
} else {
    log(chalk.white.bgRed('String is not a valid email'))
}