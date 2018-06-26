let greetUser = function () {
    console.log('welcome!')
}

greetUser()
greetUser()
greetUser()

let add = function (a,b) {
    console.log(a + b)
}

add(2,2)

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

let fahrenheitToCelsius = function (temp) {
    let celsius = (temp - 32) * 5 / 9
    return celsius
}

let celsius = fahrenheitToCelsius(68)
console.log(celsius)