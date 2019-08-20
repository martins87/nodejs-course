const log = console.log

var command = process.argv[2]
var parameter = process.argv[3]

if(command === 'add') {
    log('Added user ' + parameter)
} else if(command === 'remove') {
    log('Removed user ' + parameter)
}