//student score - total possible score
// 15/20 = you got a C(75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let getScore = function(score = 0, maxScore = 20){
    
    if(score > maxScore){
        score = maxScore
    }

    let result = (score / maxScore) * 100
    let grade = undefined

    if(result >= 90){
        grade = 'A'
    } else if(result >= 80){
        grade = 'B'
    } else if(result >= 70){
        grade = 'C'
    } else if(result >= 60){
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `${score}/${maxScore} = you got ${grade}(${result})!`
}

let studentScore = getScore(20,100)
console.log(studentScore)