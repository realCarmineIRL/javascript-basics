//Global Scope (convertFahrenheitToCelsius, temp1, temp2)
    //Local Scope (fahrenheit, celsius)
        //Local Scope (isFrezing)

let convertFahrenheitToCelsius = function(fahrenheit){
    celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

let temp1 = convertFahrenheitToCelsius(100)
let temp2 = convertFahrenheitToCelsius(20)

console.log(temp1)
console.log(temp2)