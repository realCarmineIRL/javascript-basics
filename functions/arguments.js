//Multiple Arguments
let add = function(a, b, c){
    return a + b + c
}

let result = add(10,1,5)
console.log(result)

//Default Arguments
let getScoreText = function(name = 'Anonymous', score = 0){
    return `name: ${name} - score: ${score}`
    //return 'name: ' + name + ' - score: ' + score
}

let scoreText = getScoreText('Carmine', 100)
console.log(scoreText)

//Challange
let tipCalculator = function(total = 0, tipPercentage = .2){
    let percent = tipPercentage * 100
    let tip = total * tipPercentage
    return `A ${percent}% tip on ${total} would be ${tip}`
    //return total * tipPercentage
}

let tipResult = tipCalculator(80)
console.log(tipResult)