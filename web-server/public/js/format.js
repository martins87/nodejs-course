function formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

var num = 41109
console.log(formatNumber(num))
